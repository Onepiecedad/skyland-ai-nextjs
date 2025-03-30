import { HeroSection } from './HeroSection';
import { AiSolutionsSection } from './AiSolutionsSection';
import { IndustrySolutionsSection } from './IndustrySolutionsSection';
import PainPointSection from './PainPointSection';
import { HowItWorksSection } from './HowItWorksSection';
import { AboutSection } from './AboutSection';
import { PricingSection } from './PricingSection';
import { FAQSection } from './FAQSection';
import { ContactSection } from './ContactSection';
import { TestSection } from './TestSection';

export function PageSections() {
  return (
    <>
      <HeroSection />
      <PainPointSection />
      <AiSolutionsSection />
      <HowItWorksSection />
      <IndustrySolutionsSection />
      <AboutSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <TestSection />
    </>
  );
} 