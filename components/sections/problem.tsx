"use client"

import { useEffect, useRef, useState } from "react"
import { Clock, UserX, TrendingDown, AlertTriangle } from "lucide-react"

function AnimatedNumber({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="gradient-accent font-bold">
      {prefix}{count.toLocaleString("sv-SE")}{suffix}
    </span>
  )
}

const painPoints = [
  {
    icon: Clock,
    stat: { target: 195000, prefix: "", suffix: " kr" },
    label: "i möjlig adminkostnad per år",
    description: "Exempel: 10 timmar admin per vecka × 52 veckor × 375 kr/h. För många ägarledda bolag är det här inte ovanligt.",
  },
  {
    icon: UserX,
    stat: { target: 23, prefix: "", suffix: "%" },
    label: "kan gå förlorade utan snabb respons",
    description: "När inkommande förfrågningar blir liggande tappar många bolag tempo direkt i säljprocessen. Fördröjningen kostar ofta mer än man tror.",
  },
  {
    icon: TrendingDown,
    stat: { target: 30, prefix: "", suffix: "%" },
    label: "riskerar att falla bort i uppföljning",
    description: "Uppföljning uteblir sällan av ovilja. Den uteblir när vardagen blir full och det saknas en tydlig process.",
  },
  {
    icon: AlertTriangle,
    stat: { target: 520, prefix: "", suffix: "h" },
    label: "kan frigöras från repetitivt arbete",
    description: "Fakturor, mejl, bokningar och rapporter är inte strategiskt arbete. De är ofta första stället där automation ger tydlig effekt.",
  },
]

export default function ProblemSection() {
  return (
    <section id="problem" className="relative flex h-full items-start px-5 py-4 sm:px-6 sm:py-5">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section header */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-[11px] tracking-[0.26em] uppercase text-[#7ab8b8] font-medium">
            Problemet ingen pratar om
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.55rem] font-bold mt-3 mb-3 gradient-text leading-[1.05]">
            Varje dag utan automatisering
            <br />
            <span className="gradient-accent">kostar dig pengar.</span>
          </h2>
          <p className="text-white/46 text-sm sm:text-base max-w-2xl mx-auto font-light">
            De flesta vet att de slösar tid. Få har räknat på vad friktionen faktiskt kostar.
          </p>
        </div>

        <div className="section-note mb-4 sm:mb-5 text-center text-[10px] sm:text-xs font-light tracking-[0.08em] uppercase">
          Scenario-baserade estimat. Syftet är inte en exakt procentsats, utan att synliggöra var resurser och intäkter går förlorade.
        </div>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="glass-card metric-card rounded-2xl p-4 sm:p-5 group"
            >
              {/* Icon */}
              <div className="w-9 h-9 rounded-xl bg-[#5b8a8a]/10 flex items-center justify-center mb-3 group-hover:bg-[#5b8a8a]/20 transition-colors duration-300">
                <point.icon className="w-4.5 h-4.5 text-[#7ab8b8]" />
              </div>

              {/* Animated stat */}
              <div className="text-[1.75rem] sm:text-[2rem] mb-1">
                <AnimatedNumber
                  target={point.stat.target}
                  suffix={point.stat.suffix}
                  prefix={point.stat.prefix}
                />
              </div>
              <p className="text-white/50 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.16em] mb-2.5">
                {point.label}
              </p>

              {/* Description */}
              <p className="text-white/42 text-[12px] sm:text-[13px] leading-relaxed font-light max-w-[34ch] sm:max-w-none">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
