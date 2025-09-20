import { v4 as uuid } from 'uuid';
import { Microchip, Settings, Workflow, House, LucideIcon } from 'lucide-react';


type FieldProps = {
    label : string,
    id : string,
}

type SideBarProps = {
    icon: LucideIcon
} & FieldProps

export const SIDEBAR_MENU : SideBarProps[] = [
    {
        id : uuid(),
        label : 'home',
        icon : House,
    },
    {
        id : uuid(),
        label : 'automations',
        icon : Workflow,
    },
    {
        id : uuid(),
        label : 'integrations',
        icon : Microchip,
    },
    {
        id : uuid(),
        label : 'settings',
        icon : Settings,
    },

]