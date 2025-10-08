import React from 'react'
import PopOver from '@/components/global/popover'
import { PlusIcon } from 'lucide-react'

type TriggerButtonProps = {
    label: string,
    children: React.ReactNode
}

const TriggerButton = ({ label, children }: TriggerButtonProps) => {
    return (
        <PopOver className="w-[400px]"
            trigger={
                <div className="border-2 border-dashed w-full border-[#3352cc] hover:opacity-80
        cursor-pointer transition duration-100 rounded-lg flex gap-x-2 justify-center
        items-center p-5 mt-4">
                    <PlusIcon className="text-blue-500" />
                    <p className="text-[#7688DD] font-bold">{label}</p>
                </div>

            }>
            {children}
        </PopOver>
    )
}

export default TriggerButton
