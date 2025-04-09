'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { colors, effects } from '@/lib/theme';
import { withThemeValidation } from '@/lib/hoc/withThemeValidation';
import type { ThemeSection } from '@/lib/utils/theme-validator';
import { Brain } from 'lucide-react';

interface LogoProps {
  className?: string;
}

function LogoBase({ className }: LogoProps) {
  const defaultTokens = [colors.text.primary, effects.transition.base];

  return (
    <div className={cn('flex items-center space-x-3', defaultTokens, className)}>
      <Brain className="h-6 w-6 text-blue-500" strokeWidth={2} />
      <div className="flex items-center tracking-tight font-medium">
        <span className="text-white">Skyland</span>
        <span className="text-white font-bold">AI</span>
      </div>
    </div>
  );
}

// Wrap with theme validation
const themeSections: ThemeSection[] = ['typography', 'colors', 'effects'];
export const Logo = withThemeValidation(LogoBase, 'Logo', themeSections);
