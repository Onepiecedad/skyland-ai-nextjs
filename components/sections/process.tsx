"use client"

import { Search, FileText, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Kvalificering",
    description: "Vi identifierar var verksamheten kan vinna mest i tid, kvalitet eller intäkter och om det finns ett tydligt underlag för implementation. Gratis och utan förpliktelser.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Rekommendation",
    description: "Du får ett konkret förslag med prioritet, upplägg, tidsram och förväntad effekt. Tydligt, avgränsat och anpassat till verksamheten.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Leverans & Support",
    description: "Vi bygger, testar och driver lösningen tills den fungerar i vardagen. Löpande support ingår och du har noll teknikansvar.",
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-[#7ab8b8] font-medium">
            Hur det funkar
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 gradient-text leading-tight">
            Tre steg.<br />
            <span className="gradient-accent">Tydligt genomförande.</span>
          </h2>
          <p className="text-white/44 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Du behöver inte driva ett teknikprojekt internt. Du behöver bara ta ställning till rätt prioritering först.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="glass-card process-card rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start gap-8 group relative"
            >
              {/* Step number */}
              <div className="flex items-center gap-5 shrink-0">
                <span className="text-4xl font-bold text-[#5b8a8a]/20 group-hover:text-[#5b8a8a]/40 transition-colors duration-300">
                  {step.number}
                </span>
                <div className="w-14 h-14 rounded-xl bg-[#5b8a8a]/10 flex items-center justify-center group-hover:bg-[#5b8a8a]/20 transition-colors duration-300">
                  <step.icon className="w-7 h-7 text-[#7ab8b8]" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white/48 text-sm leading-relaxed font-light">{step.description}</p>
              </div>

              {/* Connector line (not on last) */}
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute -bottom-3 left-[4.5rem] w-px h-6 bg-gradient-to-b from-white/[0.06] to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-white/25 text-sm font-light">
            Du behöver inte bygga eller driva tekniken internt. <span className="text-white/50">Vi ansvarar för genomförandet.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
