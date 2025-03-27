import { ReactNode } from 'react';
import { X } from 'lucide-react';
import { cn } from '../lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string;
}

export function Modal({ isOpen, onClose, children, maxWidth = 'max-w-2xl' }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm",
          "transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div 
          className={cn(
            "relative w-full",
            maxWidth,
            "bg-gray-900/95 border border-white/10",
            "rounded-2xl p-6 shadow-2xl",
            "transform-gpu transition-all duration-300",
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          )}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className={cn(
              "absolute top-4 right-4 p-2",
              "text-white/60 hover:text-white/90",
              "transition-colors"
            )}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="pr-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 