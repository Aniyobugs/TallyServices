"use client";

import React, { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";

const stats = [
  { value: 15, suffix: "+", label: "Years shaping Tally workflows", tone: "bg-black text-white" },
  { value: 2000, suffix: "+", label: "Active ledgers supported", tone: "bg-white text-black" },
  { value: 99.9, suffix: "%", label: "Cloud uptime target", tone: "bg-[#ff4d00] text-white" },
  { value: 24, suffix: "/7", label: "Human support loop", tone: "bg-white text-black" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    value % 1 === 0 ? Math.round(latest).toLocaleString() : latest.toFixed(1),
  );
  const [displayValue, setDisplayValue] = React.useState("0");

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => setDisplayValue(latest));
    return unsubscribe;
  }, [rounded]);

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2.1, ease: [0.22, 1, 0.36, 1] });
    }
  }, [count, isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="relative z-20 -mt-[42vh] bg-white px-5 pb-20 pt-12 md:-mt-[48vh] md:pb-28 md:pt-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-120px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm font-black uppercase text-[#ff4d00]">Proof without noise</p>
          <h2 className="mt-4 text-5xl font-black uppercase leading-[0.88] text-black sm:text-7xl lg:text-8xl">
            Accounting systems with studio-grade finish.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-5 pt-8 md:flex-row md:items-stretch">
          {stats.map((stat, index) => (
            <motion.article
              className={`${stat.tone} soft-plane flex min-h-[220px] flex-1 flex-col justify-between rounded-[44px] p-7`}
              initial={{ opacity: 0, scale: 0.72, y: 42 }}
              key={stat.label}
              transition={{
                type: "spring",
                stiffness: 190,
                damping: 20,
                delay: index * 0.08,
              }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ rotateX: 4, rotateY: index % 2 === 0 ? -5 : 5, y: -10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
            >
              <p className="max-w-[12rem] text-sm font-bold uppercase opacity-70">{stat.label}</p>
              <h3 className="text-6xl font-black leading-none sm:text-7xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
