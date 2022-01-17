import { SidebarItem } from "../models/Sidebaritem";
import { AiFillHome } from "react-icons/ai"
import { RiVirusLine } from "react-icons/ri"
import { BsCardChecklist } from "react-icons/bs"

export const SidebarData: SidebarItem[] = [
    {
        title: 'Overview',
        path: '/overview',
        icon: AiFillHome,
        subnav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: RiVirusLine
            }
        ]
    },
    {
        title: 'Table',
        path: '/table',
        icon: BsCardChecklist,
        subnav: [
            {
                title: 'Users',
                path: '/table/users',
                icon: BsCardChecklist
            }
        ]
    }
];