import SEO from "@/components/SEO";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AlternativesSection from "@/components/sections/AlternativesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import AboutSection from "@/components/sections/AboutSection";
import TiredSection from "@/components/sections/TiredSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import VideoSection from "@/components/sections/VideoSection";
import AutoPlay from "@/components/sections/AutoPlay";

export default function Home() {
  return (
    <>
      <SEO />
      <Navbar />
      <main className="min-h-screen bg-[#F3F4EF]">
        <div className="max-w-7xl mx-auto">
          <HeroSection />
        </div>
        <AutoPlay />
        <div className="max-w-7xl mx-auto">
          <AlternativesSection />
          <FeaturesSection />
          <AboutSection />
          <TiredSection />
          <ServicesSection />
          <PricingSection />
          <FAQSection />
          <VideoSection />
          <Footer />
        </div>
      </main>
    </>
  );
}
