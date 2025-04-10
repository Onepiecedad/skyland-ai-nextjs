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
      <div className="flex flex-col items-center gap-4 w-full max-w-xl mx-auto px-4 py-4"> {/* Reduced gap and padding */}
        <h4 className={cn(typography.heading.h4, colors.text.primary, 'text-center text-lg')}> {/* Reduced font size */}
          Meet Dana—Your AI Strategy Assistant
        </h4>
        <p className={cn(typography.text.base, colors.text.secondary, 'text-center max-w-prose text-sm')}> {/* Reduced font size */}
          Dana helps you explore how AI can transform your business operations. She'll guide you through automation possibilities and show you what's possible.
        </p>

        <h5 className="text-base font-semibold text-white mt-2"> {/* Reduced font size */} 🧠 Understand & Explore</h5>
        <ul className="list-disc text-xs text-gray-300 space-y-1 pl-4 text-left"> {/* Reduced font size and padding */}
          <li>Answer your questions about Skyland AI</li>
          <li>Explain how our services, trial model, and pricing work</li>
          <li>Suggest automation ideas tailored to your business</li>
        </ul>

        <p className="italic text-gray-400 text-center mt-4 text-xs"> {/* Reduced font size and padding */}
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
        'min-h-screen py-8 md:py-12 lg:py-16',  {/* Reduced padding */}
        'flex items-center justify-center'
      )}
      ariaLabel="Hero Section"
    >
      <div className="absolute left-4 top-4 z-20 md:left-6 md:top-6 lg:left-8 lg:top-8"> {/* Reduced padding */}
        <Logo className="text-base sm:text-lg" /> {/* Reduced font size */}
      </div>

      <div className="w-full max-w-7xl px-4 md:px-6 lg:px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center"> {/* Reduced padding and gap */}
        <div className="space-y-4"> {/* Reduced gap */}
          <h1 className={cn(typography.heading.h1, colors.text.primary, 'font-normal leading-tight text-3xl md:text-4xl lg:text-5xl')}> {/* Adjusted font size for responsiveness */}
            What if growing your business didn't mean more work?
          </h1>
          <div className={cn(typography.text.lg, colors.text.secondary, 'leading-relaxed space-y-2 text-base md:text-lg')}> {/* Adjusted font size for responsiveness */}
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