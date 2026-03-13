import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BrandsSection from "@/components/sections/BrandsSection";
import AboutSection from "@/components/sections/AboutSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import ScrollAnimator from "@/components/sections/ScrollAnimator";

export default function HomePage() {
  return (
    <>
      <ScrollAnimator />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <BrandsSection />
      <AboutSection />
      <ProcessSection />
      <TeamSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
