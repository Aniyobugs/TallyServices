"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headlineRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      })
      .from(subheadlineRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6")
      .from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6")
      .from(".feature-pill", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      }, "-=0.4");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-black">
      {/* Abstract Background / Spotlight Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["Tally Certified Partner", "15+ Years Experience", "2000+ Clients"].map((text, i) => (
              <div key={i} className="feature-pill flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium text-secondary-foreground backdrop-blur-sm">
                <CheckCircle2 size={16} className="text-blue-500" />
                {text}
              </div>
            ))}
          </div>

          <h1 ref={headlineRef} className="text-5xl md:text-7xl font-bold tracking-tight">
            Elevate Your Business with
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Tally Prime Solutions
            </span>
          </h1>

          <p ref={subheadlineRef} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your premier destination for cutting-edge solutions in Accounting, Inventory, and Statutory automation. Discover the power of customized Tally services tailored for your growth.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-semibold transition-all hover:bg-primary/90 hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              Get a Free Consultation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-secondary text-secondary-foreground px-8 py-4 text-base font-semibold transition-colors hover:bg-secondary/80 border border-border"
            >
              Explore Our Services
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
