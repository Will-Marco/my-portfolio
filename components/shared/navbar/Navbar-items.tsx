import { Button } from "@/components/ui/button";
import { navItems } from "@/config/constants";
import { Brain, Library, Lightbulb, Phone, StickyNote } from "lucide-react";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

interface IconType {
  [key: string]: ReactNode;
}

const iconMap: IconType = {
  info: <Library />,
  projects: <Lightbulb />,
  skills: <Brain />,
  contact: <Phone />,
  cv: <StickyNote />,
};

export default function NavbarItems() {
  const [active, setActive] = useState<string>("About");

  const handleButtonClick = (route: string, label: string) => {
    if (label == "CV") {
      window.open(route, "_blank");
      window.location.href = "/";
      return;
    }
    setActive(route);
  };

  useEffect(() => {
    const pathname =
      typeof window !== "undefined" ? window.location.pathname : "";
    setActive(pathname);
  }, []);

  return (
    <ul className="flex flex-col gap-4">
      {navItems.map((nav) => (
        <li key={nav.label}>
          <Link href={nav.route}>
            <Button
              variant="ghost"
              className={`w-full flex justify-start gap-4 text-sm lg:text-xl text-slate-500 border-b-2 ${
                active === nav.route ? "text-white" : ""
              }`}
              onClick={() => handleButtonClick(nav.route, nav.label)}
            >
              <div>{iconMap[nav.icon]}</div>
              <span>{nav.label}</span>
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
