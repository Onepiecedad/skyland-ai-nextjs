import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';
import { button } from '@/lib/theme';
import { withThemeValidation } from '@/lib/theme-validation';

interface AnimatedButtonProps extends Omit<HTMLMotionProps<"button">, "className" | "children" | "variant" | "size"> {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof button.variant;
  size?: keyof typeof button.size;
}

function AnimatedButtonBase({ 
  children, 
  className, 
  variant = 'primary',
  size = 'md',
  ...props 
}: AnimatedButtonProps) {
  const baseStyles = cn(
    button.base.layout,
    button.base.radius,
    button.base.typography,
    button.base.transition,
    button.base.shadow,
    button.base.focus,
    button.base.disabled
  );

  return (
    <motion.button
      data-theme-debug="AnimatedButton"
      className={cn(
        baseStyles,
        button.variant[variant],
        button.size[size],
        className
      )}
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

export const AnimatedButton = withThemeValidation(AnimatedButtonBase); 