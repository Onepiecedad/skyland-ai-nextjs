
'use client'

import { ThemeEffect } from '@/components/ThemeEffect'
import ClientProviders from '@/components/providers/ClientProviders'

export default function RootClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeEffect />
      <ClientProviders>{children}</ClientProviders>
    </>
  )
}
