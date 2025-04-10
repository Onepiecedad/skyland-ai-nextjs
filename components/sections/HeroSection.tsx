'use client';

import React from 'react';
import { BaseSection } from '@/components/ui/BaseSection';
import { Card } from '@/components/ui/Card';
import { Logo } from '@/components/common/Logo';
import { cn } from '@/lib/utils';
import { layout } from '@/lib/theme/tokens/layout';
import { typography } from '@/lib/theme/tokens/typography';
import { spacing } from '@/lib/theme/tokens/spacing';
import { colors } from '@/lib/theme/tokens/colors';
import { effects } from '@/lib/theme/tokens/effects';
import { radius } from '@/lib/theme/tokens/radius';

export function HeroSection() {
  const danaCard = {
    title: 'Meet Dana—Your AI Assistant',
    description: "She's here to show you how automation can save time, reduce workload, and help your business grow. What's the one task you'd automate today if you could?",
    expandedContent: (
      <div className={cn("flex flex-col gap-6")}>
        <h4 className={cn(typography.text.lg, colors.text.primary, 'font-medium')}>
          Meet Dana—Your AI Strategy Assistant
        </h4>
        <p className={cn(typography.text.base, colors.text.secondary, 'leading-relaxed')}>
          Dana helps you explore how AI can transform your business operations. She'll guide you through automation possibilities and show you what's possible.
        </p>

        <div className="space-y-2">
          <h5 className={cn(typography.text.base, colors.text.primary, 'font-medium')}>🧠 Understand & Explore</h5>
          <ul className={cn("list-disc space-y-2 pl-4", typography.text.base, colors.text.secondary)}>
            <li>Answer your questions about Skyland AI</li>
            <li>Explain how our services, trial model, and pricing work</li>
            <li>Suggest automation ideas tailored to your business</li>
          </ul>
        </div>

        <p className={cn(typography.text.sm, colors.text.secondary, 'italic')}>
          "What would you like to automate today?"
        </p>
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

      <div className="w-full max-w-7xl px-4 md:px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-8">
        <div className="space-y-4">
          <h1 className={cn(typography.text['2xl'], 'md:text-4xl lg:text-6xl', colors.text.primary, 'font-normal leading-tight max-w-3xl')}>
            What if growing your business didn't mean more work?
          </h1>
          <div className={cn(typography.text.lg, colors.text.secondary, 'leading-relaxed space-y-3 max-w-2xl')}>
            <p>Let AI Handle 80% of Your Work—Effortlessly</p>
            <p>Meet Your 24/7 Digital Employee—For Free</p>
          </div>

          <div className="w-full">
            <elevenlabs-convai
              agent-id="4mN4rizdi79gwLhFxlOu"
              mode="embedded"
              style={{
                display: 'block',
                width: '100%',
                background: 'transparent',
                borderRadius: '12px',
                position: 'relative',
              }}
            />
          </div>
        </div>

        <Card
          title={danaCard.title}
          description={danaCard.description}
          expandedContent={danaCard.expandedContent}
          ariaLabel="Meet Dana AI Assistant"
          variant="three"
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