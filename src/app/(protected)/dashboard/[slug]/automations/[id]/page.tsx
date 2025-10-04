import React from 'react'
import AutomationBreadCrumb from '@/components/global/bread-crumbs/automations'
import { FaExclamation } from 'react-icons/fa'
import Trigger from '@/components/global/automations/trigger'
import { getAutomationInfo } from '@/actions/automations';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import { PrefetchUserAutomation } from '@/react-query/prefetch';


type PageProps = {
    params: { id: string }
}

export async function generateMetadata({ params }: { params: { id: string } }) {
    const info = await getAutomationInfo(params.id);
    return {
        title: info.data?.name
    }
}


const Page = async ({ params }: PageProps) => {
    const query = new QueryClient();
    await PrefetchUserAutomation(query, params.id);

    return (
        <HydrationBoundary state={dehydrate(query)}>
            <div className="flex flex-col items-center gap-y-20">
                <AutomationBreadCrumb id={params.id} />
                <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-lg flex flex-col bg-[#1D1D1D] gap-y-3">
                    <div className="flex items-center gap-x-2">
                        <FaExclamation size={12} color="red" />
                        <p className="text-sm">When...</p>
                    </div>
                    <Trigger id={params.id} />
                </div>
            </div>
        </HydrationBoundary>
    )
}

export default Page
