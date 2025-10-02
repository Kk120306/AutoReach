import React from 'react'
import { onBoardUser } from '@/actions/user'
import { redirect } from 'next/navigation'

type PageProps = {}

const Page = async (props: PageProps) => {
    const user = await onBoardUser()

    if (user.status === 200 || user.status === 201) {
        redirect(`/dashboard/${user.data?.firstName}${user.data?.lastName}`)
    }

    return redirect('/sign-in')
}

export default Page
