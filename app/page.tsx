'use client';

import { AuroraBackground } from "@/components/backgrounds/AuroraBackground";
import PageWrapper from "@/components/layout/PageWrapper";
import HeroSection from "@/components/sections/HeroSection";
import PainPointSection from "@/components/sections/PainPointSection";
import AISolutionsSection from "@/components/sections/AISolutionsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";

export default function Home() {
  return (
    <PageWrapper>
      <AuroraBackground />
      <HeroSection />
      <PainPointSection />
      <AISolutionsSection />
      <HowItWorksSection />
    </PageWrapper>
  );
} 