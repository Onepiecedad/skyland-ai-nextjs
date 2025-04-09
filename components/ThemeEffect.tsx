'use client';

import { useEffect } from 'react';

export function ThemeEffect() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return null;
}
