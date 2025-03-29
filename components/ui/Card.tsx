import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { glass, hover, transition, typography, spacing, colors, defaultIconClass } from "@/lib/theme";
import { IconKey, iconMap } from "@/components/cards/iconMap";
import { Brain } from "lucide-react";
import { layout } from "@/lib/theme";

interface CardProps {
  icon?: IconKey;
  title?: string;
  description?: string | string[];
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  footer?: ReactNode;
  headerContent?: ReactNode;
  expandedContent?: ReactNode;
}

export function Card({ 
  icon, 
  title, 
  description, 
  children, 
  className,
  onClick,
  footer,
  headerContent,
  expandedContent
}: CardProps) {
  const Icon = icon ? (iconMap[icon] || Brain) : null;
  const descriptions = Array.isArray(description) ? description : description ? [description] : [];

  return (
    <div 
      className={cn(
        glass.card,
        hover.card,
        transition.base,
        spacing.elementSpacing,
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {/* Header */}
      {(Icon || headerContent) && (
        <div className={cn(
          layout.flexCenter,
          "gap-2 group"
        )}>
          {Icon && (
            <Icon className={cn(
              defaultIconClass,
              spacing.icon.md,
              `group-hover:text-[${colors.primary}]`
            )} />
          )}
          {headerContent}
        </div>
      )}

      {/* Content */}
      <div className={cn(
        spacing.elementSpacing,
        !Icon && !headerContent && "-mt-6"
      )}>
        {title && (
          <h3 className={cn(
            typography.subheading,
            "text-lg"
          )}>
            {title}
          </h3>
        )}
        
        {descriptions.length > 0 && (
          <div className={spacing.elementSpacing}>
            {descriptions.map((desc, index) => (
              <p key={index} className={typography.paragraph}>{desc}</p>
            ))}
          </div>
        )}

        {children}
        {expandedContent}
      </div>

      {/* Footer */}
      {footer && (
        <div className={cn(
          "mt-auto",
          spacing.elementSpacing
        )}>
          {footer}
        </div>
      )}
    </div>
  );
} 