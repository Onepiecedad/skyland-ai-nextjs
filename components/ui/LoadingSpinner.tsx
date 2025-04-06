import { useId } from 'react';
import { cn } from '@/lib/utils';
import { withThemeValidation } from '@/lib/hoc/withThemeValidation';
import { spacing, typography, colors } from '@/lib/theme';

interface LoadingSpinnerProps {
  className?: string;
  hideLabel?: boolean;
}

function LoadingSpinnerBase({ className, hideLabel = false }: LoadingSpinnerProps) {
  const id = useId();
  const labelId = `${id}-label`;

  return (
    <div
      role="status"
      aria-labelledby={labelId}
      className={cn(spacing.flex.col, spacing.gap.sm, className)}
    >
      <div
        className={cn(
          'animate-spin rounded-full border-4 border-current border-t-transparent h-6 w-6',
          colors.text.primary
        )}
        aria-hidden="true"
      />
      {!hideLabel && (
        <p
          id={labelId}
          className={cn(typography.text.sm, colors.text.secondary)}
        >
          Loading...
        </p>
      )}
    </div>
  );
}

export const LoadingSpinner = withThemeValidation<LoadingSpinnerProps>(
  LoadingSpinnerBase,
  'LoadingSpinner',
  ['spacing', 'typography', 'colors']
); 
