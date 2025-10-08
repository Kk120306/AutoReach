import { Send } from 'lucide-react'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'

type activeProps = {
    type: string
    keywords: {
        id: string
        word: string
        automationId: string | null
    }[]

}

const ActiveTrigger = ({ type, keywords }: activeProps) => {
    return (
        <div className="bg-background-80 p-3 rounded-lg w-full" >
            <div className='flex gap-x-2 items-center'>
                {type === "COMMENT" ? <FaInstagram color="blue" /> : <Send className="text-blue-500" />}
                <p className="text-lg">
                    {type === 'COMMENT' ? 'User Comments on my Post' : 'User Sends a Direct Message'}
                </p>
            </div>
            <p className="text-text-secondary">
                {type === 'COMMENT' ?
                    'If a user comments on my post with any of the following keywords, this automation will be triggered' :
                    'if a user sends me a direct message with any of the following keywords, this automation will be triggered'
                }
            </p>
            <div className="flex gap-2 mt-5 flex-wrap">
                {keywords.map((word) => (
                    <div key={word.id}
                        className="bg-gradient-to-br from-[#3352CC] to-[#1C2D70] flex items-center gap-x-2 capitalize text-white font-light py-1 px-4 rounded-lg">
                        <p>{word.word}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default ActiveTrigger
