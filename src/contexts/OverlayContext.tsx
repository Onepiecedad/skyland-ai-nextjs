import { createContext, useContext, useState, ReactNode } from 'react';
import { Modal } from '../components/Modal';

interface OverlayContextType {
  isOpen: boolean;
  content: ReactNode | null;
  maxWidth?: string;
  open: (content: ReactNode, maxWidth?: string) => void;
  close: () => void;
}

const OverlayContext = createContext<OverlayContextType | undefined>(undefined);

export function useOverlay() {
  const context = useContext(OverlayContext);
  if (context === undefined) {
    throw new Error('useOverlay must be used within an OverlayProvider');
  }
  return context;
}

interface OverlayProviderProps {
  children: ReactNode;
}

export function OverlayProvider({ children }: OverlayProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);
  const [maxWidth, setMaxWidth] = useState<string>('max-w-2xl');

  const open = (newContent: ReactNode, newMaxWidth?: string) => {
    if (!newContent) {
      console.warn('Attempted to open overlay with no content');
      return;
    }
    
    setContent(newContent);
    if (newMaxWidth) setMaxWidth(newMaxWidth);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
    // Clear content after animation
    setTimeout(() => setContent(null), 300);
  };

  return (
    <OverlayContext.Provider value={{ isOpen, content, maxWidth, open, close }}>
      {children}
      <Modal 
        isOpen={isOpen} 
        onClose={close}
        maxWidth={maxWidth}
      >
        {content}
      </Modal>
    </OverlayContext.Provider>
  );
} 