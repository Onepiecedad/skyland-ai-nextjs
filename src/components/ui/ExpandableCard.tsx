import { useState } from 'react';
import { cn } from '../../lib/utils';

interface ExpandableCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  solution: string;
  demoComponent?: React.ReactNode;
  className?: string;
}

export function ExpandableCard({
  icon,
  title,
  description,
  solution,
  demoComponent,
  className
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        // Base styles - matching new button standard
        "bg-gradient-to-r from-blue-400/[0.04] via-blue-500/[0.04] to-blue-400/[0.04]",
        "text-white/80",
        "border border-white/[0.08]",
        "backdrop-blur-xl",
        "rounded-xl",
        "transition-all duration-500",
        "group/card relative",
        "overflow-hidden",
        "cursor-pointer",
        "p-8",
        
        // Hover effects - matching new standard
        "hover:text-white/95",
        "hover:scale-[1.02]",
        "hover:border-blue-400/[0.2]",
        "hover:from-blue-400/[0.08] hover:via-blue-500/[0.08] hover:to-blue-400/[0.08]",
        "hover:shadow-[0_0_20px_-5px_rgba(96,165,250,0.2)]",
        
        // Expanded state
        isExpanded && [
          "scale-[1.02]",
          "border-blue-400/[0.2]",
          "from-blue-400/[0.08] via-blue-500/[0.08] to-blue-400/[0.08]",
          "shadow-[0_0_20px_-5px_rgba(96,165,250,0.2)]"
        ],
        
        className
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Icon container with matching animation */}
      <div className="flex items-center mb-6">
        <div className={cn(
          "transition-all duration-500",
          "transform-gpu",
          "group-hover/card:scale-110",
          "group-hover/card:rotate-3",
          "group-hover/card:animate-wiggle",
          isExpanded && "scale-110 rotate-3 animate-wiggle"
        )}>
          {icon}
        </div>
      </div>

      {/* Content with consistent text styles */}
      <h3 className="text-xl font-light mb-3 text-white/90 transition-colors duration-300 group-hover/card:text-white/95">{title}</h3>
      <p className="text-base font-light text-white/70 transition-colors duration-300 group-hover/card:text-white/80">{description}</p>

      {/* Expandable content with smooth transition */}
      <div className={cn(
        "overflow-hidden transition-all duration-500",
        isExpanded ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"
      )}>
        <div className="pt-4 border-t border-blue-400/[0.1]">
          <p className="text-white/70 mb-6 font-light leading-[1.6]">{solution}</p>
          {demoComponent && (
            <div className="mt-6">
              {demoComponent}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 