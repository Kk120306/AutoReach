import React from 'react'
import Sidebar from '@/components/global/sidebar'
import InfoBar from '@/components/global/infobar'

type layoutProps = {
    children: React.ReactNode
    params: { slug: string }
}

const layout = ({ children, params }: layoutProps) => {


    return (
        <div className="p-3">
            <Sidebar slug={params.slug} />
            {/* NAVBAR */}
            <div className="lg:ml-[250px]
            lg:pl-10 lg:py-5 px-2 flex flex-col overflow-auto ">
                <InfoBar slug={params.slug}/>
                {children}
            </div>
        </div>
    )
}

export default layout
