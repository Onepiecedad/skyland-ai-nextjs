import React from 'react';
import { spacing } from "@/lib/theme/tokens/spacing";
import { cn } from "@/lib/utils";
import { withThemeValidation } from '@/lib/hoc/withThemeValidation';
import type { ThemeSection } from '@/lib/utils/theme-validator';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

function PageWrapperBase({ children, className }: PageWrapperProps) {
  return (
    <main className={cn(
      spacing.section.base,
      spacing.width.full,
      spacing.flex.col,
      spacing.gap.lg,
      className
    )}>
      {children}
    </main>
  );
}

const themeSections: ThemeSection[] = ['spacing', 'layout'];
export const PageWrapper = withThemeValidation(PageWrapperBase, "PageWrapper", themeSections); 
