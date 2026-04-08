"use client"

import { MessageSquare, Users, Workflow, ArrowRight } from "lucide-react"

const pillars = [
  {
    icon: MessageSquare,
    title: "Hantera fler förfrågningar innan de tappar värde",
    built: "AI-assistent för inkommande kundförfrågningar, kvalificering och bokning",
    pain: "Du missar förfrågningar för att du inte hinner svara i tid.",
    transformation: "AI svarar på 30 sekunder dygnet runt, kvalificerar nya kundförfrågningar och bokar möten automatiskt.",
    result: "2x fler bokade samtal",
    resultColor: "text-emerald-400",
  },
  {
    icon: Users,
    title: "Skapa struktur i uppföljning och kunddialog",
    built: "Automatiserad uppföljningslogik och kundkommunikation",
    pain: "Uppföljning blir ojämn och kunddialogen tappar kontinuitet.",
    transformation: "Automatisk uppföljning med personlig kommunikation. Varje kund känner sig sedd — utan att du lyfter ett finger.",
    result: "95% nöjdhetsgrad",
    resultColor: "text-emerald-400",
  },
  {
    icon: Workflow,
    title: "Automatisera det ni redan gör om och om igen",
    built: "Adminflöden för rapportering, fakturor och dataregistrering",
    pain: "Du gör samma manuella arbete 50 gånger om dagen.",
    transformation: "Fakturor, rapporter, admin, dataregistrering — allt som upprepas blir automatiserat.",
    result: "15h/vecka frigjord",
    resultColor: "text-emerald-400",
  },
  {
    icon: MessageSquare,
    title: "Skapa fler kvalificerade kundförfrågningar",
    built: "Automatiserade flöden för att generera och fånga nya affärer",
    pain: "Det räcker inte att arbeta effektivt internt om inflödet av nya affärer är för svagt.",
    transformation: "Vi bygger system som hjälper dig att skapa fler relevanta kundförfrågningar och följa upp dem snabbt och strukturerat.",
    result: "starkare inflöde av nya affärer",
    resultColor: "text-emerald-400",
  },
]

export default function SolutionSection() {
  return (
    <section id="solution" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-[#7ab8b8] font-medium">
            Lösningen
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 gradient-text leading-tight">
            Vi bygger system för det som<br />
            <span className="gradient-accent">tar tid i onödan.</span>
          </h2>
          <p className="text-white/48 text-lg max-w-2xl mx-auto font-light">
            Vi bygger inte breda AI-initiativ. Vi bygger tydliga system för att skapa nya affärer, följa upp kunder snabbare och minska manuell administration.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="glass-card pillar-card rounded-2xl p-8 flex flex-col group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#5b8a8a]/10 flex items-center justify-center mb-6 group-hover:bg-[#5b8a8a]/20 transition-colors duration-300">
                <pillar.icon className="w-6 h-6 text-[#7ab8b8]" />
              </div>

              {/* Title */}
              <div className="mb-4 text-[10px] uppercase tracking-[0.24em] text-[rgba(169,209,209,0.62)]">
                Område {i + 1}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{pillar.title}</h3>
              <p className="text-[12px] uppercase tracking-[0.18em] text-white/34 mb-6">
                {pillar.built}
              </p>

              {/* Pain → Transformation → Result flow */}
              <div className="space-y-4 flex-1">
                {/* Pain */}
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400/50 mt-2 shrink-0" />
                  <p className="text-white/38 text-sm leading-relaxed font-light">{pillar.pain}</p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center py-1">
                  <ArrowRight className="w-4 h-4 text-white/15 rotate-90" />
                </div>

                {/* Transformation */}
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7ab8b8]/60 mt-2 shrink-0" />
                  <p className="text-white/56 text-sm leading-relaxed">{pillar.transformation}</p>
                </div>
              </div>

              {/* Result badge */}
              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <span className="mr-3 text-[10px] uppercase tracking-[0.22em] text-white/28">
                  Resultat
                </span>
                <span className={`text-lg font-bold ${pillar.resultColor}`}>
                  → {pillar.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
