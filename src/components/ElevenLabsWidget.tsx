import React, { useEffect } from 'react';

// Declare the custom element type
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'agent-id'?: string;
      }, HTMLElement>;
    }
  }
}

interface ElevenLabsWidgetProps {
  agentId?: string;
}

export const ElevenLabsWidget: React.FC<ElevenLabsWidgetProps> = ({ agentId = "4mN4rizdi79gwLhFxlOu" }) => {
  useEffect(() => {
    // Load ElevenLabs widget script
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="elevenlabs-widget-container">
      <elevenlabs-convai agent-id={agentId} />
    </div>
  );
};