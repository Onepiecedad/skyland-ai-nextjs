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
  const skipLinkId = useId();

  return (
    <>
      <a
        href={`#${mainId}`}
        className={cn(
          typography.text.base,
          "sr-only focus:not-sr-only",
          "fixed top-4 left-4 z-50",
          "bg-black/90 text-white",
          "px-4 py-2 rounded-md",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
        )}
        id={skipLinkId}
      >
        Skip to main content
      </a>

      <nav
        aria-label="Primary"
        className="sr-only"
      >
        <ul>
          <li><a href="#hero">Hero Section</a></li>
          <li><a href="#pain-points">Pain Points</a></li>
          <li><a href="#ai-solutions">AI Solutions</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#industry-solutions">Industry Solutions</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

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
