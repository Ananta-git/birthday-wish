"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  STAR_COUNT,
  STAR_MIN_SIZE,
  STAR_MAX_SIZE,
  STAR_ANIMATION_DURATION,
} from "@/constants/animation";

interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
}

export default function FloatingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate random positions only after the component mounts on the client
    const generatedStars: Star[] = Array.from({ length: STAR_COUNT }).map((_, index) => ({
      id: index,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size:Math.random() * (STAR_MAX_SIZE - STAR_MIN_SIZE) + STAR_MIN_SIZE,
      delay: Math.random() * 3,
    }));

    setStars(generatedStars);
  }, []);

  // Return null on the initial server-side render to prevent HTML mismatch
if (!stars.length) return <></>;

  return (
    <>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: STAR_ANIMATION_DURATION,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}