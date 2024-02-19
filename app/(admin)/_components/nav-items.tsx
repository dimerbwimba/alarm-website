"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { authOptions } from "@/lib/auth-options";

interface DashboardNavProps {
    items: NavItem[];
    setOpen?: Dispatch<SetStateAction<boolean>>;
}

export  function  NavItems({ items, setOpen }: DashboardNavProps) {
    const path = usePathname();
    if (!items?.length) {
        return null;
    }

    return (
        <nav className="grid items-start gap-2">
            {items.map((item, index) => {
                const Icon = Icons[item.icon || "arrowRight"];
                return (
                    item.href && (
                        <div  key={index}>
                            <Link
                            key={index}
                                href={item.disabled ? "/" : item.href}
                                onClick={() => {
                                    if (setOpen) setOpen(false);
                                }}
                            >
                                <span
                                    className={cn(
                                        "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                                        path === item.href ? "bg-accent" : "transparent",
                                        item.disabled && "cursor-not-allowed opacity-80",
                                    )}
                                >
                                    <Icon className="mr-2 h-4 w-4" />
                                    <span>{item.title}</span>
                                </span>
                            </Link>
                            <div  className=" pl-5">
                                {
                                    item?.submenu?.map((item, index) => {
                                        const Icon = Icons["ChevronR"];
                                       return  <Link
                                            key={item.href}
                                            href={item.disabled ? "/" : item.href}
                                            onClick={() => {
                                                if (setOpen) setOpen(false);
                                            }}
                                        >
                                            <span
                                                className={cn(
                                                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                                                    path === item.href ? "bg-accent" : "transparent",
                                                    item.disabled && "cursor-not-allowed opacity-80",
                                                )}
                                            >
                                                <Icon className="mr-2 h-4 w-4" />
                                                <span>{item.title}</span>
                                            </span>
                                        </Link>
                                    })
                                }
                            </div>
                        </div>
                    )
                );
            })}
        </nav>
    );
}
