"use client"

import { Mic } from "lucide-react"

type AlexCTAButtonProps = {
  className?: string
  label?: string
  sublabel?: string
}

export default function AlexCTAButton({
  className = "",
  label = "Prata med Alex",
  sublabel,
}: AlexCTAButtonProps) {
  const openAgent = () => {
    const widget = document.querySelector("elevenlabs-convai") as HTMLElement | null
    if (widget) {
      widget.click()
      widget.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    }
  }

  return (
    <button
      type="button"
      onClick={openAgent}
      className={className}
      aria-label={label}
    >
      <Mic className="h-4 w-4 shrink-0" />
      <span>{label}</span>
      {sublabel ? <span className="text-white/48">{sublabel}</span> : null}
    </button>
  )
}
