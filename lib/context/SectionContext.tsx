'use client';

import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
} from 'react';

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
  isHydrated: true,
});

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [isHydrated, setIsHydrated] = useState(true);

  useEffect(() => {
    setIsHydrated(true);
    return () => setIsHydrated(false);
  }, []);

  const addSection = useCallback((id: string) => {
    setVisibleSections((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const removeSection = useCallback((id: string) => {
    setVisibleSections((prev) => prev.filter((sectionId) => sectionId !== id));
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
