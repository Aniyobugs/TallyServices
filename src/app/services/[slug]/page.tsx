import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";
import { Laptop, Settings, Server, HeadphonesIcon, GraduationCap, Link2 } from "lucide-react";
import React from "react";

const serviceData: Record<string, any> = {
  "tally-prime": {
    title: "Tally Prime Silver & Gold",
    description: "Authorized partner for Tally Prime Silver (Single User) and Gold (Multi-User) licenses. We handle installation, data migration, and initial setup to get your business running instantly.",
    icon: <Laptop className="w-12 h-12 text-blue-500" />,
    features: ["Authorized License Sales", "Seamless Installation", "Data Migration", "Multi-user Setup"]
  },
  "tally-customization": {
    title: "Tally Customization",
    description: "Tailor Tally Prime to fit your unique business workflows. From custom invoice formats to specialized accounting modules, we build what Tally doesn't do out-of-the-box.",
    icon: <Settings className="w-12 h-12 text-indigo-500" />,
    features: ["Custom Invoices & Vouchers", "Security Level Controls", "Module Development", "Custom Reports"]
  },
  "tally-on-cloud": {
    title: "Tally on Cloud",
    description: "Access your Tally data from anywhere in the world. Our secure cloud hosting ensures 99.9% uptime and high-performance access on any device.",
    icon: <Server className="w-12 h-12 text-purple-500" />,
    features: ["Remote Access", "Daily Backups", "End-to-end Encryption", "Mobile Device Support"]
  },
  "tss-renewal": {
    title: "TSS Renewal & Support",
    description: "Keep your Tally Prime updated with the latest statutory changes and features. Our renewal services come with dedicated technical support.",
    icon: <HeadphonesIcon className="w-12 h-12 text-emerald-500" />,
    features: ["Latest Software Updates", "Statutory Compliance", "Priority Support", "Data Health Checks"]
  },
  "training": {
    title: "Corporate Training",
    description: "Empower your team with expert Tally knowledge. We provide hands-on training tailored to your industry-specific accounting needs.",
    icon: <GraduationCap className="w-12 h-12 text-amber-500" />,
    features: ["On-site Training", "Industry-specific Workflows", "GST Compliance Training", "Advanced Reporting"]
  }
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <div className="flex-1 pt-32 pb-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit border border-white/10">
            {service.icon}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            {service.title}
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            {service.description}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature: string, i: number) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-white/[0.02] border border-white/10 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <span className="text-lg font-medium">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl border border-white/10 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to implement this solution?</h2>
            <p className="text-gray-400 mb-8">Schedule a consultation with our technical experts today.</p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
              Contact Us Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
