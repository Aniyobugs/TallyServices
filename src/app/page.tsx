import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";
import { AnalyticsSection } from "@/components/AnalyticsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white text-black">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <StatsSection />
      <ServicesSection />
      <FeaturesSection />
      <CaseStudiesSection />
      <AnalyticsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
