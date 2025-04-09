import { cn } from '@/lib/utils';
import { layout } from '@/lib/theme';
import { withThemeValidation } from '@/lib/hoc/withThemeValidation';
import React from 'react';

interface GridSectionProps {
  children: React.ReactNode;
  columns?: keyof typeof layout.grid.responsive;
  gap?: keyof typeof layout.grid.gap;
  className?: string;
  ariaLabel?: string;
  adaptiveHeight?: boolean;
}

function GridSectionBase({
  children,
  columns = 'three',
  gap = 'lg',
  className,
  ariaLabel,
  adaptiveHeight = true,
}: GridSectionProps) {
  // Räkna antalet barn för eventuell anpassning
  const childCount = React.Children.count(children);

  // Justera kolumnlayout baserat på antal
  const getOptimizedColumns = () => {
    // Behåll användarens val om det är specifikt angivet
    if (columns !== 'three') {
      return columns;
    }

    // Optimera för olika antal kort
    if (childCount === 1) return 'two';
    if (childCount === 2) return 'two';
    if (childCount === 3 || childCount === 6) return 'three';
    if (childCount === 4) return 'four';
    if (childCount === 5) return 'three';

    return columns;
  };

  const optimizedColumns = getOptimizedColumns();

  // Clone and modify Card components with the correct variant
  const childrenWithVariant = React.Children.map(children, child => {
    if (React.isValidElement(child) && typeof child.type === 'function') {
      const childType = child.type as any;
      if (childType.displayName === 'Card') {
        return React.cloneElement(child, {
          variant: optimizedColumns,
          ...child.props,
        });
      }
    }
    return child;
  });

  return (
    <div
      role="grid"
      aria-label={ariaLabel}
      className={cn(
        layout.grid.base,
        layout.grid.responsive[optimizedColumns],
        layout.grid.gap[gap],
        adaptiveHeight ? 'grid-rows-auto' : '',
        className
      )}
    >
      {childrenWithVariant}
    </div>
  );
}

export const GridSection = withThemeValidation<GridSectionProps>(GridSectionBase, 'GridSection', [
  'layout',
]);
