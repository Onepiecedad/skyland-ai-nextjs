import { useState } from "react";
import { cn } from "@/lib/utils";
import { typography, spacing, glass, radius, hover } from "@/lib/theme";
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
          glass.layer1,
          spacing.padding.card,
          radius.lg,
          hover.scale,
          "cursor-pointer transition duration-300 ease-in-out w-full text-left",
          className
        )}
        onClick={handleOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleOpen();
          }
        }}
        tabIndex={0}
        data-theme-debug={`glass:${glass.layer1}; spacing:${spacing.padding.card}; radius:${radius.lg}`}
      >
        <div className={spacing.flex.between}>
          {icon && <div className={typography.icon}>{icon}</div>}
          <div>
            <h3 className={typography.heading.h3}>{title}</h3>
            {description && <p className={typography.text.base}>{description}</p>}
          </div>
        </div>
        {cta && <div className={spacing.elementSpacing}>{cta}</div>}
      </button>

      {isOpen && (
        <Modal onClose={handleClose} isOpen={isOpen}>
          <div className={cn(spacing.elementSpacing)}>
            <div className="flex justify-between items-center">
              <h3 className={typography.heading.h3}>{title}</h3>
            </div>
            {description && <p className={cn(typography.text.base, spacing.elementSpacing)}>{description}</p>}
            {cta && <div className={spacing.elementSpacing}>{cta}</div>}
            {showDanaButton && (
              <button
                onClick={onDanaClick}
                className={cn(spacing.elementSpacing, "px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600")}
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
  ["typography", "spacing", "glass", "radius", "hover"]
); 