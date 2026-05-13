"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Database, Layers, RadioTower } from "lucide-react";
import { DirectionAwareButton } from "./InteractiveButton";

function DashboardMockup() {
  return (
    <div className="relative h-[430px] w-[min(86vw,720px)] preserve-3d sm:h-[460px]">
      <motion.div
        animate={{ y: [0, -18, 0], rotateX: [7, 2, 7], rotateY: [-12, -7, -12] }}
        className="absolute inset-x-0 top-8 mx-auto h-[330px] w-full overflow-hidden rounded-[44px] bg-white shadow-[0_46px_120px_rgba(0,0,0,0.34)] preserve-3d sm:h-[390px]"
        style={{ transform: "translateZ(80px)" }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
      >
        <div className="flex h-full flex-col bg-[#f7f7f7] p-4 sm:p-6">
          <div className="flex items-center justify-between rounded-[28px] bg-black px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff4d00]">
                <Layers size={18} strokeWidth={2.4} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase">Tally OS</p>
                <p className="text-[11px] text-white/60">Implementation command center</p>
              </div>
            </div>
            <div className="hidden rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase sm:block">
              Live sync
            </div>
          </div>

          <div className="grid flex-1 gap-4 pt-4 sm:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col justify-between rounded-[34px] bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <div>
                <p className="text-xs font-bold uppercase text-[#ff4d00]">Ledger velocity</p>
                <div className="mt-4 flex items-end gap-3">
                  <span className="text-6xl font-black leading-none text-black">98</span>
                  <span className="pb-2 text-lg font-black text-black">%</span>
                </div>
              </div>
              <div className="flex h-24 items-end gap-2">
                {[36, 58, 46, 82, 64, 92, 76].map((height, index) => (
                  <motion.span
                    animate={{ height: [`${height * 0.72}%`, `${height}%`, `${height * 0.82}%`] }}
                    className="flex-1 rounded-full bg-[#ff4d00]"
                    key={height + index}
                    transition={{
                      delay: index * 0.12,
                      duration: 2.4,
                      repeat: Infinity,
                      repeatType: "mirror",
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="hidden flex-col gap-4 sm:flex">
              <div className="flex flex-1 flex-col justify-between rounded-[34px] bg-black p-5 text-white shadow-[0_18px_55px_rgba(0,0,0,0.18)]">
                <RadioTower className="text-[#ff4d00]" size={28} strokeWidth={2} />
                <div>
                  <p className="text-3xl font-black leading-none">24/7</p>
                  <p className="mt-2 text-xs text-white/60">Cloud operations</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between rounded-[34px] bg-white p-5 shadow-[0_18px_55px_rgba(0,0,0,0.06)]">
                <Database className="text-[#ff4d00]" size={28} strokeWidth={2} />
                <div className="space-y-2">
                  <span className="block h-3 w-3/4 rounded-full bg-black" />
                  <span className="block h-3 w-1/2 rounded-full bg-black/15" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 14, 0], rotateZ: [-5, -2, -5] }}
        className="absolute bottom-0 right-3 h-[270px] w-[150px] rounded-[38px] bg-black p-3 shadow-[0_34px_90px_rgba(0,0,0,0.35)] sm:right-16 sm:h-[330px] sm:w-[184px]"
        style={{ transform: "translateZ(180px)" }}
        transition={{ duration: 4.4, ease: "easeInOut", repeat: Infinity }}
      >
        <div className="flex h-full flex-col justify-between rounded-[30px] bg-white p-4">
          <div className="h-6 w-16 rounded-full bg-black" />
          <div>
            <p className="text-[11px] font-bold uppercase text-[#ff4d00]">Mobile desk</p>
            <p className="mt-2 text-4xl font-black leading-none">12k</p>
          </div>
          <div className="space-y-2">
            <span className="block h-3 rounded-full bg-black/15" />
            <span className="block h-3 w-2/3 rounded-full bg-[#ff4d00]" />
            <span className="block h-3 w-5/6 rounded-full bg-black" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const stageScale = useTransform(scrollYProgress, [0, 0.45, 0.95], [1, 0.97, 0.92]);
  const stageY = useTransform(scrollYProgress, [0, 0.75], [0, 32]);
  const stageRadius = useTransform(scrollYProgress, [0, 0.45, 0.95], [0, 40, 56]);
  const mockupY = useTransform(scrollYProgress, [0, 0.55, 1], [28, -48, -320]);
  const mockupScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.96, 1.04, 1.2]);
  const mockupRotateX = useTransform(scrollYProgress, [0, 1], [8, -12]);
  const mockupRotateY = useTransform(scrollYProgress, [0, 1], [-10, 14]);
  const mockupRotateZ = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const mockupOpacity = useTransform(scrollYProgress, [0, 0.88, 1], [1, 1, 0.72]);

  return (
    <section className="relative h-[128vh] bg-white md:h-[142vh]" ref={containerRef}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-3 py-3">
        <motion.div
          className="relative flex h-full w-full origin-top flex-col items-center justify-center overflow-hidden bg-[#ff4d00] shadow-[0_50px_140px_rgba(255,77,0,0.26)]"
          style={{ borderRadius: stageRadius, scale: stageScale, y: stageY }}
        >
          <div className="absolute inset-x-0 top-24 z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 rounded-full bg-white px-5 py-2 text-xs font-black uppercase text-black"
              initial={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.7, delay: 0.12 }}
            >
              Anti-gravity Tally studio
            </motion.p>
            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              className="max-w-5xl text-6xl font-black uppercase leading-[0.84] text-white sm:text-8xl lg:text-[8.5rem]"
              initial={{ opacity: 0, y: 36 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Tally Prime
              <span className="block text-black">Designed.</span>
            </motion.h1>
          </div>

          <motion.div
            className="perspective-deep relative z-20 mt-28 preserve-3d sm:mt-40"
            style={{
              opacity: mockupOpacity,
              rotateX: mockupRotateX,
              rotateY: mockupRotateY,
              rotateZ: mockupRotateZ,
              scale: mockupScale,
              y: mockupY,
            }}
          >
            <DashboardMockup />
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-8 z-30 flex flex-wrap items-center justify-center gap-3 px-4"
            initial={{ opacity: 0, y: 24 }}
            transition={{ delay: 0.75, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <DirectionAwareButton
              className="h-14 bg-black px-6 text-sm font-black uppercase text-white transition-colors group-hover:text-black"
              fillClassName="bg-white"
            >
              Design my stack
              <ArrowUpRight size={18} strokeWidth={2.4} />
            </DirectionAwareButton>
            <DirectionAwareButton
              className="h-14 bg-white px-6 text-sm font-black uppercase text-black transition-colors group-hover:text-white"
              fillClassName="bg-black"
            >
              View systems
              <ArrowUpRight size={18} strokeWidth={2.4} />
            </DirectionAwareButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
