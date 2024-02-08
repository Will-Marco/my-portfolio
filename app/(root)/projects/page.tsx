"use client";

import CardItem from "@/components/shared/Card/Card";
import { Button } from "@/components/ui/button";
import { cards } from "@/config/constants";
import { CardsType } from "@/types";
import { motion } from "framer-motion";

export default function Projects() {
  const handleClick = (url: string | undefined) => {
    if (!url) return;
    window.open(url, "_blank");
  };

  return (
    <div className="w-screen h-fit sm:ml-[20%] p-10 relative bg-gray-950">
      <div className="flex flex-col justify-center items-center">
        <div className="m-auto grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {cards.map((card: CardsType, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.2 }}
            >
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <CardItem card={card} />
              </motion.div>
            </motion.div>
          ))}
        </div>
        <Button
          variant={"secondary"}
          className="w-[50%] m-auto mt-6"
          onClick={() => handleClick("https://github.com/Will-Marco")}
        >
          More project on Github
        </Button>
      </div>
    </div>
  );
}
