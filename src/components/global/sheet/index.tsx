import React from 'react'
import {
    Sheet as ShadcnSheet,
    SheetContent,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet"

type SheetProps = {
    trigger: React.ReactNode
    children: React.ReactNode
    className?: string
    side: 'left' | 'right'
}

const Sheet = ({ trigger, children, className, side }: SheetProps) => {
    return (
        <ShadcnSheet>
            <SheetTitle></SheetTitle>
            <SheetTrigger className={className}>{trigger}</SheetTrigger>
            <SheetContent
                side={side}
                className="p-0"
            >
                {children}
            </SheetContent>
        </ShadcnSheet>
    )
}

export default Sheet
