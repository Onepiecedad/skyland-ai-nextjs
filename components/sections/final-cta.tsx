"use client"

import { PhoneCall, Shield } from "lucide-react"
import AlexCTAButton from "@/components/ui/alex-cta-button"

export default function FinalCTASection() {
  return (
    <section id="contact" className="relative flex h-full items-start px-5 py-4 sm:px-6 sm:py-5">
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Scarcity badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7ab8b8]/20 bg-[#5b8a8a]/5 mb-6 sm:mb-8 badge-pulse">
          <Shield className="w-3.5 h-3.5 text-[#7ab8b8]" />
          <span className="text-xs tracking-widest uppercase text-[#7ab8b8]/80 font-medium">
            Max 3 nya kunder per kvartal
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-[2.9rem] lg:text-[3.3rem] font-bold mb-4 leading-[1.05]">
          <span className="gradient-text">Dina konkurrenter</span>
          <br />
          <span className="gradient-accent">automatiserar redan.</span>
        </h2>

        {/* Subtext */}
        <p className="text-white/54 text-base sm:text-[17px] max-w-2xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed">
          Om ni har ett tydligt behov kan Alex hjälpa er att avgöra nästa steg direkt.
          Om ni redan vet vad ni behöver kan ni boka ett samtal med Joakim direkt.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <AlexCTAButton
            label="Prata med Alex"
            sublabel="få en snabb bedömning direkt"
            className="group cta-glow cta-primary-premium flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-[#8fd3d3] text-[#041012] font-medium text-base hover:bg-[#a5dddd] transition-all duration-300 hover:shadow-[0_0_60px_rgba(143,211,211,0.22)] hover:scale-[1.02]"
          />
          <a
            href="https://calendly.com/joakim-skylandai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary-premium flex items-center gap-3 px-10 py-5 rounded-full glass hover:text-white font-medium text-base transition-all duration-300 hover:bg-white/[0.06]"
          >
            <PhoneCall className="w-4 h-4" />
            Boka samtal direkt
          </a>
        </div>

        <div className="mt-6 sm:mt-7 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
          {[
            ["Steg 1", "Alex ställer några korta frågor om verksamheten."],
            ["Steg 2", "Du får en första bedömning av upplägg och nästa steg."],
            ["Steg 3", "Om det passar bokar du samtal eller går vidare direkt."],
          ].map(([title, body]) => (
            <div key={title} className="glass rounded-2xl px-4 py-3.5">
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#7ab8b8]/70 font-medium mb-2">
                {title}
              </div>
              <p className="text-[13px] text-white/58 leading-relaxed font-light">{body}</p>
            </div>
          ))}
        </div>

        {/* Trust signal */}
        <p className="text-white/28 text-xs mt-7 sm:mt-8 font-light">
          Alex kan svara direkt · Samtal med Joakim vid behov · Tydligt nästa steg
        </p>
      </div>
    </section>
  )
}
