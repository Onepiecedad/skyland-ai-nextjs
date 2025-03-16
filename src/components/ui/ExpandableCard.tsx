import { useState } from 'react';
import { cn } from '../../lib/utils';
import { Button } from './Button';
import { ReactNode } from 'react';

interface ExpandableCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  solution: string;
  demoComponent?: React.ReactNode;
  onDemoClick?: () => void;
  className?: string;
}

export function ExpandableCard({
  icon,
  title,
  description,
  solution,
  demoComponent,
  onDemoClick,
  className
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Card Trigger */}
      <div 
        onClick={() => setIsExpanded(true)}
        className={cn(
          "p-8 rounded-2xl backdrop-blur-lg transition-all duration-500 group/card cursor-pointer",
          "bg-blue-500/[0.02] hover:bg-blue-500/[0.03]",
          "border border-white/[0.03] hover:border-white/[0.08]",
          "hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.15)]",
          className
        )}
      >
        <div className="flex items-start gap-6">
          <div className="transition-transform duration-500 group-hover/card:scale-125 group-hover/card:rotate-3">
            {icon}
          </div>
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-extralight tracking-[-0.02em] leading-[1.3] text-white/80 transition-colors duration-300 group-hover/card:text-white">
              {title}
            </h3>
            <p className="text-lg font-extralight tracking-[-0.015em] leading-[1.4] text-white/60 transition-colors duration-300 group-hover/card:text-white/90">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Expanded Card */}
      {isExpanded && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
            onClick={() => setIsExpanded(false)}
          />
          <div className="relative w-full max-w-2xl animate-float">
            {/* Expanded Content */}
            <div className="bg-blue-500/[0.02] backdrop-blur-xl rounded-2xl border border-white/[0.08] shadow-[0_8px_40px_-12px_rgba(96,165,250,0.2)] p-8">
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-extralight tracking-[-0.02em] leading-[1.3] text-white/90">
                    {title}
                  </h3>
                  <p className="text-lg font-extralight tracking-[-0.015em] leading-[1.4] text-white/80">
                    {description}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-4">
                  <h4 className="text-xl font-extralight tracking-[-0.02em] leading-[1.3] text-white/90">
                    AI Solution
                  </h4>
                  <p className="text-lg font-extralight tracking-[-0.015em] leading-[1.4] text-white/70">
                    {solution}
                  </p>
                </div>

                {/* Demo Area */}
                {demoComponent && (
                  <div className="p-6 rounded-xl bg-blue-500/[0.02] border border-white/[0.05] backdrop-blur-lg">
                    {demoComponent}
                  </div>
                )}

                {/* Actions */}
                {onDemoClick && (
                  <div className="flex justify-end pt-4">
                    <Button
                      onClick={onDemoClick}
                      className="group bg-blue-500/[0.1] hover:bg-blue-500/[0.15] text-white/90 hover:text-white backdrop-blur-sm"
                    >
                      Let AI Solve This
                    </Button>
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