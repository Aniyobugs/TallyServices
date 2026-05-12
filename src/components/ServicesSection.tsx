"use client";

import React from "react";
import { Server, Settings, HeadphonesIcon, Laptop } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { motion } from "framer-motion";

const services = [
  {
    title: "Tally Prime Sales",
    description: "Authorized partner for Tally Prime Silver and Gold licenses with seamless installation.",
    icon: <Laptop className="w-8 h-8 text-blue-500" />,
    colSpan: "md:col-span-2",
  },
  {
    title: "Tally Customization",
    description: "Tailor Tally to your specific business workflow with custom invoices, modules, and reports.",
    icon: <Settings className="w-8 h-8 text-indigo-500" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Tally on Cloud",
    description: "Access your accounting data securely from anywhere, anytime with 99.9% uptime.",
    icon: <Server className="w-8 h-8 text-purple-500" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "TSS & Support",
    description: "Tally Software Services renewal and dedicated technical support to keep you running smoothly.",
    icon: <HeadphonesIcon className="w-8 h-8 text-emerald-500" />,
    colSpan: "md:col-span-2",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-black relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Premium Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive Tally solutions designed to streamline your business operations and accelerate growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className={service.colSpan}
            >
              <Card className={`h-full overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50 bg-background/50 backdrop-blur-sm`}>
                <CardHeader>
                  <div className="mb-4 p-3 rounded-2xl bg-secondary/80 w-fit group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-1 w-0 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-500 mt-4 rounded-full" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
