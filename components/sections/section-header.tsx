"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import AlexCTAButton from "@/components/ui/alex-cta-button"

const navLinks = [
  { label: "Problemet", href: "#problem" },
  { label: "Resultat", href: "#proof" },
  { label: "Kontakt", href: "#final-cta" },
]

type SectionHeaderProps = {
  currentSection: string
  hero?: boolean
}

export default function SectionHeader({
  currentSection,
  hero = false,
}: SectionHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="section-panel-header">
      <div className="flex items-center justify-between gap-4 sm:gap-6 border-b border-white/[0.08] pb-3 sm:pb-4">
        <a
          href="#hero"
          className="text-[10px] sm:text-[13px] font-medium tracking-[0.18em] sm:tracking-[0.24em] uppercase text-white/78 hover:text-white transition-colors duration-300"
        >
          Skyland AI Systems
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = currentSection === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative pb-2 text-sm tracking-wide transition-colors duration-300 ${
                  isActive ? "text-white" : "text-white/54 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-0 -bottom-px h-px origin-center transition-all duration-300 ${
                    isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 50%, transparent 100%)",
                  }}
                />
              </a>
            )
          })}
          <AlexCTAButton
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              hero
                ? "bg-[#8fd3d3] text-[#041012] hover:bg-[#a5dddd]"
                : "bg-[rgba(143,211,211,0.12)] text-[#dff7f7] border border-[rgba(143,211,211,0.22)] hover:bg-[rgba(143,211,211,0.18)]"
            }`}
          />
        </div>

        <button
          className="md:hidden rounded-full border border-white/10 bg-white/[0.04] p-2.5 text-white/78 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-3 rounded-[20px] border border-[rgba(169,209,209,0.12)] bg-[rgba(8,14,18,0.72)] p-3.5 sm:p-4 shadow-[0_24px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block rounded-2xl px-4 py-3.5 text-sm tracking-wide transition-colors ${
                  currentSection === link.href.slice(1)
                    ? "bg-white/[0.06] text-white"
                    : "text-white/68 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <AlexCTAButton
            className="mt-4 w-full rounded-full bg-[#8fd3d3] px-5 py-3.5 text-center text-sm font-medium text-[#041012] flex items-center justify-center gap-2"
          />
        </div>
      </div>
    </div>
  )
}
