"use client"

import { ReactNode, useEffect } from "react"
import dynamic from "next/dynamic"
import HeroSection from "@/components/sections/hero"
import ProblemSection from "@/components/sections/problem"
import SocialProofSection from "@/components/sections/social-proof"
import FinalCTASection from "@/components/sections/final-cta"
import Footer from "@/components/sections/footer"
import SectionHeader from "@/components/sections/section-header"
import ScrollToTop from "@/components/ui/scroll-to-top"

// Dynamically import the background with no SSR (WebGL/canvas)
const FixedBackground = dynamic(
  () => import("@/components/ui/fixed-background"),
  { ssr: false }
)

// Dynamically import ElevenLabs widget (client-only)
const ElevenLabsWidget = dynamic(
  () => import("@/components/ui/elevenlabs-widget"),
  { ssr: false }
)

function SectionShell({
  children,
  reveal = false,
  sectionId,
  hero = false,
}: {
  children: ReactNode
  reveal?: boolean
  sectionId: string
  hero?: boolean
}) {
  return (
    <div
      data-snap-panel
      className={`section-stage snap-start snap-always${reveal ? " scroll-reveal" : ""}`}
    >
      <div className="section-glass-panel">
        <SectionHeader currentSection={sectionId} hero={hero} />
        <div className="section-panel-body">{children}</div>
      </div>
    </div>
  )
}

export default function Home() {
  // Scroll-reveal observer — adds 'revealed' class when sections enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    )

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Fixed background layer */}
      <FixedBackground />

      {/* Glass content layer */}
      <div className="relative z-[1]">
        <main>
          <SectionShell sectionId="hero" hero>
            <HeroSection />
          </SectionShell>

          <SectionShell sectionId="problem" reveal>
            <ProblemSection />
          </SectionShell>

          <SectionShell sectionId="proof" reveal>
            <SocialProofSection />
          </SectionShell>

          <SectionShell sectionId="contact" reveal>
            <FinalCTASection />
          </SectionShell>
        </main>
        <Footer />
      </div>

      {/* Scroll to top — bottom-left, avoids agent widget */}
      <ScrollToTop />

      {/* ElevenLabs Conversational AI Widget — bottom-right */}
      <ElevenLabsWidget />
    </>
  )
}
