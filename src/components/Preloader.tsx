"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = "hidden";

    // Easing function for a dynamic counting effect (easeOutExpo)
    const easeOutExpo = (x: number): number => {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    };

    let start: number | null = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progressTime = timestamp - start;
      const progressPercent = Math.min(progressTime / duration, 1);
      
      // Apply easing to the progress
      const easedProgress = easeOutExpo(progressPercent);
      setProgress(Math.floor(easedProgress * 100));

      if (progressPercent < 1) {
        requestAnimationFrame(step);
      } else {
        // Hold at 100% for a short moment
        setTimeout(() => {
          setIsLoading(false);
          // Delay before unlocking scroll to let the slide-up animation finish
          setTimeout(() => {
            document.body.style.overflow = "";
          }, 900);
        }, 300);
      }
    };

    requestAnimationFrame(step);

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-black px-6 py-8 sm:p-12"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Top Bar */}
          <div className="flex w-full items-center justify-between text-white/50">
            <span className="text-xs font-bold uppercase tracking-widest text-white">Tally Studio</span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff4d00]">Loading System</span>
          </div>

          {/* Main Counter & Animated Text */}
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="relative overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                className="text-[18vw] font-black leading-[0.85] tracking-tighter text-white sm:text-[14rem]"
              >
                {progress}%
              </motion.div>
            </div>
            
            <div className="mt-6 overflow-hidden">
               <motion.div
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                 className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff4d00] sm:text-base"
               >
                 A Premium Implementation
               </motion.div>
            </div>
          </div>

          {/* Bottom Loading Bar */}
          <div className="w-full">
            <div className="mb-4 flex justify-between text-[10px] font-bold uppercase tracking-wider text-white/50">
              <span>Initializing Modules...</span>
              <span>{progress === 100 ? "Ready" : "Please Wait"}</span>
            </div>
            <div className="h-[2px] w-full overflow-hidden bg-white/20">
              <motion.div
                className="h-full bg-[#ff4d00]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
