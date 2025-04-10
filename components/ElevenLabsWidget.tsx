
'use client'

import { useEffect, useRef } from 'react'

export default function ElevenLabsWidget() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const scriptId = 'elevenlabs-widget-script'
    const widgetTag = 'elevenlabs-convai'

    const injectWidget = () => {
      if (!containerRef.current) return
      containerRef.current.innerHTML = ''

      const widget = document.createElement(widgetTag)
      widget.setAttribute('agent-id', '4mN4rizdi79gwLhFxlOu')
      widget.setAttribute('mode', 'embedded')
      widget.style.display = 'block'
      widget.style.width = '100%'
      widget.style.background = 'transparent'
      widget.style.borderRadius = '12px'
      widget.style.maxHeight = '600px'

      containerRef.current.appendChild(widget)
    }

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.src = 'https://elevenlabs.io/convai-widget/index.js'
      script.async = true
      script.id = scriptId
      document.body.appendChild(script)
      script.onload = injectWidget
    } else if (customElements.get(widgetTag)) {
      injectWidget()
    } else {
      customElements.whenDefined(widgetTag).then(injectWidget)
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full max-w-md mx-auto" />
  )
}
