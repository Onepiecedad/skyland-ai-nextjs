import { useEffect, useRef, useState } from "react";
import { Bot, X } from "lucide-react";
import { cn } from "../lib/utils";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'agent-id'?: string;
        'variant'?: string;
        'action-text'?: string;
        'avatar-orb-color-1'?: string;
        'avatar-orb-color-2'?: string;
      }, HTMLElement>;
    }
  }
}

const AIWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Simple check to see if widget exists
    const widget = document.querySelector("elevenlabs-convai");
    if (!widget) {
      console.warn("ElevenLabs widget not found in DOM");
    } else {
      console.log("ElevenLabs widget found in DOM");
    }

    // Basic style injection
    const injectStyles = () => {
      const widget = document.querySelector("elevenlabs-convai");
      if (widget?.shadowRoot) {
        const style = document.createElement("style");
        style.textContent = `
          .widget-container, .button, .chat-container {
            background: rgba(31, 41, 55, 0.15) !important;
            backdrop-filter: blur(8px) !important;
          }
        `;
        widget.shadowRoot.appendChild(style);
      }
    };

    // Try to inject styles after a short delay
    setTimeout(injectStyles, 1000);
  }, [isOpen]);

  return (
    <>
      {/* Card Trigger */}
      <div 
        onClick={() => setIsOpen(true)}
        className={cn(
          "p-8 rounded-2xl backdrop-blur-lg transition-all duration-500 group/card cursor-pointer",
          "bg-blue-500/[0.03] hover:bg-blue-500/[0.05]",
          "border border-white/[0.03] hover:border-white/[0.08]",
          "hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.15)]"
        )}
      >
        <div className="flex items-start gap-6">
          <div className="transition-transform duration-500 group-hover/card:scale-125 group-hover/card:rotate-3">
            <Bot className="w-12 h-12 text-blue-500/80 transition-colors duration-500 group-hover/card:text-blue-400" />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-extralight tracking-[-0.02em] leading-[1.3] text-white/80 transition-colors duration-300 group-hover/card:text-white">
              Want to Make More & Work Less? Ask Dana How AI Can Help!
            </h3>
            <p className="text-lg font-extralight tracking-[-0.015em] leading-[1.4] text-white/60 transition-colors duration-300 group-hover/card:text-white/90">
              AI can grow revenue, cut costs, and free up your time—instantly.
            </p>
          </div>
        </div>
      </div>

      {/* Modal Widget */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 p-2 rounded-lg hover:bg-zinc-800/50 transition-colors text-white/80 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Widget Container */}
            <div ref={widgetRef} className="w-full" style={{ pointerEvents: 'auto' }}>
              <elevenlabs-convai 
                agent-id="4mN4rizdi79gwLhFxlOu"
                variant="compact"
                action-text="Ask Dana AI"
                avatar-orb-color-1="#818cf8"
                avatar-orb-color-2="#6366f1"
                style={{ display: 'block' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIWidget; 