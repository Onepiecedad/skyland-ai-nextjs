import React from 'react';
import { colors } from '@/lib/theme/tokens/colors';
import { spacing } from '@/lib/theme/tokens/spacing';
import { typography } from '@/lib/theme/tokens/typography';
import { cn } from '@/lib/utils';
import { withThemeValidation } from '@/lib/hoc/withThemeValidation';
import type { ThemeSection } from '@/lib/utils/theme-validator';
import { ContentStack } from './ContentStack';

interface CardContentProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  headingId?: string;
}

function CardContentBase({ title, children, className, ariaLabel, headingId }: CardContentProps) {
  const titleId = headingId || `card-content-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div role="region" aria-label={ariaLabel || title || 'Card content'} className={className}>
      <ContentStack spacing="md">
        {title && (
          <h4 id={titleId} className={cn(typography.heading.h4, colors.text.primary)}>
            {title}
          </h4>
        )}
        <div className={cn(spacing.stack.md)} aria-labelledby={title ? titleId : undefined}>
          {children}
        </div>
      </ContentStack>
    </div>
  );
}

const themeSections: ThemeSection[] = ['typography', 'colors', 'spacing'];
export const CardContent = withThemeValidation(CardContentBase, 'CardContent', themeSections);
