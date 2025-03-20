import { cn } from '../../lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={cn(
      'relative',
      sizeClasses[size],
      className
    )}>
      <div className={cn(
        'absolute inset-0',
        'border-4 border-white/10 rounded-full',
      )} />
      <div className={cn(
        'absolute inset-0',
        'border-4 border-t-blue-400 rounded-full',
        'animate-spin'
      )} />
    </div>
  );
} 