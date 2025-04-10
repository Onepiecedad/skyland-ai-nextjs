
'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

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

    return () => {
      const script = document.getElementById(scriptId)
      if (script) {
        script.remove()
      }
    }
  }, [])

  if (!isReady) return null

  return (
    <div className="flex justify-center items-center w-full h-full min-h-[400px]">
      <elevenlabs-convai
        agent-id="4mN4rizdi79gwLhFxlOu"
        mode="embedded"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          minHeight: '400px',
          background: 'transparent',
          borderRadius: '12px',
          maxHeight: '600px',
          margin: '0 auto',
        }}
      />
    </div>
  )
}
