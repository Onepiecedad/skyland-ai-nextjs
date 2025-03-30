import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  typography, 
  spacing, 
  radius, 
  colors, 
  effects
} from "@/lib/theme";
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";
import { Modal } from "@/components/ui/Modal";

export interface CardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  cta?: React.ReactNode;
  showDanaButton?: boolean;
  onDanaClick?: () => void;
  className?: string;
}

function CardBase({
  title,
  description,
  icon,
  cta,
  showDanaButton,
  onDanaClick,
  className,
}: CardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button
        className={cn(
          effects.glass.light,
          effects.hover.scale,
          radius.xl,
          spacing.padding.card,
          effects.transition.base,
          spacing.width.full,
          spacing.height.full,
          spacing.alignment.left,
          effects.interaction.cursor.pointer,
          className
        )}
        onClick={handleOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleOpen();
          }
        }}
        tabIndex={0}
        data-theme-debug="Card"
      >
        <div className="flex flex-col gap-4">
          {icon && (
            <div className="flex items-center justify-start">
              {icon}
            </div>
          )}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg md:text-xl font-medium text-white/90">
              {title}
            </h3>
            {description && (
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      </button>

      {isOpen && (
        <Modal onClose={handleClose} isOpen={isOpen}>
          <div className="flex flex-col h-full">
            <div className="flex-none">
              <div className={cn(spacing.flex.between, spacing.stack.md)}>
                <div>
                  {icon && <div className={cn(typography.icon, spacing.stack.md)}>{icon}</div>}
                  <h3 className={typography.heading.h3}>{title}</h3>
                  {description && <p className={cn(typography.text.base, spacing.stack.sm)}>{description}</p>}
                </div>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto py-4">
              {cta && <div className={cn(typography.paragraph)}>{cta}</div>}
            </div>

            <div className="flex-none pt-4">
              {showDanaButton && (
                <button
                  onClick={onDanaClick}
                  className={cn(
                    typography.buttonText,
                    colors.text.primary,
                    effects.glass.lighter,
                    effects.hover.scale,
                    radius.lg,
                    spacing.padding.card,
                    spacing.stack.md,
                    effects.transition
                  )}
                  data-theme-debug="Card-Button"
                >
                  Talk to Dana
                </button>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export const Card = withThemeValidation(
  CardBase,
  "Card",
  ["typography", "spacing", "radius", "colors", "effects"]
); 