"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Verma",
    company: "Verma Traders",
    feedback:
      "Their team rebuilt our Tally workflow with the restraint of a product studio. The result feels calmer and faster every day.",
  },
  {
    name: "Anjali Menon",
    company: "Menon Logistics",
    feedback:
      "Cloud access finally feels invisible. Branches, owners, and accountants work from the same source without waiting on each other.",
  },
  {
    name: "John Mathew",
    company: "JM Enterprises",
    feedback:
      "The custom reports replaced a week of manual reconciliation. We now see the business before the month is already over.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 md:py-32" id="testimonials">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-14 flex max-w-4xl flex-col gap-5"
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm font-black uppercase text-[#ff4d00]">Client signal</p>
          <h2 className="text-5xl font-black uppercase leading-[0.88] text-black sm:text-7xl lg:text-8xl">
            Quiet systems, loud outcomes.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6 lg:flex-row">
          {testimonials.map((testimonial, index) => (
            <motion.article
              className={`soft-plane flex min-h-[420px] flex-1 flex-col justify-between rounded-[48px] p-8 ${
                index === 1 ? "bg-black text-white" : "bg-white text-black"
              }`}
              initial={{ opacity: 0, scale: 0.72, y: 60 }}
              key={testimonial.name}
              transition={{
                type: "spring",
                stiffness: 190,
                damping: 20,
                delay: index * 0.1,
              }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -12, rotateX: index === 1 ? -3 : 3 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
            >
              <p className="text-2xl font-black uppercase leading-[1.02] md:text-3xl">
                {testimonial.feedback}
              </p>
              <div>
                <p className="text-sm font-black uppercase text-[#ff4d00]">{testimonial.name}</p>
                <p className="mt-1 text-sm font-bold opacity-55">{testimonial.company}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
