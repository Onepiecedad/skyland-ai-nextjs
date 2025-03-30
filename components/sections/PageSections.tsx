import { HeroSection } from './HeroSection';
import { AISolutionsSection } from './AISolutionsSection';
import { IndustrySolutionsSection } from './IndustrySolutionsSection';
import { PainPointSection } from './PainPointSection';
import { HowItWorksSection } from './HowItWorksSection';
import { AboutSection } from './AboutSection';
import { PricingSection } from './PricingSection';
import { FAQSection } from './FAQSection';
import { ContactSection } from './ContactSection';

export function PageSections() {
  return (
    <>
      <HeroSection />
      <PainPointSection />
      <AISolutionsSection />
      <HowItWorksSection />
      <IndustrySolutionsSection />
      <AboutSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </>
  );
} 