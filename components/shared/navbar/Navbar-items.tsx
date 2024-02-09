import { Button } from "@/components/ui/button";
import { navItems } from "@/config/constants";
import { Brain, Library, Lightbulb, Phone, StickyNote } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

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
  const router = useRouter();
  const [active, setActive] = useState("About");

  const handleButtonClick = (route: string, label: string) => {
    if (label == "CV") {
      window.open(route, "_blank");
      return;
    }
    router.push(route);
    setActive(label);
  };

  return (
    <ul className="flex flex-col gap-4">
      {navItems.map((nav) => (
        <li key={nav.label}>
          <Button
            variant="ghost"
            className={`w-full flex justify-start gap-4 text-sm lg:text-xl text-slate-500 border-b-2 ${
              active === nav.label ? "text-white" : ""
            }`}
            onClick={() => handleButtonClick(nav.route, nav.label)}
          >
            <div>{iconMap[nav.icon]}</div>
            <span>{nav.label}</span>
          </Button>
        </li>
      ))}
    </ul>
  );
}
