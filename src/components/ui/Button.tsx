import { cn } from "../../lib/utils";

const baseStyles = {
  primary: cn(
    // Base styles
    "bg-blue-400/[0.08]",
    "text-white/90",
    "border border-blue-400/10",
    "backdrop-blur-sm",
    "rounded-2xl",
    "font-light",
    "transition-all duration-500",
    "group relative",
    "overflow-hidden",
    "flex items-center gap-3",
    
    // Hover effects
    "hover:text-white",
    "hover:scale-[1.02]",
    "hover:border-blue-400/30",
    "hover:bg-blue-400/[0.12]",
    "hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)]"
  ),
  secondary: cn(
    // Similar styles but with different color scheme
    "bg-blue-400/[0.06]",
    "text-white/80",
    "border border-white/10",
    "backdrop-blur-sm",
    "rounded-2xl",
    "font-light",
    "transition-all duration-500",
    "group relative",
    "overflow-hidden",
    "flex items-center gap-3",
    
    // Hover effects
    "hover:text-white/95",
    "hover:scale-[1.02]",
    "hover:border-blue-400/20",
    "hover:bg-blue-400/[0.1]",
    "hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.2)]"
  ),
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-6 text-lg",
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
      <div 
        className={cn(
          "absolute inset-0",
          "bg-gradient-to-r from-transparent via-blue-400/10 to-transparent",
          "opacity-0 group-hover:opacity-100",
          "transition-opacity duration-500",
          "-z-10"
        )}
      />
      {icon && (
        <span className={cn(
          "transition-all duration-500",
          "transform-gpu",
          "group-hover:scale-110",
          "group-hover:animate-wiggle"
        )}>
          {icon}
        </span>
      )}
      <span className="relative">{children}</span>
    </button>
  );
} 