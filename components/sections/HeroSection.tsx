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
    description: "She's here to show you how automation can save time, reduce workload, and help your business grow. What's the one task you'd automate today if you could?"
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

      <div className="w-full max-w-7xl px-6 md:px-8 lg:px-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 lg:pr-8">
          <h1 className={cn(typography.heading.h1, colors.text.primary, 'font-normal leading-tight tracking-tight max-w-xl')}>
            What if growing your business didn't mean more work?
          </h1>
          <div className={cn(typography.text.xl, colors.text.secondary, 'leading-relaxed space-y-4')}>
            <p>Let AI Handle 80% of Your Work—Effortlessly</p>
            <p>Meet Your 24/7 Digital Employee—For Free</p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <elevenlabs-convai 
            agent-id="TDgRNcUoUC1GHVKK0bHH"
            mode="embedded"
            style={{
              height: '520px',
              width: '100%',
              maxWidth: '440px',
              background: 'transparent',
              borderRadius: '12px'
            }}
          />
        </div>
      </div>
    </BaseSection>
  );
}