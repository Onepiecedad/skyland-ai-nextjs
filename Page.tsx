import {
  HeroSection, PainPointSection, AISolutionsSection, HowItWorksSection,
  IndustrySpecific, WhySkylandSection, PricingSection, FAQSection,
  ContactSection, FinalCTASection, Footer
} from "./sections";

export default function Page() {
  return (
    <>
      <HeroSection />
      <PainPointSection />
      <AISolutionsSection />
      <HowItWorksSection />
      <IndustrySpecific />
      <WhySkylandSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <FinalCTASection />
      <Footer />
    </>
  );
}
