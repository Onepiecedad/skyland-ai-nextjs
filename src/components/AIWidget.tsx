import { useEffect, useRef, useState } from "react";
import { Bot } from "lucide-react";
import { cn } from "../lib/utils";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': any; // TODO: Replace with proper types when available from ElevenLabs
    }
  }
}

const AIWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Enhanced style injection for the widget
    const injectStyles = () => {
      const widget = document.querySelector("elevenlabs-convai");
      if (widget?.shadowRoot) {
        const style = document.createElement("style");
        style.textContent = `
          .widget-container {
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
          }
          .button {
            background: rgba(59, 130, 246, 0.1) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            backdrop-filter: blur(8px) !important;
            transition: all 0.2s ease-in-out !important;
          }
          .button:hover {
            background: rgba(59, 130, 246, 0.15) !important;
            border: 1px solid rgba(255, 255, 255, 0.15) !important;
          }
          .chat-container {
            background: rgba(30, 41, 59, 0.4) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            backdrop-filter: blur(12px) !important;
            border-radius: 12px !important;
          }
          .message {
            background: rgba(255, 255, 255, 0.05) !important;
            border: 1px solid rgba(255, 255, 255, 0.05) !important;
          }
          .input-container {
            background: rgba(255, 255, 255, 0.03) !important;
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
            backdrop-filter: blur(8px) !important;
          }
        `;
        widget.shadowRoot.appendChild(style);
      }
    };

    // Try to inject styles after a short delay to ensure widget is mounted
    const styleInterval = setInterval(() => {
      const widget = document.querySelector("elevenlabs-convai");
      if (widget?.shadowRoot) {
        injectStyles();
        clearInterval(styleInterval);
      }
    }, 100);

    // Cleanup
    return () => clearInterval(styleInterval);
  }, [isOpen]);

  return (
    <>
      {/* Card Trigger */}
      <div 
        onClick={() => setIsOpen(true)}
        className={cn(
          "p-6 rounded-xl backdrop-blur-xl transition-all duration-500 group/card cursor-pointer",
          "bg-gradient-to-r from-blue-400/[0.04] via-blue-500/[0.04] to-blue-400/[0.04]",
          "border border-white/[0.08]",
          "hover:from-blue-400/[0.08] hover:via-blue-500/[0.08] hover:to-blue-400/[0.08]",
          "hover:border-blue-400/[0.2]",
          "hover:scale-[1.02]",
          "hover:shadow-[0_0_20px_-5px_rgba(96,165,250,0.2)]"
        )}
      >
        <div className="flex items-start gap-5">
          <div className={cn(
            "transition-all duration-500",
            "transform-gpu",
            "group-hover/card:scale-110",
            "group-hover/card:rotate-3",
            "group-hover/card:animate-wiggle"
          )}>
            <Bot className="w-10 h-10 text-blue-400/80 transition-colors duration-500" />
          </div>
          <div className="space-y-2.5">
            <h3 className="text-lg font-light tracking-[-0.02em] leading-[1.3] text-white/80 transition-colors duration-300 group-hover/card:text-white/95">
              Want to Make More & Work Less? Ask Dana How AI Can Help!
            </h3>
            <p className="text-base font-light tracking-[-0.015em] leading-[1.4] text-white/60 transition-colors duration-300 group-hover/card:text-white/80">
              AI can grow revenue, cut costs, and free up your time—instantly.
            </p>
          </div>
        </div>
      </div>

      {/* Modal Widget */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-full max-w-xl animate-float">
            {/* Widget Container */}
            <div 
              ref={widgetRef} 
              className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_8px_40px_-12px_rgba(96,165,250,0.2)]" 
              style={{ pointerEvents: 'auto' }}
            >
              <elevenlabs-convai 
                agent-id="4mN4rizdi79gwLhFxlOu"
                variant="compact"
                action-text="Ask Dana AI"
                avatar-orb-color-1="#818cf8"
                avatar-orb-color-2="#6366f1"
                style={{ display: 'block', padding: '1.25rem' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIWidget; 