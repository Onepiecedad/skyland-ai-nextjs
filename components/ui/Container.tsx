"use client";

import { cn } from "@/lib/utils";
import { spacing } from "@/lib/theme/tokens/spacing";
import { GlassLayer } from "./GlassLayer";
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";
import { useSectionContext } from "@/lib/context/SectionContext";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
  glassIntensity?: 'light' | 'medium' | 'heavy' | 'lighter';
  padding?: keyof typeof spacing.padding;
}

function ContainerBase({ 
  children, 
  className, 
  glass: useGlass = true,
  glassIntensity = 'light',
  padding = "none"
}: ContainerProps) {
  const { isHydrated } = useSectionContext();
  
  const containerClasses = cn(
    spacing.container,
    spacing.padding[padding],
    // Säkerställ stabil layout under hydration
    !isHydrated && 'invisible',
    isHydrated && 'visible transition-[visibility] duration-300',
    className
  );

  if (useGlass) {
    return (
      <GlassLayer intensity={glassIntensity} className={containerClasses} suppressHydrationWarning>
        {children}
      </GlassLayer>
    );
  }

  return (
    <div className={containerClasses} suppressHydrationWarning>
      {children}
    </div>
  );
}

export const Container = withThemeValidation<ContainerProps>(
  ContainerBase,
  'Container',
  ['spacing']
); 
