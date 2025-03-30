import { spacing } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div 
      className={cn(spacing.container, className)}
      data-theme-debug="container"
    >
      {children}
    </div>
  );
}; 