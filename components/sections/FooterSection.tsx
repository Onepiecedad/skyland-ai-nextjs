'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Linkedin, Brain } from "lucide-react";
import { cn } from '@/lib/utils';
import { BaseSection } from '@/components/ui/BaseSection';
import { ContentStack } from '@/components/ui/ContentStack';
import { spacing, typography, colors, effects } from '@/lib/theme';

interface FooterSectionProps {
  className?: string;
}

export function FooterSection({ className }: FooterSectionProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "w-full border-t border-white/10",
        "bg-zinc-900/50",
        "py-10"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div className={cn(spacing.flex.col, spacing.gap.md)}>
            <Link 
              href="/" 
              className={cn(
                spacing.flex.row,
                spacing.gap.sm,
                "group",
                effects.hover.opacity
              )}
            >
              <Brain className={cn(
                typography.icon.md,
                colors.text.primary,
                effects.transition.base
              )} />
              <span className={cn(
                typography.logo,
                colors.text.primary,
                effects.transition.base
              )}>
                SKYLAND AI
              </span>
            </Link>
            <div className={cn(spacing.flex.col, spacing.gap.sm)}>
              <div className={cn(spacing.flex.row, spacing.gap.sm, "items-center")}>
                <MapPin className={cn(typography.icon.sm, colors.text.secondary)} />
                <span className={cn(typography.text.sm, colors.text.secondary)}>
                  Gothenburg, Sweden
                </span>
              </div>
              <div className={cn(spacing.flex.row, spacing.gap.sm, "items-center")}>
                <Mail className={cn(typography.icon.sm, colors.text.secondary)} />
                <a 
                  href="mailto:info@skylandai.se"
                  className={cn(
                    typography.text.sm,
                    colors.text.secondary,
                    "hover:text-white",
                    effects.transition.colors
                  )}
                >
                  info@skylandai.se
                </a>
              </div>
              <div className={cn(spacing.flex.row, spacing.gap.sm, "items-center")}>
                <Phone className={cn(typography.icon.sm, colors.text.secondary)} />
                <a 
                  href="tel:+46737329083"
                  className={cn(
                    typography.text.sm,
                    colors.text.secondary,
                    "hover:text-white",
                    effects.transition.colors
                  )}
                >
                  +46 737 329 083
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={cn(spacing.flex.col, spacing.gap.md)}>
            <h3 className={cn(typography.text.base, colors.text.primary, "font-medium")}>
              Quick Links
            </h3>
            <nav className={cn(spacing.flex.col, spacing.gap.sm)}>
              {[
                { href: "#about", label: "About" },
                { href: "#pricing", label: "Pricing" },
                { href: "#contact", label: "Contact" }
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    typography.text.sm,
                    colors.text.secondary,
                    "hover:text-white",
                    effects.transition.colors
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className={cn(spacing.flex.col, spacing.gap.md)}>
            <h3 className={cn(typography.text.base, colors.text.primary, "font-medium")}>
              Connect
            </h3>
            <div className={cn(spacing.flex.col, spacing.gap.sm)}>
              <a 
                href="https://linkedin.com/company/skylandai" 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(
                  spacing.flex.row,
                  spacing.gap.sm,
                  typography.text.sm,
                  colors.text.secondary,
                  "hover:text-white items-center",
                  effects.transition.colors
                )}
              >
                <Linkedin className={typography.icon.sm} />
                Follow us on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={cn(
          spacing.flex.col,
          "md:flex-row md:justify-between",
          "pt-6 mt-6 border-t border-white/10",
          spacing.gap.md
        )}>
          <p className={cn(typography.text.xs, colors.text.secondary)}>
            © {currentYear} Skyland AI. All rights reserved.
          </p>
          <div className={cn(spacing.flex.row, spacing.gap.md)}>
            <Link 
              href="/privacy" 
              className={cn(
                typography.text.xs,
                colors.text.secondary,
                "hover:text-white",
                effects.transition.colors
              )}
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className={cn(
                typography.text.xs,
                colors.text.secondary,
                "hover:text-white",
                effects.transition.colors
              )}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 