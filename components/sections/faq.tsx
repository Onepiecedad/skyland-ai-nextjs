"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Vad kostar det?",
    answer: "Det beror på omfattningen, men typisk ROI är 3–5x inom 6 månader. Vi börjar alltid med en gratis analys av din verksamhet så du vet exakt vad du får — innan du spenderar en krona. Inget lockpris, inga dolda avgifter.",
  },
  {
    question: "Vad får jag efter första samtalet?",
    answer: "Du får inte en allmän presentation. Du får vår bedömning av var automation kan ge störst effekt först, vilka processer som är mest rimliga att börja med och om det finns ett tydligt affärsmässigt underlag.",
  },
  {
    question: "Funkar det för min bransch?",
    answer: "Vi har byggt lösningar för turism, marinservice, livsmedel, konsulting och mer. Om ditt företag har repetitiva processer, kundkommunikation eller administration — ja, det funkar. Vi säger till om vi inte kan hjälpa dig.",
  },
  {
    question: "Hur lång tid tar det?",
    answer: "De flesta system är igång inom 2–4 veckor. Enklare automationer kan vara live på dagar. Du får en tydlig tidsplan redan i blueprint-fasen — inga vaga löften.",
  },
  {
    question: "Är det säkert? Vad händer med min data?",
    answer: "All data lagras inom EU. Vi bygger med enterprise-grade säkerhet och GDPR-compliance som standard. Du äger alltid din data — vi hanterar den bara.",
  },
  {
    question: "Vad händer om det inte funkar?",
    answer: "Vi bygger iterativt — du ser och testar allt under resans gång. Om du inte är nöjd med resultatet efter implementeringen, fortsätter vi tills du är det. Ingen risk.",
  },
  {
    question: "Passar ni alla företag?",
    answer: "Nej. Vi är mest värdefulla för bolag där leads, kunddialog, administration eller upprepade arbetsflöden redan påverkar tillväxt eller lönsamhet. Om vi inte tror att automation kommer ge tydlig effekt säger vi det tidigt.",
  },
  {
    question: "Behöver jag teknisk kunskap?",
    answer: "Absolut inte. Hela poängen är att du slipper teknik. Vi bygger, konfigurerar och underhåller — du använder. Om du kan skicka ett mejl kan du använda våra system.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-[#7ab8b8] font-medium">
            Vanliga frågor
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 gradient-text leading-tight">
            Svar innan du frågar.
          </h2>
          <p className="text-white/42 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Det sista hindret brukar inte vara teknik. Det brukar vara osäkerhet kring risk, pris och tid.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-sm sm:text-base font-medium text-white/80 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[rgba(169,209,209,0.5)] shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openIndex === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-sm text-white/48 leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
