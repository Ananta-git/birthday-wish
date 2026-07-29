"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-extrabold text-white md:text-7xl">
          🎉 Happy Birthday 🎉
        </h1>

        <p className="mt-6 text-lg text-pink-100 md:text-2xl">
          Today is all about you ❤️
        </p>
      </motion.div>
    </section>
  );
}