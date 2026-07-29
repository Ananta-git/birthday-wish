"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface CountdownProps {
  onComplete: () => void;
}

export default function Countdown({ onComplete }: CountdownProps) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    // When reaching zero, pause briefly to show "🎉" then complete
    if (count === 0) {
      const completionTimer = setTimeout(() => {
        onComplete();
      }, 1000);

      return () => clearTimeout(completionTimer);
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, onComplete]);

  return (
    <div className="absolute inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
      <AnimatePresence mode="wait">
        <motion.div
          key={count}
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-8xl font-black text-white drop-shadow-lg"
        >
          {count > 0 ? count : "🎉"}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}