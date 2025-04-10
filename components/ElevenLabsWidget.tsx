
'use client'

import { useEffect, useRef } from 'react'

export default function ElevenLabsWidget() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const scriptId = 'elevenlabs-widget-script'
    const widgetTag = 'elevenlabs-convai'

    if (!containerRef.current) return

    // 1. Create ElevenLabs element manually
    const widget = document.createElement(widgetTag)
    widget.setAttribute('agent-id', '4mN4rizdi79gwLhFxlOu')
    widget.setAttribute('mode', 'embedded')
    widget.style.display = 'block'
    widget.style.width = '100%'
    widget.style.background = 'transparent'
    widget.style.borderRadius = '12px'
    widget.style.maxHeight = '600px'

    // 2. Add to DOM first
    containerRef.current.innerHTML = ''
    containerRef.current.appendChild(widget)

    // 3. Load ElevenLabs script last
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.src = 'https://elevenlabs.io/convai-widget/index.js'
      script.async = true
      script.id = scriptId
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full max-w-md mx-auto min-h-[500px]"
    />
  )
}
