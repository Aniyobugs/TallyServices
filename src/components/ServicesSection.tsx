"use client";

import React, { ElementType, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Boxes, Cable, Cloud, LifeBuoy, ShieldCheck, Workflow } from "lucide-react";

const stories: Array<{
  title: string;
  eyebrow: string;
  metric: string;
  body: string;
  icon: ElementType;
  tone: string;
}> = [
  {
    title: "Prime licensing with zero theatre.",
    eyebrow: "Authorized setup",
    metric: "01",
    body: "Silver, Gold, and multi-user rollouts are mapped to real teams, not generic license bundles.",
    icon: Boxes,
    tone: "bg-[#111] border border-white/10 text-white",
  },
  {
    title: "Cloud Tally that feels local.",
    eyebrow: "Remote operations",
    metric: "99.9%",
    body: "Fast hosted access, backup cadence, branch access, and login discipline are designed as one system.",
    icon: Cloud,
    tone: "bg-[#ff4d00] text-white",
  },
  {
    title: "Invoices that match the floor.",
    eyebrow: "Customization",
    metric: "TDL",
    body: "Reports, print formats, approval flows, and niche business rules become daily-use interfaces.",
    icon: Workflow,
    tone: "bg-white text-black",
  },
  {
    title: "Integrations without accounting chaos.",
    eyebrow: "API bridges",
    metric: "ERP",
    body: "CRM, ecommerce, inventory, and operational data streams are connected with clear failure paths.",
    icon: Cable,
    tone: "bg-[#111] border border-white/10 text-white",
  },
  {
    title: "Security as a working habit.",
    eyebrow: "Data control",
    metric: "256",
    body: "Role permissions, backups, retention, and user practices are tuned around how your team actually works.",
    icon: ShieldCheck,
    tone: "bg-white text-black",
  },
  {
    title: "Support that stays close.",
    eyebrow: "Ongoing care",
    metric: "24/7",
    body: "Renewals, TSS, troubleshooting, and workflow changes stay under one calm operating desk.",
    icon: LifeBuoy,
    tone: "bg-[#ff4d00] text-white",
  },
];

function StoryCard({
  story,
  index,
  progress,
  total,
}: {
  story: (typeof stories)[number];
  index: number;
  progress: MotionValue<number>;
  total: number;
}) {
  const Icon = story.icon;
  const start = Math.max(0, (index - 1) / total);
  const middle = (index + 0.45) / total;
  const end = Math.min(1, (index + 1.7) / total);
  const rotateZ = useTransform(progress, [0, 1], [index % 2 === 0 ? -7 : 6, index % 2 === 0 ? 4 : -5]);
  const rotateY = useTransform(progress, [0, 1], [index % 2 === 0 ? -12 : 10, index % 2 === 0 ? 8 : -10]);
  const iconY = useTransform(progress, [0, 1], [index % 2 === 0 ? -22 : 22, index % 2 === 0 ? 24 : -18]);
  const cardOpacity = useTransform(progress, [start, middle, end], [0.42, 1, 0.56]);
  const cardScale = useTransform(progress, [start, middle, end], [0.9, 1, 0.94]);
  const cardY = useTransform(progress, [start, middle, end], [34, 0, -20]);

  return (
    <motion.article
      className={`${story.tone} soft-plane flex h-[470px] w-[82vw] min-w-[82vw] max-w-[560px] flex-col justify-between rounded-[42px] p-7 preserve-3d sm:h-[500px] md:min-w-[520px] md:rounded-[52px] md:p-10`}
      style={{ opacity: cardOpacity, rotateY, rotateZ, scale: cardScale, y: cardY }}
      whileHover={{ scale: 1.025, y: -18 }}
      transition={{ type: "spring", stiffness: 190, damping: 18 }}
    >
      <div className="flex items-start justify-between gap-6">
        <motion.div
          className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-white text-[#ff4d00] shadow-[0_18px_44px_rgba(0,0,0,0.16)]"
          style={{ y: iconY }}
        >
          <Icon size={34} strokeWidth={1.9} />
        </motion.div>
        <span className="text-5xl font-black leading-none opacity-20">{story.metric}</span>
      </div>

      <div>
        <p className="mb-5 text-sm font-black uppercase opacity-60">{story.eyebrow}</p>
        <h3 className="break-words text-4xl font-black uppercase leading-[0.9] md:text-5xl">{story.title}</h3>
        <p className="mt-7 max-w-md text-lg font-semibold leading-relaxed opacity-70">{story.body}</p>
      </div>
    </motion.article>
  );
}

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useGSAP(() => {
    if (!stageRef.current || !trackRef.current) return;

    const getScrollDistance = () => {
      const trackWidth = trackRef.current!.scrollWidth;
      const viewportWidth = window.innerWidth;
      // Scroll exactly the width of the track minus viewport, plus a little padding to feel nice
      return trackWidth - viewportWidth;
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: stageRef.current,
        start: "top top",
        end: () => `+=${getScrollDistance()}`,
        scrub: 1, // Smooth scrubbing
        invalidateOnRefresh: true, // Recalculate on resize
      },
    });

    // 1. Move track horizontally
    tl.to(
      trackRef.current,
      {
        x: () => -getScrollDistance(),
        ease: "none",
      },
      0
    );

    // 2. Animate progress bar width
    if (progressRef.current) {
      tl.fromTo(
        progressRef.current,
        { width: "0%" },
        { width: "100%", ease: "none" },
        0
      );
    }

    // 3. Fade out the header/intro early in the scroll
    if (introRef.current) {
      tl.to(
        introRef.current,
        {
          opacity: 0,
          y: -120,
          ease: "power2.inOut",
          duration: 0.15,
        },
        0
      );
    }
  }, { scope: sectionRef });

  return (
    <section className="relative bg-black" id="services" ref={sectionRef}>
      <div className="z-10 h-screen w-full overflow-hidden" ref={stageRef}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(255,77,0,0.28),transparent_28%),linear-gradient(135deg,#000_0%,#090909_52%,#1a0b05_100%)]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent" />

        <div
          ref={introRef}
          className="pointer-events-none absolute left-5 right-5 top-[clamp(6rem,12vh,8rem)] z-20 mx-auto flex max-w-6xl flex-col gap-4"
        >
          <p className="text-sm font-black uppercase text-[#ff4d00]">
            Services / capabilities
          </p>
          <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.88] text-white sm:text-6xl lg:text-7xl">
            Scroll through the systems we build.
          </h2>
        </div>

        <div className="perspective-deep absolute inset-x-0 bottom-[clamp(4.5rem,9vh,6.5rem)] z-10 w-full overflow-visible">
          <div
            className="flex w-max items-end gap-8 pl-[7vw] pr-[7vw] md:gap-10 md:pl-[38vw] md:pr-[10vw]"
            ref={trackRef}
          >
            {stories.map((story, index) => (
              <StoryCard
                index={index}
                key={story.title}
                progress={scrollYProgress}
                story={story}
                total={stories.length}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-5 right-5 z-20 mx-auto h-1 max-w-6xl overflow-hidden rounded-full bg-white/15">
          <div ref={progressRef} className="h-full rounded-full bg-[#ff4d00] w-0" />
        </div>
      </div>
    </section>
  );
}
