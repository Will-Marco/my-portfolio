"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { navItems } from "@/config/constants";
import {
  Barcode,
  Brain,
  Library,
  Lightbulb,
  Menu,
  Phone,
  SidebarClose,
  StickyNote,
  X,
} from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";

export default function Navbar(): ReactNode {
  const drawer = (
    <Drawer>
      <DrawerTrigger>
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="h-screen p-4 flex flex-col justify-between text-center ">
        <DrawerHeader className="flex justify-between items-start">
          <DrawerTitle className="mb-4 text-3xl font-semibold">
            <Link href="/">
              Marco<span className="text-gray-500">.dev</span>
            </Link>
          </DrawerTitle>
          <DrawerClose>
            <Button variant="ghost">
              <X />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <ul className="flex flex-col gap-4">
          {navItems.map((nav) => (
            <li key={nav.label}>
              <Link href={nav.route}>
                <Button
                  variant="ghost"
                  className="w-full flex justify-start gap-4 text-sm border-b-2"
                >
                  {nav.icon == "info" && <Library />}
                  {nav.icon == "projects" && <Lightbulb />}
                  {nav.icon == "skills" && <Brain />}
                  {nav.icon == "contact" && <Phone />}
                  {nav.icon == "cv" && <StickyNote />}
                  <span>{nav.label}</span>
                </Button>
              </Link>
            </li>
          ))}
        </ul>
        <DrawerFooter>
          <p className="text-sm">
            Copyright © 2024 All rights reserved
            <br />
            Created by Marco.dev
          </p>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );

  return (
    <header className="w-auto sm:w-[25%] h-screen p-4 sm:relative absolute overflow-hidden text-center sm:border-r-2 border-gray-600">
      <div className="sm:hidden">{drawer}</div>
      <nav className="h-full hidden sm:flex flex-col justify-between">
        <div>
          <Link href="/">
            <h1 className="mb-8 lg:mb-16 text-2xl lg:text-4xl xl:6xl font-semibold">
              Marco<span className="text-gray-500">.dev</span>
            </h1>
          </Link>
          <ul className="flex flex-col gap-4">
            {navItems.map((nav) => (
              <li key={nav.label}>
                <Link href={nav.route}>
                  <Button
                    variant="ghost"
                    className="w-full flex justify-start gap-4 text-sm lg:text-xl border-b-2"
                  >
                    <div>
                      {nav.icon == "info" && <Library />}
                      {nav.icon == "projects" && <Lightbulb />}
                      {nav.icon == "skills" && <Brain />}
                      {nav.icon == "contact" && <Phone />}
                      {nav.icon == "cv" && <StickyNote />}
                    </div>
                    <span>{nav.label}</span>
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm md:text-sm lg:text-base">
          Copyright © 2024 All rights reserved
          <br />
          Created by Marco.dev
        </p>
        <div className="w-1/2 h-full absolute -bottom-1/4 -z-10 blue__gradient" />
      </nav>
    </header>
  );
}
