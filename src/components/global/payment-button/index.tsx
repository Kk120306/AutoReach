import React from 'react'
import { Button } from '@/components/ui/button'

type PaymentButtonProps = {

}

const PaymentButton = (props: PaymentButtonProps) => {
    return (
        <Button className="bg-gradient-to-br text-white rounded-full from-indigo-500 via-purple-500 to-pink-500 fond-bold rounded-md">
            Upgrade
        </Button>
    )
}

export default PaymentButton
