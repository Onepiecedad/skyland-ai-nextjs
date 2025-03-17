import React from 'react';
import { AuroraBackground } from '../aurora-background';
import { Header } from './Header';
import { Footer } from './Footer';
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
        <Footer />
      </div>
    </AuroraBackground>
  );
} 