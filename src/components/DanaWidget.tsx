import { useEffect } from 'react';

const SCRIPT_ID = 'elevenlabs-convai-script';
const WIDGET_ID = 'elevenlabs-convai-widget';
const ELEMENT_NAME = 'elevenlabs-convai';

// Define widget type to match ElevenLabs widget interface
interface ConvaiWidget extends HTMLElement {
  open?: () => void;
  close?: () => void;
}

let widgetInstance: ConvaiWidget | null = null;

function createWidget(): ConvaiWidget | null {
  if (widgetInstance) return widgetInstance;
  if (document.getElementById(WIDGET_ID)) return null;
  
  const widget = document.createElement(ELEMENT_NAME) as ConvaiWidget;
  widget.id = WIDGET_ID;
  widget.setAttribute('agent-id', '4mN4rizdi79gwLhFxlOu');
  widget.setAttribute('collapsed', '');
  
  // Style the widget
  Object.assign(widget.style, {
    position: 'fixed',
    zIndex: '9999',
    transform: 'translate3d(0,0,0)', // Force GPU acceleration
    willChange: 'transform',
    display: 'none',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    perspective: '1000',
    WebkitPerspective: '1000'
  });
  
  document.body.appendChild(widget);
  widgetInstance = widget;
  return widget;
}

export function DanaWidget() {
  useEffect(() => {
    let mounted = true;
    let observer: MutationObserver | null = null;
    let timeoutId: number | null = null;

    // Function to safely create widget if mounted
    const safeCreateWidget = () => {
      if (mounted) {
        createWidget();
      }
    };

    // Function to cleanup resources
    const cleanup = () => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId);
        timeoutId = null;
      }
    };

    // Function to load script and initialize widget
    const initializeWidget = () => {
      // Check if element is already defined
      if (customElements.get(ELEMENT_NAME)) {
        safeCreateWidget();
        return;
      }

      // Create observer to watch for element definition
      observer = new MutationObserver(() => {
        if (customElements.get(ELEMENT_NAME)) {
          cleanup();
          safeCreateWidget();
        }
      });

      // Start observing
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true
      });

      // Set timeout to prevent infinite waiting
      timeoutId = window.setTimeout(() => {
        cleanup();
        safeCreateWidget(); // Try to create anyway
      }, 10000);
    };

    // Check if script already exists
    const existingScript = document.getElementById(SCRIPT_ID);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = 'https://elevenlabs.io/convai-widget/index.js';
      script.async = true;
      
      // Initialize widget when script loads
      script.onload = () => {
        if (mounted) {
          initializeWidget();
        }
      };

      document.body.appendChild(script);
    } else {
      // Script exists, initialize widget directly
      initializeWidget();
    }

    // Cleanup function
    return () => {
      mounted = false;
      cleanup();
      if (widgetInstance) {
        widgetInstance.remove();
        widgetInstance = null;
      }
    };
  }, []);

  return null;
}

// Export utility functions for controlling the widget
export function showDanaWidget() {
  const widget = widgetInstance || document.getElementById(WIDGET_ID) as ConvaiWidget;
  if (widget) {
    widget.style.display = 'block';
    widget.removeAttribute('collapsed');
    if (typeof widget.open === 'function') {
      widget.open();
    }
  }
}

export function hideDanaWidget() {
  const widget = widgetInstance || document.getElementById(WIDGET_ID) as ConvaiWidget;
  if (widget) {
    if (typeof widget.close === 'function') {
      widget.close();
    }
    widget.style.display = 'none';
    widget.setAttribute('collapsed', '');
  }
} 