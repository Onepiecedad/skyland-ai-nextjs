import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { glass, hover, transition, typography, spacing, defaultIconClass } from "@/lib/theme";
import { IconKey, iconMap } from "@/components/cards/iconMap";
import { Brain } from "lucide-react";

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
        "p-6 space-y-6",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {/* Header */}
      {(Icon || headerContent) && (
        <div className="flex items-center gap-2 group">
          {Icon && (
            <Icon className={cn(
              defaultIconClass,
              "h-8 w-8",
              "group-hover:text-blue-300"
            )} />
          )}
          {headerContent}
        </div>
      )}

      {/* Content */}
      <div className={cn(
        "space-y-4",
        !Icon && !headerContent && "-mt-6"
      )}>
        {title && (
          <h3 className={cn(
            typography.paragraph,
            "text-lg font-medium"
          )}>
            {title}
          </h3>
        )}
        
        {descriptions.length > 0 && (
          <div className="space-y-3">
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
          "mt-auto -mb-2",
          "pt-2"
        )}>
          {footer}
        </div>
      )}
    </div>
  );
} 