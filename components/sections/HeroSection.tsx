'use client';

import React, { useEffect, useState } from 'react';
import { BaseSection } from '@/components/ui/BaseSection';
import { Card } from '@/components/ui/Card';
import { Logo } from '@/components/common/Logo';
import { cn } from '@/lib/utils';
import { colors } from '@/lib/theme/tokens/colors';
import { layout } from '@/lib/theme/tokens/layout';
import { typography } from '@/lib/theme/tokens/typography';
import { radius } from '@/lib/theme/tokens/radius';
import { effects } from '@/lib/theme/tokens/effects';

export function HeroSection() {
  const [isWidgetReady, setIsWidgetReady] = useState(false);

  useEffect(() => {
    console.log('useEffect triggered to load ElevenLabs widget script');

    const scriptAlreadyLoaded = window.customElements?.get('elevenlabs-convai');
    if (scriptAlreadyLoaded) {
      console.log('Widget already registered');
      setIsWidgetReady(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.onload = () => {
      console.log('ElevenLabs widget script loaded');
      // Vänta en extra frame för säkerhet
      requestAnimationFrame(() => setIsWidgetReady(true));
    };
    script.onerror = (e) => {
      console.error('Failed to load ElevenLabs widget:', e);
    };

    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  const expandedContent = (
    <div className="flex flex-col items-center space-y-6">
      <h4 className="text-center text-xl font-semibold text-white">
        Meet Dana—Our Always-On AI Strategy Assistant
      </h4>

      {isWidgetReady ? (
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
      ) : (
        <div className="text-sm text-gray-400">Loading Dana...</div>
      )}

      <p className="text-sm text-white text-center max-w-xl">
        Dana isn't just a chatbot—she's an AI assistant trained to answer your questions, handle leads, and help you automate key parts of your business.
      </p>
    </div>
  );

  return (
    <BaseSection
      id="hero"
      className={cn(
        layout.section.base,
        layout.hero.container,
        'min-h-screen py-20 flex items-center justify-center'
      )}
      ariaLabel="Hero Section"
    >
      <div className="absolute left-6 top-6 z-20">
        <Logo className="text-lg sm:text-xl" />
      </div>

      <div className="max-w-7xl px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className={cn(typography.heading.h1, colors.text.primary, 'font-normal leading-tight')}>
              What if growing your business didn't mean more work?
            </h1>
            <p className="text-lg text-white/80 mt-6">
              Let AI Handle 80% of Your Work—Effortlessly. Meet Your 24/7 Digital Employee—For Free
            </p>
          </div>
          <Card
            title="Meet Dana—Our AI Assistant"
            description="She's here to show you how automation can save time, reduce workload, and help your business grow. What's the one task you'd automate today if you could?"
            expandedContent={expandedContent}
          />
        </div>
      </div>
    </BaseSection>
  );
}