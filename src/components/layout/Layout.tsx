import React from 'react';
import { AuroraBackground } from '../aurora-background';
import { Header } from './Header';
import { cn } from '../../lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <AuroraBackground>
      <div className="relative min-h-screen flex flex-col">
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main className={cn(
          "flex-1 relative z-10",
          "px-4 sm:px-6 lg:px-8",
          "backdrop-blur-[2px]",
          className
        )}>
          <div className="max-w-7xl mx-auto py-8">
            {children}
          </div>
        </main>

        {/* Footer - We'll implement this later */}
        <footer className="relative z-10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-slate-400">
              © {new Date().getFullYear()} Skyland AI Solutions. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </AuroraBackground>
  );
} 