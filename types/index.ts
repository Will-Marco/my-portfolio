import { ReactNode } from "react";

export interface IconType {
  [key: string]: ReactNode;
}

export interface NavItemsType {
  route: string;
  label: string;
  icon: string;
}

export interface SocialMediasType extends NavItemsType {}

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

export interface ContactsType {
  type: string;
  icon: string;
  label: string;
  link: string;
}

export interface FormType {
  name: string;
  contactInformation: string;
  subject: string;
  message: string;
  success: boolean;
}
