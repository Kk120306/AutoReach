"use server"

import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { createUser, findUser } from "./queries"
import { refreshToken } from "@/lib/fetch"
import { updateIntegration } from "@/actions/integrations/queries"
import { stripe } from "@/app/(protected)/api/payment/route"
import { updateSubscription } from "@/actions/user/queries"


export const onCurrentUser = async () => {
    const user = await currentUser()
    if (!user) return redirect("/sign-in")

    return user
}

export const onBoardUser = async () => {
    const user = await onCurrentUser()
    try {
        const found = await findUser(user.id)

        if (found) {
            if (found.integrations.length > 0) {
                const now = new Date()
                const timeLeft = found.integrations[0].expiresAt?.getTime()! - now.getTime()
                const days = Math.round(timeLeft / (1000 * 60 * 60 * 24))

                if (days < 5) {
                    console.log("Integration expiring soon, refreshing")
                    const refresh = await refreshToken(found.integrations[0].token!)

                    const expireDate = new Date()
                    expireDate.setDate(expireDate.getDate() + 60)

                    const updated = await updateIntegration(
                        refresh.access_token,
                        expireDate,
                        found.integrations[0].id
                    )

                    if (!updated) {
                        console.log("Failed to update token")
                    }

                    return {
                        status: 200,
                        data: {
                            firstName: found.firstName,
                            lastName: found.lastName,
                            email: found.email, // add if you have it
                        },
                    }
                }
            }
            // if user exists and integrations not refreshed, return user data
            return {
                status: 200,
                data: {
                    firstName: found.firstName,
                    lastName: found.lastName,
                    email: found.email, // add if you have it
                },
            }
        }

        const created = await createUser(
            user.id,
            user.firstName!,
            user.lastName!,
            user.emailAddresses[0].emailAddress
        )

        return {
            status: 201,
            data: {
                firstName: created.firstName,
                lastName: created.lastName,
            },
        }
    } catch (error) {
        console.log(error)
        return {
            status: 500,
        }
    }
}


export const onUserInfo = async () => {
    const user = await onCurrentUser();
    try {
        const profile = await findUser(user.id);
        if (profile) {
            return {
                status: 200,
                data: profile
            }
        }
    } catch (error) {
        return {
            status: 404,
            data: null
        }
    }
}

export const onSubscribe = async (sessionId: string) => {
    const user = await onCurrentUser()
    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        if (session) {
            const subscribed = await updateSubscription(user.id, {
                customerId: session.customer as string,
                plan: "PRO"
            })
            if (subscribed) return { status: 200, }
            return {
                status: 401
            }
        }
        return { status: 404, }
    } catch (error) {
        return {
            status: 500,
            data: null
        }
    }
}