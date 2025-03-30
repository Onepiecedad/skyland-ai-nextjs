import React from 'react';
import { spacing } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";
import type { ThemeSection } from "@/lib/utils/theme-validator";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

function PageWrapperBase({ children, className }: PageWrapperProps) {
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

const PageWrapper = withThemeValidation(PageWrapperBase, "PageWrapper", ["layout", "spacing"] as ThemeSection[]);

export default PageWrapper; 