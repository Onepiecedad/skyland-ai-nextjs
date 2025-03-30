// BaseCard.tsx
import { useOverlay } from "@/components/overlay/OverlayProvider"
import { typography } from "@/lib/theme"
import clsx from "clsx"

interface BaseCardProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  expandable?: boolean;
  expandedContent?: React.ReactNode;
  cta?: React.ReactNode;
  className?: string;
}

export const BaseCard: React.FC<BaseCardProps> = ({
  icon,
  title,
  description,
  expandable = false,
  expandedContent,
  cta,
  className = "",
}) => {
  const { openOverlay } = useOverlay();

  const handleClick = () => {
    if (expandable && expandedContent) {
      openOverlay({ title, content: expandedContent, icon, cta });
    }
  };

  return (
    <div
      className={clsx(
        "group rounded-xl border border-white/10 bg-white/5 p-6 transition hover:shadow-xl hover:backdrop-blur-md",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex items-start gap-4">
        {icon && <div className={typography.icon}>{icon}</div>}
        <div>
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          {description && <p className="text-sm text-white/70 mt-1">{description}</p>}
        </div>
      </div>
      {cta && <div className="mt-6 text-sm text-white/80">{cta}</div>}
    </div>
  );
};
