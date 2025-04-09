
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { colors } from '@/lib/theme/tokens/colors';
import { typography } from '@/lib/theme/tokens/typography';
import { cn } from '@/lib/utils';
import ClientProviders from '@/components/providers/ClientProviders';
import { ThemeEffect } from '@/components/ThemeEffect';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn('dark', inter.variable)} suppressHydrationWarning>
      <body className={cn(colors.surface.default, typography.text.base, 'font-sans antialiased')}>
        <ThemeEffect />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
