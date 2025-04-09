import { cn } from '@/lib/utils';
import { spacing } from '@/lib/theme';
import { withThemeValidation } from '@/lib/hoc/withThemeValidation';

interface ContentStackProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  spacing?: keyof typeof spacing.stack;
  maxWidth?: keyof typeof spacing.maxWidth;
  className?: string;
  role?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
}

function ContentStackBase({
  children,
  align = 'left',
  spacing: stackSpacing = 'md',
  maxWidth,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
}: ContentStackProps) {
  const alignmentClasses = {
    left: spacing.alignment.left,
    center: spacing.alignment.center,
    right: spacing.alignment.right,
  };

  return (
    <div
      className={cn(
        spacing.stack[stackSpacing],
        alignmentClasses[align],
        maxWidth && spacing.maxWidth[maxWidth],
        className
      )}
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
    >
      {children}
    </div>
  );
}

export const ContentStack = withThemeValidation<ContentStackProps>(
  ContentStackBase,
  'ContentStack',
  ['spacing']
);
