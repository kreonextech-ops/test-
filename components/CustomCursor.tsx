"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-luxury-gold/30 rounded-full pointer-events-none z-[9999] flex items-center justify-center bg-transparent"
        animate={{
          x: position.x - 24,
          y: position.y - 24,
          scale: hovered ? 1.8 : 1,
          borderColor: hovered ? "rgba(197, 160, 89, 0.6)" : "rgba(197, 160, 89, 0.3)",
          backgroundColor: hovered ? "rgba(197, 160, 89, 0.05)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30, mass: 0.8 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-luxury-gold rounded-full pointer-events-none z-[9999]"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          scale: hovered ? 0.3 : 1,
          opacity: hovered ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 35, mass: 0.2 }}
      />
    </>
  );
}
