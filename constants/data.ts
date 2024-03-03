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
        title:"Page des Projets",
        link:"/dashboard/my-site/projects"       
    },
    {
        title:"Page des  agents",
        link:"/dashboard/my-site/agents-page"       
    },
    {
        title:"Fichier &  Rapport",
        link:"/dashboard/my-site/rapport"       
    }
]
export  const HomePageSections = [
  {
      title:"Photo & Message d'acceuille",
      link:"/dashboard/my-site/home/hero-section"        
  },
  {
      title:"Mission & Vision",
      link:"/dashboard/my-site/home/mission-vision"       
  },
  {
      title:"Agents",
      link:"/dashboard/my-site/home/agents"       
  },
  // {
  //     title:"Centre D'interet Strategique",
  //     link:"/dashboard/my-site/home"       
  // },
  // {
  //     title:"Nos Valeurs Fondamentales",
  //     link:"/dashboard/my-site/home"       
  // },
  {
    title:"Departements.",
    link:"/dashboard/my-site/home/departements"       
  },
  {
    title:"Partenaires",
    link:"/dashboard/my-site/home/partenaires"       
  }
]