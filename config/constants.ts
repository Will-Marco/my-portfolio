import {
  CardsType,
  SocialMediasType,
  NavItemsType,
  SkillsType,
  ContactsType,
} from "@/types";

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
    route: "/files/FirdavsAbdiazizovResume.pdf",
    label: "CV",
    icon: "cv",
  },
];

export const socialMedias: SocialMediasType[] = [
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
];

export const cards: CardsType[] = [
  {
    link: "https://x-twitter-clone-will-marco.vercel.app/",
    imageSrc: "https://platform-cdn.sharethis.com/img/twitter.svg",
    title: "X-Twitter Clone",
    description: "Social media website",
    position: "Software Engineer",
    github: "https://github.com/Will-Marco/X-Twitter",
    techStack: [
      "typescript",
      "next js",
      "next auth",
      "node js",
      "tailwind",
      "shadcn ui",
      "mongodb (mongoose)",
    ],
  },
  {
    link: "https://netflix-clone-will-marco.vercel.app/",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    title: "Netflix Clone",
    description: "Movie trailer service",
    position: "Fullstack developer",
    github: "https://github.com/Will-Marco/netflix-clone",
    techStack: [
      "typescript",
      "next js",
      "node js",
      "next auth",
      "tailwind",
      "shadcn ui",
      "restful api",
      "mongodb (mongoose)",
    ],
  },
  {
    link: "https://dicken-town-store.vercel.app/",
    imageSrc: "https://www.svgrepo.com/show/503825/shopping-cart.svg",
    title: "Dicken-Town",
    description: "E-Commerce Store",
    position: "Frontend developer",
    github: "https://github.com/Will-Marco/dickenTown-store",
    techStack: [
      "typescript",
      "next js",
      "tailwind",
      "headless ui",
      "tailblocks",
      "restful api",
    ],
  },
  {
    link: "https://edu-platform-will-marco.vercel.app/",
    imageSrc: "https://www.svgrepo.com/show/416644/books-education-school.svg",
    title: "Edu-Platform",
    description: "Blog website",
    position: "Frontend developer",
    github: "https://github.com/Will-Marco/Edu-Platform",
    techStack: [
      "typescript",
      "next js",
      "hygraph cms",
      "material ui",
      "graphql",
    ],
  },
  {
    imageSrc:
      "https://www.svgrepo.com/show/380509/market-store-shop-winter.svg",
    title: "Boom Shop Market",
    description: "E-store website",
    position: "Node JS developer",
    github: "https://github.com/Will-Marco/Edu-Platform",
    techStack: [
      "javascript",
      "node js",
      "express",
      "jwt",
      "handlebars",
      "mongodb (mongoose)",
    ],
  },
  {
    link: "https://edu-platform-will-marco.vercel.app/",
    imageSrc: "https://www.svgrepo.com/show/530376/movie.svg",
    title: "Movie App",
    description: "E-store website",
    position: "Mobile developer",
    github: "https://github.com/Will-Marco/boom-shop-market",
    techStack: ["React Native", "expo", "nativewind", "tmdb api"],
  },
];

export const skills: SkillsType = {
  language: ["JavaScript", "TypeScript"],
  frontend: [
    "HTML5",
    "CSS3",
    "Sass",
    "React JS",
    "Redux",
    "Redux-toolkit",
    "Next JS",
    "NextAuth",
    "Bootstrap",
    "MUI",
    "Tailwind",
    "Headlessui",
    "Shadcn/UI",
    "Framer-motion",
  ],
  backend: ["Node.js", "Express", "MongoDB", "Mongoose"],
  mobile: ["React Native", "Expo", "Nativewind"],
  others: ["Ubuntu", "Git", "NPM", "Yarn", "Postman", "Hygraph CMS"],
};

export const contactData: ContactsType[] = [
  {
    type: "address",
    icon: "map",
    label: "Tashkent Uzbekistan",
    link: "https://maps.app.goo.gl/a5bY51xDL8iECoVg8",
  },
  {
    type: "phone",
    icon: "phone",
    label: "+998996584432",
    link: "tel:+998996584432",
  },
  {
    type: "E-mail",
    icon: "mail",
    label: "mr.marco0101@gmail.com",
    link: "mailto:mr.marco0101@gmail.com",
  },
  {
    type: "telegram",
    icon: "send",
    label: "Telegram contact",
    link: "https://t.me/will_marco",
  },
];
