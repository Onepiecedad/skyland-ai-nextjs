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
          className
        )}>
          {children}
        </main>

        {/* Footer */}
        <footer className="relative z-10 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-5xl mx-auto px-8">
            <p className="text-center text-sm text-slate-400">
              © {new Date().getFullYear()} Skyland AI Solutions. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </AuroraBackground>
  );
} 