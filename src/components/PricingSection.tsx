"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { DirectionAwareButton, Magnetic } from "./InteractiveButton";

const plans = [
  {
    name: "Silver",
    target: "Single User",
    price: "₹ 22,500",
    period: "lifetime",
    description: "Perfect for small businesses. Activated and used on a single computer.",
    features: [
      "Full accounting & inventory",
      "GST compliance & filing",
      "Banking & reconciliation",
      "Single PC installation",
    ],
    tone: "bg-white text-black border-black/10",
    buttonFill: "bg-[#ff4d00]",
    featured: false,
  },
  {
    name: "Gold",
    target: "Multi User",
    price: "₹ 67,500",
    period: "lifetime",
    description: "Designed for growing businesses. Unlimited access from multiple computers.",
    features: [
      "All Silver features included",
      "Unlimited users on local network",
      "Multi-branch management",
      "Enhanced security & controls",
    ],
    tone: "bg-black text-white border-white/10",
    buttonFill: "bg-[#ff4d00]",
    featured: true,
  },
  {
    name: "Server",
    target: "Enterprise",
    price: "₹ 2,70,000",
    period: "lifetime",
    description: "Dedicated data server ensuring maximum performance with multiple concurrent users.",
    features: [
      "Zero downtime operations",
      "High concurrent user handling",
      "Advanced administrative control",
      "Scheduled automatic backups",
    ],
    tone: "bg-[#ff4d00] text-white border-[#ff4d00]",
    buttonFill: "bg-black",
    featured: false,
  },
  {
    name: "Rental",
    target: "Pay as you go",
    price: "₹ 750",
    period: "per month",
    description: "Start using TallyPrime immediately with zero upfront cost. Billed monthly.",
    features: [
      "Full access to all features",
      "Cancel anytime flexibility",
      "Free remote support included",
      "Automatic updates & upgrades",
    ],
    tone: "bg-white text-black border-black/10",
    buttonFill: "bg-black",
    featured: false,
  },
];

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const yOffset = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 50 : 80, -20]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y: yOffset }}
      initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
      whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
      className={`relative flex flex-col justify-between overflow-hidden rounded-[42px] border p-7 md:p-8 xl:p-10 ${plan.tone}`}
    >
      {plan.featured && (
        <div className="absolute right-0 top-0 rounded-bl-[24px] bg-[#ff4d00] px-4 py-2 text-[10px] font-black uppercase text-white shadow-lg sm:px-5 sm:py-2.5 sm:text-xs">
          Most Popular
        </div>
      )}
      <div>
        <div className="mb-6 flex items-center justify-between pr-24">
          <p className="text-xs font-black uppercase opacity-60 sm:text-sm">{plan.target}</p>
        </div>
        <h3 className="mb-3 text-3xl font-black uppercase md:text-4xl">{plan.name}</h3>
        <p className="mb-8 max-w-[240px] text-xs font-semibold leading-relaxed opacity-70 sm:text-sm">
          {plan.description}
        </p>

        <div className="mb-8 flex flex-col gap-1">
          <span className="text-4xl font-black tracking-tighter xl:text-5xl">{plan.price}</span>
          <span className="text-xs font-bold uppercase opacity-50 sm:text-sm">/ {plan.period}</span>
        </div>

        <ul className="mb-10 flex flex-col gap-4">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className={`mt-0.5 h-5 w-5 shrink-0 ${plan.tone.includes("bg-[#ff4d00]") ? "text-white" : "text-[#ff4d00]"}`} />
              <span className="text-sm font-semibold opacity-80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Magnetic>
        <DirectionAwareButton
          className={`w-full border-2 ${
            plan.tone.includes("bg-black")
              ? "border-white/20 hover:text-white"
              : plan.tone.includes("bg-[#ff4d00]")
              ? "border-white/40 text-white"
              : "border-black/10 text-black hover:text-white"
          } py-4 text-xs font-black uppercase sm:py-5 sm:text-sm`}
          fillClassName={plan.buttonFill}
        >
          Get Quote
        </DirectionAwareButton>
      </Magnetic>
    </motion.div>
  );
}

export function PricingSection() {
  return (
    <section className="relative z-20 overflow-hidden bg-zinc-50 px-5 pb-24 pt-20 md:pb-32 md:pt-28" id="pricing">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 max-w-4xl md:mb-24"
          initial={{ opacity: 0, y: 42 }}
          transition={{ type: "spring", stiffness: 180, damping: 22 }}
          viewport={{ once: true, margin: "-100px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm font-black uppercase text-[#ff4d00]">Pricing</p>
          <h2 className="mt-5 text-5xl font-black uppercase leading-[0.88] text-black sm:text-7xl lg:text-8xl">
            Clear licensing. <br />
            No hidden costs.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
