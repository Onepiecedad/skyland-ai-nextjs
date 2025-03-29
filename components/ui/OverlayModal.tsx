'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useOverlay } from '@/contexts/OverlayProvider'
import { DanaButton } from './DanaButton'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { glass, spacing, typography, transition, radius } from '@/lib/theme'

const OverlayModal = () => {
  const { isOpen, content, closeModal } = useOverlay()

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [closeModal])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              "fixed inset-0 z-50",
              glass.overlay,
              transition.base
            )}
            onClick={closeModal}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={cn(
              "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50",
              "w-full max-w-lg",
              glass.modal,
              radius.modal,
              spacing.elementSpacing,
              "p-6"
            )}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-red-400 transition"
              onClick={closeModal}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <div className={typography.paragraph}>
              {content}
            </div>

            <div className="mt-6 text-center">
              <DanaButton autoExpand={false}>Let's Talk</DanaButton>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default OverlayModal 