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
      <div className="flex flex-col items-center gap-6 w-full max-w-xl mx-auto px-4 py-6">
        <h4 className={cn(typography.heading.h4, colors.text.primary, 'text-center')}>
          Meet Dana—Your AI Strategy Assistant
        </h4>
        <p className={cn(typography.text.base, colors.text.secondary, 'text-center max-w-prose')}>
          Dana helps you explore how AI can transform your business operations. She'll guide you through automation possibilities and show you what's possible.
        </p>

        <h5 className="text-lg font-semibold text-white mt-4">🧠 Understand & Explore</h5>
        <ul className="list-disc text-sm text-gray-300 space-y-1 pl-5 text-left">
          <li>Answer your questions about Skyland AI</li>
          <li>Explain how our services, trial model, and pricing work</li>
          <li>Suggest automation ideas tailored to your business</li>
        </ul>

        <p className="italic text-gray-400 text-center mt-6">
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
        'h-[100vh] py-8 md:py-10 lg:py-12',
        'flex items-center justify-center'
      )}
      ariaLabel="Hero Section"
    >
      <div className="absolute left-6 top-4 z-20 md:left-8 md:top-6 lg:left-10 lg:top-8">
        <Logo className="text-lg sm:text-xl" />
      </div>

      <div className={cn(
        layout.hero.content,
        'grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center w-full max-w-screen-xl px-6'
      )}>
        <div className="space-y-6">
          <h1 className={cn(typography.heading.h1, colors.text.primary, 'font-normal leading-tight')}>
            What if growing your business didn't mean more work?
          </h1>
          <div className={cn(typography.text.lg, colors.text.secondary, 'leading-relaxed space-y-2')}>
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
          className={cn(
            effects.hover.scale,
            effects.transition.base,
            'bg-white/5 w-full',
            effects.shadow.card,
            radius.lg
          )}
        />
      </div>
    </BaseSection>
  );
}