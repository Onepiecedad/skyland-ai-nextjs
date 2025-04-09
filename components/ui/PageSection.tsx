'use client';

import React, { useEffect } from 'react';
import { colors } from '@/lib/theme/tokens/colors';
import { effects } from '@/lib/theme/tokens/effects';
import { spacing } from '@/lib/theme/tokens/spacing';
import { typography } from '@/lib/theme/tokens/typography';
import { cn } from '@/lib/utils';
import { withThemeValidation } from '@/lib/hoc/withThemeValidation';
import { BaseSection } from '@/components/ui/BaseSection';
import { ContentStack } from '@/components/ui/ContentStack';
import type { ThemeSection } from '@/lib/utils/theme-validator';
import { useSectionContext } from '@/lib/context/SectionContext';

interface PageSectionProps {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
  maxWidth?: keyof typeof spacing.maxWidth;
  className?: string;
}

function PageSectionBase({
  id,
  title,
  description,
  children,
  maxWidth = '2xl',
  className,
}: PageSectionProps) {
  const { addSection, removeSection } = useSectionContext();

  useEffect(() => {
    addSection(id);
    return () => removeSection(id);
  }, [id, addSection, removeSection]);

  return (
    <BaseSection
      id={id}
      className={cn(
        'relative min-h-screen py-20 md:py-24 lg:py-32 lg:px-12',
        effects.glass.light,
        className
      )}
      ariaLabel={title}
      role="region"
    >
      <ContentStack
        spacing="lg"
        maxWidth={maxWidth}
        className="mx-auto px-6 md:px-8 lg:px-12 lg:px-16"
      >
        <ContentStack spacing="md" className="animate-fade-in-up text-center">
          <h2 className={cn(typography.heading.h2, colors.text.primary)}>{title}</h2>
          <p className={cn(typography.text.base, colors.text.secondary, 'max-w-3xl mx-auto')}>
            {description}
          </p>
        </ContentStack>

        {children}
      </ContentStack>
    </BaseSection>
  );
}

const themeSections: ThemeSection[] = ['typography', 'colors', 'effects', 'spacing'];
export const PageSection = withThemeValidation(PageSectionBase, 'PageSection', themeSections);
