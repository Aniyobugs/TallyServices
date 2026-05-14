"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type MagneticProps = {
  children: React.ReactNode;
  className?: string;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function Magnetic({ children, className = "" }: MagneticProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);

    setPosition({
      x: clamp(x * 0.35, -20, 20),
      y: clamp(y * 0.35, -20, 20),
    });
  };

  return (
    <motion.div
      animate={position}
      className={`inline-flex ${className}`}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      onMouseMove={handleMouseMove}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

type DirectionAwareButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  fillClassName?: string;
};

export function DirectionAwareButton({
  children,
  className = "",
  fillClassName = "bg-black",
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
  type = "button",
  ...props
}: DirectionAwareButtonProps) {
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });

  const updatePointer = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    const magneticX = event.clientX - (rect.left + rect.width / 2);
    const magneticY = event.clientY - (rect.top + rect.height / 2);

    setOrigin({ x, y });
    setTextPosition({
      x: clamp(magneticX * 0.28, -20, 20),
      y: clamp(magneticY * 0.28, -20, 20),
    });
  };

  return (
    <button
      {...props}
      className={`group relative isolate inline-flex overflow-hidden rounded-full ${className}`}
      onMouseEnter={(event) => {
        updatePointer(event);
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        setTextPosition({ x: 0, y: 0 });
        onMouseLeave?.(event);
      }}
      onMouseMove={(event) => {
        updatePointer(event);
        onMouseMove?.(event);
      }}
      type={type}
    >
      <span
        aria-hidden="true"
        className={`absolute -z-10 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full transition-transform duration-500 ease-out group-hover:scale-100 ${fillClassName}`}
        style={{ left: `${origin.x}%`, top: `${origin.y}%`, width: '300%', aspectRatio: '1' }}
      />
      <motion.span
        animate={textPosition}
        className="relative z-10 flex w-full items-center justify-center gap-2"
        transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.18 }}
      >
        {children}
      </motion.span>
    </button>
  );
}
