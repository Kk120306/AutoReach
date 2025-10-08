'use client'

import React from 'react'
import { useQueryAutomation } from '@/hooks/use-queries'
import ActiveTrigger from './active'
import { Separator } from '@/components/ui/separator'
import ThenAction from '@/components/global/automations/then/then-action'
import { AUTOMATION_TRIGGERS } from '@/constants/automation'
import TriggerButton from '../trigger-button'
import { useTriggers } from '@/hooks/use-automations'
import { cn } from '@/lib/utils'
import Keywords from './keywords'
import { Button } from '@/components/ui/button'
import Loader from '@/components/global/loader'



type TriggerProps = {
    id: string
}

const Trigger = ({ id }: TriggerProps) => {
    const { onSetTrigger, onSaveTrigger, isPending, types } = useTriggers(id);
    const { data } = useQueryAutomation(id)

    const triggers = data?.data?.trigger ?? []
    const keywords = data?.data?.keywords ?? []


    if (data?.data && data?.data?.trigger.length > 0) {
        return (
            <div className="flex flex-col gap-y-6 items-center">
                <ActiveTrigger
                    type={triggers[0].type}
                    keywords={keywords}
                />

                {triggers.length > 1 && (
                    <>
                        <div className="relative w-6/12">
                            <p className="absolute transform left-1/2 -translate-x-1/2 px-2 -translate-y-1/2 top-1/2 text-muted-foreground">
                                or
                            </p>
                            <Separator
                                orientation="horizontal"
                                className="border-muted border-[1px]"
                            />
                        </div>
                        <ActiveTrigger
                            type={triggers[1].type}
                            keywords={keywords}
                        />
                    </>
                )}
                {!data.data.listener && <ThenAction id={id} />}
            </div>
        )
    }
    return (
        <TriggerButton label="Add Trigger" >
            <div className="flex flex-col gap-y-2">
                {AUTOMATION_TRIGGERS.map((trigger) => (
                    <div
                        key={trigger.id}
                        onClick={() => onSetTrigger(trigger.type)}
                        className={cn(
                            'hover:opacity-80 text-white rounded-lg flex cursor-pointer flex-col p-3 gap-y-2',
                            !types?.find((t) => t === trigger.type)
                                ? 'bg-background-80'
                                : 'bg-gradient-to-br from-[#3352CC] to-[#1C2D70]'
                        )}
                    >
                        <div className="flex gap-x-2 items-center">
                            {trigger.icon}
                            <p className="font-bold">{trigger.label}</p>
                        </div>
                        <p className="text-sm font-light">{trigger.description}</p>
                    </div>
                ))}
                <Keywords id={id} />
                <Button
                    onClick={onSaveTrigger}
                    disabled={types?.length === 0}
                    className="bg-gradient-to-br from-[#3352CC] font-medium text-white to-[#1C2D70]">
                    <Loader state={isPending}>Create Trigger</Loader>
                </Button>
            </div>
        </TriggerButton>
    )
}

export default Trigger
