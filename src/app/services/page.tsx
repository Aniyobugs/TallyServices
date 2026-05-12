import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturesSection } from "@/components/FeaturesSection";

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <div className="pt-32">
        <ServicesSection />
        <FeaturesSection />
      </div>
      <Footer />
    </main>
  );
}
