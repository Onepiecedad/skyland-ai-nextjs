'use client';

import { useEffect } from 'react';

const SCRIPT_ID = 'elevenlabs-convai-script';
const WIDGET_ID = 'elevenlabs-convai-widget';
const ELEMENT_NAME = 'elevenlabs-convai';

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

  Object.assign(widget.style, {
    position: 'fixed',
    zIndex: '9999',
    transform: 'translate3d(0,0,0)',
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

    const safeCreateWidget = () => {
      if (mounted) {
        createWidget();
      }
    };

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

    const initializeWidget = () => {
      if (customElements.get(ELEMENT_NAME)) {
        safeCreateWidget();
        return;
      }

      observer = new MutationObserver(() => {
        if (customElements.get(ELEMENT_NAME)) {
          cleanup();
          safeCreateWidget();
        }
      });

      observer.observe(document.documentElement, {
        childList: true,
        subtree: true
      });

      timeoutId = window.setTimeout(() => {
        cleanup();
        safeCreateWidget();
      }, 10000);
    };

    const existingScript = document.getElementById(SCRIPT_ID);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = 'https://elevenlabs.io/convai-widget/index.js';
      script.async = true;

      script.onload = () => {
        if (mounted) {
          initializeWidget();
        }
      };

      document.body.appendChild(script);
    } else {
      initializeWidget();
    }

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
