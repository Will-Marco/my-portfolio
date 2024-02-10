"use client";

import { Button } from "@/components/ui/button";
import { socialMedias } from "@/config/constants";
import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import CustomImage from "@/components/Custom-image";
import { IconType } from "@/types";

const iconMap: IconType = {
  github: <Github />,
  instagram: <Instagram />,
  linkedin: <Linkedin />,
  gmail: <Mail />,
  telegram: <Send />,
};

export default function Home() {
  return (
    <div className="w-screen h-screen sm:ml-[20%] flex flex-col justify-center items-center bg-gray-950">
      <CustomImage
        image="/images/person.webp"
        alt="person"
        width={200}
        height={0}
        className="rounded-full border-4 border-sky-800"
      />
      <div className="w-8/12 text-center">
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 text-xl md:3xl sm:text-2xl text-gray-400"
        >
          Hello, I&lsquo;m
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="my-4 mb-8 text-3xl md:5xl sm:text-4xl font-semibold"
        >
          Firdavs
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="text-sm md:xl sm:text-lg text-gray-300"
        >
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
        </motion.p>
      </div>
      <ul className="mt-4 md:mt-12 grid md:grid-cols-2 lg:flex items-center gap-4">
        {socialMedias.map((sm, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.2 + 0.9 }}
          >
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <li>
                <Link href={sm.route}>
                  <Button
                    variant="ghost"
                    className="w-full flex justify-center gap-4 text-sm lg:text-lg border-b-2"
                  >
                    <div>{iconMap[sm.icon]}</div>
                    <span className="">{sm.label}</span>
                  </Button>
                </Link>
              </li>
            </motion.div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}
