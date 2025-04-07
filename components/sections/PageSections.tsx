'use client';

import { useId } from 'react';
import { HeroSection } from './HeroSection';
import { AiSolutionsSection } from './AiSolutionsSection';
import { IndustrySolutionsSection } from './IndustrySolutionsSection';
import { PainPointSection } from './PainPointSection';
import { HowItWorksSection } from './HowItWorksSection';
import { AboutSection } from './AboutSection';
import { PricingSection } from './PricingSection';
import { FAQSection } from './FAQSection';
import { ContactSection } from './ContactSection';
import { FooterSection } from './FooterSection';
import { cn } from '@/lib/utils';
import { typography } from '@/lib/theme/typography';

export function PageSections() {
  const mainId = useId();

  return (
    <>
      <main
        id={mainId}
        role="main"
        aria-label="Page Content"
        tabIndex={-1}
      >
        <HeroSection />
        <PainPointSection />
        <AiSolutionsSection />
        <HowItWorksSection />
        <IndustrySolutionsSection />
        <AboutSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
} 
