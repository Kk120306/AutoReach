import { Check } from 'lucide-react'
import React from 'react'
import CreateAutomationButton from '@/components/global/create-automation-button'

type PageProps = {

}

const Page = (props: PageProps) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
            <div className="lg:col-span-4">Automate List</div>
            <div className="lg:col-span-2">
                <div className="flex flex-col rounded-lg bg-background-80 gap-y-6 
                    p-5 border-[1px] overflow-hidden border-in-active">
                    <div>
                        <h2 className="text-xl">Automations</h2>
                        <p className="text-text-secondary">Your live automations will show here</p>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="flex items-start justify-between">
                                <div className="flex flex-col pr-4">
                                    <h3 className="font-medium">Direct traffic towards website</h3>
                                    <p className="text-text-secondary text-sm">October 5th 2025</p>
                                </div>
                                <Check className="text-blue-500 mt-1" />
                            </div>
                        ))}
                    </div>
                    <CreateAutomationButton />
                </div>
            </div>
        </div>
    )
}

export default Page
