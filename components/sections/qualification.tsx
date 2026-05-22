"use client"

import { useState, useEffect } from "react"
import { ArrowRight, ArrowLeft, CheckCircle2, Gauge } from "lucide-react"

const questions = [
  {
    id: "industry",
    question: "Vilken bransch är du i?",
    type: "select" as const,
    options: [
      "Bygg & Hantverk",
      "Konsulting & Tjänster",
      "E-handel & Retail",
      "Restaurang & Hotell",
      "Hälsa & Skönhet",
      "Transport & Logistik",
      "Fastigheter",
      "Annat",
    ],
  },
  {
    id: "teamSize",
    question: "Hur många är ni i teamet?",
    type: "select" as const,
    options: ["1–3 personer", "4–8 personer", "9–15 personer", "15+ personer"],
  },
  {
    id: "painPoint",
    question: "Vad äter mest av din tid?",
    type: "multi" as const,
    options: [
      "Admin & pappersarbete",
      "Svara på kundförfrågningar",
      "Kunduppföljning",
      "Fakturering & bokföring",
      "Schemaläggning & bokning",
      "Rapportering",
    ],
  },
  {
    id: "currentTools",
    question: "Vilka verktyg använder du idag?",
    type: "multi" as const,
    options: [
      "Excel / Google Sheets",
      "CRM (Hubspot, Salesforce etc.)",
      "Papper & penna",
      "Mejl + kalender",
      "Branschspecifikt system",
      "Ingenting strukturerat",
    ],
  },
  {
    id: "ambition",
    question: "Hur redo är du att förändra hur du jobbar?",
    type: "scale" as const,
    options: ["1", "2", "3", "4", "5"],
    labels: ["Nyfiken", "Redo igår"],
  },
]

function calculateScore(answers: Record<string, string | string[]>): number {
  let score = 0

  // Team size scoring
  const teamSize = answers.teamSize as string
  if (teamSize === "4–8 personer") score += 25
  else if (teamSize === "9–15 personer") score += 30
  else if (teamSize === "15+ personer") score += 20
  else score += 15

  // Pain points — more pain = higher score
  const painPoints = answers.painPoint as string[] || []
  score += Math.min(painPoints.length * 8, 30)

  // Current tools — less structured = more opportunity
  const tools = answers.currentTools as string[] || []
  if (tools.includes("Papper & penna") || tools.includes("Ingenting strukturerat")) score += 15
  else if (tools.includes("Excel / Google Sheets") || tools.includes("Mejl + kalender")) score += 10
  else score += 5

  // Ambition
  const ambition = parseInt(answers.ambition as string || "3")
  score += ambition * 5

  return Math.min(score, 100)
}

function ScoreGauge({ score, sessionUuid }: { score: number, sessionUuid: string }) {
  const getColor = () => {
    if (score >= 75) return "#22c55e"
    if (score >= 50) return "#7ab8b8"
    return "#ef4444"
  }

  const getMessage = () => {
    if (score >= 75) return "Hög potential — ditt företag har mycket att vinna på AI-automation."
    if (score >= 50) return "God potential — det finns tydliga möjligheter att automatisera."
    return "Viss potential — vi kan identifiera specifika områden att börja med."
  }

  const circumference = 2 * Math.PI * 70
  const progress = (score / 100) * circumference
  
  const calendlyUrl = `https://calendly.com/joakim-skylandai/30min${sessionUuid ? `?utm_term=${sessionUuid}` : ""}`

  return (
    <div className="text-center">
      {/* Gauge */}
      <div className="relative w-48 h-48 mx-auto mb-8">
        <svg viewBox="0 0 160 160" className="w-full h-full -rotate-90">
          <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke={getColor()}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-5xl font-bold text-white">{score}</span>
          <span className="text-xs text-white/40 uppercase tracking-wider mt-1">av 100</span>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">Din AI Readiness Score</h3>
      <p className="text-white/48 text-sm max-w-md mx-auto mb-3 font-light">{getMessage()}</p>
      <p className="text-white/32 text-xs max-w-sm mx-auto mb-8 font-light">
        Nästa steg är ett kort strategisamtal där vi pekar ut var ni kan spara mest tid först.
      </p>
      <p className="text-white/24 text-xs max-w-sm mx-auto mb-8 font-light">
        Om vi inte ser ett tydligt case kommer vi säga det direkt.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:scale-[1.02]"
        >
          Boka ditt strategisamtal
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  )
}

