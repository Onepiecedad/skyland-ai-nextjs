'use client';

import { AuroraBackground } from "@/components/backgrounds/AuroraBackground";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <PageWrapper>
      <AuroraBackground />
      
      {/* Only keep HeroSection active for now */}
      <HeroSection />

      {/* Comment out other sections until we fix the spacing issues */}
      {/* <div className={cn(
        "min-h-screen",
        spacing.padding.sectionY,
        spacing.container
      )}>
        <Container 
          maxWidth="lg"
          className={spacing.elementSpacing}
          glassIntensity="light"
          padding="lg"
          noGlassBorder={true}
          noGlassShadow={false}
        >
          <div className={cn(spacing.gridCols[3], spacing.elementSpacing)}>
          </div>
        </Container>
      </div> */}
    </PageWrapper>
  );
} 