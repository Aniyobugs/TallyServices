"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { DirectionAwareButton, Magnetic } from "./InteractiveButton";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Analytics", href: "/#analytics" },
  { label: "Stories", href: "/#testimonials" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        animate={{ opacity: 1, y: 0 }}
        className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-5 sm:px-8"
        initial={{ opacity: 0, y: -32 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{
            maxWidth: scrolled ? 760 : 1180,
            paddingLeft: scrolled ? 18 : 28,
            paddingRight: scrolled ? 12 : 20,
            paddingTop: scrolled ? 10 : 14,
            paddingBottom: scrolled ? 10 : 14,
          }}
          className="soft-plane flex w-full items-center justify-between rounded-full bg-white/70 backdrop-blur-md"
          transition={{ type: "spring", stiffness: 170, damping: 24 }}
        >
          <Magnetic>
            <Link
              href="/"
              className="flex items-center gap-3 rounded-full px-2 py-1 text-sm font-black uppercase leading-none text-black"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff4d00] text-white">
                TP
              </span>
              <span className="hidden leading-tight sm:block">
                Tally Prime
                <br />
                Solutions
              </span>
            </Link>
          </Magnetic>

          <div className="hidden items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-bold uppercase text-white md:flex">
            <span className="h-2 w-2 rounded-full bg-[#ff4d00]" />
            Studio slots open
          </div>

          <DirectionAwareButton
            aria-label="Open menu"
            className="h-11 px-4 text-sm font-bold uppercase text-black transition-colors duration-500 ease-out hover:text-white"
            fillClassName="bg-black"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={18} strokeWidth={2.4} />
            <span>Menu</span>
          </DirectionAwareButton>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              aria-label="Close menu overlay"
              className="fixed inset-0 z-[90] bg-black/20 backdrop-blur-sm"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setMobileOpen(false)}
              transition={{ duration: 0.35 }}
            />

            <motion.aside
              animate={{ x: 0, rotateY: 0 }}
              className="fixed bottom-3 right-3 top-3 z-[100] flex w-[calc(100%-24px)] max-w-[560px] flex-col justify-between rounded-[44px] bg-white p-6 shadow-[0_30px_120px_rgba(0,0,0,0.22)] sm:p-10"
              exit={{ x: "110%", rotateY: -12 }}
              initial={{ x: "110%", rotateY: -12 }}
              style={{ transformOrigin: "right center" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex justify-end">
                <DirectionAwareButton
                  aria-label="Close menu"
                  className="h-12 px-4 text-sm font-bold uppercase text-black transition-colors duration-500 ease-out hover:text-white"
                  fillClassName="bg-black"
                  onClick={() => setMobileOpen(false)}
                >
                  <X size={18} strokeWidth={2.5} />
                  <span>Close</span>
                </DirectionAwareButton>
              </div>

              <div className="flex flex-col gap-3">
                {menuItems.map((item, index) => (
                  <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 28 }}
                    key={item.label}
                    transition={{
                      delay: 0.08 * index,
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Magnetic>
                      <Link
                        className="group inline-flex items-center gap-4 text-5xl font-black uppercase leading-none text-black transition-colors duration-500 ease-out hover:text-[#ff4d00] sm:text-7xl"
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                        <ArrowUpRight
                          className="translate-y-1 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                          size={34}
                          strokeWidth={2}
                        />
                      </Link>
                    </Magnetic>
                  </motion.div>
                ))}
              </div>

              <div className="grid gap-4 rounded-[32px] bg-[#f5f5f5] p-5 text-sm font-semibold text-black sm:grid-cols-2">
                <a className="hover:text-[#ff4d00]" href="mailto:hello@tallyprime.com">
                  hello@tallyprime.com
                </a>
                <a className="hover:text-[#ff4d00] sm:text-right" href="tel:+919876543210">
                  +91 98765 43210
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
