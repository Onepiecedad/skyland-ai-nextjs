
'use client';

import { useEffect } from 'react';
import { colors } from '@/lib/aurora/theme';

export function ThemeEffect(): null {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = colors.backgroundDark;
  }, []);

  return null;
}
