"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const dataPoints = [
  { label: "Efficiency", value: 88 },
  { label: "Compliance", value: 96 },
  { label: "Automation", value: 74 },
  { label: "Security", value: 99 },
  { label: "Growth", value: 82 },
];

export function AnalyticsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section 
      ref={sectionRef}
      className="relative z-20 flex min-h-[90vh] items-center overflow-hidden bg-black px-5 py-24 text-white md:py-32" 
      id="analytics"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,77,0,0.15),transparent_40%),linear-gradient(135deg,#000_0%,#090909_52%,#1a0b05_100%)]" />
      
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <p className="text-sm font-black uppercase text-[#ff4d00]">Analytics</p>
            <h2 className="mt-5 text-5xl font-black uppercase leading-[0.88] sm:text-7xl lg:text-8xl">
              Data that <br /> drives growth.
            </h2>
            <p className="mt-8 text-lg font-semibold leading-relaxed opacity-70">
              Our custom Tally dashboards surface the metrics that matter most. Stop digging through ledgers and start making decisions based on real-time visual insights tailored specifically to your operational floor.
            </p>
            
            <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
              <div>
                <span className="block text-5xl font-black text-[#ff4d00]">40%</span>
                <span className="mt-2 block text-xs font-bold uppercase opacity-60">Faster Reconciliation</span>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div>
                <span className="block text-5xl font-black text-white">Zero</span>
                <span className="mt-2 block text-xs font-bold uppercase opacity-60">Compliance Errors</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative flex h-[400px] w-full max-w-xl items-end justify-between gap-3 rounded-[48px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:h-[500px] sm:gap-6 sm:p-12 lg:w-1/2"
            style={{ scale: scaleY, opacity }}
          >
            {/* Grid Lines */}
            <div className="absolute inset-x-8 bottom-12 top-12 flex flex-col justify-between sm:inset-x-12">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="w-full border-t border-white/5" />
              ))}
            </div>

            {dataPoints.map((point, i) => (
              <div key={point.label} className="group relative z-10 flex h-full w-full flex-col justify-end">
                <motion.div
                  initial={{ height: "0%" }}
                  whileInView={{ height: `${point.value}%` }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 80, 
                    damping: 15, 
                    delay: i * 0.1 + 0.2 
                  }}
                  className={`w-full rounded-t-xl ${i === 3 ? "bg-[#ff4d00] shadow-[0_0_30px_rgba(255,77,0,0.4)]" : "bg-white/20 transition-colors group-hover:bg-white/40"}`}
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-sm font-black opacity-0 transition-opacity group-hover:opacity-100">
                    {point.value}%
                  </div>
                </motion.div>
                <div className="mt-4 text-center text-[10px] font-black uppercase tracking-wider opacity-50 sm:text-xs">
                  <span className="hidden sm:inline">{point.label}</span>
                  <span className="sm:hidden">{point.label.substring(0, 3)}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
