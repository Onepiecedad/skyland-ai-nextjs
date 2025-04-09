'use client';

import { cn } from '@/lib/utils';
import { effects } from '@/lib/theme/tokens/effects';
import { withThemeValidation } from '@/lib/hoc/withThemeValidation';

interface GlassLayerProps {
  children: React.ReactNode;
  className?: string;
  intensity?: keyof typeof effects.glass;
  suppressHydrationWarning?: boolean;
}

function GlassLayerBase({
  children,
  className,
  intensity = 'medium',
  suppressHydrationWarning,
}: GlassLayerProps) {
  return (
    <div
      className={cn(effects.glass[intensity], className)}
      suppressHydrationWarning={suppressHydrationWarning}
    >
      {children}
    </div>
  );
}

export const GlassLayer = withThemeValidation<GlassLayerProps>(GlassLayerBase, 'GlassLayer', [
  'effects',
]);
