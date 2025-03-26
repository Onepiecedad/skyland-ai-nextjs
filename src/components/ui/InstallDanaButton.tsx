import { useEffect } from "react";

export function InstallDanaButton() {
  useEffect(() => {
    // Create and load the script
    const script = document.createElement("script");
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;
    script.type = "text/javascript";
    
    // Create the widget element
    const widget = document.createElement("elevenlabs-convai");
    widget.setAttribute("agent-id", "4mN4rizdi79gwLhFxlOu");
    widget.setAttribute("collapsed", "true");
    
    // Style the widget to be hidden initially
    Object.assign(widget.style, {
      position: "fixed",
      bottom: "-1000px",
      right: "-1000px",
      opacity: "0",
      pointerEvents: "none",
      zIndex: "-1",
    });

    // Append elements to document
    document.body.appendChild(script);
    document.body.appendChild(widget);

    // Cleanup function
    return () => {
      // Remove script if it exists
      const existingScript = document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }

      // Remove widget if it exists
      const existingWidget = document.querySelector('elevenlabs-convai');
      if (existingWidget) {
        document.body.removeChild(existingWidget);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return null; // This component doesn't render anything
} 