
'use client'

import { useEffect, useState } from 'react'

export default function ElevenLabsWidget() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const scriptId = 'elevenlabs-widget-script'
    const widgetTag = 'elevenlabs-convai'

    const loadWidget = () => {
      if (!customElements.get(widgetTag)) {
        customElements.whenDefined(widgetTag).then(() => {
          setIsReady(true)
        })
      } else {
        setIsReady(true)  
      }
    }

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.src = 'https://elevenlabs.io/convai-widget/index.js'
      script.async = true
      script.id = scriptId
      document.body.appendChild(script)
      script.onload = loadWidget
    } else {
      loadWidget()
    }
  }, [])

  if (!isReady) return null

  return (
    <elevenlabs-convai
      agent-id="4mN4rizdi79gwLhFxlOu"
      mode="embedded"
      style={{
        display: 'block',
        width: '100%',
        background: 'transparent',
        borderRadius: '12px',
        maxHeight: '600px',
      }}
    />
  )
}
