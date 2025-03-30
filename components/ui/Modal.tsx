'use client'

import { Dialog } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { typography, effects, radius, spacing } from "@/lib/theme";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />

      {/* Full-screen container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel
          className={cn(
            effects.glass.light,
            radius.xl,
            spacing.padding.modal,
            "w-full max-w-xl"
          )}
        >
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
} 