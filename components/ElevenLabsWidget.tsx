
'use client'

import { useEffect, useRef } from 'react'

export default function ElevenLabsWidget() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tag = 'elevenlabs-convai'
    const scriptId = 'elevenlabs-widget-script'

    if (!ref.current) return

    // 1. Create widget with all attributes
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

    // 2. Add to DOM first
    ref.current.innerHTML = ''
    ref.current.appendChild(el)

    // 3. Load script afterwards
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.src = 'https://elevenlabs.io/convai-widget/index.js'
      script.async = true
      script.id = scriptId
      document.body.appendChild(script)
    }
  }, [])

  return <div ref={ref} className="w-full min-h-[400px]" />
}
