
'use client';

import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
  enabled?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  enabled = true,
  ...props
}: AuroraBackgroundProps) => {
  if (!enabled) {
    return (
      <div className={cn('fixed inset-0 -z-10 overflow-hidden bg-zinc-900', className)} {...props}>
        {children}
      </div>
    );
  }

  return (
    <>
      <div className={cn('fixed inset-0 -z-10 overflow-hidden bg-zinc-900', className)} {...props}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `absolute -inset-[10px] opacity-50 will-change-transform
              [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
              [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_0%,var(--indigo-300)_15%,var(--blue-300)_30%,var(--violet-200)_45%,var(--blue-400)_60%)]
              [background-image:var(--dark-gradient),var(--aurora)]
              [background-size:200%,_150%]
              [background-position:50%_50%,50%_50%]
              filter blur-[3px]
              after:content-[""] after:absolute after:inset-0 
              after:[background-image:var(--dark-gradient),var(--aurora)]
              after:[background-size:150%,_120%] 
              after:animate-aurora after:[background-attachment:fixed] 
              pointer-events-none`,
              showRadialGradient &&
                '[mask-image:radial-gradient(ellipse_at_100%_0%,black_20%,var(--transparent)_70%)]'
            )}
          />
        </div>
        {children}
      </div>
    </>
  );
};
