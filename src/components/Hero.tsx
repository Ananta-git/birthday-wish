"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FloatingStars from "./FloatingStars";
import FloatingBalloons from "./FloatingBalloons";
import Countdown from "./Countdown";
import ConfettiEffect from "./ConfettiEffect";
import {birthday} from "@/data/birthday";
import BirthdayCake from "./BirthdayCake";

export default function Hero() {
  const [showCountdown, setShowCountdown] = useState(true);
  const [celebrate, setCelebrate] = useState(false);
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-pink-900">
      {showCountdown && (
        <Countdown
          onComplete={() => {
            setShowCountdown(false);
            setCelebrate(true);
          }}
        />
      )}
      {celebrate && <ConfettiEffect />}
      <FloatingStars />
      <FloatingBalloons />
      <div className="absolute inset-0 bg-black/20" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-8xl font-extrabold text-white"
        >
          {birthday.title}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-4xl md:text-6xl font-bold text-pink-300"
        >
          {birthday.name} ❤️
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 text-lg md:text-2xl text-gray-200"
        >
          {birthday.message}
        </motion.p>
        <BirthdayCake show={celebrate} />
      </motion.div>
    </section>
  );
}