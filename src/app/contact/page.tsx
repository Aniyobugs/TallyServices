import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <div className="flex-1 pt-32 pb-20 container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Get in Touch
            </h1>
            <p className="text-gray-400 text-lg mb-12">
              Ready to elevate your accounting workflow? Our experts are standing by to provide a free consultation and architect the ideal Tally solution for your enterprise.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <MapPin className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Our Headquarters</h3>
                  <p className="text-gray-400">123 Tech Park, Business District<br />Metro City, 100001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <Phone className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-400">+91 98765 43210<br />Mon-Fri, 9am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <Mail className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-400">info@tallyprimesolutions.com<br />support@tallyprimesolutions.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form placeholder */}
          <div className="bg-white/[0.02] border border-white/10 p-8 rounded-2xl backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium py-3 rounded-lg transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
