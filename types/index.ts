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


export interface AgentListProps {
  agents: [
    {
      _id: string,
      name: string,
      image: string,
      email: string,
      fonction: string,
      type_agent: string,
    }
  ]
}

export interface AgentProps {
  agent: {
    _id: string,
    name: string,
    image: string,
    email: string,
    fonction: string,
    type_agent: string
  }

}

export interface AgentDataProps {

  _id: string,
  name: string,
  image: string,
  email: string,
  fonction: string,
  type_agent: string

}

export interface MissionVisionProps {
  section: {
    _id: string;
    title: string;
    title_description: string;
    mission_title: string;
    mission_description: string;
    vision_title: string;
    vision_description: string;
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

export interface DepRoleType {
  item: string

}
export interface DepartementsTypes {
  departement: {
    _id: string,
    name: string,
    updated: boolean,
    roles: Role
  }
}
export interface SingleDepartementType {

  _id: string,
  name: string,
  updated: boolean,
  roles: Role,
  image:string,

}

export interface SinglePartenaireProps {
  _id: string,
  image: string,
  isUpdated: string,
  type_partenaire: string,
  name: string,
}
type Role = []


export interface SingleRapport {
  file_name: string,
  full_file_title: string,
  file_description: string,
  file_type: string,
  file_size: number,
  file_path: string
}

export interface ProjetProps{
  description_html:string, title:string, description:string, budget:string, startDate:string, endDate:string, status:string,_id:string,
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;
