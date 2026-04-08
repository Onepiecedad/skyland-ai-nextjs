"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Tillbaka till toppen"
      className={`fixed bottom-8 left-8 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer
        bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm
        hover:bg-white/[0.12] hover:border-white/[0.2] hover:shadow-[0_0_24px_rgba(122,184,184,0.2)]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <ChevronUp className="w-5 h-5 text-white/60" />
    </button>
  )
}
