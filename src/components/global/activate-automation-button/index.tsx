import React from 'react'
import { Button } from '@/components/ui/button'
import Loader from '@/components/global/loader'
import { Radio } from 'lucide-react'
import { useQueryAutomation } from '@/hooks/use-queries'
import { activateAutomation } from '@/actions/automations'
import { useMutationData } from '@/hooks/use-mutation-data'


type ActivateAutomationButtonProps = {
    id: string;
}

const ActivateAutomationButton = ({ id }: ActivateAutomationButtonProps) => {
    const { data } = useQueryAutomation(id);
    const { mutate, isPending } = useMutationData(
        ['activate'],
        (data: { state: boolean }) => activateAutomation(id, data.state),
        'automation-info'
    )


    return (
        <Button
            onClick={() => mutate({ state: !(data?.data?.active) })}
            className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-lg from-[#3352cc] font-medium to-[#1C2D70] ml-4"
        >
            <Loader state={isPending}>
                <Radio size={12} />
                <p className="lg:inline hidden">
                    {data?.data?.active ? 'Deactivate' : 'Activate'}
                </p>
            </Loader>
        </Button>
    )
}

export default ActivateAutomationButton
