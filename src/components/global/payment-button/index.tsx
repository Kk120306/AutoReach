import React from 'react'
import { Button } from '@/components/ui/button'

type PaymentButtonProps = {

}

const PaymentButton = (props: PaymentButtonProps) => {
    return (
        <Button className="bg-gradient-to-br text-white rounded-full from-[#FF8A00]
     to-[#E52E71] via-[#ff5900] fond-bold rounded-md">
            Upgrade
        </Button>
    )
}

export default PaymentButton
