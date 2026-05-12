import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/40 pt-16 pb-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              TallyPrime Solutions
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your premier destination for cutting-edge solutions in Accounting, Inventory, and Statutory automation exclusively tailored for Tally Prime.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-foreground transition-colors">Services</Link></li>
              <li><Link href="#products" className="hover:text-foreground transition-colors">Products</Link></li>
              <li><Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">Tally Prime Silver & Gold</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Tally Customization</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Tally on Cloud</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">TSS Renewal</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Corporate Training</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="shrink-0 text-primary" size={18} />
                <span>123 Tech Park, Business District, Metro City, 100001</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="shrink-0 text-primary" size={18} />
                <a href="tel:+919876543210" className="hover:text-foreground transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="shrink-0 text-primary" size={18} />
                <a href="mailto:info@tallyprimesolutions.com" className="hover:text-foreground transition-colors">info@tallyprimesolutions.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} TallyPrime Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
