'use client';

import { type ReactNode } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Container } from './Container';
import { ContentStack } from './ContentStack';
import { cn } from '@/lib/utils';
import { withThemeValidation } from '@/lib/hoc/withThemeValidation';
import { useSectionContext } from '@/lib/context/SectionContext';
import type { ThemeSection } from '@/lib/utils/theme-validator';
import { typography } from '@/lib/theme/tokens/typography';
import { colors } from '@/lib/theme/tokens/colors';
import { effects } from '@/lib/theme/tokens/effects';
import { radius } from '@/lib/theme/tokens/radius';
import { spacing } from '@/lib/theme/tokens/spacing';
import { layout } from '@/lib/theme/tokens/layout';

type SectionRole = 'region' | 'main' | 'complementary' | 'contentinfo' | 'banner' | 'navigation';
type ContainerPadding = 'section' | 'sm' | 'none' | 'card' | 'modal';
type StackSpacing = 'xs' | 'sm' | 'md' | 'lg';
type GlassIntensity = 'light' | 'medium' | 'heavy' | 'lighter';

interface BaseSectionProps {
  id: string;
  children: ReactNode;
  ariaLabel: string;
  role?: SectionRole;
  className?: string;
  containerGlass?: boolean;
  glassIntensity?: GlassIntensity;
  containerPadding?: ContainerPadding;
  spacing?: StackSpacing;
}

function BaseSectionBase({
  id,
  children,
  ariaLabel,
  role = 'region',
  className,
  containerGlass = false,
  glassIntensity = 'light',
  containerPadding = 'section',
  spacing = 'lg',
}: BaseSectionProps) {
  const { isHydrated } = useSectionContext();

  return (
    <SectionWrapper
      id={id}
      className={cn(
        className,
        // Förhindra layout-skifte under hydration
        !isHydrated && 'opacity-0',
        isHydrated && 'opacity-100 transition-opacity duration-300',
        typography.text.base,
        colors.text.primary,
        effects.transition.base,
        radius.lg,
        layout.section.base
      )}
      aria-label={ariaLabel}
      role={role}
      suppressHydrationWarning
    >
      <Container glass={containerGlass} glassIntensity={glassIntensity} padding={containerPadding}>
        <ContentStack spacing={spacing}>{children}</ContentStack>
      </Container>
    </SectionWrapper>
  );
}

const themeSections: ThemeSection[] = [
  'spacing',
  'typography',
  'colors',
  'effects',
  'radius',
  'layout',
];
export const BaseSection = withThemeValidation<BaseSectionProps>(
  BaseSectionBase,
  'BaseSection',
  themeSections
);
