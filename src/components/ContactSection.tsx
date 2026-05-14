"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { DirectionAwareButton } from "./InteractiveButton";

export function ContactSection() {
  return (
    <section className="relative bg-white px-5 py-24 md:py-32" id="contact">
      <motion.div
        className="mx-auto grid max-w-6xl gap-10 rounded-[56px] bg-black p-6 text-white shadow-[0_44px_140px_rgba(0,0,0,0.22)] md:grid-cols-[0.9fr_1.1fr] md:p-10 lg:p-14"
        initial={{ opacity: 0, scale: 0.9, y: 70 }}
        transition={{ type: "spring", stiffness: 160, damping: 22 }}
        viewport={{ once: true, margin: "-120px" }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
      >
        <div className="flex min-h-[440px] flex-col justify-between rounded-[42px] bg-[#ff4d00] p-7 text-white md:p-9">
          <div>
            <p className="text-sm font-black uppercase">Connect</p>
            <h2 className="mt-5 text-5xl font-black uppercase leading-[0.86] sm:text-7xl">
              Build the next desk.
            </h2>
          </div>
          <p className="max-w-sm text-lg font-bold leading-relaxed text-white/80">
            Tell us what your accounting team is trying to make faster, safer, or simply less exhausting.
          </p>
        </div>

        <form className="flex flex-col justify-between gap-8 py-2 md:py-4">
          <div className="grid gap-5">
            <label className="grid gap-3">
              <span className="text-sm font-black uppercase text-white/48">Name</span>
              <input
                className="h-16 rounded-[28px] bg-white/10 px-5 text-xl font-bold text-white outline-none transition-colors duration-500 ease-out placeholder:text-white/30 focus:bg-white/16"
                placeholder="John Doe"
                required
                type="text"
              />
            </label>

            <label className="grid gap-3">
              <span className="text-sm font-black uppercase text-white/48">Email</span>
              <input
                className="h-16 rounded-[28px] bg-white/10 px-5 text-xl font-bold text-white outline-none transition-colors duration-500 ease-out placeholder:text-white/30 focus:bg-white/16"
                placeholder="john@company.com"
                required
                type="email"
              />
            </label>

            <label className="grid gap-3">
              <span className="text-sm font-black uppercase text-white/48">Project</span>
              <textarea
                className="min-h-[170px] resize-none rounded-[32px] bg-white/10 px-5 py-5 text-xl font-bold leading-relaxed text-white outline-none transition-colors duration-500 ease-out placeholder:text-white/30 focus:bg-white/16"
                placeholder="Cloud setup, reports, customization, integrations..."
                required
              />
            </label>
          </div>

          <DirectionAwareButton
            className="h-16 w-full bg-white px-7 text-base font-black uppercase text-black transition-colors duration-500 ease-out hover:text-white md:w-fit"
            fillClassName="bg-[#ff4d00]"
            type="button"
          >
            Send brief
            <ArrowUpRight size={20} strokeWidth={2.4} />
          </DirectionAwareButton>
        </form>
      </motion.div>
    </section>
  );
}
