import React from 'react'
import PaymentButton from '../payment-button'

type UpgradeCardProps = {

}

const UpgradeCard = (props: UpgradeCardProps) => {
    return (
        <div className="bg-[#252525] p-3 rounded-2xl flex flex-col gap-y-3">
            <span className="text-sm">
                Upgrade to {''}
                <span className="bg-gradient-to-r from-[#FF8A00] to-[#E52E71] bg-clip-text text-transparent font-bold">
                    Smart AI
                </span>
            </span>
            <p className="text-sm text-[#9B9CA0] font-light ">
                Get access to all <br/>
                AI features and more.
            </p>
            <PaymentButton />
        </div>
        )
}

export default UpgradeCard
