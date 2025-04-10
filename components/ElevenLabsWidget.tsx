
'use client';

import { useEffect } from 'react';

export default function ElevenLabsWidget() {
  useEffect(() => {
    const scriptId = 'elevenlabs-widget-script';
    const exists = document.getElementById(scriptId);
    const registered = customElements.get('elevenlabs-convai');

    if (!exists && !registered) {
      const script = document.createElement('script');
      script.src = 'https://elevenlabs.io/convai-widget/index.js';
      script.async = true;
      script.id = scriptId;
      script.type = 'text/javascript';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <elevenlabs-convai
      agent-id="4mN4rizdi79gwLhFxlOu"
      style={{
        display: 'block',
        width: '100%',
        background: 'transparent',
        borderRadius: '12px',
      }}
    />
  );
}
