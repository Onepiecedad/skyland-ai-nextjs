'use client';

import { Container } from "@/components/ui/Container";
import { AuroraBackground } from "@/components/backgrounds/AuroraBackground";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <main className="min-h-screen py-12 px-4 sm:py-24 sm:px-6">
        {/* Hero Section */}
        <Container 
          maxWidth="lg" 
          glassIntensity="medium"
          className="space-y-8"
          noGlassBorder={false}
          noGlassShadow={false}
        >
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Skyland AI
            </h1>
            <p className="max-w-2xl text-lg text-gray-300">
              AI-powered business automation for service-based companies. Transform your operations with intelligent automation solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="rounded-2xl bg-white/10 px-6 py-3 text-white hover:bg-white/20 transition-all duration-300 ease-in-out">
              Get Started
            </button>
            <button className="rounded-2xl bg-white/5 px-6 py-3 text-white hover:bg-white/10 transition-all duration-300 ease-in-out">
              Learn More
            </button>
          </div>
        </Container>

        {/* Feature Section */}
        <Container 
          maxWidth="lg"
          className="mt-24"
          glassIntensity="light"
          padding="lg"
          noGlassBorder={true}
          noGlassShadow={false}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature cards här senare */}
          </div>
        </Container>
      </main>
    </>
  );
} 