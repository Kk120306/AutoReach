'use client'
import { usePath } from '@/hooks/user-nav'
import React from 'react'
import Link from 'next/link'
import GradientButton from '../gradient-button'
import { Button } from '@/components/ui/button'

type AutomationListProps = {

}

const AutomationList = (props: AutomationListProps) => {

    const { pathName } = usePath()
    return (
        <div className="flex flex-col gap-3">
            <Link href={`${pathName}/12341`}
                className="bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-lg p-5 border-[1px] radial--gradient--automations flex border-[#545454]"
            >
                <div className="flex flex-col flex-1 items-start">
                    <h2 className="text-xl font-semibold">Direct traffic towards website</h2>
                    <p className="font-light text-[#9B9CA0] mb-2 text-sm">October 5th 2025</p>
                    <div className="flex gap-2 flex-wrap mt-3">
                        <span className="text-xs px-2 py-1 rounded-lg bg-[#2A2A2A] text-[#9B9CA0]">Instagram</span>
                        <span className="text-xs px-2 py-1 rounded-lg bg-[#2A2A2A] text-[#9B9CA0]">CRM</span>
                        <span className="text-xs px-2 py-1 rounded-lg bg-[#2A2A2A] text-[#9B9CA0]">Email Marketing</span>
                    </div>
                    <div className="rounded-lg border-2 mt-3 border-dashed border-white/60 px-3 py-1">
                        <p className="text-sm text-[#bfc0c3]">No Keywords</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <p className="capitalize text-sm text-[#9B9CA0] hidden sm:inline-block">
                        October 5th 2025
                    </p>
                    <GradientButton type='BUTTON' className="w-full bg-background-80 text-white hover:bg-background-80">
                        Smart AI
                    </GradientButton>
                    <Button className="bg-background-80 hover:bg-background-80 text-white">
                        Standard
                    </Button>
                </div>
            </Link>
        </div>
    )
}

export default AutomationList
