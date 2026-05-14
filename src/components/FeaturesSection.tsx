"use client";

import React, { ElementType, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChartNoAxesCombined, Cpu, Globe2, LockKeyhole, ShieldCheck, Zap } from "lucide-react";

const features: Array<{
  title: string;
  description: string;
  icon: ElementType;
  span: string;
  tone: string;
}> = [
  {
    title: "Instant desk",
    description: "Tally Prime launches, syncs, and responds like a dedicated operating surface.",
    icon: Zap,
    span: "md:col-span-3 md:row-span-2",
    tone: "bg-black text-white",
  },
  {
    title: "Protected core",
    description: "Access, backups, and recovery are composed around real accounting risk.",
    icon: ShieldCheck,
    span: "md:col-span-3 md:row-span-1",
    tone: "bg-white text-black",
  },
  {
    title: "Global access",
    description: "Branches, accountants, and owners share one disciplined cloud workspace.",
    icon: Globe2,
    span: "md:col-span-3 md:row-span-2",
    tone: "bg-[#ff4d00] text-white",
  },
  {
    title: "Locked roles",
    description: "Permissions are clean, readable, and built for daily operations.",
    icon: LockKeyhole,
    span: "md:col-span-3 md:row-span-1",
    tone: "bg-white text-black",
  },
  {
    title: "API choreography",
    description: "CRM, ERP, ecommerce, and inventory systems exchange data without handwork.",
    icon: Cpu,
    span: "md:col-span-3 md:row-span-2",
    tone: "bg-black text-white",
  },
  {
    title: "Custom insight",
    description: "Reports surface the decisions your team makes every morning.",
    icon: ChartNoAxesCombined,
    span: "md:col-span-3 md:row-span-2",
    tone: "bg-white text-black",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const iconY = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 36 : -18, index % 2 === 0 ? -28 : 34]);
  const iconRotate = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -8 : 8, index % 2 === 0 ? 10 : -10]);
  const Icon = feature.icon;

  return (
    <motion.div
      className={`${feature.span} ${feature.tone} soft-plane group relative flex min-h-[270px] overflow-hidden rounded-[48px] p-8 preserve-3d md:min-h-0 md:p-10`}
      initial={{ opacity: 0, scale: 0.5, y: 80, rotateX: 18 }}
      ref={cardRef}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: (index % 3) * 0.08,
      }}
      viewport={{ once: true, margin: "-70px" }}
      whileHover={{ rotateX: 5, rotateY: index % 2 === 0 ? -7 : 7, y: -12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
    >
      <motion.div
        className="absolute right-7 top-7 flex h-24 w-24 items-center justify-center rounded-[34px] bg-[#ff4d00] text-white shadow-[0_22px_56px_rgba(255,77,0,0.28)]"
        style={{ rotate: iconRotate, y: iconY }}
      >
        <Icon size={42} strokeWidth={1.8} />
      </motion.div>

      <div className="relative z-10 mt-auto w-full md:pr-8">
        <p className="mb-5 text-xs font-black uppercase opacity-55">0{index + 1}</p>
        <h3 className="break-words text-3xl font-black uppercase leading-[0.95] md:text-4xl lg:text-5xl">{feature.title}</h3>
        <p className="mt-5 text-base font-semibold leading-relaxed opacity-[0.68] md:text-lg">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <section className="relative z-20 overflow-hidden bg-white px-5 pb-24 pt-20 md:pb-32 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-14 max-w-4xl md:mb-20"
          initial={{ opacity: 0, y: 42 }}
          transition={{ type: "spring", stiffness: 180, damping: 22 }}
          viewport={{ once: true, margin: "-100px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm font-black uppercase text-[#ff4d00]">Capabilities</p>
          <h2 className="mt-5 text-5xl font-black uppercase leading-[0.88] text-black sm:text-7xl lg:text-8xl">
            A fluid control room, not a checklist.
          </h2>
        </motion.div>

        <div className="perspective-deep grid auto-rows-[170px] grid-cols-1 gap-6 md:grid-cols-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard feature={feature} index={index} key={feature.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
