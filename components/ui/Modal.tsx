'use client'

import { useRef, useEffect, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { withThemeValidation } from '@/lib/hoc/withThemeValidation';
import { spacing } from '@/lib/theme/tokens/spacing';
import { typography } from '@/lib/theme/tokens/typography';
import { colors } from '@/lib/theme/tokens/colors';
import { effects } from '@/lib/theme/tokens/effects';
import { radius } from '@/lib/theme/tokens/radius';
import { X } from 'lucide-react';
import { LoadingSpinner } from './LoadingSpinner';
import { useKeyboardHandler } from '@/hooks/useKeyboardHandler';
import { useFocusTrap } from '@/hooks/useFocusTrap';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  description?: string;
  showCloseButton?: boolean;
  closeButtonLabel?: string;
  loading?: boolean;
  loadingMessage?: string;
  error?: string;
  errorMessage?: string;
  onRetry?: () => void;
  retryLabel?: string;
  onErrorAnnounce?: (error: string) => void;
  onStatusAnnounce?: (status: string) => void;
  className?: string;
}

function ModalBase({
  isOpen,
  onClose,
  children,
  title,
  description,
  showCloseButton = true,
  closeButtonLabel = 'Close modal',
  loading = false,
  loadingMessage = 'Loading...',
  error,
  errorMessage = 'An error occurred. Please try again.',
  onRetry,
  retryLabel = 'Retry',
  onErrorAnnounce,
  onStatusAnnounce,
  className
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousIsOpen = useRef(isOpen);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'ready'>('idle');
  const [mounted, setMounted] = useState(false);

  // Focus trap hook
  useFocusTrap(modalRef, isOpen);

  // Handle escape key
  useKeyboardHandler('Escape', onClose, isOpen);

  // Handle mounting
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Handle error announcements
  useEffect(() => {
    if (error) {
      onErrorAnnounce?.(error);
    }
  }, [error, onErrorAnnounce]);

  // Handle status announcements
  useEffect(() => {
    if (isOpen !== previousIsOpen.current) {
      const message = isOpen ? 'Modal opened' : 'Modal closed';
      onStatusAnnounce?.(message);
      previousIsOpen.current = isOpen;
    }
  }, [isOpen, onStatusAnnounce]);

  // Handle loading state
  useEffect(() => {
    if (loading) {
      setStatus('loading');
      onStatusAnnounce?.(loadingMessage);
    } else if (error) {
      setStatus('error');
    } else {
      setStatus('ready');
    }
  }, [loading, error, loadingMessage, onStatusAnnounce]);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleRetry = useCallback(() => {
    setStatus('idle');
    onRetry?.();
  }, [onRetry]);

  if (!mounted) return null;

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'dialog-title' : undefined}
      aria-describedby={description ? 'dialog-description' : undefined}
      className={cn(effects.z.modal, 'fixed inset-0')}
    >
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0',
          colors.surface.default,
          'bg-opacity-75',
          effects.transition.base
        )}
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div
        ref={modalRef}
        className={cn(
          'fixed inset-0',
          spacing.flex.center,
          spacing.padding.section,
          effects.overflow.auto
        )}
      >
        <div
          className={cn(
            spacing.width.full,
            spacing.maxWidth.lg,
            spacing.padding.modal,
            spacing.flex.col,
            spacing.gap.md,
            colors.surface.card,
            radius.lg,
            effects.transition.base,
            className
          )}
        >
          {/* Close button */}
          {showCloseButton && (
            <button
              type="button"
              className={cn(
                'absolute top-4 right-4',
                spacing.padding.sm,
                effects.hover.opacity,
                effects.transition.base
              )}
              onClick={onClose}
              aria-label={closeButtonLabel}
            >
              <X className={cn(typography.icon.lg)} />
            </button>
          )}

          {/* Title */}
          {title && (
            <h2
              id="dialog-title"
              className={cn(typography.heading.h2, colors.text.primary)}
            >
              {title}
            </h2>
          )}

          {/* Description */}
          {description && (
            <p
              id="dialog-description"
              className={cn(typography.text.lg, colors.text.secondary)}
            >
              {description}
            </p>
          )}

          {/* Content */}
          {status === 'loading' ? (
            <LoadingSpinner
              hideLabel={false}
              className={spacing.flex.center}
            />
          ) : status === 'error' ? (
            <div className={cn(spacing.stack.md, spacing.flex.col)}>
              <p className={cn(typography.text.base, colors.text.error)}>
                {error || errorMessage}
              </p>
              {onRetry && (
                <button
                  type="button"
                  onClick={handleRetry}
                  className={cn(
                    spacing.padding.button,
                    typography.text.base,
                    colors.text.primary,
                    effects.glass.light,
                    effects.hover.opacity,
                    effects.transition.base,
                    radius.md
                  )}
                  aria-label={`${retryLabel} after error: ${error || errorMessage}`}
                >
                  {retryLabel}
                </button>
              )}
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
}

export const Modal = withThemeValidation<ModalProps>(
  ModalBase,
  'Modal',
  ['spacing', 'typography', 'colors', 'effects', 'radius']
); 
