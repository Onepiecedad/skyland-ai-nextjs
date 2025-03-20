import React, { useEffect, useRef } from 'react';

interface DanaVoiceAgentProps {
  agentId?: string;
  initialExpanded?: boolean;
}

const DanaVoiceAgent: React.FC<DanaVoiceAgentProps> = ({
  agentId = '4mN4rizdi79gwLhFxlOu', // Dana agent ID
  initialExpanded = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current) {
      // Create the widget element
      const widget = document.createElement('elevenlabs-convai');
      
      // Set required attributes
      widget.setAttribute('agent-id', agentId);
      
      if (initialExpanded) {
        widget.setAttribute('variant', 'expanded');
      }
      
      // Clear and append to container
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(widget);
      
      // Load the ElevenLabs widget script
      if (!document.querySelector('script#elevenlabs-widget-script')) {
        const script = document.createElement('script');
        script.id = 'elevenlabs-widget-script';
        script.src = 'https://elevenlabs.io/convai-widget/index.js';
        script.async = true;
        script.type = 'text/javascript';
        document.body.appendChild(script);
      }
    }
    
    return () => {
      // Script removal is handled by React's cleanup
    };
  }, [agentId, initialExpanded]);
  
  return (
    <div ref={containerRef} className="elevenlabs-widget-container">
      {/* Widget will be injected here */}
    </div>
  );
};

export default DanaVoiceAgent; 