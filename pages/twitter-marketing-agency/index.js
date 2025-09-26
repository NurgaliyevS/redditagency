import SEOTwitter from "@/components/SEOTwitter";
import NavbarTwitter from "@/components/layout/NavbarTwitter";
import FooterTwitter from "@/components/layout/FooterTwitter";
import HeroSectionTwitter from "@/components/sections/HeroSectionTwitter";
import AutoPlayTwitter from "@/components/sections/AutoPlayTwitter";
import AlternativesSectionTwitter from "@/components/sections/AlternativesSectionTwitter";
import FeaturesSectionTwitter from "@/components/sections/FeaturesSectionTwitter";
import AboutSectionTwitter from "@/components/sections/AboutSectionTwitter";
import TiredSectionTwitter from "@/components/sections/TiredSectionTwitter";
import ServicesSectionTwitter from "@/components/sections/ServicesSectionTwitter";
import FAQSectionTwitter from "@/components/sections/FAQSectionTwitter";
import VideoSectionTwitter from "@/components/sections/VideoSectionTwitter";

export default function TwitterMarketingAgency() {
  return (
    <>
      <SEOTwitter />
      <NavbarTwitter />
      <main className="min-h-screen bg-[#F3F4EF]">
        <div className="max-w-7xl mx-auto">
          <HeroSectionTwitter />
        </div>
        <AutoPlayTwitter />
        <div className="max-w-7xl mx-auto">
          <AlternativesSectionTwitter />
          <FeaturesSectionTwitter />
          <AboutSectionTwitter />
          <TiredSectionTwitter />
          <ServicesSectionTwitter />
          <FAQSectionTwitter />
          <VideoSectionTwitter /> 
          <FooterTwitter />
        </div>
      </main>
    </>
  );
}
