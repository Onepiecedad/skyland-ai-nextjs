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
      "relative w-full",
      "flex flex-col",
      "overflow-x-hidden",
      "min-h-screen",
      className
    )}>
      {/* Main Content */}
      <main className={cn(
        "relative z-10",
        "flex flex-col",
        "w-full",
        className
      )}>
        {children}
      </main>
    </div>
  );
} 