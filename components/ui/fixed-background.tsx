"use client"

import { MeshGradient } from "@paper-design/shaders-react"

export default function FixedBackground() {
  return (
    <div className="fixed inset-0 z-0 h-full w-full bg-[var(--bg-steel-base)]" aria-hidden="true">
      {/* Mesh gradient — GPU-rendered canvas, hardware accelerated */}
      <MeshGradient
        className="w-full h-full absolute inset-0"
        colors={["#030608", "#0c1418", "#1a3c44", "#7ab8b8"]}
        speed={0.46}
        style={{ willChange: "transform", opacity: 1 }}
      />

      <div className="mesh-atmosphere absolute inset-[-12%] pointer-events-none" />
      <div className="mesh-vignette absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(169,209,209,0.16),transparent_34%),linear-gradient(180deg,rgba(4,7,9,0.04)_0%,rgba(4,7,9,0.44)_100%)]" />
      <div className="frost-overlay absolute inset-0 pointer-events-none" />
    </div>
  )
}
