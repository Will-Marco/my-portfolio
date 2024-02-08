export interface NavItemsType {
  route: string;
  label: string;
  icon: string;
}

export interface ContactsType extends NavItemsType {}

export interface CardsType {
  link?: string;
  imageSrc: string;
  title: string;
  description: string;
  position: string;
  github: string;
  techStack: string[];
}

export interface SkillsType {
  [key: string]: string[];
}