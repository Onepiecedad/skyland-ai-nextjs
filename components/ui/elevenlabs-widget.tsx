"use client"

import { useEffect } from "react"

export default function ElevenLabsWidget() {
  useEffect(() => {
    // Create the custom element
    const widget = document.createElement("elevenlabs-convai")
    widget.setAttribute("agent-id", "TDgRNcUoUC1GHVKK0bHH")
    widget.style.position = "fixed"
    widget.style.right = "clamp(16px, 2.4vw, 28px)"
    widget.style.bottom = "clamp(16px, 2.4vw, 28px)"
    widget.style.zIndex = "45"
    widget.style.transform = "scale(1.08)"
    widget.style.transformOrigin = "bottom right"
    document.body.appendChild(widget)

    // Load the script
    const script = document.createElement("script")
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed"
    script.async = true
    document.body.appendChild(script)

    return () => {
      widget.remove()
      script.remove()
    }
  }, [])

  return null
}
