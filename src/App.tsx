import { AuroraBackground } from "./components/ui/AuroraBackground";
import { HeroSection } from "./components/sections/HeroSection";

export function App() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      <AuroraBackground className="fixed inset-0 -z-10" showRadialGradient={false} />
      <HeroSection />
    </main>
  );
}