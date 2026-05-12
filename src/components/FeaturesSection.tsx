"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Globe, Lock, Cpu, BarChart } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Lightning Fast",
    description: "Optimized for speed. Experience zero lag with our custom Tally on Cloud solutions.",
  },
  {
    icon: <Shield className="w-6 h-6 text-green-400" />,
    title: "Bank-Grade Security",
    description: "Your financial data is protected with AES-256 encryption and multi-factor authentication.",
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    title: "Global Accessibility",
    description: "Access your accounts from anywhere in the world on any device seamlessly.",
  },
  {
    icon: <Lock className="w-6 h-6 text-purple-400" />,
    title: "Automated Backups",
    description: "Never lose data. We perform daily automated backups with 30-day retention.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-red-400" />,
    title: "API Integration",
    description: "Connect Tally Prime seamlessly with your CRM, ERP, and custom applications.",
  },
  {
    icon: <BarChart className="w-6 h-6 text-cyan-400" />,
    title: "Custom Reporting",
    description: "Get real-time insights with custom dashboards tailored to your KPIs.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Why Choose Us</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the "anti-gravity" difference. We lift the burden of accounting software management so you can focus on growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative h-full bg-black/50 backdrop-blur-xl border border-white/5 p-8 rounded-2xl overflow-hidden">
                <div className="mb-6 inline-flex p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
