'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { useSubscription } from '@/hooks/use-subscriptions'
import { CreditCardIcon, Loader2 } from 'lucide-react'



type PaymentButtonProps = {

}

const PaymentButton = (props: PaymentButtonProps) => {

    const { onSubscribe, isProcessing } = useSubscription()

    return (
        <Button
            className="bg-gradient-to-br text-white rounded-full from-indigo-500 via-purple-500 to-pink-500 fond-bold rounded-md"
            disabled={isProcessing}
            onClick={onSubscribe}
        >
            {isProcessing ?
                <Loader2 className="animate-spin" />
                :
                (
                    <CreditCardIcon />
                )
            }
            Upgrade
        </Button>
    )
}

export default PaymentButton
