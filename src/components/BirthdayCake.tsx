"use client";

import { motion } from "framer-motion";

interface BirthdayCakeProps {
  show: boolean;
}

export default function BirthdayCake({ show }: BirthdayCakeProps) {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 1,
        type: "spring",
      }}
      className="mt-10 flex justify-center"
    >
      <div className="relative">
        {/* Candles */}
        <div className="absolute -top-12 left-1/2 flex -translate-x-1/2 gap-5">
          {[0, 1, 2].map((candle) => (
            <div key={candle} className="flex flex-col items-center">
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.6,
                }}
                className="h-4 w-4 rounded-full bg-yellow-300 shadow-[0_0_20px_#fde047]"
              />

              <div className="h-10 w-2 rounded bg-pink-300" />
            </div>
          ))}
        </div>

        {/* Frosting */}
        <div className="h-10 w-64 rounded-t-full bg-pink-200" />

        {/* Cake */}
        <div className="h-36 w-64 rounded-b-2xl bg-pink-500 shadow-2xl" />
      </div>
    </motion.div>
  );
}