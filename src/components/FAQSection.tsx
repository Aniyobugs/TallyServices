"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What makes your Tally Cloud hosting different?",
    answer: "We use NVMe SSD-powered servers with anti-gravity optimization, meaning zero latency and instant data access regardless of where your team is located.",
  },
  {
    question: "Do you provide Tally Prime customization?",
    answer: "Yes! We specialize in tailoring Tally to your exact workflow. From custom invoice formats to complex module integrations, we build exactly what you need.",
  },
  {
    question: "How secure is my data on your cloud servers?",
    answer: "Extremely secure. We implement AES-256 encryption, multi-factor authentication, isolated environments, and perform daily automated backups with 30-day retention.",
  },
  {
    question: "Can you help migrate our existing data?",
    answer: "Absolutely. Our expert team ensures a seamless, zero-data-loss migration from your legacy systems to Tally Prime or our cloud infrastructure.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">Everything you need to know about our services.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.details
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm overflow-hidden open:bg-white/[0.05] transition-colors"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-medium text-lg text-white">
                {faq.question}
                <span className="transition group-open:rotate-45">
                  <Plus className="text-gray-400" />
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                {faq.answer}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
