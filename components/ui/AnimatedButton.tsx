import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';
import { colors, typography, radius, transition, hover } from '@/lib/theme';

interface AnimatedButtonProps extends Omit<HTMLMotionProps<"button">, "className" | "children" | "variant" | "size"> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function AnimatedButton({ 
  children, 
  className, 
  variant = 'primary',
  size = 'md',
  ...props 
}: AnimatedButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center",
    radius.button,
    typography.buttonText,
    transition.base,
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white",
    "disabled:pointer-events-none disabled:opacity-50"
  );
  
  const variants = {
    primary: `bg-[${colors.primary}] text-white hover:bg-[${colors.primaryHover}]`,
    secondary: "bg-white/10 text-white hover:bg-white/20",
    outline: cn("border border-white/20 bg-transparent", hover.card)
  };
  
  const sizes = {
    sm: "h-8 px-4 text-sm",
    md: "h-10 px-6 text-base",
    lg: "h-12 px-8 text-lg"
  };

  return (
    <motion.button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
} 