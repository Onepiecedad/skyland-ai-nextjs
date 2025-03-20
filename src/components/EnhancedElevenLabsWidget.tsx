import React, { useEffect, useState, useRef } from 'react';

interface EnhancedElevenLabsWidgetProps {
  apiKey?: string;
  agentId?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  initialExpanded?: boolean;
}

export const EnhancedElevenLabsWidget: React.FC<EnhancedElevenLabsWidgetProps> = ({
  apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY as string,
  agentId = '4mN4rizdi79gwLhFxlOu', // Dana agent ID
  position = 'bottom-right',
  initialExpanded = false,
}) => {
  const [expanded, setExpanded] = useState<boolean>(initialExpanded);
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef<boolean>(false);

  useEffect(() => {
    if (!scriptLoaded.current) {
      // Load the ElevenLabs widget script
      const script = document.createElement('script');
      script.src = 'https://widget.elevenlabs.io/widget-talk-to.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      
      script.onload = () => {
        scriptLoaded.current = true;
        
        // Initialize the widget once script is loaded
        if (widgetContainerRef.current) {
          // Clear any existing content
          widgetContainerRef.current.innerHTML = '';
          
          // Create the widget element
          const widget = document.createElement('elevenlabs-talk-to');
          
          // Set attributes
          widget.setAttribute('agent-id', agentId);
          if (apiKey) {
            widget.setAttribute('api-key', apiKey);
          }
          
          // Append to container
          widgetContainerRef.current.appendChild(widget);
        }
      };
      
      return () => {
        document.body.removeChild(script);
      };
    } else if (scriptLoaded.current && widgetContainerRef.current) {
      // If script is already loaded but widget needs to be re-initialized
      widgetContainerRef.current.innerHTML = '';
      const widget = document.createElement('elevenlabs-talk-to');
      widget.setAttribute('agent-id', agentId);
      if (apiKey) {
        widget.setAttribute('api-key', apiKey);
      }
      widgetContainerRef.current.appendChild(widget);
    }
  }, [agentId, apiKey]);

  const positionClass = {
    'bottom-right': 'bottom-5 right-5',
    'bottom-left': 'bottom-5 left-5',
    'top-right': 'top-5 right-5',
    'top-left': 'top-5 left-5',
  }[position];

  return (
    <div className={`fixed ${positionClass} z-50 transition-all duration-300 ease-in-out`}>
      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg flex items-center justify-center hover:bg-blue-600 transition-all"
        aria-label={expanded ? "Collapse voice agent" : "Expand voice agent"}
      >
        {expanded ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        )}
      </button>
      
      {/* Expanded widget */}
      {expanded && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 mt-3 w-[350px] transition-all animate-slide-up">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Dana AI Assistant</h3>
          </div>
          
          {/* Widget container */}
          <div ref={widgetContainerRef} className="elevenlabs-widget-container">
            {/* Widget will be injected here */}
          </div>
        </div>
      )}
    </div>
  );
}; 