"use client";

import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import {CONFETTI_PIECES} from "@/constants/animation";

export default function ConfettiEffect() {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <Confetti
      width={size.width}
      height={size.height}
      numberOfPieces={CONFETTI_PIECES}
      recycle={false}
      gravity={0.25}
    />
  );
}