export default function QualificationSection() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
  const [showScore, setShowScore] = useState(false)
  const [sessionUuid, setSessionUuid] = useState("")

  useEffect(() => {
    let uuid = localStorage.getItem("skyland_session_uuid");
    if (!uuid) {
      uuid = crypto.randomUUID();
      localStorage.setItem("skyland_session_uuid", uuid);
    }
    setSessionUuid(uuid);
  }, []);

  const question = questions[currentStep]
  const isLastStep = currentStep === questions.length - 1

  const handleSelect = (value: string) => {
    if (question.type === "multi") {
      const current = (answers[question.id] as string[]) || []
      if (current.includes(value)) {
        setAnswers({ ...answers, [question.id]: current.filter((v) => v !== value) })
      } else {
        setAnswers({ ...answers, [question.id]: [...current, value] })
      }
    } else {
      setAnswers({ ...answers, [question.id]: value })
    }
  }

  const canProceed = () => {
    const answer = answers[question.id]
    if (!answer) return false
    if (Array.isArray(answer) && answer.length === 0) return false
    return true
  }

  const handleNext = () => {
    if (isLastStep) {
      setShowScore(true)
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const isSelected = (value: string) => {
    const answer = answers[question.id]
    if (Array.isArray(answer)) return answer.includes(value)
    return answer === value
  }

  const score = calculateScore(answers)

  return (
    <section id="qualification" className="relative py-24 sm:py-32 px-5 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {!showScore ? (
          <>
            {/* Section header */}
            <div className="text-center mb-12">
              <span className="text-xs tracking-[0.3em] uppercase text-[#7ab8b8] font-medium">
                AI Readiness
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4 gradient-text leading-tight">
                Passar AI-automation för dig?
              </h2>
              <p className="text-white/54 text-base font-light max-w-xl mx-auto">
                Svara på {questions.length} snabba frågor och se om det finns
                tillräckligt tydliga problem i arbetssättet för att automation ska
                ge verklig effekt. Tar under 60 sekunder.
              </p>
              <p className="text-white/28 text-xs sm:text-sm font-light max-w-lg mx-auto mt-4">
                Om du kvalificerar får du nästa steg och vår ärliga bedömning av om det finns tillräcklig effekt att hämta hem.
              </p>
            </div>

            {/* Progress bar */}
            <div className="mb-8 sm:mb-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-white/30">
                  Fråga {currentStep + 1} av {questions.length}
                </span>
                <span className="text-xs text-white/30">
                  {Math.round(((currentStep + 1) / questions.length) * 100)}%
                </span>
              </div>
              <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#5b8a8a] to-[#7ab8b8] rounded-full transition-all duration-500"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question card */}
            <div className="glass-card rounded-2xl p-5 sm:p-10">
              <h3 className="text-lg sm:text-2xl font-semibold text-white mb-6 sm:mb-8 leading-snug">
                {question.question}
              </h3>

              {/* Options */}
              <div className={`grid gap-2.5 sm:gap-3 ${question.type === "scale" ? "grid-cols-5" : "grid-cols-1 sm:grid-cols-2"}`}>
                {question.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`text-left px-4 sm:px-5 py-4 rounded-xl border transition-all duration-300 text-sm ${
                      isSelected(option)
                        ? "border-[#7ab8b8]/50 bg-[#5b8a8a]/10 text-white"
                        : "border-white/[0.06] bg-white/[0.02] text-white/50 hover:border-white/[0.12] hover:bg-white/[0.04] hover:text-white/70"
                    } ${question.type === "scale" ? "text-center" : ""}`}
                  >
                    {question.type === "scale" ? (
                      <span className="text-xl sm:text-2xl font-bold">{option}</span>
                    ) : (
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center ${
                          isSelected(option) ? "border-[#7ab8b8] bg-[#7ab8b8]" : "border-white/20"
                        }`}>
                          {isSelected(option) && <CheckCircle2 className="w-3 h-3 text-white" />}
                        </div>
                        {option}
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Scale labels */}
              {question.type === "scale" && question.labels && (
                <div className="flex justify-between mt-2 px-2">
                  <span className="text-xs text-white/25">{question.labels[0]}</span>
                  <span className="text-xs text-white/25">{question.labels[1]}</span>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 sm:mt-10 gap-4">
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className={`flex items-center gap-2 text-sm text-white/40 hover:text-white/60 transition-colors shrink-0 ${
                    currentStep === 0 ? "invisible" : ""
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Tillbaka
                </button>
                <button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className={`flex items-center gap-3 px-5 sm:px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    canProceed()
                      ? "bg-white text-black hover:bg-white/90 hover:scale-[1.02]"
                      : "bg-white/10 text-white/20 cursor-not-allowed"
                  }`}
                >
                  {isLastStep ? "Se mitt resultat" : "Nästa"}
                  {isLastStep ? <Gauge className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Score display */
          <div className="glass-card rounded-2xl p-10 sm:p-14">
            <ScoreGauge score={score} sessionUuid={sessionUuid} />
          </div>
        )}
      </div>
    </section>
  )
}
