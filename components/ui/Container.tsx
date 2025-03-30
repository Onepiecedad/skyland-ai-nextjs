"use client";

import { cn } from "@/lib/utils";
import { spacing } from "@/lib/theme";
import { GlassLayer } from "./GlassLayer";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
  padding?: keyof typeof spacing.padding;
}

export function Container({ 
  children, 
  className, 
  glass: useGlass = true,
  padding = "none"
}: ContainerProps) {
  const containerClasses = cn(
    spacing.container,
    spacing.padding[padding],
    className
  );

  if (useGlass) {
    return (
      <GlassLayer className={containerClasses}>
        {children}
      </GlassLayer>
    );
  }

  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
} 