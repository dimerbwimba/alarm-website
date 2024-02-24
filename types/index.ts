import { Icons } from "@/components/icons";


export interface HeroSectionProps {
  section: {
    _id: string;
    small_title: string;
    company_name: string;
    slogan_title: string;
    button_title: string
  }
};

export interface AgentListProps{
  agents:[
      {
        _id:string,
          name:string,
          image:string,
          email:string,
          fonction:string,
          type_agent:string,
      }
  ]
}

export interface AgentProps{
        agent : {  
          _id:string,
          name:string,
          image:string,
          email:string,
          fonction:string,
          type_agent:string
        }
      
}
export interface MissionVisionProps{
  section:{
    _id:string;
    title:string;
    title_description:string;
    mission_title:string;
    mission_description:string;
    vision_title:string;
    vision_description:string;
  }
}
export interface SessionProps {
  session: any;
  token: any;
};
export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
  submenu?: [
    {
      title: string;
      href: string;
      icon: keyof typeof Icons;
      label: string;
      disabled: boolean;
    }
  ]
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;
