export interface SidebarItem{
    title: string;
    path: string;
    icon: any;
    subnav?: SidebarItem[];
}