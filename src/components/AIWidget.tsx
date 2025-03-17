import { useEffect, useRef, useState } from "react";
import { Bot, Mic } from "lucide-react";
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
    <div className="relative">
      {/* Main Card */}
      <div 
        className={cn(
          "relative p-6 sm:p-7 rounded-2xl",
          "bg-gradient-to-br from-blue-400/[0.08] to-blue-400/[0.02]",
          "border border-blue-400/10",
          "backdrop-blur-xl",
          "transition-all duration-500",
          "group/card",
          "hover:scale-[1.02]",
          "hover:border-blue-400/20",
          "hover:from-blue-400/[0.12] hover:to-blue-400/[0.04]",
          "hover:shadow-[0_0_40px_-5px_rgba(96,165,250,0.2)]"
        )}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl" />

        {/* Content */}
        <div className="relative space-y-6">
          {/* Header */}
          <div className="flex items-start gap-4">
            <div className={cn(
              "transition-all duration-500",
              "transform-gpu",
              "group-hover/card:scale-110",
              "group-hover/card:rotate-3",
              "group-hover/card:animate-wiggle"
            )}>
              <Bot className="w-10 h-10 text-blue-400/90 transition-colors duration-500 group-hover/card:text-blue-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-[20px] font-normal tracking-[-0.02em] leading-[1.3] text-white/90 transition-colors duration-300 group-hover/card:text-white">
                Want to Make More & Work Less? Ask Dana How AI Can Help!
              </h3>
              <p className="text-base font-light tracking-[-0.015em] leading-[1.4] text-white/70 transition-colors duration-300 group-hover/card:text-white/85">
                AI can grow revenue, cut costs, and free up your time—instantly.
              </p>
            </div>
          </div>

          {/* Voice Button */}
          <button 
            onClick={() => setIsOpen(true)}
            className={cn(
              "w-full py-3.5 px-5 rounded-xl",
              "bg-gradient-to-br from-blue-400/[0.15] to-blue-400/[0.05]",
              "border border-blue-400/15",
              "backdrop-blur-lg",
              "transition-all duration-500",
              "group/button relative",
              "hover:scale-[1.02]",
              "hover:border-blue-400/30",
              "hover:from-blue-400/[0.2] hover:to-blue-400/[0.08]",
              "hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.25)]",
              "overflow-hidden"
            )}
          >
            {/* Button Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/15 to-transparent opacity-0 group-hover/button:opacity-100 transition-opacity duration-500" />
            
            {/* Button Content */}
            <div className="relative flex items-center justify-center gap-2.5">
              <div className={cn(
                "transition-all duration-500",
                "transform-gpu",
                "group-hover/button:scale-110",
                "group-hover/button:rotate-3",
                "group-hover/button:animate-wiggle"
              )}>
                <Mic className="w-5 h-5 text-blue-400/90 transition-colors duration-500 group-hover/button:text-blue-400" />
              </div>
              <span className="text-base font-light text-white/85 transition-colors duration-300 group-hover/button:text-white">
                Ask Dana a Question
              </span>
            </div>
          </button>
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
    </div>
  );
};

export default AIWidget; 