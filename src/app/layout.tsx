import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { JsonLd } from '@/components/JsonLd';
import { Footer } from '@/components/Footer';
import { AuroraBackground } from '@/components/ui/AuroraBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Skyland AI - Transform Your Business with AI',
  description: 'Skyland AI helps businesses automate tasks, improve efficiency, and grow faster with cutting-edge AI solutions. Get started with a free consultation.',
  keywords: 'AI automation, business efficiency, AI solutions, workflow automation, customer support AI, business growth',
  authors: [{ name: 'Skyland AI' }],
  openGraph: {
    title: 'Skyland AI - Transform Your Business with AI',
    description: 'Skyland AI helps businesses automate tasks, improve efficiency, and grow faster with cutting-edge AI solutions.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Skyland AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skyland AI - Transform Your Business with AI',
    description: 'Skyland AI helps businesses automate tasks, improve efficiency, and grow faster with cutting-edge AI solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <AuroraBackground />
        <Providers>
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
} 