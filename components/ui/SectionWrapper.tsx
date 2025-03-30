"use client";

import { cn } from "@/lib/utils";
import { spacing } from "@/lib/theme";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  "data-theme-debug"?: string;
}

export function SectionWrapper({
  children,
  className,
  id,
  "data-theme-debug": dataThemeDebug,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        spacing.section.base,
        spacing.section.hero.outer,
        className
      )}
      data-theme-debug={dataThemeDebug}
    >
      {children}
    </section>
  );
}

SectionWrapper.displayName = "SectionWrapper"; 