'use client';

import { Brain, MapPin, Phone, Linkedin, Mail, Clock } from "lucide-react";
import Link from 'next/link'
import { spacing, colors, effects } from '@/lib/theme'
import { typography } from '@/lib/theme/typography'
import { cn } from '@/lib/utils'

export default function Footer() {
  return (
    <footer 
      className={cn(
        spacing.width.full, 
        "border-t border-white/10",
        effects.glass
      )}
      data-theme-debug="footer"
    >
      <div className={cn(
        spacing.container,
        "py-12 md:py-16"
      )}>
        {/* Main Footer Content */}
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12",
          "mb-12"
        )}>
          {/* Company Info */}
          <div className={cn(spacing.stack.md)}>
            <Link 
              href="/" 
              className={cn(
                spacing.flex.row, 
                spacing.gap.sm, 
                "group",
                "hover:opacity-80 transition-opacity duration-300"
              )}
              data-theme-debug="footer-logo"
            >
              <Brain
                className={cn(
                  typography.icon.md,
                  colors.text.logo.icon,
                  effects.transition
                )}
              />
              <span className={cn(typography.logo, colors.text.logo.text, effects.transition)}>
                SKYLAND AI
              </span>
            </Link>
            <p className={cn(typography.text.base, colors.text.secondary, "max-w-sm")}>
              Transforming businesses through intelligent AI solutions. We help you work smarter, not harder.
            </p>
          </div>

          {/* Quick Links */}
          <div className={cn(spacing.stack.md)}>
            <h3 className={cn(typography.heading.h4, colors.text.primary)}>
              Quick Links
            </h3>
            <nav className={cn(spacing.stack.sm)}>
              {[
                { href: "#hero", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#solutions", label: "Solutions" },
                { href: "#pricing", label: "Pricing" },
                { href: "#contact", label: "Contact" }
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    typography.text.base,
                    colors.text.secondary,
                    "hover:text-white transition-colors duration-300"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className={cn(spacing.stack.md)}>
            <h3 className={cn(typography.heading.h4, colors.text.primary)}>
              Contact
            </h3>
            <div className={cn(spacing.stack.sm, colors.text.secondary)}>
              <div className={cn(spacing.flex.row, spacing.gap.sm, "items-center")}>
                <MapPin className={typography.icon.sm} />
                <span className={typography.text.base}>Gothenburg, Sweden</span>
              </div>
              <div className={cn(spacing.flex.row, spacing.gap.sm, "items-center")}>
                <Phone className={typography.icon.sm} />
                <a 
                  href="tel:+46737329083" 
                  className={cn(
                    typography.text.base,
                    "hover:text-white transition-colors duration-300"
                  )}
                >
                  +46 737 329 083
                </a>
              </div>
              <div className={cn(spacing.flex.row, spacing.gap.sm, "items-center")}>
                <Mail className={typography.icon.sm} />
                <a 
                  href="mailto:info@skylandai.se" 
                  className={cn(
                    typography.text.base,
                    "hover:text-white transition-colors duration-300"
                  )}
                >
                  info@skylandai.se
                </a>
              </div>
              <div className={cn(spacing.flex.row, spacing.gap.sm, "items-center")}>
                <Clock className={typography.icon.sm} />
                <span className={typography.text.base}>Mon - Fri: 9:00 - 17:00</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className={cn(spacing.stack.md)}>
            <h3 className={cn(typography.heading.h4, colors.text.primary)}>
              Connect
            </h3>
            <div className={cn(spacing.stack.sm)}>
              <a 
                href="https://linkedin.com/in/joakim-sjöblom-landqvist-91004b42" 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(
                  spacing.flex.row, 
                  spacing.gap.sm,
                  "items-center",
                  "hover:text-white transition-colors duration-300",
                  colors.text.secondary
                )}
              >
                <Linkedin className={typography.icon.sm} />
                <span className={typography.text.base}>Follow us on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={cn(
          "flex flex-col md:flex-row justify-between items-center gap-4",
          "pt-8 border-t border-white/10"
        )}>
          <p className={cn(typography.text.sm, colors.text.secondary)}>
            © {new Date().getFullYear()} Skyland AI. Alla rättigheter förbehållna
          </p>
          <div className={cn(
            "flex flex-wrap gap-4",
            typography.text.sm,
            colors.text.secondary
          )}>
            <Link href="/privacy" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 
