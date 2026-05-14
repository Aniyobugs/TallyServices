"use client";

import React, { useState } from "react";
import { motion, useSpring } from "framer-motion";

const CASE_STUDIES = [
  {
    title: "VERTEX RETAIL",
    category: "Cloud Migration",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "APEX CORP",
    category: "Tally Integration",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "NOVA LOGISTICS",
    category: "System Architecture",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "NEXUS GROUP",
    category: "Custom Workflows",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop",
  },
];

export function CaseStudiesSection() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  // Springs for an incredibly smooth trailing effect
  const springConfig = { damping: 28, stiffness: 200, mass: 0.6 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    // Center the image exactly on the cursor (300px width/height -> offset by 150)
    cursorX.set(e.clientX - 150);
    cursorY.set(e.clientY - 150);
  };

  return (
    <section
      className="relative w-full bg-white py-24 sm:py-32"
      onMouseMove={handleMouseMove}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 md:mb-24">
          <p className="text-sm font-bold uppercase tracking-widest text-[#ff4d00]">
            Selected Works
          </p>
          <h2 className="mt-2 text-5xl font-black uppercase tracking-tighter text-black sm:text-7xl">
            Client Success
          </h2>
        </div>

        <div className="flex flex-col border-t border-black/10" onMouseLeave={() => setActiveItem(null)}>
          {CASE_STUDIES.map((item, index) => (
            <div
              key={index}
              className="group relative flex cursor-pointer items-center justify-between border-b border-black/10 py-10 transition-colors duration-500 hover:bg-black/5 sm:py-14"
              onMouseEnter={() => setActiveItem(index)}
            >
              <div className="flex flex-col px-4 sm:px-8">
                <span className="text-[2rem] font-black uppercase leading-[1.1] tracking-tight text-black transition-transform duration-500 group-hover:translate-x-4 sm:text-5xl md:text-7xl lg:text-[7rem] lg:group-hover:translate-x-6">
                  {item.title}
                </span>
                <span className="mt-2 text-[10px] font-bold uppercase tracking-widest text-black/40 transition-transform duration-500 group-hover:translate-x-4 sm:mt-4 sm:text-sm lg:group-hover:translate-x-6">
                  {item.category}
                </span>
              </div>
              <div className="hidden px-8 sm:block">
                <span className="text-lg font-bold text-black/0 transition-colors duration-300 group-hover:text-black">
                  View Case
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Trailing Image container */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-[300px] w-[300px] overflow-hidden bg-black shadow-2xl sm:block"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: activeItem !== null ? 1 : 0,
          scale: activeItem !== null ? 1 : 0.8,
        }}
        transition={{
          opacity: { duration: 0.3, ease: "easeOut" },
          scale: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        }}
      >
        <div
          className="relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateY(-${(activeItem ?? 0) * 100}%)` }}
        >
          {CASE_STUDIES.map((item, index) => (
            <div key={index} className="h-full w-full">
              {/* Using a basic img tag since we have Unsplash external URLs */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover opacity-80"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
