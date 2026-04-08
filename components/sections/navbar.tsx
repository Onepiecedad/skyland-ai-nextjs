"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Problemet", href: "#problem" },
  { label: "Lösningen", href: "#solution" },
  { label: "Resultat", href: "#proof" },
  { label: "Hur det funkar", href: "#process" },
  { label: "FAQ", href: "#faq" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div
        className={`absolute inset-x-0 top-0 h-28 sm:h-32 transition-opacity duration-500 ${
          isScrolled ? "opacity-100" : "opacity-70"
        }`}
        aria-hidden="true"
      >
        <div className="bg-steel-nav h-full w-full" />
      </div>

      <div className="pointer-events-auto mx-auto max-w-7xl px-6 pt-4 sm:px-8 sm:pt-5">
        <div className="flex items-center justify-between gap-6 border-b border-white/[0.08] pb-3 sm:pb-4">
          <a
            href="#hero"
            className="text-[12px] sm:text-[13px] font-medium tracking-[0.24em] uppercase text-white/78 hover:text-white transition-colors duration-300"
          >
            Skyland AI Systems
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/54 hover:text-white transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#qualification"
              className="rounded-full border border-white/14 bg-white/95 px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-white"
            >
              Kvalificera dig
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden rounded-full border border-white/10 bg-white/[0.04] p-2 text-white/78 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-3 rounded-[20px] border border-[rgba(169,209,209,0.12)] bg-[rgba(8,14,18,0.72)] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm tracking-wide text-white/68 hover:bg-white/[0.05] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#qualification"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 block rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-black"
            >
              Kvalificera dig
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
