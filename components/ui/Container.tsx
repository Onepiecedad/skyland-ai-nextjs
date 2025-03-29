"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { GlassLayer } from "./GlassLayer";

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  glassIntensity?: "light" | "medium" | "heavy";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  padding?: "none" | "sm" | "md" | "lg";
  glass?: boolean;
  noGlassBorder?: boolean;
  noGlassShadow?: boolean;
  rounded?: boolean;
}

const maxWidthClasses = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-screen-2xl",
  full: "max-w-full",
};

const paddingClasses = {
  none: "p-0",
  sm: "px-4 py-6",
  md: "px-6 py-8",
  lg: "px-8 py-12",
};

export function Container({
  children,
  className,
  glassIntensity = "medium",
  maxWidth = "xl",
  padding = "md",
  glass = true,
  noGlassBorder = false,
  noGlassShadow = false,
  rounded = true,
  ...props
}: ContainerProps) {
  const content = (
    <div className={cn(paddingClasses[padding])}>
      {children}
    </div>
  );

  return (
    <div
      className={cn(
        "mx-auto w-full",
        maxWidthClasses[maxWidth],
        className
      )}
      {...props}
    >
      {glass ? (
        <GlassLayer 
          intensity={glassIntensity}
          noBorder={noGlassBorder}
          noShadow={noGlassShadow}
          rounded={rounded}
        >
          {content}
        </GlassLayer>
      ) : (
        content
      )}
    </div>
  );
} 