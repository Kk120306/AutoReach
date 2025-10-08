import React from 'react'
import { Button } from '@/components/ui/button'
import Loader from '@/components/global/loader'
import { Radio } from 'lucide-react'
import { useQueryAutomation } from '@/hooks/use-queries'
import { useMutationData } from '@/hooks/use-mutations'

type ActivateAutomationButtonProps = {
    id: string;
}

const ActivateAutomationButton = ({ id }: ActivateAutomationButtonProps) => {
    const { data } = useQueryAutomation(id);
    const { mutate, isPending } = useMutationData(
        ['activate'],
        (data : { state : boolean }) => activateAutomation(id, data.state)
    )


    return (
        <Button className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-lg from-[#3352cc] font-medium to-[#1C2D70] ml-4">
            <Loader state={false}>
                <Radio size={12} />
                <p className="lg:inline hidden">
                    {/* {data?.data?.active ? 'Deactivate' : 'Activate'} */}
                    Activate
                </p>
            </Loader>
        </Button>
    )
}

export default ActivateAutomationButton
