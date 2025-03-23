import { Loader2 } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

// Declare the custom element type
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-voice-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'data-api-key'?: string;
        'data-agent-id'?: string;
        'data-welcome-text'?: string;
        'data-show-intro'?: string;
        'data-start-minimized'?: string;
      }, HTMLElement>;
    }
  }
}

interface DanaWidgetProps {
  welcomeText?: string;
  showIntro?: boolean;
  startMinimized?: boolean;
  className?: string;
}

export function DanaWidget({ 
  welcomeText = "Hi, I'm Dana! Ask me anything.",
  showIntro = true,
  startMinimized = false,
  className = ""
}: DanaWidgetProps) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState<string | null>(null);
  const checkTimeoutRef = useRef<NodeJS.Timeout>();
  const maxRetries = 20;
  const retryCountRef = useRef(0);

  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src*="voice-widget.js"]');
    if (existingScript) {
      setIsScriptLoaded(true);
      return;
    }

    // Load ElevenLabs widget script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://static.elevenlabs.io/v1/voice-widget.js';
    script.crossOrigin = 'anonymous';
    
    const handleLoad = () => {
      // Check if the custom element is defined
      const checkElement = () => {
        if (customElements.get('elevenlabs-voice-widget')) {
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

  if (!isScriptLoaded) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-lg">
        <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
      </div>
    );
  }

  if (scriptError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-lg">
        <p className="text-white/70 text-center px-6">{scriptError}</p>
      </div>
    );
  }

  return (
    <elevenlabs-voice-widget
      data-api-key="YOUR_ELEVENLABS_API_KEY"
      data-agent-id="4mN4rizdi79gwLhFxlOu"
      data-welcome-text={welcomeText}
      data-show-intro={showIntro.toString()}
      data-start-minimized={startMinimized.toString()}
      className={className}
    />
  );
} 