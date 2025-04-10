'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { BaseSection } from '@/components/ui/BaseSection';

const ElevenLabsWidget = dynamic(() => import('@/components/ElevenLabsWidget'), { 
  ssr: false 
});
import { Card } from '@/components/ui/Card';
import { Logo } from '@/components/common/Logo';
import { cn } from '@/lib/utils';
import { layout } from '@/lib/theme/tokens/layout';
import { typography } from '@/lib/theme/tokens/typography';
import { spacing } from '@/lib/theme/tokens/spacing';
import { colors } from '@/lib/theme/tokens/colors';

export function HeroSection() {
  const danaCard = {
    title: 'Meet Dana—Your AI Strategy Assistant',
    description: "Chat with Dana to explore how AI can transform your business. She'll analyze your workflows and show you what's possible—no technical jargon, just practical solutions.",
    expandedContent: (
      <div className="flex flex-col items-center gap-6">
        <h4 className="text-xl text-center">Meet Dana—Your AI Strategy Assistant</h4>
        <ElevenLabsWidget />
        <p className="text-gray-300 text-center mt-4">
          Dana isn't just a chatbot—she's your AI strategy consultant. Ask her about automating tasks, 
          improving workflows, or scaling your business. She'll give you practical, actionable insights.
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
        'min-h-screen py-16 md:py-20 lg:py-24',
        'flex items-center justify-center'
      )}
      ariaLabel="Hero Section"
    >
      <div className="absolute left-6 top-6 z-20 md:left-8 md:top-8 lg:left-10 lg:top-10">
        <Logo className="text-lg sm:text-xl" />
      </div>

      <div className="w-full max-w-7xl px-6 md:px-8 lg:px-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className={cn(typography.heading.h1, colors.text.primary, 'font-normal leading-tight')}>
            What if growing your business didn't mean more work?
          </h1>
          <p className={cn(typography.text.lg, colors.text.secondary, 'leading-relaxed')}>
            Let AI Handle 80% of Your Work—Effortlessly. Meet Your 24/7 Digital Employee—For Free
          </p>
        </div>

        <Card
          title={danaCard.title}
          description={danaCard.description}
          expandedContent={danaCard.expandedContent}
          ariaLabel="Meet Dana AI Assistant"
          className="bg-white/5 border border-white/10 backdrop-blur-sm"
        />
      </div>
    </BaseSection>
  );
}