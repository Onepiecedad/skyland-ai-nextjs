
import type { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { colors } from "@/lib/theme/tokens/colors";
import { typography } from "@/lib/theme/tokens/typography";
import { cn } from "@/lib/utils";
import { SectionProvider } from "@/lib/context/SectionContext";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Skyland AI - Transforming Business with AI",
  description: "Discover how Skyland AI can help your business leverage artificial intelligence for automation, insights, and growth.",
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

// Client component for dark mode initialization
const DarkModeScript = () => {
  'use client';
  
  const { useEffect } = require('react');
  
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  
  return null;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("dark", inter.variable)} suppressHydrationWarning>
      <body
        className={cn(
          colors.surface.default,
          typography.text.base,
          "font-sans antialiased"
        )}
      >
        <DarkModeScript />
        <SectionProvider>
          {children}
        </SectionProvider>
      </body>
    </html>
  );
}
