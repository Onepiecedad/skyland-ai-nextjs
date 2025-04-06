import React from 'react';
import { motion, HTMLMotionProps, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { spacing, effects } from '@/lib/theme';
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";
import type { ThemeSection } from "@/lib/utils/theme-validator";

interface AnimatedSectionProps extends Omit<HTMLMotionProps<"div">, "className"> {
  className?: string;
  children: React.ReactNode;
  useGlass?: boolean;
  role?: "region" | "main" | "complementary" | "contentinfo" | "banner" | "navigation";
  ariaLabel?: string;
}

function AnimatedSectionBase({ 
  children, 
  className,
  useGlass = false,
  role = "region",
  ariaLabel,
  ...props 
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const motionProps = prefersReducedMotion ? {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.3 }
  } : {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <motion.div
      {...motionProps}
      viewport={{ once: true, margin: "-100px" }}
      role={role}
      aria-label={ariaLabel}
      className={cn(
        spacing.section.base,
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50",
        useGlass && effects.glass.light,
        className
      )}
      {...props}
    >
      <div 
        className={cn(
          spacing.container,
          spacing.elementSpacing
        )}
        aria-hidden={false}
      >
        {children}
      </div>
    </motion.div>
  );
}

const themeSections: ThemeSection[] = ["spacing", "effects"];
export const AnimatedSection = withThemeValidation(AnimatedSectionBase, "AnimatedSection", themeSections); 
