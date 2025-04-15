'use client';

import React, { useState, useEffect } from 'react';
import { BaseSection } from '@/components/ui/BaseSection';
import { Card } from '@/components/ui/Card';
import { Logo } from '@/components/common/Logo';
import { cn } from '@/lib/utils';
import { layout } from '@/lib/theme/tokens/layout';
import { typography } from '@/lib/theme/tokens/typography';
import { colors } from '@/lib/theme/tokens/colors';
import { effects } from '@/lib/theme/tokens/effects';

export function HeroSection() {
  const [isWidgetReady, setIsWidgetReady] = useState(false);

  useEffect(() => {
    const checkWidget = () => {
      if (typeof window !== 'undefined' && window.customElements?.get('elevenlabs-convai')) {
        setIsWidgetReady(true);
      }
    };

    // Check immediately
    checkWidget();

    // Set up observer for script load
    const observer = new MutationObserver(checkWidget);
    observer.observe(document.head, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  const danaCard = {
    title: 'Meet Dana—Our AI Assistant',
    description: "She's here to show you how automation can save time, reduce workload, and help your business grow. What's the one task you'd automate today if you could?",
    expandedContent: (
      <div className={cn("flex flex-col gap-4 max-h-[90vh] overflow-auto")}>
        <h4 className={cn(typography.text.base, colors.text.primary, 'font-medium')}>
          Your 24/7 Digital Employee
        </h4>
        <p className={cn(typography.text.sm, colors.text.secondary)}>
          Dana helps you explore how AI can transform your business operations. She'll guide you through:
        </p>
        <ul className={cn("list-disc pl-4", typography.text.sm, colors.text.secondary, "space-y-2")}>
          <li>Understanding what tasks can be automated</li>
          <li>Exploring AI solutions for your business</li>
          <li>Getting started with automation</li>
          <li>Measuring the impact on your workflow</li>
        </ul>
        <div className="w-full max-w-sm mx-auto" hidden={!isWidgetReady}>
          <elevenlabs-convai
            agent-id="4mN4rizdi79gwLhFxlOu"
            mode="embedded"
            style={{
              display: 'block',
              width: '100%',
              background: 'transparent',
              borderRadius: '12px',
            }}
          />
        </div>
      </div>
    ),
  };

  return (
    <BaseSection
      id="hero"
      className={cn(
        layout.section.base,
        'min-h-[90vh] py-16 md:py-24 lg:py-32',
        'flex items-center justify-center'
      )}
      ariaLabel="Hero Section"
    >
      <div className="absolute left-6 top-6 z-20 md:left-8 md:top-8 lg:left-10 lg:top-10">
        <Logo className="text-lg sm:text-xl" />
      </div>

      <div className="w-full max-w-7xl px-6 md:px-8 lg:px-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8">
          <h1 className={cn(typography.heading.h1, colors.text.primary, 'font-normal leading-tight tracking-tight')}>
            What if growing your business didn't mean more work?
          </h1>
          <div className={cn(typography.text.xl, colors.text.secondary, 'leading-relaxed space-y-6')}>
            <p>Let AI Handle 80% of Your Work—Effortlessly</p>
            <p>Meet Your 24/7 Digital Employee—For Free</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <elevenlabs-convai 
            agent-id="TDgRNcUoUC1GHVKK0bHH"
            mode="embedded"
            style={{
              display: 'block',
              height: '520px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          />
        </div>
      </div>
    </BaseSection>
  );
}