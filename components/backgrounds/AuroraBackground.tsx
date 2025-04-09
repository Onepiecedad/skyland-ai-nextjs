'use client';

import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  className?: string;
  enabled?: boolean;
  showRadialGradient?: boolean;
}

export const AuroraBackground: React.FC<Props> = ({
  children,
  className,
  enabled = true,
  showRadialGradient = true,
}) => {
  return (
    <main className={cn('fixed inset-0 -z-10 overflow-hidden bg-zinc-900', className)}>
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            'absolute -inset-[10px] opacity-50 pointer-events-none',
            enabled && '[background-size:300%,_200%] [background-position:50%_50%,50%_50%] filter blur-[10px] invert dark:invert-0',
            showRadialGradient && '[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]'
          )}
        />
      </div>
      {children}
    </main>
  );
};