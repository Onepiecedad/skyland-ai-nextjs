'use client';

import React, { createContext, useState, useCallback, useContext, useEffect, useLayoutEffect } from 'react';

interface SectionContextType {
  visibleSections: string[];
  addSection: (id: string) => void;
  removeSection: (id: string) => void;
  isHydrated: boolean;
}

const SectionContext = createContext<SectionContextType>({
  visibleSections: [],
  addSection: () => {},
  removeSection: () => {},
  isHydrated: true // Default to true
});

// Använd useLayoutEffect på klienten, useEffect på servern
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [isHydrated, setIsHydrated] = useState(true); // Start with true

  // Kör en gång när komponenten mountas på klienten - behåll för backward compatibility
  useIsomorphicLayoutEffect(() => {
    setIsHydrated(true);
    return () => setIsHydrated(false);
  }, []);

  const addSection = useCallback((id: string) => {
    setVisibleSections(prev => prev.includes(id) ? prev : [...prev, id]);
  }, []);

  const removeSection = useCallback((id: string) => {
    setVisibleSections(prev => prev.filter(sectionId => sectionId !== id));
  }, []);

  return (
    <SectionContext.Provider value={{ visibleSections, addSection, removeSection, isHydrated }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSectionContext() {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSectionContext must be used within a SectionProvider');
  }
  return context;
}

export { SectionContext }; 
