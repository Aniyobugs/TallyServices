"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { DirectionAwareButton } from "./InteractiveButton";

const faqs = [
  {
    question: "What makes your Tally Cloud hosting different?",
    answer:
      "The hosting is tuned around Tally Prime usage patterns: fast storage, disciplined backups, remote access control, and support that understands accounting workflows.",
  },
  {
    question: "Do you provide Tally Prime customization?",
    answer:
      "Yes. We build invoice formats, reports, approval flows, modules, integrations, and operational refinements that match how your team actually works.",
  },
  {
    question: "How secure is my data on your cloud servers?",
    answer:
      "Security is designed as a full operating loop: role controls, isolated access, encryption, backup cadence, recovery paths, and clear human accountability.",
  },
  {
    question: "Can you help migrate our existing data?",
    answer:
      "Yes. We plan the migration, test data integrity, move the working company data, and keep fallback paths ready until the new setup is stable.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-white px-5 py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:gap-16">
        <motion.div
          className="lg:sticky lg:top-32 lg:h-fit lg:w-[36%]"
          initial={{ opacity: 0, y: 36 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm font-black uppercase text-[#ff4d00]">Inquiries</p>
          <h2 className="mt-5 text-5xl font-black uppercase leading-[0.88] text-black sm:text-7xl">
            Sharp answers, clean scope.
          </h2>
        </motion.div>

        <div className="flex flex-1 flex-col gap-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                className="soft-plane overflow-hidden rounded-[40px] bg-white"
                initial={{ opacity: 0, scale: 0.86, y: 34 }}
                key={faq.question}
                transition={{
                  type: "spring",
                  stiffness: 185,
                  damping: 21,
                  delay: index * 0.06,
                }}
                viewport={{ once: true, margin: "-80px" }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
              >
                <DirectionAwareButton
                  aria-expanded={isOpen}
                  className="w-full bg-white px-6 py-7 text-left text-black transition-colors duration-500 ease-out hover:text-white md:px-8"
                  fillClassName="bg-black"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="flex w-full items-center justify-between gap-8">
                    <span className="text-xl font-black uppercase leading-tight md:text-2xl">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ff4d00] text-white"
                      transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    >
                      <Plus size={22} strokeWidth={2.2} />
                    </motion.span>
                  </span>
                </DirectionAwareButton>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      animate={{ height: "auto", opacity: 1 }}
                      className="overflow-hidden"
                      exit={{ height: 0, opacity: 0 }}
                      initial={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-8 text-lg font-semibold leading-relaxed text-black/60 md:px-8 md:pb-10">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
