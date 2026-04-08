"use client"

import { Check, PhoneCall } from "lucide-react"
import AlexCTAButton from "@/components/ui/alex-cta-button"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-full flex-1 items-center justify-center px-5 py-10 sm:px-6 sm:py-16"
    >
      <div className="hero-focus" />
      <div className="max-w-5xl mx-auto text-center stagger-children w-full">
        <div className="eyebrow-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.22em] sm:tracking-[0.28em] text-[rgba(169,209,209,0.82)] mb-6 sm:mb-7">
          För företag med återkommande kunddialog och administration
        </div>

        {/* Pain-driven headline */}
        <h1 className="text-[2.35rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] sm:leading-[1.05] tracking-tight mb-6 sm:mb-8">
          <span className="gradient-text">Du förlorar kunder</span>
          <br />
          <span className="gradient-text">medan du svarar</span>
          <br />
          <span className="gradient-accent">på mejl</span>
        </h1>

        {/* Value proposition — one sentence */}
        <p className="text-[1rem] sm:text-xl text-white/58 max-w-3xl mx-auto leading-relaxed mb-5 sm:mb-6 font-light">
          Vi bygger AI-system som hjälper företag att skapa nya kunder,
          hantera kundförfrågningar, följa upp snabbare och minska administrationen,
          så att du kan fokusera på försäljning,
          leverans och tillväxt.
        </p>

        <p className="proof-inline text-[13px] sm:text-[15px] max-w-2xl mx-auto mb-9 sm:mb-12 font-light leading-relaxed">
          Ingen generisk AI-demo. Vi designar ett konkret system runt hur ditt
          företag faktiskt jobbar idag.
        </p>

        <p className="text-white/30 text-[12px] sm:text-[13px] max-w-xl mx-auto mb-8 sm:mb-10 font-light">
          Alex ställer några korta frågor och visar om det finns ett tydligt upplägg
          för ert företag, utan formulär och utan att du behöver boka ett möte först.
        </p>

        <div className="mb-8 sm:mb-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs">
          {[
            "För svenska SME med återkommande kundförfrågningar och administration",
            "Ingen generell produktdemo",
            "Först affärsbedömning, sedan implementation",
          ].map((item) => (
            <div
              key={item}
              className="rounded-full border border-[rgba(169,209,209,0.14)] bg-[rgba(10,18,23,0.55)] px-3.5 py-2 text-white/58"
            >
              {item}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <AlexCTAButton
            label="Prata med Alex"
            sublabel="kvalificering på cirka 60 sekunder"
            className="group cta-glow cta-primary-premium flex items-center justify-center gap-3 px-6 sm:px-8 py-4 rounded-full bg-[#8fd3d3] text-[#041012] font-medium text-sm hover:bg-[#a5dddd] transition-all duration-300 hover:shadow-[0_0_40px_rgba(143,211,211,0.22)] hover:scale-[1.02]"
          />
          <a
            href="https://calendly.com/joakim-skylandai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary-premium flex items-center gap-3 px-6 sm:px-8 py-4 rounded-full glass hover:text-white font-medium text-sm transition-all duration-300 hover:bg-white/[0.06]"
          >
            <PhoneCall className="w-4 h-4" />
            Boka 15 min samtal
          </a>
        </div>

        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-2.5 sm:gap-6 text-xs sm:text-sm max-w-sm sm:max-w-none mx-auto">
          {[
            "Röst eller text med Alex",
            "Tydlig bedömning innan nästa steg",
            "Direktbokning om du vill hoppa över agenten",
          ].map((item) => (
            <div key={item} className="proof-inline flex items-center gap-2 w-full sm:w-auto">
              <Check className="h-3.5 w-3.5 text-[rgba(122,184,184,0.9)]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
