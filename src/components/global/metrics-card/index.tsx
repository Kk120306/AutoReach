'use client'

import { useQueryAutomations } from '@/hooks/use-queries'
import React from 'react'

type MetricsCardProps = {

}

const MetricsCard = (props: MetricsCardProps) => {
    const { data } = useQueryAutomations()
    const comments = data?.data.reduce((cur, next) => {
        return cur + next.listener?.commentCount!
    }, 0)

    const dms = data?.data?.reduce((cur, next) => { return cur + next.listener?.dmCount! }, 0)
    return (
        <div className="h-full flex lg:flex-row flex-col gap-5 items-end">
            {[1, 2].map((i) => (
                <div className="p-5 border-[1px] flex flex-col gap-y-20 rounded-lg w-full lg:w-6/12" key={i}>
                    {i === 1 ? (
                        <div>
                            <h2 className="text-3xl text-white font-bold">
                                Comments
                            </h2>
                            <p className="text-text-secondary text-sm">
                                On your posts
                            </p>
                        </div>
                    ) : (
                        <div>
                            <h2 className="text-3xl text-white font-bold">
                                Direct Messages
                            </h2>
                            <p className="text-text-secondary text-sm">
                                On your account
                            </p>
                        </div>

                    )}
                    {i === 1 ? (
                        <div>
                            <h3 className="text-3xl font-bold">100%</h3>
                            <p className="text-sm text-text-secondary">{comments} of {comments} comments replied</p>
                        </div>
                    ) : (
                        <div>
                            <h3 className="text-3xl font-bold">100%</h3>
                            <p className="text-sm text-text-secondary">{dms} of {dms} DMs replied</p>
                        </div>
                    )}
                </div>
            )


            )}
        </div>
    )
}

export default MetricsCard
