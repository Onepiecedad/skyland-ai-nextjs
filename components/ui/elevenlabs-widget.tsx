"use client"

import { useEffect } from "react"

export default function ElevenLabsWidget() {
  useEffect(() => {
    if (document.querySelector("elevenlabs-convai")) {
      return
    }

    // Create the custom element
    const widget = document.createElement("elevenlabs-convai")
    widget.setAttribute("agent-id", "TDgRNcUoUC1GHVKK0bHH")
    widget.style.position = "fixed"
    widget.style.right = "clamp(16px, 2.4vw, 28px)"
    widget.style.bottom = "clamp(16px, 2.4vw, 28px)"
    widget.style.zIndex = "45"
    widget.style.transform = "scale(1.08)"
    widget.style.transformOrigin = "bottom right"
    
    // Add event listener for call end reporting
    widget.addEventListener("elevenlabs-convai:call", (event: any) => {
      if (event.detail && event.detail.status === "disconnected") {
        
        // Get or create a persistent session UUID for this browser
        let sessionUuid = localStorage.getItem("skyland_session_uuid");
        if (!sessionUuid) {
          sessionUuid = crypto.randomUUID();
          localStorage.setItem("skyland_session_uuid", sessionUuid);
        }

        fetch("https://skyland-voice-proxy.fly.dev/voice/call-ended", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            session_uuid: sessionUuid,
            conversation_id: event.detail.conversationId || null,
            agent_id: "TDgRNcUoUC1GHVKK0bHH",
            ended_at: new Date().toISOString(),
            source: "skyland_ai_nextjs_widget",
            metadata: {
              entry_module: "elevenlabs-widget"
            }
          })
        }).catch(err => console.warn("[VOICE] Failed to report call end:", err));
      }
    });

    document.body.appendChild(widget)

    // Load the script
    let script = document.querySelector('script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]') as HTMLScriptElement | null
    let createdScript = false

    if (!script) {
      script = document.createElement("script")
      script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed"
      script.async = true
      document.body.appendChild(script)
      createdScript = true
    }

    return () => {
      widget.remove()
      if (createdScript) {
        script?.remove()
      }
    }
  }, [])

  return null
}
