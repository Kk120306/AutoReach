import React from 'react'
import { cn } from '@/lib/utils'
import { Spinner } from './spinner'

type loaderProps = {
    state: boolean
    className?: string
    children: React.ReactNode
    color?: string
}

const Loader = ({ children, state, className, color }: loaderProps) => {
    return state ? (
        <div className={cn(className)}>
            <Spinner color={color} />
        </div>
    ) : (
        children
    )
}

export default Loader
