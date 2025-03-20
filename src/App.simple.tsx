import React from 'react';
import DanaVoiceAgent from './components/DanaVoiceAgent';

export default function SimpleApp() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Dana AI Assistant Test Page</h1>
        <p className="mb-8 text-gray-600">
          This is a simplified test page that only loads the Dana AI voice agent.
          If this works but the main page doesn't, there's likely an issue with 
          another component on the page.
        </p>
        
        <div className="relative h-[800px]">
          {/* The voice agent will be embedded on the page */}
          <DanaVoiceAgent 
            agentId="4mN4rizdi79gwLhFxlOu"
            initialExpanded={true} // Start with the widget expanded
          />
        </div>
      </div>
    </div>
  );
} 