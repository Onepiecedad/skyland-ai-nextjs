"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
}

function AuroraBackgroundBase({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 -z-10 overflow-hidden bg-black",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            `absolute -inset-[10px] opacity-50 will-change-transform
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px]
            after:content-[""] after:absolute after:inset-0 
            after:[background-image:var(--white-gradient),var(--aurora)]
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora after:[background-attachment:fixed] 
            after:mix-blend-difference
            pointer-events-none`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
          )}
        />
      </div>
      {children}
    </>
  );
}

export const AuroraBackground = withThemeValidation(
  AuroraBackgroundBase,
  'AuroraBackground',
  ['colors']
); 