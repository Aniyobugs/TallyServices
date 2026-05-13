"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const syncPointerMode = () => setEnabled(mediaQuery.matches);

    syncPointerMode();
    mediaQuery.addEventListener("change", syncPointerMode);

    const updateMousePosition = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      setIsHovering(
        target.tagName.toLowerCase() === "a" ||
          target.tagName.toLowerCase() === "button" ||
          Boolean(target.closest("a")) ||
          Boolean(target.closest("button")),
      );
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      mediaQuery.removeEventListener("change", syncPointerMode);
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        animate={{
          opacity: isHovering ? 0.22 : 0.14,
          scale: isHovering ? 1.8 : 1,
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-12 w-12 rounded-full border border-black/30 bg-[#ff4d00]"
        transition={{ type: "spring", stiffness: 170, damping: 18, mass: 0.2 }}
      />
      <motion.div
        animate={{
          scale: isHovering ? 0.65 : 1,
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[101] h-2 w-2 rounded-full bg-black"
        transition={{ type: "spring", stiffness: 260, damping: 16, mass: 0.14 }}
      />
    </>
  );
}
