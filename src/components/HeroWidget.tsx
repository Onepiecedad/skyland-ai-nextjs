import { Loader2, RefreshCw } from 'lucide-react';
import { useEffect, useState, useRef, useCallback } from 'react';

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

// Prevent multiple script loads
const WIDGET_SCRIPT_ID = 'elevenlabs-convai-script';
const WIDGET_NAME = 'elevenlabs-convai';

export function HeroWidget() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState<string | null>(null);
  const [isRetrying, setIsRetrying] = useState(false);
  const checkTimeoutRef = useRef<NodeJS.Timeout>();
  const maxRetries = 30;
  const retryCountRef = useRef(0);
  const retryIntervalRef = useRef(50);
  const scriptInstanceRef = useRef<HTMLScriptElement | null>(null);
  const widgetRef = useRef<HTMLElement | null>(null);
  const isMountedRef = useRef(true);

  // Cleanup helper
  const cleanup = useCallback(() => {
    if (checkTimeoutRef.current) {
      clearTimeout(checkTimeoutRef.current);
      checkTimeoutRef.current = undefined;
    }
    if (scriptInstanceRef.current) {
      scriptInstanceRef.current.removeEventListener('load', handleLoad);
      scriptInstanceRef.current.removeEventListener('error', handleError);
      if (document.getElementById(WIDGET_SCRIPT_ID) === scriptInstanceRef.current) {
        scriptInstanceRef.current.remove();
      }
      scriptInstanceRef.current = null;
    }
    if (widgetRef.current) {
      widgetRef.current.remove();
      widgetRef.current = null;
    }
    retryCountRef.current = 0;
    retryIntervalRef.current = 50;
  }, []);

  const loadScript = useCallback(() => {
    if (!isMountedRef.current) return null;
    
    const existingScript = document.getElementById(WIDGET_SCRIPT_ID);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = WIDGET_SCRIPT_ID;
      scriptInstanceRef.current = script;
      script.src = 'https://elevenlabs.io/convai-widget/index.js';
      script.async = true;
      script.type = 'text/javascript';
      document.head.appendChild(script);
      return script;
    }
    return existingScript;
  }, []);

  const checkElement = useCallback(() => {
    if (!isMountedRef.current) return;
    if (!document.getElementById(WIDGET_SCRIPT_ID)) return;

    if (customElements.get(WIDGET_NAME)) {
      setIsScriptLoaded(true);
      setScriptError(null);
      setIsRetrying(false);
      retryCountRef.current = 0;
      return;
    }

    if (retryCountRef.current < maxRetries) {
      retryCountRef.current++;
      retryIntervalRef.current = Math.min(retryIntervalRef.current * 1.2, 1000);
      checkTimeoutRef.current = setTimeout(checkElement, retryIntervalRef.current);
    } else {
      setScriptError('Widget failed to initialize. Please try again.');
      setIsRetrying(false);
      console.error('Failed to initialize ElevenLabs widget after max retries');
      cleanup();
    }
  }, [cleanup]);

  const handleLoad = useCallback(() => {
    if (!isMountedRef.current) return;
    checkElement();
  }, [checkElement]);

  const handleError = useCallback(() => {
    if (!isMountedRef.current) return;
    setScriptError('Failed to load AI assistant. Please try again.');
    setIsRetrying(false);
    console.error('Failed to load ElevenLabs widget script');
    cleanup();
  }, [cleanup]);

  const handleRetry = useCallback(() => {
    if (!isMountedRef.current) return;
    
    setIsRetrying(true);
    setScriptError(null);
    cleanup();
    
    const script = loadScript();
    if (script && !script.hasAttribute('data-loaded')) {
      script.addEventListener('load', handleLoad);
      script.addEventListener('error', handleError);
    } else {
      checkElement();
    }
  }, [cleanup, loadScript, checkElement, handleLoad, handleError]);

  // Handle widget reference
  const handleWidgetRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      widgetRef.current = node;
    }
  }, []);

  useEffect(() => {
    isMountedRef.current = true;

    const existingScript = document.getElementById(WIDGET_SCRIPT_ID);
    if (existingScript) {
      if (!customElements.get(WIDGET_NAME)) {
        checkElement();
      } else {
        setIsScriptLoaded(true);
      }
      return;
    }

    const script = loadScript();
    if (script && !script.hasAttribute('data-loaded')) {
      script.addEventListener('load', handleLoad);
      script.addEventListener('error', handleError);
      script.setAttribute('data-loaded', 'true');
    }

    return () => {
      isMountedRef.current = false;
      cleanup();
    };
  }, [checkElement, handleLoad, handleError, loadScript, cleanup]);

  return (
    <div className="w-full px-4 sm:px-6 md:px-0 relative z-[100]">
      <div className="flex md:justify-end justify-center">
        <div className="bg-black/90 rounded-xl p-5 w-full max-w-sm md:max-w-md backdrop-blur-[2px] sm:backdrop-blur-md border border-white/[0.08] overflow-hidden relative shadow-xl transition-[height,opacity] duration-300">
          <div className="flex flex-col w-full gap-y-6 min-h-[180px] transition-[height] duration-300 ease-in-out">
            <div className="w-full pb-1">
              <h3 className="text-white/95 text-lg font-medium leading-snug max-w-[90%] break-words hyphens-auto">
                Want to save 10+ hours a week—without changing how you work?
              </h3>
              <p className="text-white/75 text-sm mt-2.5 max-w-[95%] break-words hyphens-auto [text-wrap:pretty]">
                What's the one task you'd automate today if you could?
              </p>
            </div>
            
            <div className="w-full flex justify-center relative z-[1]">
              {!isScriptLoaded ? (
                <div className="flex items-center justify-center h-16 bg-black/40 rounded-lg border border-white/[0.08] w-full select-none transition-[height] duration-300 ease-in-out touch-none">
                  <Loader2 className="w-6 h-6 text-blue-400 animate-spin pointer-events-none" />
                </div>
              ) : scriptError ? (
                <div className="flex flex-col items-center justify-center h-16 bg-black/40 rounded-lg border border-white/[0.08] w-full select-none transition-[height] duration-300 ease-in-out">
                  <p className="text-white/70 text-center text-sm break-words hyphens-auto mb-2">{scriptError}</p>
                  <button
                    onClick={handleRetry}
                    disabled={isRetrying}
                    className="flex items-center gap-2 px-3 py-1 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200 select-none touch-manipulation"
                  >
                    <RefreshCw className={`w-4 h-4 ${isRetrying ? 'animate-spin' : ''}`} />
                    {isRetrying ? 'Retrying...' : 'Try Again'}
                  </button>
                </div>
              ) : (
                <div className="bg-black/40 rounded-lg border border-white/[0.08] w-full overflow-hidden transition-[height] duration-300 ease-in-out touch-manipulation">
                  <elevenlabs-convai
                    ref={handleWidgetRef}
                    agent-id="4mN4rizdi79gwLhFxlOu"
                    voice-only="true"
                    variant="compact"
                    className="!min-h-[64px] !w-full select-none !touch-manipulation"
                    style={{
                      '--elevenlabs-widget-background': 'transparent',
                      '--elevenlabs-widget-border': 'none',
                      '--elevenlabs-widget-border-radius': '0',
                      width: '100%',
                      minHeight: '64px',
                      transition: 'height 300ms ease-in-out',
                      position: 'relative',
                      zIndex: 2,
                      touchAction: 'manipulation',
                      cursor: 'pointer',
                      WebkitTapHighlightColor: 'transparent'
                    } as React.CSSProperties}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 