import { LineSquiggle, Send } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { v4 } from 'uuid'


export type AutomationListenerProps = {
    id: string;
    label: string,
    icon: JSX.Element
    description: string
    type: 'SMARTAI' | 'MESSAGE'
}

export type AutomationTriggerProps = {
    id: string;
    label: string,
    icon: JSX.Element
    description: string
    type: 'COMMENT' | 'DM'
}

export const AUTOMATION_TRIGGERS: AutomationTriggerProps[] = [
    {
        id: v4(),
        label: 'User comments on my post',
        icon: <FaInstagram color="blue" />,
        description: 'Select if you want to atuomate comments on your post.',
        type: 'COMMENT'
    },
    {
        id: v4(),
        label: 'Replies to my dms',
        icon: <FaInstagram color="blue" />,
        description: 'Select if you want to automate DMs on your profile',
        type: 'DM'
    }
]

export const AUTOMATION_LISTENERS: AutomationListenerProps[] = [
    {
        id: v4(),
        label: 'Send the user a message',
        icon: <Send className="text-blue-500" />,
        description: 'Enter the message that you want to send the user.',
        type: 'MESSAGE'
    },
    {
        id: v4(),
        label: 'Let Smart AI take over',
        icon: <LineSquiggle className="text-blue-500" />,
        description: 'Tell AI about your projects. (Upgrade to use this feature)',
        type: 'SMARTAI'
    }
]