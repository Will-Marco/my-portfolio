import { ContactsType, NavItemsType } from "@/types";

export const navItems: NavItemsType[] = [
  {
    route: "/",
    label: "About",
    icon: "info",
  },
  {
    route: "/projects",
    label: "Projects",
    icon: "projects",
  },
  {
    route: "/skills",
    label: "Skills",
    icon: "skills",
  },
  {
    route: "/contact",
    label: "Contact",
    icon: "contact",
  },
  {
    route: "/cv",
    label: "CV",
    icon: "cv",
  },
];

export const contacts: ContactsType[] = [
  {
    route: "https://www.linkedin.com/in/firdavs-abdiazizov",
    label: "LinkedIn",
    icon: "linkedin",
  },
  {
    route: "https://instagram.com/firdavs_abdiazizov",
    label: "Instagram",
    icon: "instagram",
  },
  {
    route: "mailto:mr.marco0101@gmail.com",
    label: "Gmail",
    icon: "gmail",
  },
  {
    route: "https://t.me/will_marco",
    label: "Telegram",
    icon: "telegram",
  },
];
