'use client';

import { useId } from 'react';
import { cn } from '@/lib/utils';
import { spacing } from '@/lib/theme/tokens/spacing';
import { effects } from '@/lib/theme/tokens/effects';
import { withThemeValidation } from '@/lib/hoc/withThemeValidation';
import type { ThemeSection } from '@/lib/utils/theme-validator';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  'data-theme-debug'?: string;
  role?: 'region' | 'main' | 'complementary' | 'contentinfo' | 'banner' | 'navigation';
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  tabIndex?: number;
  focusable?: boolean;
  onFocus?: React.FocusEventHandler<HTMLElement>;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  suppressHydrationWarning?: boolean;
}

function SectionWrapperBase({
  children,
  className,
  id: providedId,
  'data-theme-debug': dataThemeDebug,
  role = 'region',
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  tabIndex,
  focusable = false,
  onFocus,
  onBlur,
  suppressHydrationWarning,
}: SectionWrapperProps) {
  const generatedId = useId();
  const id = providedId || generatedId;

  return (
    <section
      id={id}
      role={role}
      aria-label={
        ariaLabel ||
        (role === 'main'
          ? 'Main content'
          : role === 'navigation'
            ? 'Primary navigation'
            : role === 'contentinfo'
              ? 'Footer content'
              : undefined)
      }
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      tabIndex={focusable ? (tabIndex ?? 0) : undefined}
      onFocus={onFocus}
      onBlur={onBlur}
      className={cn(
        spacing.section.base,
        spacing.width.full,
        spacing.flex.col,
        spacing.flex.center,
        focusable && effects.interaction.focus.primary,
        effects.transition.base,
        className
      )}
      data-theme-debug={dataThemeDebug || 'section-wrapper'}
      suppressHydrationWarning={suppressHydrationWarning}
    >
      <div
        className={cn(
          spacing.container,
          spacing.elementSpacing,
          spacing.padding.section,
          spacing.width.full,
          spacing.flex.col,
          spacing.flex.center,
          effects.overflow.auto
        )}
      >
        {children}
      </div>
    </section>
  );
}

const themeSections: ThemeSection[] = ['spacing', 'effects'];
export const SectionWrapper = withThemeValidation(
  SectionWrapperBase,
  'SectionWrapper',
  themeSections
);
