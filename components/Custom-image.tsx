"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface PropsType {
  image: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export default function CustomImage({
  alt,
  className,
  image,
  width = 240,
  height = 300,
  onClick,
}: PropsType) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Image
      src={image}
      alt={alt}
      className={cn(
        "object-fill duration-700 ease-in-out",
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0",
        className
      )}
      width={width}
      height={height}
      priority
      onLoad={() => setIsLoading(false)}
      style={{ fill: "white" }}
      onClick={onClick}
    />
  );
}
