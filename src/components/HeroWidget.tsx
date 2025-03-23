import { Loader2 } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

// Declare the custom element type
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'agent-id'?: string;
        'voice-only'?: string;
        'variant'?: 'expanded' | 'compact';
      }, HTMLElement>;
    }
  }
}

export function HeroWidget() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState<string | null>(null);
  const checkTimeoutRef = useRef<NodeJS.Timeout>();
  const maxRetries = 20;
  const retryCountRef = useRef(0);

  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src*="convai-widget"]');
    if (existingScript) {
      setIsScriptLoaded(true);
      return;
    }

    // Load ElevenLabs widget script
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.type = 'text/javascript';
    
    const handleLoad = () => {
      const checkElement = () => {
        if (customElements.get('elevenlabs-convai')) {
          setIsScriptLoaded(true);
          setScriptError(null);
          retryCountRef.current = 0;
        } else if (retryCountRef.current < maxRetries) {
          retryCountRef.current++;
          checkTimeoutRef.current = setTimeout(checkElement, 50);
        } else {
          setScriptError('Widget failed to initialize. Please refresh the page.');
          console.error('Failed to initialize ElevenLabs widget');
        }
      };
      checkElement();
    };

    const handleError = () => {
      setScriptError('Failed to load AI assistant. Please refresh the page to try again.');
      console.error('Failed to load ElevenLabs widget script');
    };

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError);

    document.head.appendChild(script);

    return () => {
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError);
      if (checkTimeoutRef.current) {
        clearTimeout(checkTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-[420px] mx-auto md:mx-0">
      <div 
        className="relative rounded-2xl bg-black/95"
        style={{
          boxShadow: `
            0 0 0 1px rgba(255,255,255,0.08),
            0 8px 20px rgba(0,0,0,0.3)
          `
        }}
      >
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.08] to-transparent rounded-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)] rounded-2xl" />
        
        {/* Content container */}
        <div className="relative p-7 pb-24">
          {/* Text content */}
          <div className="space-y-2.5">
            <h4 className="text-xl font-extralight tracking-[-0.02em] leading-[1.3] text-white/95">
              Want to save 10+ hours a week—without changing how you work?
            </h4>
            <p className="text-[15px] leading-relaxed text-white/75">
              What's the one task you'd automate today if you could?
            </p>
          </div>
        </div>

        {/* Widget container - positioned absolutely */}
        <div className="absolute bottom-0 left-0 right-0 px-5 translate-y-[45%]">
          {!isScriptLoaded ? (
            <div className="flex items-center justify-center h-[60px] bg-black/90 rounded-xl border border-white/[0.08]">
              <Loader2 className="w-6 h-6 text-blue-400 animate-spin" />
            </div>
          ) : scriptError ? (
            <div className="flex items-center justify-center h-[60px] bg-black/90 rounded-xl border border-white/[0.08]">
              <p className="text-white/70 text-center text-sm">{scriptError}</p>
            </div>
          ) : (
            <div className="bg-black/90 rounded-xl border border-white/[0.08] overflow-hidden">
              <elevenlabs-convai
                agent-id="4mN4rizdi79gwLhFxlOu"
                voice-only="true"
                variant="compact"
                className="!min-h-[60px]"
                style={{
                  '--elevenlabs-widget-background': 'transparent',
                  '--elevenlabs-widget-border': 'none',
                  '--elevenlabs-widget-border-radius': '0'
                } as React.CSSProperties}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 