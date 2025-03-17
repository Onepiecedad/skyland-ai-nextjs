import { cn } from "../../lib/utils";

const baseStyles = {
  primary: cn(
    // Base styles
    "bg-gradient-to-r from-blue-400/[0.04] via-blue-500/[0.04] to-blue-400/[0.04]",
    "text-white/80",
    "border border-white/[0.08]",
    "backdrop-blur-xl",
    "rounded-xl",
    "font-light",
    "transition-all duration-500",
    "group/button relative",
    "overflow-hidden",
    "flex items-center gap-3",
    
    // Hover effects
    "hover:text-white/95",
    "hover:scale-[1.02]",
    "hover:border-blue-400/[0.2]",
    "hover:from-blue-400/[0.08] hover:via-blue-500/[0.08] hover:to-blue-400/[0.08]",
    "hover:shadow-[0_0_20px_-5px_rgba(96,165,250,0.2)]"
  ),
  secondary: cn(
    // Base styles
    "bg-gradient-to-r from-blue-400/[0.03] via-blue-500/[0.03] to-blue-400/[0.03]",
    "text-white/70",
    "border border-white/[0.06]",
    "backdrop-blur-xl",
    "rounded-xl",
    "font-light",
    "transition-all duration-500",
    "group/button relative",
    "overflow-hidden",
    "flex items-center gap-3",
    
    // Hover effects
    "hover:text-white/90",
    "hover:scale-[1.02]",
    "hover:border-blue-400/[0.15]",
    "hover:from-blue-400/[0.06] hover:via-blue-500/[0.06] hover:to-blue-400/[0.06]",
    "hover:shadow-[0_0_20px_-5px_rgba(96,165,250,0.15)]"
  ),
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof baseStyles;
  size?: keyof typeof sizeStyles;
  icon?: React.ReactNode;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  icon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        baseStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {icon && (
        <span className={cn(
          "transition-all duration-500",
          "transform-gpu",
          "group-hover/button:scale-110",
          "group-hover/button:rotate-3",
          "group-hover/button:animate-wiggle"
        )}>
          {icon}
        </span>
      )}
      {children && <span className="relative">{children}</span>}
    </button>
  );
} 