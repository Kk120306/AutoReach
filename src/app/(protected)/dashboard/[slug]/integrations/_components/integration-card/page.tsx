import React from 'react'
import { Button } from '@/components/ui/button'
import { onOAuthInstagram } from '@/actions/integrations'
import { useQuery } from '@tanstack/react-query'
import { onUserInfo } from '@/actions/user'

type IntegrationCardProps = {
    title: string
    description: string
    icon: React.ReactNode
    strategy: 'INSTAGRAM' | 'CRM'
}

const IntegrationCard = ({ title, description, icon, strategy }: IntegrationCardProps) => {

    const onInstaOAuth = () => onOAuthInstagram(strategy);

    const { data } = useQuery({
        queryKey: ['user-profile'],
        queryFn: onUserInfo
    })

    const integrated = data?.data?.integrations?.find(integration => integration.name === strategy);

    return (
        <div className="border-2 border-[#3352CC] rounded-lg gap-x-5 p-5 flex flex-col sm:flex-row gap-y-5 items-center text-center sm:text-left">
            <div className="w-10 h-10  flex items-center justify-center sm:justify-betweeen">
                {icon}
            </div>
            <div className="flex flex-col flex-q">
                <h3 className="text-xl">{title}</h3>
                <p className="text-[#9D9D9D] text-base w-full md:w-10/12 xl:w-8/12 2xl:w-6/12">
                    {description}
                </p>
            </div>
            <Button
                onClick={onInstaOAuth}
                disabled={integrated?.name === strategy}
                className="bg-gradient-to-br text-white rounded-lg text-lg from-[#3352CC] font-medium to-[#1C2D70] hover:opacity-70 transition duration-100"

            >
                {integrated ? 'Connected' : 'Connect'}
            </Button>
        </div>
    )
}

export default IntegrationCard
