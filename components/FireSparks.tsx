import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const FireSpark = () => {
  const sparks = Array.from({ length: 40 }).map((_, index) => (
    <motion.div
      key={index}
      className={cn(
        `w-[5px] h-[5px] absolute overflow-hidden bg-[#ff6f00] rounded-full`
      )}
      style={{
        top: `${Math.floor(Math.random() * 100)}%`,
        left: `${Math.floor(Math.random() * 80 + 20)}%`,
      }}
      animate={{ opacity: [1, 0], y: [-0, -200], rotateZ: [0, 180] }}
      transition={{
        duration: Math.random() * 4 + 8,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  ));

  return <div className="w-screen h-screen absolute -left-10 sm:left-0">{sparks}</div>;
};

export default FireSpark;
