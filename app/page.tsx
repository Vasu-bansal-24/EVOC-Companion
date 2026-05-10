import { HeroSection } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesSection } from "@/components/sections/services";
import { TransformationSection } from "@/components/sections/transformation";
import { ProcessSection } from "@/components/sections/process";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <TransformationSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
