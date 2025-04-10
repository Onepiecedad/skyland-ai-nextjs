
'use client'

import { useEffect, useRef, useState } from 'react'

export default function ElevenLabsWidget() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scriptInjected, setScriptInjected] = useState(false)

  useEffect(() => {
    const tag = 'elevenlabs-convai'
    const scriptId = 'elevenlabs-widget-script'

    if (!containerRef.current) return

    containerRef.current.innerHTML = ''

    const el = document.createElement(tag)
    el.setAttribute('agent-id', '4mN4rizdi79gwLhFxlOu')
    el.setAttribute('mode', 'embedded')
    Object.assign(el.style, {
      display: 'block',
      width: '100%',
      background: 'transparent',
      borderRadius: '12px',
      maxHeight: '600px',
    })

    containerRef.current.appendChild(el)

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.src = 'https://elevenlabs.io/convai-widget/index.js'
      script.async = true
      script.id = scriptId
      script.onload = () => {
        const rogueBtn = document.querySelector('[style*="bottom"] button')
        if (rogueBtn) rogueBtn.closest('[style*="bottom"]')?.remove()
      }
      document.body.appendChild(script)
      setScriptInjected(true)
    } else if (!scriptInjected) {
      const rogue = document.querySelector('[style*="bottom"] button')
      if (rogue) rogue.closest('[style*="bottom"]')?.remove()
      setScriptInjected(true)
    }
  }, [scriptInjected])

  return <div ref={containerRef} className="w-full min-h-[400px] mx-auto" />
}
