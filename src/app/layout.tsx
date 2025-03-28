import { Footer } from '@/components/Footer';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import { Providers } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <AuroraBackground>
        {children}
        <Footer />
      </AuroraBackground>
    </Providers>
  );
} 