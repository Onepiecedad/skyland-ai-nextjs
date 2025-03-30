import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import React from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validateThemeColors(colors: Record<string, string>) {
  const requiredColors = ['primary', 'secondary', 'background', 'foreground'];
  const missingColors = requiredColors.filter(color => !colors[color]);
  
  if (missingColors.length > 0) {
    throw new Error(`Missing required theme colors: ${missingColors.join(', ')}`);
  }
}

export function validateThemeSpacing(spacing: Record<string, string>) {
  const requiredSpacing = ['xs', 'sm', 'md', 'lg', 'xl'];
  const missingSpacing = requiredSpacing.filter(space => !spacing[space]);
  
  if (missingSpacing.length > 0) {
    throw new Error(`Missing required theme spacing: ${missingSpacing.join(', ')}`);
  }
}

export function validateThemeBreakpoints(breakpoints: Record<string, string>) {
  const requiredBreakpoints = ['sm', 'md', 'lg', 'xl', '2xl'];
  const missingBreakpoints = requiredBreakpoints.filter(breakpoint => !breakpoints[breakpoint]);
  
  if (missingBreakpoints.length > 0) {
    throw new Error(`Missing required theme breakpoints: ${missingBreakpoints.join(', ')}`);
  }
}

export const withThemeValidation = <P extends {}>(
  WrappedComponent: React.ComponentType<P>
) => {
  function WithThemeValidation(props: P) {
    // Add theme validation logic here if needed
    return <WrappedComponent {...props} />;
  }

  WithThemeValidation.displayName = `WithThemeValidation(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;
  
  return WithThemeValidation;
}; 