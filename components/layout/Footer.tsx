import { Brain } from "lucide-react";
import Link from 'next/link'
import { spacing, typography, colors, effects } from '@/lib/theme'
import { cn } from '@/lib/utils'

export default function Footer() {
  return (
    <footer 
      className={cn(spacing.width.full, "border-t border-white/10")}
      data-theme-debug="footer"
    >
      <div className={spacing.container}>
        <div className={cn(
          spacing.flex.responsive,
          spacing.flex.between,
          spacing.padding.card
        )}>
          {/* Logo */}
          <div className={cn(spacing.stack.sm, "md:mb-0")}>
            <Link 
              href="/" 
              className={cn(spacing.flex.row, spacing.gap.sm, "group")}
              data-theme-debug="footer-logo"
            >
              <Brain
                className={cn(
                  spacing.icon.md,
                  colors.text.logo.icon,
                  effects.transition
                )}
              />
              <span className={cn(typography.logo, colors.text.logo.text, effects.transition)}>
                SKYLAND AI
              </span>
            </Link>
          </div>

          {/* Copyright */}
          <div className={cn(spacing.flex.center, "md:justify-end")}>
            <p className={cn(typography.label, colors.text.tertiary)}>
              © {new Date().getFullYear()} Alla rättigheter förbehållna
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 