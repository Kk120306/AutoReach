import React from 'react'
import { Button } from '@/components/ui/button'
import Loader from '@/components/global/loader'
import { Activity } from 'lucide-react'

type CreateAutomationProps = {

}

const CreateAutomation = (props: CreateAutomationProps) => {
    return (
        <Button className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white 
            rounded-lg from-[#3352cc] font-medium to-[#1C2D70]">
                <Loader state={false}>
                    <Activity/>
                    <p className="lg:inline hidden">Create An Automation</p>
                </Loader>
        </Button>
    )
}

export default CreateAutomation
