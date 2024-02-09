"use client";

import { skills } from "@/config/constants";
import { motion } from "framer-motion";

export default function Skills() {
  const handleClick = (query: string | undefined) => {
    if (!query) return;
    window.open(`https://www.google.com/search?q=${query}`, "_blank");
  };

  return (
    <div className="w-screen h-screen sm:ml-[20%] p-10 relative bg-gray-950 -z-10">
      <h1 className="mt-[6%] text-center text-4xl font-semibold">Languages & Tools</h1>
      <div className="h-full px-[8%] py-[10%] sm:pt-[5%] grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Object.entries(skills).map(([category, value], idx) => (
          <div key={category} className="uppercase">
            <motion.h3
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.2 }}
              className="mb-6 text-xl text-slate-300 font-semibold"
            >
              {category}
            </motion.h3>
            <ul className="flex flex-wrap gap-2">
              {value.map((skill) => (
                <motion.li
                  key={skill}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.3 }}
                  onClick={() => handleClick(skill)}
                  className="px-2 py-1 bg-slate-900 uppercase text-sm text-slate-500 font-semibold rounded-md border border-slate-500 cursor-pointer"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
