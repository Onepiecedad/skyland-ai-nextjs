import { useState } from 'react';
import { cn } from '../../lib/utils';
import { DanaWidget } from './DanaWidget';
import { Button } from './Button';
import { Mic } from 'lucide-react';

interface ExpandableCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  solution: string;
  demoComponent?: React.ReactNode;
  className?: string;
  showDana?: boolean;
  danaWelcomeText?: string;
}

export function ExpandableCard({
  icon,
  title,
  description,
  solution,
  demoComponent,
  className,
  showDana = false,
  danaWelcomeText
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDanaWidget, setShowDanaWidget] = useState(false);

  return (
    <>
      {/* Base Card */}
      <div
        className={cn(
          // Base styles
          "bg-gradient-to-r from-blue-400/[0.04] via-blue-500/[0.04] to-blue-400/[0.04]",
          "text-white/95",
          "border border-white/[0.08]",
          "backdrop-blur-sm",
          "rounded-xl",
          "transition-all duration-300",
          "group/card relative",
          "cursor-pointer",
          "p-4 md:p-5",
          
          // Hover effects
          "hover:text-white",
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
        onClick={() => setIsExpanded(true)}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-xl" />

        {/* Icon container */}
        <div className="mb-4">
          <div className={cn(
            "transition-all duration-300",
            "transform-gpu",
            "group-hover/card:scale-110",
            "group-hover/card:rotate-3",
            "group-hover/card:animate-wiggle",
            isExpanded ? "text-blue-400" : "text-blue-400/90"
          )}>
            {icon}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-[18px] font-semibold mb-2.5 text-white/95 transition-colors duration-300 group-hover/card:text-white leading-[1.3]">{title}</h3>
        <p className="text-sm font-normal text-white/80 leading-[1.8]">{description}</p>
      </div>

      {/* Expanded Card Overlay */}
      {isExpanded && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          onClick={() => {
            setIsExpanded(false);
            setShowDanaWidget(false);
          }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in" />
          
          {/* Expanded Card Container */}
          <div
            className={cn(
              "relative",
              "w-full max-w-2xl mx-auto",
              "max-h-[min(600px,85vh)]",
              "flex flex-col",
              "animate-slide-up"
            )}
            onClick={e => e.stopPropagation()}
          >
            {/* Card Content */}
            <div className={cn(
              "flex-1",
              "overflow-y-auto",
              "bg-gradient-to-r from-blue-400/[0.08] via-blue-500/[0.08] to-blue-400/[0.08]",
              "border border-blue-400/20",
              "backdrop-blur-sm",
              "rounded-2xl",
              "shadow-[0_8px_32px_-8px_rgba(96,165,250,0.25)]"
            )}>
              {/* Scrollable Content Area */}
              <div className="p-7 md:p-8 space-y-7">
                {/* Header */}
                <div className="flex items-start gap-5">
                  <div className={cn(
                    "transition-all duration-300",
                    "transform-gpu",
                    "scale-110",
                    "text-blue-400",
                    "shrink-0"
                  )}>
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white leading-[1.3] mb-3">{title}</h3>
                    <p className="text-base font-normal text-white/90 leading-[1.8]">{description}</p>
                  </div>
                </div>

                {/* Solution */}
                <div className="pt-7 border-t border-blue-400/20">
                  <p className="text-lg font-normal leading-[1.8] text-white/95">{solution}</p>
                </div>

                {/* Demo Component or Dana Widget */}
                {(demoComponent || showDana) && (
                  <div className="pt-7 border-t border-blue-400/20">
                    {showDana && !showDanaWidget && (
                      <div className="flex flex-col items-center gap-4">
                        <Button
                          onClick={() => setShowDanaWidget(true)}
                          className="group relative w-full py-4"
                        >
                          <Mic className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                          <span className="ml-2">Ask Dana About This Solution</span>
                        </Button>
                      </div>
                    )}
                    {showDana && showDanaWidget && (
                      <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden">
                        <DanaWidget
                          welcomeText={danaWelcomeText || `Hi! I'd love to tell you more about our ${title.toLowerCase()}. What would you like to know?`}
                          showIntro={false}
                          className="w-full h-full"
                        />
                      </div>
                    )}
                    {!showDana && demoComponent && demoComponent}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 