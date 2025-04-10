'use client';

import React, { useEffect, useState } from 'react';
import { BaseSection } from '@/components/ui/BaseSection';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import { colors } from '@/lib/theme/tokens/colors';
import { effects } from '@/lib/theme/tokens/effects';
import { layout } from '@/lib/theme/tokens/layout';
import { typography } from '@/lib/theme/tokens/typography';
import { radius } from '@/lib/theme/tokens/radius';
import { spacing } from '@/lib/theme/tokens/spacing';
import { Logo } from '@/components/common/Logo';
//import { ContentStack } from '@/components/ui/ContentStack';


export function HeroSection() {
  const [isWidgetReady, setIsWidgetReady] = useState(false);

  useEffect(() => {
    let scriptElement: HTMLScriptElement | null = null;

    const loadWidget = async () => {
      try {
        if (!window.customElements.get('elevenlabs-convai')) {
          scriptElement = document.createElement('script');
          scriptElement.src = 'https://elevenlabs.io/convai-widget/index.js';
          scriptElement.async = true;
          scriptElement.crossOrigin = 'anonymous';
          scriptElement.type = 'text/javascript';

          const loadPromise = new Promise((resolve, reject) => {
            scriptElement!.onload = resolve;
            scriptElement!.onerror = reject;
          });

          document.head.appendChild(scriptElement);
          await loadPromise;

          // Vänta på att web component registreras
          await customElements.whenDefined('elevenlabs-convai');
          console.log('ElevenLabs widget fully initialized');
          setIsWidgetReady(true);
        } else {
          console.log('Widget already registered');
          setIsWidgetReady(true);
        }
      } catch (error) {
        console.error('Failed to load ElevenLabs widget:', error);
        setIsWidgetReady(false);
      }
    };

    loadWidget();

    return () => {
      if (scriptElement && document.head.contains(scriptElement)) {
        document.head.removeChild(scriptElement);
      }
    };
  }, []);

  const danaCard = {
    title: 'Meet Dana—Our AI Assistant',
    description: "She's here to show you how automation can save time, reduce workload, and help your business grow.\nWhat's the one task you'd automate today if you could?",
    hasWidget: true,
    expandedContent: (
      <div className="flex flex-col space-y-6 items-center text-center">
        <h4 className={cn(typography.heading.h4, colors.text.primary, 'font-normal text-center mb-6')}>
          Meet Dana—Our Always-On AI Strategy Assistant
        </h4>

        <div className="w-full">
          <h4 className={cn(typography.heading.h4, colors.text.primary, 'font-normal text-center mb-6')}>
            Meet Dana—Our Always-On AI Strategy Assistant
          </h4>

          {isWidgetReady && (
            <div className="w-full flex justify-center mb-6">
              <div className="w-full max-w-sm mx-auto">
                <elevenlabs-convai
                  agent-id="4mN4rizdi79gwLhFxlOu"
                  style={{
                    display: 'block',
                    width: '100%',
                    background: 'transparent',
                    margin: '0 auto',
                    borderRadius: '12px',
                  }}
                />
              </div>
            </div>
          )}

          <p className={cn(typography.text.base, colors.text.secondary)}>
            Dana isn't just a chatbot—she's an AI assistant trained to answer your questions, handle leads, and help you automate key parts of your business.
          </p>
        </div>

        <p className={cn(typography.text.base, colors.text.secondary)}>
          Dana isn't just a chatbot—she's an AI assistant trained to answer your questions, handle leads, and help you automate key parts of your business.
        </p>

        <p className={cn(typography.text.base, colors.text.secondary)}>
          Here's what Dana can help you with:
        </p>

        <div className={cn(spacing.stack.lg, 'mt-4')}>
          <h5 className={cn(typography.heading.h5, colors.text.primary, 'font-normal')}>
            🧠 <span className="font-medium">Understand & Explore</span>
          </h5>
          <ul className={cn(spacing.stack.md, 'ml-6 list-disc')}>
            <li className={cn(typography.text.base, colors.text.secondary)}>
              Answer your questions about Skyland AI
            </li>
            <li className={cn(typography.text.base, colors.text.secondary)}>
              Explain how our services, trial model, and pricing work
            </li>
            <li className={cn(typography.text.base, colors.text.secondary)}>
              Suggest automation ideas tailored to your business and goals
            </li>
          </ul>
        </div>

        <div className={cn(spacing.stack.lg, 'mt-6')}>
          <h5 className={cn(typography.heading.h5, colors.text.primary, 'font-normal')}>
            ⚙️ <span className="font-medium">Take Action</span>
          </h5>
          <ul className={cn(spacing.stack.md, 'ml-6 list-disc')}>
            <li className={cn(typography.text.base, colors.text.secondary)}>
              Collect and save lead info directly into our CRM
            </li>
            <li className={cn(typography.text.base, colors.text.secondary)}>
              Send custom emails and take messages
            </li>
            <li className={cn(typography.text.base, colors.text.secondary)}>
              Book meetings or appointments through calendar integrations
            </li>
            <li className={cn(typography.text.base, colors.text.secondary)}>
              Follow up with visitors via email or summaries
            </li>
          </ul>
        </div>

        <p className={cn(typography.text.base, colors.text.secondary, 'mt-6')}>
          She's not here to sell. She's here to help you explore if—and how—automation can work for your business.
        </p>

        <div className={cn(spacing.stack.md, 'mt-8')}>
          <h5 className={cn(typography.heading.h5, colors.text.primary, 'font-normal')}>
            💬 <span className="font-medium">You can ask her things like:</span>
          </h5>
          <ul className={cn(spacing.stack.md, 'ml-6')}>
            <li className={cn(typography.text.base, colors.text.secondary, 'italic')}>
              "What would you automate first in a business like mine?"
            </li>
            <li className={cn(typography.text.base, colors.text.secondary, 'italic')}>
              "Can AI help me respond faster to new leads?"
            </li>
            <li className={cn(typography.text.base, colors.text.secondary, 'italic')}>
              "How does the two-week trial work?"
            </li>
            <li className={cn(typography.text.base, colors.text.secondary, 'italic')}>
              "What's a voice agent, and do I need one?"
            </li>
          </ul>
        </div>
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
      containerGlass={false}
    >
      <div className="absolute left-6 top-6 z-20 md:left-8 md:top-8 lg:left-10 lg:top-10">
        <Logo className="text-lg sm:text-xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className={cn('space-y-6')}>
            <h1 className={cn(typography.heading.h1, colors.text.primary, 'font-normal leading-tight')}>
              What if growing your business didn't mean more work?
            </h1>
            <p className={cn(typography.text.lg, colors.text.secondary, 'leading-relaxed')}>
              Let AI Handle 80% of Your Work—Effortlessly. Meet Your 24/7 Digital Employee—For Free
            </p>
          </div>

          <div>
            <Card
              title={danaCard.title}
              description={danaCard.description}
              expandedContent={danaCard.expandedContent}
              ariaLabel="Meet Dana AI Assistant"
              className={cn(
                effects.hover.scale,
                effects.transition.base,
                'bg-white/5 w-full p-6 md:p-8',
                effects.shadow.card,
                radius.lg,
                'border border-white/10',
                'backdrop-blur-sm'
              )}
            />
          </div>
        </div>
      </div>
    </BaseSection>
  );
}