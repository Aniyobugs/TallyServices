"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only enable on devices with a precise pointer (like a mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const syncPointerMode = () => setEnabled(mediaQuery.matches);

    syncPointerMode();
    mediaQuery.addEventListener("change", syncPointerMode);

    const updateMousePosition = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Detect if we are hovering over an interactive element
      const isClickable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "input" ||
        target.tagName.toLowerCase() === "textarea" ||
        Boolean(target.closest("a")) ||
        Boolean(target.closest("button")) ||
        window.getComputedStyle(target).cursor === "pointer";
        
      setIsHovering(isClickable);
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
      {/* Hide the default system cursor globally when custom cursor is active */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (pointer: fine) {
          body, a, button, input, textarea, select, [role="button"] {
            cursor: none !important;
          }
        }
      `}} />
      
      {/* Outer Hollow Ring - lags behind slightly for organic feel */}
      <motion.div
        animate={{
          scale: isHovering ? 1.6 : 1,
          opacity: isHovering ? 0 : 1,
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-10 w-10 rounded-full border-[1.5px] border-[#ff4d00]/60"
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.15 }}
      />
      
      {/* Inner Solid Dot - follows exactly and expands on hover */}
      <motion.div
        animate={{
          scale: isHovering ? 4.5 : 1,
          opacity: isHovering ? 0.35 : 1,
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[10001] h-2 w-2 rounded-full bg-[#ff4d00]"
        transition={{ type: "spring", stiffness: 450, damping: 25, mass: 0.05 }}
      />
    </>
  );
}
