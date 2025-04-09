import { cn } from '@/lib/utils';
import { spacing } from '@/lib/theme';
import { typography } from '@/lib/theme/typography';
import { withThemeValidation } from '@/lib/hoc/withThemeValidation';
import type { ThemeSection } from '@/lib/utils/theme-validator';

export interface SectionHeadingProps {
  title: string;
  subtitle: string;
  id?: string;
  className?: string;
}

function SectionHeadingBase({ title, subtitle, id, className }: SectionHeadingProps) {
  return (
    <div className={cn(spacing.stack.md, className)}>
      <h2 id={id} className={cn(typography.heading.h2)}>
        {title}
      </h2>
      <p className={cn(typography.paragraph)}>{subtitle}</p>
    </div>
  );
}

const themeSections: ThemeSection[] = ['typography', 'spacing'];
export const SectionHeading = withThemeValidation(
  SectionHeadingBase,
  'SectionHeading',
  themeSections
);
