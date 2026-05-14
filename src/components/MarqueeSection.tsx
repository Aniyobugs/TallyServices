"use client";

import React from "react";
import { motion } from "framer-motion";

const PHRASES = [
  "ENTERPRISE GRADE",
  "CLOUD ARCHITECTURE",
  "24/7 SUPPORT",
  "ZERO DOWNTIME",
  "TALLY OS",
  "SEAMLESS INTEGRATION",
  "HIGH PERFORMANCE",
  "DATA SECURITY",
];

export function MarqueeSection() {
  return (
    <section className="relative z-20 -mt-[28vh] flex w-full flex-col items-center justify-center overflow-hidden border-y border-black/5 bg-[#f7f7f7] py-8 md:-mt-[42vh] sm:py-12">
      <div className="flex w-full whitespace-nowrap">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex w-max items-center"
        >
          {/* Group 1 */}
          <div className="flex items-center gap-6 px-3 sm:gap-10 sm:px-5 lg:gap-12 lg:px-6">
            {PHRASES.map((phrase, idx) => (
              <React.Fragment key={`g1-${idx}`}>
                <span className="text-4xl font-black uppercase tracking-tighter text-black sm:text-6xl lg:text-[5.5rem]">
                  {phrase}
                </span>
                <span className="text-3xl text-[#ff4d00] sm:text-4xl lg:text-5xl">✦</span>
              </React.Fragment>
            ))}
          </div>
          {/* Group 2 (Duplicate for seamless loop) */}
          <div className="flex items-center gap-6 px-3 sm:gap-10 sm:px-5 lg:gap-12 lg:px-6">
            {PHRASES.map((phrase, idx) => (
              <React.Fragment key={`g2-${idx}`}>
                <span className="text-4xl font-black uppercase tracking-tighter text-black sm:text-6xl lg:text-[5.5rem]">
                  {phrase}
                </span>
                <span className="text-3xl text-[#ff4d00] sm:text-4xl lg:text-5xl">✦</span>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
