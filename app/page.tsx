import { PageSections } from '@/components/sections/PageSections';
import { AuroraBackground } from '@/components/backgrounds/AuroraBackground';
import { SectionProvider } from '@/lib/context/SectionContext';

export default function Home() {
  return (
    <SectionProvider>
      <AuroraBackground enabled={true} />
      <PageSections />
    </SectionProvider>
  );
}
