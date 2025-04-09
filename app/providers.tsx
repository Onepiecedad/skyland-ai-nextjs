'use client';

import { ReactNode } from 'react';
import { OverlayProvider } from '@/contexts/OverlayProvider';

export function Providers({ children }: { children: ReactNode }) {
  return <OverlayProvider>{children}</OverlayProvider>;
}
