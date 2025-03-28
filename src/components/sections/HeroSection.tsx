"use client";

import React, { useRef } from 'react';
import { Brain } from "lucide-react";
import { DanaButton } from "@/components/ui/DanaButton";
import { cn } from "@/lib/utils";
import { glass, hover, transition, layout, typography, font } from "@/lib/theme";

// Temporär styling tills vi fixar theme-imports
const styles = {
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  card: "rounded-2xl shadow-lg",
};

export function HeroSection() {
  console.log("HeroSection rendering");
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-10 md:pb-14 bg-gradient-to-b from-black via-zinc-900 to-zinc-950 text-white"
    >
      {/* Logo top-left */}
      <a
        href="#"
        className="absolute top-8 left-6 sm:left-10 flex items-center gap-2 group z-50"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Brain className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition" />
        <span className="text-base sm:text-lg font-light tracking-widest group-hover:text-white/90 transition">
          SKYLAND AI
        </span>
      </a>

      <div className={styles.container}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr,400px] gap-8 md:gap-16 items-center">
          {/* Headlines */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              What If Growing Your Business Didn't Mean More Work?
            </h1>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extralight tracking-[-0.02em] text-white/85">
                What If AI Could Handle 80% of Your Work—Effortlessly?
              </h2>
              <h3 className="text-base sm:text-lg lg:text-xl font-extralight tracking-[-0.015em] text-white/75">
                What If You Had an Employee That Worked 24/7—For Free?
              </h3>
            </div>
          </div>

          {/* Dana button */}
          <div className="relative z-20 flex justify-center md:justify-end">
            <div className="w-full max-w-sm md:max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 shadow-lg">
              <div className="pb-3">
                <h4 className="text-white/90 text-lg font-medium leading-snug">
                  Want to save 10+ hours a week—without changing how you work?
                </h4>
                <p className="text-white/70 text-sm mt-2">
                  What's the one task you'd automate today if you could?
                </p>
              </div>
              <div className="pt-3">
                <DanaButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 