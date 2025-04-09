
'use client';

import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface AuroraBackgroundProps {
  className?: string;
  children?: ReactNode;
  showRadialGradient?: boolean;
  enabled?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  enabled = true,
}: AuroraBackgroundProps) => {
  if (!enabled) {
    return (
      <main className={cn('fixed inset-0 -z-10 overflow-hidden bg-zinc-900', className)}>
        {children}
      </main>
    );
  }

  return (
    <main className={cn('fixed inset-0 -z-10 overflow-hidden bg-zinc-50 dark:bg-zinc-900', className)}>
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `[--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            relative h-full w-full
            bg-[size:300%_300%]
            bg-center bg-no-repeat
            [animation:aurora_60s_linear_infinite]`,
            showRadialGradient &&
              'after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_80%_20%,transparent_0%,rgba(0,0,0,0.4)_100%)]'
          )}
        />
      </div>
      {children}
    </main>
  );
};
