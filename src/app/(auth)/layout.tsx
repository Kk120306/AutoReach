import React from 'react'

type layoutProps = {
    children: React.ReactNode
}

const layout = ({ children }: layoutProps) => {
    return <div className="h-screen flex justify-center items-center">{children}</div>
}

export default layout
