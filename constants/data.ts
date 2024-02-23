import { NavItem } from "@/types/";


  export type User = {
    _id: number;
    name: string;
    company: string;
    role: string;
  };
  
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
      href: "/dashboard/my-site",
      icon: "world",
      label: "website management",
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
  
 export  const WebsitePages = [
    {
        title:"Page D'acceuille",
        link:"/dashboard/my-site/home"        
    },
    {
        title:"Nos Projets",
        link:"/dashboard/my-site/home"       
    },
    {
        title:"Nos agents",
        link:"/dashboard/my-site/home"       
    },
    {
        title:"Page de Contact",
        link:"/dashboard/my-site/home"       
    },
    {
        title:"Rapport Annual",
        link:"/dashboard/my-site/home"       
    }
]
export  const HomePageSections = [
  {
      title:"Hero section",
      link:"/dashboard/my-site/home/hero-section"        
  },
  {
      title:"Mission & Vision",
      link:"/dashboard/my-site/home/mission-vision"       
  },
  {
      title:"Nos Agents",
      link:"/dashboard/my-site/home"       
  },
  {
      title:"Centre D'interet Strategique",
      link:"/dashboard/my-site/home"       
  },
  {
      title:"Nos Valeurs Fondamentales",
      link:"/dashboard/my-site/home"       
  },
  {
    title:"ALARM RDC. Departements.",
    link:"/dashboard/my-site/home"       
  },
  {
    title:"Nos Partenaires",
    link:"/dashboard/my-site/home"       
  }
]