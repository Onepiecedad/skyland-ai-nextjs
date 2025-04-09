
'use client';

import React from 'react';
import { SectionProvider } from '@/lib/context/SectionContext';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return <SectionProvider>{children}</SectionProvider>;
}
