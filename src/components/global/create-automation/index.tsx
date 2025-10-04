'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import Loader from '@/components/global/loader'
import { Activity } from 'lucide-react'
import { useCreateAutomation } from '@/hooks/use-automations'
import { v4 } from 'uuid'
import { useMemo } from 'react'

type CreateAutomationProps = {

}

const CreateAutomation = (props: CreateAutomationProps) => {

    const mutationId = useMemo(() => v4(), []);
    const { isPending, mutate } = useCreateAutomation(mutationId);

    return (
        <Button className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white 
            rounded-lg from-[#3352cc] font-medium to-[#1C2D70]"
            onClick={() => mutate({
                name: 'Untitled', id: mutationId, createdAt: new Date(),
                keywords: []
            })}

        >
            <Loader state={isPending}>
                <Activity />
                <p className="lg:inline hidden">Create An Automation</p>
            </Loader>
        </Button>
    )
}

export default CreateAutomation
