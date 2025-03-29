"use client";

import { cn } from "@/lib/utils";
import { colors, glass, transition, radius } from "@/lib/theme";
import React from "react";

interface GlassLayerProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  intensity?: "light" | "medium" | "heavy";
  noBorder?: boolean;
  noShadow?: boolean;
  rounded?: boolean;
  variant?: keyof typeof glass;
}

export function GlassLayer({
  children,
  className,
  intensity = "medium",
  noBorder = false,
  noShadow = false,
  rounded = true,
  variant = "layer1",
  ...props
}: GlassLayerProps) {
  const intensityStyles = {
    light: `bg-white/[0.03] backdrop-blur-[2px]`,
    medium: `bg-white/[0.05] backdrop-blur-[4px]`,
    heavy: `bg-white/[0.08] backdrop-blur-[6px]`,
  };

  return (
    <div
      className={cn(
        "relative w-full",
        rounded && radius.modal,
        !noBorder && `border border-[${colors.borderGlass}]`,
        !noShadow && "shadow-[0_8px_32px_0_rgba(0,0,0,0.15)]",
        glass[variant],
        intensityStyles[intensity],
        transition.base,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
} 