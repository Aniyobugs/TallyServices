import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <div className="flex-1 pt-32 pb-20 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          About TallyPrime Solutions
        </h1>
        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
          <p>
            Welcome to TallyPrime Solutions, your dedicated partner in financial technology and business management. We are an authorized Tally Partner with over 15 years of deep expertise in deploying, customizing, and scaling Tally solutions for businesses of all sizes.
          </p>
          <p>
            Our mission is simple: to provide a seamless, secure, and lightning-fast anti-gravity accounting experience. We believe that software should empower your growth, not weigh you down with technical debt and performance bottlenecks.
          </p>
          <p>
            Whether you need custom module integration, cloud hosting with 99.9% uptime, or hands-on corporate training, our team of seasoned developers and chartered accountants is here to engineer the perfect solution for your workflow.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
