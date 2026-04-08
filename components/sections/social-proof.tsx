"use client"

import { ArrowUpRight, Quote } from "lucide-react"

const caseStudies = [
  {
    company: "Cold Experience",
    industry: "Turism & Upplevelser",
    url: "https://www.coldexperience.se",
    built: "Bokningsassistent + automatisk kvalificering av kundförfrågningar",
    problem: "Missade bokningsförfrågningar under högsäsong. Manuell hantering av mejl och telefon räckte inte till — gäster gick till konkurrenter.",
    solution: "AI-driven bokningsassistent som svarar direkt på förfrågningar, kvalificerar gäster och bokar in upplevelser automatiskt.",
    results: [
      { metric: "3x", label: "fler bokningar under högsäsong" },
      { metric: "< 30s", label: "svarstid på förfrågningar" },
      { metric: "12h", label: "frigjord tid per vecka" },
    ],
  },
  {
    company: "MarinMekaniker",
    industry: "Mobil Marinservice",
    url: "https://www.marinmekaniker.nu",
    built: "Automatiserad kundhantering + smart schemaläggning",
    problem: "Thomas tog alla samtal själv ute i fält. Leads gick förlorade och bokningar blev onödigt svåra att hålla ihop.",
    solution: "Automatiserad kundhantering med smart schemaläggning. Kunder bokar direkt, systemet prioriterar och bekräftar.",
    results: [
      { metric: "95%", label: "av kundförfrågningar får svar inom 1 min" },
      { metric: "2x", label: "fler jobb bokade per vecka" },
      { metric: "0", label: "missade kundsamtal" },
    ],
  },
  {
    company: "Hasselblads Livs",
    industry: "Livsmedel & E-handel",
    url: "https://www.hasselbladslivs.se",
    built: "Produktsynk + webshop-automation",
    problem: "150 år av tradition — men produktlistan hanterades manuellt. Tusentals varor att synka mellan butik och webshop.",
    solution: "Automatiserad produktsynkronisering och webshop-hantering. 1000+ produkter uppdateras i realtid utan manuellt arbete.",
    results: [
      { metric: "1062", label: "produkter synkade automatiskt" },
      { metric: "8h", label: "admin-tid sparad per vecka" },
      { metric: "100%", label: "korrekt lagerstatus online" },
    ],
  },
]

export default function SocialProofSection() {
  return (
    <section id="proof" className="relative flex h-full items-start px-5 py-4 sm:px-6 sm:py-5">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section header */}
        <div className="text-center mb-7 sm:mb-8">
          <span className="text-xs tracking-[0.3em] uppercase text-[#7ab8b8] font-medium">
            Resultat
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.7rem] font-bold mt-3 mb-4 gradient-text leading-[1.05]">
            Tre exempel där manuella processer<br />
            <span className="gradient-accent">ersattes med fungerande system.</span>
          </h2>
          <p className="text-white/44 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Verkliga uppdrag, konkreta lösningar och tydliga resultat.
          </p>
          <p className="text-white/26 text-[11px] sm:text-xs max-w-xl mx-auto font-light mt-3">
            Varje exempel visar vad som stoppade tillväxten, vad som byggdes och vad det gav i praktiken.
          </p>
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {caseStudies.map((study, i) => (
            <div
              key={i}
              className="glass-card case-card rounded-2xl p-5 sm:p-6 flex flex-col group"
            >
              {/* Quote icon */}
              <Quote className="w-6 h-6 text-[#7ab8b8]/20 mb-4" />

              {/* Company info */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">{study.company}</h3>
                  <p className="text-[10px] sm:text-[11px] text-white/30 uppercase tracking-wider">{study.industry}</p>
                </div>
                <a
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/20 hover:text-white/50 transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Problem */}
              <div className="mb-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-red-400/50 font-medium">Före</span>
                <p className="text-white/38 text-[13px] leading-relaxed mt-1 font-light">{study.problem}</p>
              </div>

              <div className="mb-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/32 font-medium">Byggt</span>
                <p className="text-white/68 text-[13px] leading-relaxed mt-1 font-medium">{study.built}</p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#7ab8b8]/60 font-medium">Efter</span>
                <p className="text-white/56 text-[13px] leading-relaxed mt-1">{study.solution}</p>
              </div>

              {/* Results */}
              <div className="mt-auto pt-4 border-t border-white/[0.06] grid grid-cols-3 gap-2">
                {study.results.map((result, j) => (
                  <div key={j} className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-emerald-400">{result.metric}</div>
                    <div className="text-[10px] text-white/30 mt-1 leading-tight">{result.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
