import { useState } from 'react';
import { cn } from '../../lib/utils';
import { Button } from './Button';
import { X } from 'lucide-react';
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
          "bg-blue-500/[0.03] hover:bg-blue-500/[0.05]",
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

      {/* Modal */}
      {isExpanded && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute -top-12 right-0 p-2 rounded-lg hover:bg-zinc-800/50 transition-colors text-white/80 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content Container */}
            <div className="bg-blue-500/[0.02] backdrop-blur-xl rounded-2xl border border-white/[0.05] p-8">
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-extralight tracking-[-0.02em] leading-[1.3] text-white/90">
                    {title}
                  </h3>
                  <p className="text-lg font-extralight tracking-[-0.015em] leading-[1.4] text-white/70">
                    {description}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-4">
                  <h4 className="text-xl font-extralight tracking-[-0.02em] leading-[1.3] text-white/80">
                    AI Solution
                  </h4>
                  <p className="text-lg font-extralight tracking-[-0.015em] leading-[1.4] text-white/60">
                    {solution}
                  </p>
                </div>

                {/* Demo Area */}
                {demoComponent && (
                  <div className="p-6 rounded-xl bg-blue-500/[0.02] border border-white/[0.03]">
                    {demoComponent}
                  </div>
                )}

                {/* Actions */}
                <div className="flex justify-end gap-4 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setIsExpanded(false)}
                    className="bg-white/[0.02] hover:bg-white/[0.05] border-white/[0.05] hover:border-white/[0.08] text-white/80 hover:text-white"
                  >
                    Close
                  </Button>
                  {onDemoClick && (
                    <Button
                      onClick={onDemoClick}
                      className="group bg-blue-500/[0.1] hover:bg-blue-500/[0.15] text-white/90 hover:text-white"
                    >
                      Let AI Solve This
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 