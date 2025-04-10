
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

export function HeroSection() {
  const danaCard = {
    title: 'Meet Dana—Our AI Assistant',
    description: "She's here to show you how automation can save time, reduce workload, and help your business grow. What's the one task you'd automate today if you could?",
    expandedContent: (
      <div className="flex flex-col items-center gap-6">
        <h4 className={cn(typography.heading.h4, colors.text.primary, 'text-center')}>
          Meet Dana—Our Always-On AI Strategy Assistant
        </h4>

        <div className="w-full max-w-sm">
          <elevenlabs-convai
            agent-id="4mN4rizdi79gwLhFxlOu"
            style={{
              display: 'block',
              width: '100%',
              background: 'transparent',
              borderRadius: '12px',
            }}
          />
        </div>

        <p className={cn(typography.text.base, colors.text.secondary)}>
          Dana isn&apos;t just a chatbot—she&apos;s an AI assistant trained to answer your
          questions, handle leads, and help you automate key parts of your business.
        </p>

        <div className="mt-4">
          <h5 className={cn(typography.heading.h5)}>🧠 Understand &amp; Explore</h5>
          <ul className="list-disc ml-6 space-y-1">
            <li>Answer questions about Skyland AI</li>
            <li>Explain services, trial model, and pricing</li>
            <li>Suggest automation tailored to your business</li>
          </ul>
        </div>

        <div className="mt-6">
          <h5 className={cn(typography.heading.h5)}>⚙️ Take Action</h5>
          <ul className="list-disc ml-6 space-y-1">
            <li>Collect and save leads to CRM</li>
            <li>Send custom emails and follow up</li>
            <li>Book meetings or appointments</li>
          </ul>
        </div>

        <p className="mt-6 italic text-gray-300">
          &quot;What would you automate first in a business like mine?&quot;
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
          <h1 className={cn(typography.heading.h1, colors.text.primary)}>
            What if growing your business didn&apos;t mean more work?
          </h1>
          <p className={cn(typography.text.lg, colors.text.secondary)}>
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
