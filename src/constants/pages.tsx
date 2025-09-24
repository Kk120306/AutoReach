import { Contact, Workflow, Microchip, Settings, Home, Sailboat} from "lucide-react"
import React from "react"
import { FaInstagram } from "react-icons/fa";


export const PAGE_BREAD_CRUMBS : string[] = [
    'contacts',
    'automations',
    'integrations',
    'settings',
]

type Props = {
    [page in string] : React.ReactNode
}


export const PAGE_ICON : Props = {
    AUTOMATIONS : <Workflow />,
    CONTACTS : <Contact/>,
    INTEGRATIONS : <Microchip />,
    SETTINGS : <Settings />,
    HOME : <Home />,
}

export const PLANS = [
    {
        title: "Starter",
        label: "FREE",
        price: "$0",
        period: "/month",
        description: "For individuals and small businesses",
        features: [
            "1 social media account",
            "500 AI interactions daily",
            "Basic analytics",
            "Email support",
        ],
        buttonText: "Start Free",
        buttonClass:
            "w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 border-0",
        cardClass:
            "bg-gradient-to-b from-gray-950 to-black border-gray-800 hover:border-gray-700 transition-all duration-300",
    },
    {
        title: "Professional",
        label: "PRO",
        price: "$79",
        period: "/month",
        description: "For growing businesses and agencies",
        features: [
            "5 social media accounts",
            "2,000 AI interactions daily",
            "Advanced analytics",
            "Priority support",
            "Custom targeting",
        ],
        buttonText: "Start Free Trial",
        buttonClass:
            "w-full bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-200 hover:to-gray-300",
        cardClass:
            "bg-gradient-to-b from-gray-950 to-black border-white relative transform scale-105 shadow-2xl shadow-gray-900/50",
        badge: { text: "Popular", class: "bg-gradient-to-r from-white to-gray-200 text-black font-medium" },
    },
    {
        title: "Enterprise",
        label: "ENTERPRISE",
        price: "$199",
        period: "/month",
        description: "For large teams and enterprises",
        features: [
            "Unlimited accounts",
            "10,000 AI interactions daily",
            "White-label solution",
            "Dedicated support",
            "Custom integrations",
        ],
        buttonText: "Contact Sales",
        buttonClass:
            "w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 border-0",
        cardClass:
            "bg-gradient-to-b from-gray-950 to-black border-gray-800 hover:border-gray-700 transition-all duration-300",
    },
];

type IntegraitonProps = {
    title : string,
    icon : React.ReactNode,
    description : string,
    strategy : 'INSTAGRAM' | 'CRM'
}


export const INTEGRATION_CARDS : IntegraitonProps[] = [
    {
        title : 'Connect Instagram',
        description : 'Easily connect your Instagram account to start sharing posts and stories directly from our platform.',
        icon : <FaInstagram />,
        strategy : 'INSTAGRAM'
    }, {
        title : 'Connect Salesforce',
        description : 'Easily connect your Salesforce account to start sharing posts and stories directly from our platform.',
        icon : <Sailboat />,
        strategy : 'CRM'
    }   
]