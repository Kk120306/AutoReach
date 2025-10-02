import React from 'react'
import Sidebar from '@/components/global/sidebar'
import InfoBar from '@/components/global/infobar'
import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { PrefetchUserProfile, PrefetchUserAutomations } from '@/react-query/prefetch'


type layoutProps = {
    children: React.ReactNode
    params: { slug: string }
}

const layout = async ({ children, params }: layoutProps) => {

    const query = new QueryClient();
    await PrefetchUserProfile(query);
    await PrefetchUserAutomations(query);

    return (
        <HydrationBoundary state={dehydrate(query)}>
            <div className="p-3">
                <Sidebar slug={params.slug} />
                {/* NAVBAR */}
                <div className="lg:ml-[250px]
            lg:pl-10 lg:py-5 px-2 flex flex-col overflow-auto ">
                    <InfoBar slug={params.slug} />
                    {children}
                </div>
            </div>
        </HydrationBoundary >
    )
}

export default layout
