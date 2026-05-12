"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "2,000+", label: "Active Clients" },
  { value: "99.9%", label: "Cloud Uptime" },
  { value: "24/7", label: "Expert Support" },
];

export function StatsSection() {
  return (
    <section className="py-20 relative border-y border-white/5 bg-black">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-2"
            >
              <h4 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                {stat.value}
              </h4>
              <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
