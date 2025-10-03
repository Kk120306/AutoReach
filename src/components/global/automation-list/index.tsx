'use client'
import { usePath } from '@/hooks/user-nav'
import React from 'react'
import Link from 'next/link'
import GradientButton from '../gradient-button'
import { Button } from '@/components/ui/button'
import { useQueryAutomations } from '@/hooks/use-queries'
import CreateAutomation from '../create-automation'
import { cn, getMonth } from '@/lib/utils'
import { useMutationDataState } from '@/hooks/use-mutation-data'

type AutomationListProps = {

}

const AutomationList = (props: AutomationListProps) => {

    const { data } = useQueryAutomations();

    const { latestVariable } = useMutationDataState(['create-automation']);

    const { pathName } = usePath()

    if (data?.status !== 200 || data.data.length <= 0) {
        return (
            <div className="h-[70vh] flex justify-center items-center flex-col gap-y-3">
                <h3 className="text-lg text-gray-400">No Automations Created</h3>
                <CreateAutomation />
            </div>
        )

    }

    return (
        <div className="flex flex-col gap-3">
            {data.data.map((automation) => (
                <Link href={`${pathName}/${automation.id}`}
                    key={automation.id}
                    className="bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-lg p-5 border-[1px] radial--gradient--automations flex border-[#545454]"
                >
                    <div className="flex flex-col flex-1 items-start">
                        <h2 className="text-xl font-semibold">{automation.name}</h2>
                        <p className="font-light text-[#9B9CA0] mb-2 text-sm">October 5th 2025</p>
                        {automation.keywords.length > 0 ? (
                            <div className="flex gap-2 flex-wap mt-3">
                                <div className={cn(
                                    'rounded-full px-4 py-1 capitalize',
                                    (0 + 1) % 1 === 0 &&
                                    'bg-keycord-green/15 border-2 border-keycord-green',
                                    (1 + 1) % 2 === 0 &&
                                    'bg-keycord-purple/15 border-2 border-keycord-purple',
                                    (2 + 1) % 3 === 0 &&
                                    'bg-keycord-yellow/15 border-2 border-keycord-yellow',
                                    (3 + 1) % 4 === 0 &&
                                    'bg-keycord-red/15 border-2 border-keycord-red'
                                )}>
                                    Automation
                                </div>
                            </div>
                        ) : (
                            <div className="rounded-lg border-2 mt-3 border-dashed border-white/60 px-3 py-1">
                                <p className="text-sm text-[#bfc0c3]">No Keywords</p>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col justify-between">
                        <p className="capitalize text-sm text-[#9B9CA0] hidden sm:inline-block">
                            {getMonth(automation.createdAt.getUTCMonth() + 1)}{' '}
                            {automation.createdAt.getUTCDate() === 1 ? `${automation.createdAt.getUTCDate()}st`
                                : `${automation.createdAt.getUTCDate()}th`}{''}
                            {automation.createdAt.getUTCFullYear()}
                        </p>

                        {automation.listener?.listener === 'SMARTAI' ? (
                            <GradientButton type='BUTTON' className="w-full bg-background-80 text-white hover:bg-background-80">
                                Smart AI
                            </GradientButton>) :
                            (
                                <Button className="bg-background-80 hover:bg-background-80 text-white">
                                    Standard
                                </Button>
                            )}
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default AutomationList
