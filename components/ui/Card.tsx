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
        <div className={cn(spacing.flex.col)}>
          {icon && <div className={cn(colors.text.accent, spacing.stack.sm)}>{icon}</div>}
          <div>
            <h3 className={cn(typography.heading.h3, colors.text.primary)}>
              {title}
            </h3>
            {description && (
              <p className={cn(typography.text.sm, colors.text.secondary, spacing.stack.sm)}>
                {description}
              </p>
            )}
          </div>
        </div>
      </button>

      {isOpen && (
        <Modal onClose={handleClose} isOpen={isOpen}>
          <div className={cn(spacing.elementSpacing, spacing.maxWidth.lg)}>
            <div className={cn(spacing.flex.between, spacing.stack.md)}>
              <div>
                {icon && <div className={cn(typography.icon, spacing.stack.md)}>{icon}</div>}
                <h3 className={typography.heading.h3}>{title}</h3>
                {description && <p className={cn(typography.text.base, spacing.stack.sm)}>{description}</p>}
              </div>
            </div>
            {cta && <div className={cn(spacing.elementSpacing, typography.paragraph)}>{cta}</div>}
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