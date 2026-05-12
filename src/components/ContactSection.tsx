"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Let's Engineer Your Growth</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Experience the next generation of Tally services. Our team is ready to architect a solution that defies your expectations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <Send size={18} className="text-blue-400" />
                  </div>
                  <span className="font-medium">Free Consultation</span>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                    <Send size={18} className="text-purple-400" />
                  </div>
                  <span className="font-medium">Technical Audit</span>
                </div>
              </div>
            </div>
            
            <div className="p-12 bg-white/[0.02] border-l border-white/5">
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all"
                  />
                </div>
                <div>
                  <textarea 
                    rows={4} 
                    placeholder="Your Requirements" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all resize-none"
                  ></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-black font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  Get Started Now
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
