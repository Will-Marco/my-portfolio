"use client";

import { Button } from "@/components/ui/button";
import { contacts } from "@/config/constants";
import { cn } from "@/lib/utils";
import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-950">
      <Image
        src="/person.webp"
        alt="person"
        priority
        className={cn(
          "object-cover rounded-full border-4 border-sky-800 duration-700 ease-in-out",
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        )}
        width={200}
        height={0}
        onLoad={() => setIsLoading(false)}
      />
      <div className="w-8/12 text-center">
        <p className="mt-6 text-xl md:3xl sm:text-2xl text-gray-400">
          Hello, I&lsquo;m
        </p>
        <p className="my-4 mb-8 text-3xl md:5xl sm:text-4xl font-semibold">
          Firdavs
        </p>
        <p className="text-sm md:xl sm:text-lg text-gray-300">
          I am a{" "}
          <span className="text-gray-400">JavaScript Sofware engineer</span>.
          <br />I have proficient knowledge in{" "}
          <span className="text-gray-400">
            Javascript, TypeScript, Next.JS, Node.JS, React-Native(Expo)
          </span>{" "}
          and ect. If you have any questions or offers feel free to{" "}
          <Link className="text-red-600 cursor-pointer" href="/contect">
            contact me
          </Link>
        </p>
      </div>
      <ul className="mt-4 md:mt-12 grid grid-cols-2 lg:flex items-center gap-4">
        {contacts.map((contact) => (
          <li key={contact.label}>
            <Link href={contact.route}>
              <Button
                variant="ghost"
                className="w-full flex justify-center gap-4 text-sm lg:text-lg border-b-2"
              >
                <div>
                  {contact.icon == "github" && <Github />}
                  {contact.icon == "instagram" && <Instagram />}
                  {contact.icon == "linkedin" && <Linkedin />}
                  {contact.icon == "gmail" && <Mail />}
                  {contact.icon == "telegram" && <Send />}
                </div>
                <span className="hidden md:inline-block">{contact.label}</span>
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
