import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { glass, hover, transition, colors, typography } from "@/lib/theme";

interface ExpandedCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  body: React.ReactNode;
}

export default function ExpandedCardModal({
  isOpen,
  onClose,
  icon,
  title,
  subtitle,
  body,
}: ExpandedCardModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center p-6",
            glass.overlay
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={cn(
              "relative w-full max-w-3xl p-6",
              glass.modal,
              transition.base,
              hover.card
            )}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={cn(
                "absolute top-4 right-4",
                colors.textTertiary,
                "hover:text-white",
                transition.base
              )}
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-4">
              <div className={cn(
                glass.card,
                "shrink-0 w-12 h-12 flex items-center justify-center"
              )}>
                {icon}
              </div>
              <div className="flex-1">
                <h2 className={cn(
                  "text-xl md:text-2xl font-semibold leading-tight",
                  colors.textPrimary
                )}>
                  {title}
                </h2>
                {subtitle && (
                  <p className={typography.paragraph}>
                    {subtitle}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 text-sm text-white/80 space-y-4">
              {body}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 