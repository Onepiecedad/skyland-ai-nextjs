'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'

interface AuroraBackgroundPortalProps {
  showRadialGradient?: boolean;
}

export default function AuroraBackgroundPortal({ showRadialGradient = true }: AuroraBackgroundPortalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted) return null

  const auroraStyles = cn(
    "fixed inset-0 -z-10",
    "before:absolute before:inset-0",
    "before:bg-gradient-to-b",
    "before:from-[rgba(59,130,246,0.15)]",
    "before:via-[rgba(168,85,247,0.15)]",
    "before:to-[rgba(16,185,129,0.15)]",
    "before:animate-aurora",
    "after:absolute after:inset-0",
    "after:bg-gradient-to-b",
    "after:from-[rgba(59,130,246,0.15)]",
    "after:via-[rgba(168,85,247,0.15)]",
    "after:to-[rgba(16,185,129,0.15)]",
    "after:animate-aurora after:animation-delay-2000",
    "overflow-hidden"
  )

  const radialGradient = showRadialGradient ? cn(
    "before:bg-gradient-radial",
    "before:from-transparent",
    "before:to-black/80",
    "before:z-10"
  ) : ''

  return createPortal(
    <div className={cn(auroraStyles, radialGradient)} />,
    document.body
  )
} 