"use client";

import { cn } from "@/lib/utils";
import { glass, border, radius, effects } from "@/lib/theme";
import { withThemeValidation } from "@/lib/theme-validation";

type GlassIntensity = keyof typeof glass;

interface GlassLayerProps {
  className?: string;
  children?: React.ReactNode;
  intensity?: GlassIntensity;
  noBorder?: boolean;
  noShadow?: boolean;
  rounded?: keyof typeof radius;
}

function GlassLayerBase({ 
  className, 
  children,
  intensity = "layer1",
  noBorder = false,
  noShadow = false,
  rounded = "xl"
}: GlassLayerProps) {
  return (
    <div 
      className={cn(
        glass[intensity],
        !noBorder && border.glass,
        !noShadow && "shadow-lg",
        radius[rounded],
        effects.transition,
        className
      )}
      data-theme-debug={`glass-layer:intensity=${intensity},rounded=${rounded}`}
    >
      {children}
    </div>
  );
}

export const GlassLayer = withThemeValidation(GlassLayerBase); 