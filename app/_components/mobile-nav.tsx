"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/constants/data";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

// import { Playlist } from "../data/playlists";
const navigations = [
    { name: "Accueille", href: '/', },
    { name: "Projects", href: '/projects', },
    { name: "Agents", href: '/agents', },
    {
        name: "Rapport annuel", href: "/annual-report"
    },
    {
        name: "Gerer mon site", href: "/login"
    },

]
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    // playlists: Playlist[];
}

export function MobileSidebar({ className }: any) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <div className=" flex    items-center justify-center space-x-2 border p-1 cursor-pointer rounded-lg">
                        <span>MENU</span> <MenuIcon className=" cursor-pointer" />
                    </div>
                </SheetTrigger>
                <SheetContent side="left" className="!px-0">
                    <div className="space-y-4 py-4">
                        <div className="px-3 py-2">
                            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                                Menu
                            </h2>
                            <div className="space-y-1">
                                <ul className="space-y-1">
                                    {navigations.map((item: any, index: number) => <li key={index} className="text-sm font-bold text-default-900 rounded capitalize transition-all duration-300 hover:bg-default-100 hover:text-primary [&.active]:bg-default-100 [&.active]:text-primary">
                                        <a className="block w-full py-2.5 px-4 text-xl border-b" href={item.href}>{item.name}</a>
                                    </li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
}
