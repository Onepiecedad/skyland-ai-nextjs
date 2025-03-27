'use client';

import { Suspense, lazy } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { LoadingState } from '@/components/ui/LoadingState';
import { ScrollToTop } from '@/components/ScrollToTop';

// Lazy load sections that are not immediately visible
const LazyPainPointSection = lazy(() => import('@/components/sections/PainPointSection'));
const LazyAiSolutionsSection = lazy(() => import('@/components/sections/AiSolutionsSection'));
const LazyHowItWorksSection = lazy(() => import('@/components/sections/HowItWorksSection'));
const LazyIndustrySolutionsSection = lazy(() => import('@/components/sections/IndustrySolutionsSection'));
const LazyAboutSection = lazy(() => import('@/components/sections/AboutSection'));
const LazyPricingSection = lazy(() => import('@/components/sections/PricingSection'));
const LazyFAQSection = lazy(() => import('@/components/sections/FAQSection'));
const LazyContactSection = lazy(() => import('@/components/sections/ContactSection'));

export default function HomePage() {
  return (
    <>
      <HeroSection />
      
      <Suspense fallback={<LoadingState />}>
        <LazyAboutSection />
      </Suspense>
      
      <Suspense fallback={<LoadingState />}>
        <LazyPainPointSection />
      </Suspense>
      
      <Suspense fallback={<LoadingState />}>
        <LazyAiSolutionsSection />
      </Suspense>
      
      <Suspense fallback={<LoadingState />}>
        <LazyHowItWorksSection />
      </Suspense>
      
      <Suspense fallback={<LoadingState />}>
        <LazyIndustrySolutionsSection />
      </Suspense>
      
      <Suspense fallback={<LoadingState />}>
        <LazyPricingSection />
      </Suspense>
      
      <Suspense fallback={<LoadingState />}>
        <LazyFAQSection />
      </Suspense>
      
      <Suspense fallback={<LoadingState />}>
        <LazyContactSection />
      </Suspense>
      
      <ScrollToTop />
    </>
  );
} 