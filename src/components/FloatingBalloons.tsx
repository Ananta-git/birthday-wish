"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Balloon {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
}

const colors = [
  "#ff4d6d",
  "#ff85a1",
  "#ffd166",
  "#06d6a0",
  "#4cc9f0",
  "#a78bfa",
];

export default function FloatingBalloons() {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 10 }, (_, index) => ({
      id: index,
      left: Math.random() * 90,
      delay: Math.random() * 4,
      duration: 8 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setBalloons(generated);
  }, []);

  if (!balloons.length) return null;

  return (
    <>
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          className="absolute bottom-[-120px]"
          style={{ left: `${balloon.left}%` }}
          animate={{
            y: [-20, -window.innerHeight - 200],
            x: [0, -10, 10, -5, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: balloon.duration,
            delay: balloon.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="relative"
            style={{
              width: 45,
              height: 60,
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: balloon.color,
              }}
            />

            <div className="mx-auto h-14 w-[2px] bg-white/70" />
          </div>
        </motion.div>
      ))}
    </>
  );
}