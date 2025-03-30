"use client";

import { cn } from "@/lib/utils";
import { effects, border, radius } from "@/lib/theme";
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";

type GlassIntensity = "light" | "lighter";

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
  intensity = "light",
  noBorder = false,
  noShadow = false,
  rounded = "xl"
}: GlassLayerProps) {
  return (
    <div 
      className={cn(
        intensity === "light" ? effects.glass.light : effects.glass.lighter,
        !noBorder && border.glass,
        !noShadow && "shadow-lg",
        radius[rounded],
        effects.transition.base,
        className
      )}
      data-theme-debug={`GlassLayer:intensity=${intensity},rounded=${rounded}`}
    >
      {children}
    </div>
  );
}

export const GlassLayer = withThemeValidation(
  GlassLayerBase,
  "GlassLayer",
  ["effects", "border", "radius"]
); 