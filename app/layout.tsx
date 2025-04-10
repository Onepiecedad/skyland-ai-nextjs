
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Skyland AI - Transforming Business with AI',
  description:
    'Discover how Skyland AI can help your business leverage artificial intelligence for automation, insights, and growth.',
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000',
};

'use client';

import { useEffect } from 'react';
import './globals.css';
import { colors } from '@/lib/theme/tokens/colors';
import { typography } from '@/lib/theme/tokens/typography';
import { cn } from '@/lib/utils';
import ClientProviders from '@/components/providers/ClientProviders';
import { ThemeEffect } from '@/components/ThemeEffect';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.id = 'elevenlabs-widget-script';
    
    script.onload = () => {
      console.log('ElevenLabs widget script loaded successfully');
    };

    script.onerror = (error) => {
      console.error('Error loading ElevenLabs widget script:', error);
    };

    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('elevenlabs-widget-script');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <html
      lang="en"
      className={cn('dark [color-scheme:dark]', inter.variable)}
      suppressHydrationWarning
    >
      <head />
      <body
        className={cn(
          colors.surface.default,
          typography.text.base,
          'font-sans antialiased bg-slate-900'
        )}
      >
        <ThemeEffect />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
