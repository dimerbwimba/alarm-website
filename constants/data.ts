import { NavItem } from "@/types/";

export const navItems: NavItem[] = [
    {
      title: "Acceille",
      href: "/dashboard",
      icon: "dashboard",
      label: "Dashboard",
    },
    {
      title: "Mon compte admin",
      href: "/dashboard/account",
      icon: "user",
      label: "user",
    },
    {
      title: "Gerer mon Site",
      href: "/dashboard/site",
      icon: "world",
      label: "employee",
      submenu:[
        {
          title: "Site Page",
          href: "/dashboard/site/page",
          icon: "ChevronR",
          label: "user",
          disabled:false
        }
      ]
    },
    {
      title: "Mon assistant",
      href: "/dashboard/profile",
      icon: "profile",
      label: "profile",
    },
    {
      title: "Mes projets",
      href: "/dashboard/kanban",
      icon: "kanban",
      label: "kanban",
    },
    {
      title: "Login",
      href: "/login",
      icon: "login",
      label: "login",
    },
  ];

  export type User = {
    _id: number;
    name: string;
    company: string;
    role: string;
  };
  
  