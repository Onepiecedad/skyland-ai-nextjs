import { useState } from 'react';
import { cn } from '../../lib/utils';
import { Button } from './Button';
import { X } from 'lucide-react';
import { ReactNode } from 'react';

interface PainPointCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  solution: string;
  demoComponent?: React.ReactNode;
  onDemoClick?: () => void;
  className?: string;
}

export function PainPointCard({
  icon,
  title,
  description,
  solution,
  demoComponent,
  onDemoClick,
  className
}: PainPointCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={cn(
      'relative group cursor-pointer transition-all duration-300',
      'rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm',
      'hover:border-zinc-700 hover:bg-zinc-900/80',
      className
    )}>
      {/* Main Card Content */}
      <div 
        onClick={() => setIsExpanded(true)}
        className="p-6 space-y-4"
      >
        {/* Icon and Title */}
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            {title}
          </h3>
        </div>
        
        {/* Description */}
        <p className="text-zinc-400">
          {description}
        </p>
      </div>

      {/* Expanded Menu */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="relative w-full max-w-2xl bg-zinc-900 rounded-xl border border-zinc-800 p-6">
            {/* Close Button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  {title}
                </h3>
                <p className="mt-2 text-zinc-400">{description}</p>
              </div>

              {/* Solution */}
              <div>
                <h4 className="text-lg font-medium text-white">AI Solution</h4>
                <p className="mt-2 text-zinc-400">{solution}</p>
              </div>

              {/* Demo Area */}
              {demoComponent && (
                <div className="mt-6 p-4 rounded-lg bg-zinc-800/50">
                  {demoComponent}
                </div>
              )}

              {/* CTA */}
              <div className="flex justify-end gap-4 mt-6">
                <Button
                  variant="outline"
                  onClick={() => setIsExpanded(false)}
                >
                  Close
                </Button>
                <Button
                  onClick={onDemoClick}
                >
                  Let AI Solve This
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 