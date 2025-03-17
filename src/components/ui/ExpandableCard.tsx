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
        // Base styles - matching CTA buttons exactly
        "bg-blue-400/[0.08]",
        "text-white/90",
        "border border-blue-400/10",
        "backdrop-blur-sm",
        "rounded-2xl",
        "transition-all duration-500",
        "group relative",
        "overflow-hidden",
        "cursor-pointer",
        "p-8 sm:p-10",
        
        // Hover effects - matching CTA
        "hover:text-white",
        "hover:scale-[1.02]",
        "hover:border-blue-400/30",
        "hover:bg-blue-400/[0.12]",
        "hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)]",
        
        // Expanded state
        isExpanded && [
          "scale-[1.02]",
          "border-blue-400/30",
          "bg-blue-400/[0.12]",
          "shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)]"
        ],
        
        className
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Gradient overlay - matching CTA */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon container with exact CTA styling */}
      <div className="flex items-center mb-6">
        <div className={cn(
          "w-12 h-12",
          "text-blue-500/80",
          "transition-all duration-500",
          "transform-gpu",
          "group-hover:scale-110",
          "group-hover:animate-wiggle",
          isExpanded && "scale-110 animate-wiggle"
        )}>
          {icon}
        </div>
      </div>

      {/* Content with consistent text styles */}
      <h3 className="text-xl font-light mb-3 text-white/90">{title}</h3>
      <p className="text-base text-white/70 mb-4 font-light tracking-[-0.01em] leading-[1.6]">{description}</p>

      {/* Expandable content with smooth transition */}
      <div className={cn(
        "overflow-hidden transition-all duration-500",
        isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="pt-4 border-t border-blue-400/10">
          <p className="text-white/80 mb-6 font-light tracking-[-0.01em] leading-[1.6]">{solution}</p>
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