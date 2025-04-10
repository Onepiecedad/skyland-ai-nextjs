
'use client';

import React from 'react';
import { BaseSection } from '@/components/ui/BaseSection';
import { Card } from '@/components/ui/Card';
import { Logo } from '@/components/common/Logo';
import { cn } from '@/lib/utils';
import { layout } from '@/lib/theme/tokens/layout';
import { typography } from '@/lib/theme/tokens/typography';
import { colors } from '@/lib/theme/tokens/colors';
import { effects } from '@/lib/theme/tokens/effects';
import { radius } from '@/lib/theme/tokens/radius';

export function HeroSection() {
  const danaCard = {
    title: 'Meet Dana—Our AI Assistant',
    description: "She's here to show you how automation can save time, reduce workload, and help your business grow. What's the one task you'd automate today if you could?",
    expandedContent: (
      <div className={cn("flex flex-col gap-4")}>
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
      </div>
    ),
  };

  return (
    <BaseSection
      id="hero"
      className={cn(
        layout.section.base,
        layout.hero.container,
        'min-h-screen py-8 md:py-12',
        'flex items-center justify-center'
      )}
      ariaLabel="Hero Section"
    >
      <div className="absolute left-4 top-4 z-20 md:left-6 md:top-6">
        <Logo className="text-base sm:text-lg" />
      </div>

      <div className="w-full max-w-6xl px-4 md:px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-6">
        <div className="space-y-6">
          <h1 className={cn(typography.text['3xl'], 'md:text-5xl lg:text-6xl', colors.text.primary, 'font-normal leading-tight')}>
            What if growing your business didn't mean more work?
          </h1>
          <div className={cn(typography.text.lg, colors.text.secondary, 'leading-relaxed space-y-4')}>
            <p>Let AI Handle 80% of Your Work—Effortlessly</p>
            <p>Meet Your 24/7 Digital Employee—For Free</p>
          </div>
        </div>

        <Card
          title={danaCard.title}
          description={danaCard.description}
          expandedContent={danaCard.expandedContent}
          ariaLabel="Meet Dana AI Assistant"
          className={cn(
            'backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/20',
            effects.shadow.premium,
            effects.hover.premium,
            effects.transition.base,
            radius.lg,
            'w-full'
          )}
        />
      </div>
    </BaseSection>
  );
}
