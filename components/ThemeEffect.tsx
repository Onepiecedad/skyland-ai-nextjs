'use client';

import { useEffect } from 'react';

export function ThemeEffect(): null {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return null;
}
