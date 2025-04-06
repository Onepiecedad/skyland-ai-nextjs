import { useEffect, useCallback } from 'react';

type KeyHandler = (event: KeyboardEvent) => void;
type KeyMap = Record<string, KeyHandler>;

export function useKeyboardShortcut(keyMap: KeyMap, isActive: boolean = true): void {
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    // Ignorera tangenttryckningar i input-fält
    if (
      event.target instanceof HTMLInputElement ||
      event.target instanceof HTMLTextAreaElement ||
      event.target instanceof HTMLSelectElement
    ) {
      return;
    }

    const handler = keyMap[event.key];
    if (handler) {
      event.preventDefault();
      handler(event);
    }
  }, [keyMap]);

  useEffect(() => {
    if (!isActive) return;

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isActive, handleKeyPress]);
} 