'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { BaseSection } from '@/components/ui/BaseSection';
import { ContentStack } from '@/components/ui/ContentStack';
import { colors, effects, spacing, layout } from '@/lib/theme';
import { typography } from '@/lib/theme/typography';

const FooterBase = () => {
  return (
    <BaseSection
      id="footer"
      ariaLabel="Footer"
      role="contentinfo"
      className={cn(spacing.section.base, spacing.padding.section, effects.glass)}
    >
      <ContentStack spacing="lg" className={cn(layout.section.wrapper)}>
        {/* Footer heading / logo */}
        <div className={cn(typography.text.base, colors.text.primary)}>
          Skyland AI © {new Date().getFullYear()}
        </div>

        {/* Footer links */}
        <div className={cn("flex flex-wrap gap-x-8", spacing.stack.md)}>
          <a 
            href="/privacy" 
            aria-label="Integritetspolicy"
            rel="noopener noreferrer" 
            className={cn(typography.text.sm, colors.text.secondary)}
          >
            Integritetspolicy
          </a>
          <a 
            href="/terms" 
            aria-label="Användarvillkor"
            rel="noopener noreferrer" 
            className={cn(typography.text.sm, colors.text.secondary)}
          >
            Användarvillkor
          </a>
          <a 
            href="/contact" 
            aria-label="Kontakta oss"
            rel="noopener noreferrer" 
            className={cn(typography.text.sm, colors.text.secondary)}
          >
            Kontakt
          </a>
        </div>

        {/* Social links */}
        <div className={cn("flex flex-wrap gap-x-8", spacing.stack.md)}>
          <a 
            href="https://www.linkedin.com/company/skyland-ai"
            aria-label="Besök vår LinkedIn-sida"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(typography.text.sm, colors.text.secondary)}
          >
            LinkedIn
          </a>
          <a 
            href="https://twitter.com/SkylandAI"
            aria-label="Följ oss på Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(typography.text.sm, colors.text.secondary)}
          >
            Twitter
          </a>
        </div>
      </ContentStack>
    </BaseSection>
  );
};

export const FooterSection = FooterBase; 
