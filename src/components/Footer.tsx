import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              TallyPrime Solutions
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your premier destination for cutting-edge solutions in Accounting, Inventory, and Statutory automation exclusively tailored for Tally Prime.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services/tally-prime" className="hover:text-white transition-colors">Tally Prime Silver & Gold</Link></li>
              <li><Link href="/services/tally-customization" className="hover:text-white transition-colors">Tally Customization</Link></li>
              <li><Link href="/services/tally-on-cloud" className="hover:text-white transition-colors">Tally on Cloud</Link></li>
              <li><Link href="/services/tss-renewal" className="hover:text-white transition-colors">TSS Renewal</Link></li>
              <li><Link href="/services/training" className="hover:text-white transition-colors">Corporate Training</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <MapPin className="shrink-0 text-blue-400" size={18} />
                <span>123 Tech Park, Business District, Metro City, 100001</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="shrink-0 text-blue-400" size={18} />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="shrink-0 text-blue-400" size={18} />
                <a href="mailto:info@tallyprimesolutions.com" className="hover:text-white transition-colors">info@tallyprimesolutions.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} TallyPrime Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
