import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  asChild?: boolean;
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  href,
  asChild,
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-white/5 hover:bg-white/15 text-white',
    outline: 'border border-blue-400 text-blue-400 hover:bg-blue-400/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const sharedClasses = cn(
    // Base styles
    'inline-flex items-center justify-center',
    'rounded-full font-medium',
    'transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-blue-400/80 focus:ring-offset-2 focus:ring-offset-zinc-950',
    // Variant styles
    variants[variant],
    // Size styles
    sizes[size],
    // Icon spacing
    icon && iconPosition === 'left' && 'flex-row-reverse space-x-reverse',
    icon && 'space-x-2',
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {icon && <span className="w-5 h-5">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={sharedClasses} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button className={sharedClasses} {...props}>
      {content}
    </button>
  );
} 