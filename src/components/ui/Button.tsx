import { cn } from "../../lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  onClick,
}: ButtonProps) {
  const variants = {
    primary: "bg-indigo-500/10 hover:bg-indigo-500/20 text-white",
    secondary: "bg-green-500/10 hover:bg-green-500/20 text-white",
    outline: "border border-indigo-500/20 hover:bg-indigo-500/10 text-white",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3",
    xl: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        // Base styles
        "rounded-lg font-medium transition-all duration-200",
        "backdrop-blur-sm",
        // Apply variant styles
        variants[variant],
        // Apply size styles
        sizes[size],
        // Add icon spacing if icon exists
        icon && "flex items-center gap-2",
        // Apply custom classes
        className
      )}
    >
      {children}
      {icon && icon}
    </button>
  );
} 