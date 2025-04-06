import { useEffect, useRef, type RefObject } from 'react';

export function useFocusTrap(containerRef: RefObject<HTMLElement>, isActive: boolean): void {
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive) return;

    // Spara nuvarande fokuserat element
    previousActiveElement.current = document.activeElement as HTMLElement;

    // Hitta alla fokuserbara element i containern
    const getFocusableElements = () => {
      if (!containerRef.current) return [];
      
      return Array.from(
        containerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter(el => !el.hasAttribute('disabled'));
    };

    const handleFocus = (e: KeyboardEvent) => {
      if (!containerRef.current) return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // Om Shift+Tab trycks och första elementet är fokuserat, gå till sista
      if (e.shiftKey && e.key === 'Tab') {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      }
      // Om Tab trycks och sista elementet är fokuserat, gå till första
      else if (e.key === 'Tab') {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    // Fokusera på första fokuserbara elementet
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    // Lägg till event listener för Tab-navigering
    document.addEventListener('keydown', handleFocus);

    return () => {
      document.removeEventListener('keydown', handleFocus);
      // Återställ fokus när komponenten unmountas
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [isActive, containerRef]);
} 