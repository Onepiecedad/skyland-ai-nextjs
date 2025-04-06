import React, { useCallback } from 'react';
import { motion, HTMLMotionProps, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { effects, radius, colors } from '@/lib/theme';
import { typography } from '@/lib/theme/typography';
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";
import type { ThemeSection } from "@/lib/utils/theme-validator";

interface AnimatedButtonProps extends Omit<HTMLMotionProps<"button">, "className" | "children" | "variant" | "size"> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  ariaLabel?: string;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  loadingIcon?: React.ReactNode;
}

function AnimatedButtonBase({ 
  children, 
  className, 
  variant = 'primary',
  size = 'md',
  ariaLabel,
  disabled = false,
  loading = false,
  loadingText = 'Loading...',
  loadingIcon,
  onClick,
  ...props 
}: AnimatedButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  const baseStyles = cn(
    typography.buttonText,
    radius.lg,
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50'
  );

  const variantStyles = {
    primary: cn(colors.text.primary, effects.glass.medium),
    secondary: cn(colors.text.secondary, effects.glass.light)
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm min-w-[5rem]',
    md: 'px-4 py-2 text-base min-w-[6rem]',
    lg: 'px-6 py-3 text-lg min-w-[7rem]'
  };

  const disabledStyles = disabled ? effects.interaction.cursor.notAllowed : '';
  const loadingStyles = loading ? effects.interaction.cursor.wait : '';

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!disabled && !loading) {
        onClick?.(event as any);
      }
    }
  }, [onClick, disabled, loading]);

  const motionProps = prefersReducedMotion ? {
    whileHover: undefined,
    whileTap: undefined,
    transition: { duration: 0.2 }
  } : {
    whileHover: !disabled && !loading ? { scale: 1.02 } : undefined,
    whileTap: !disabled && !loading ? { scale: 0.98 } : undefined,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17
    }
  };

  return (
    <motion.button
      data-theme-debug="AnimatedButton"
      className={cn(
        baseStyles,
        variantStyles[variant as keyof typeof variantStyles] ?? variantStyles.primary,
        sizeStyles[size as keyof typeof sizeStyles] ?? sizeStyles.md,
        disabledStyles,
        loadingStyles,
        className
      )}
      {...motionProps}
      role="button"
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      aria-live={loading ? 'polite' : undefined}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={handleKeyDown}
      onClick={disabled || loading ? undefined : onClick}
      {...props}
    >
      {loading ? (
        <>
          {loadingIcon || (
            <span 
              className="animate-spin" 
              aria-hidden="true"
            >
              ⟳
            </span>
          )}
          <span>{loadingText}</span>
          <span className="sr-only">Loading</span>
        </>
      ) : children}
    </motion.button>
  );
}

const themeSections: ThemeSection[] = ["typography", "effects", "radius", "colors"];
export const AnimatedButton = withThemeValidation(AnimatedButtonBase, "AnimatedButton", themeSections); 
