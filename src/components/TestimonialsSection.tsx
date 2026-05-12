"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { name: "Rahul Verma", company: "Verma Traders", feedback: "Sense 8 Solutions transformed our accounting workflow with Tally Prime. Excellent support!" },
  { name: "Anjali Menon", company: "Menon Logistics", feedback: "The Tally on Cloud service is flawless. We can access our data from all branches instantly." },
  { name: "John Doe", company: "JD Enterprises", feedback: "Highly professional team. They customized our invoices exactly as we needed." },
  { name: "Priya Sharma", company: "Sharma Boutique", feedback: "Best Tally partner in Kerala! Prompt TSS renewal and always available for help." },
  { name: "Mohammed Ali", company: "Ali Exports", feedback: "Migrating to Tally Prime was seamless thanks to their expert guidance." },
];

export function TestimonialsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-black overflow-hidden relative border-t border-white/5">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="container mx-auto px-4 mb-12 relative z-10">
        <div className="testimonial-header text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Trusted by 2000+ Businesses</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here is what our clients have to say about our Tally services.
          </p>
        </div>
      </div>

      {/* Infinite Marquee using Tailwind CSS Animation */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-6 py-4 px-3">
          {[...testimonials, ...testimonials].map((item, index) => (
            <Card key={index} className="w-[350px] inline-block shrink-0 bg-white/[0.02] border-white/10 hover:bg-white/[0.05] transition-colors backdrop-blur-md">
              <CardContent className="p-6 whitespace-normal">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{item.feedback}"</p>
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-gray-400">{item.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Duplicate for seamless looping if needed, or rely on double array */}
      </div>
    </section>
  );
}
