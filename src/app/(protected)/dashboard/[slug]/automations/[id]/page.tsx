import React from 'react'
import AutomationBreadCrumb from '@/components/global/bread-crumbs/automations'
import { FaExclamation } from 'react-icons/fa'
import Trigger from '@/components/global/automations/trigger'

type PageProps = {
    params: { id: string }
}

const Page = ({ params }: PageProps) => {


    return (
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
    )
}

export default Page
