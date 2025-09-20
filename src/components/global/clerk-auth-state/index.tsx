import React from 'react'
import {
    ClerkLoading,
    SignedIn, SignedOut,
    UserButton, SignInButton,
} from '@clerk/nextjs'
import { User } from 'lucide-react'
import Loader from '../loader'



type Props = {}

const ClerkAuthState = (props: Props) => {
    return (
        <>
            <ClerkLoading>
                <Loader state>
                    <></>
                </Loader>
            </ClerkLoading>
            <SignedOut>
                <SignInButton>
                    <button className="rounded-xl bg-[#252525] text-white hover:bg-[#252525]/70">
                        <User />
                        Login
                    </button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton>
                    <UserButton.UserProfileLink
                        label="Dashboard"
                        url={`/dashboard`}
                        labelIcon={<User size={16} />}
                    />
                </UserButton>
            </SignedIn>

        </>
    )
}

export default ClerkAuthState;
