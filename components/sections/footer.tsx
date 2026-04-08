"use client"

import { Zap } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#5b8a8a] to-[#7ab8b8]">
              <Zap className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-sm font-semibold tracking-tight text-white/52">
              Skyland <span className="text-[rgba(169,209,209,0.72)] font-light">AI Systems</span>
            </span>
          </a>

          {/* Copyright */}
          <p className="text-xs text-white/15 font-light">
            © {new Date().getFullYear()} Skyland AI Systems. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  )
}
