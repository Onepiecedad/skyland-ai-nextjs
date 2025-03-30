import React from 'react';
import { spacing } from "@/lib/theme";
import { cn } from "@/lib/utils";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <div className={cn(
      "relative min-h-screen",
      spacing.flex.center,
      "flex-col",
      className
    )}>
      {/* Main Content */}
      <main className={cn(
        "flex-1 relative z-10",
        className
      )}>
        {children}
      </main>
    </div>
  );
} 