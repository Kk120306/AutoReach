import React from 'react'
import Loader from '@/components/global/loader'

type loadingProps = {}

const loading = (props: loadingProps) => {
    return (
        <div className="h-screen flex justify-center items-center">
            <Loader state>...Loading</Loader>
        </div>
    )
}

export default loading
