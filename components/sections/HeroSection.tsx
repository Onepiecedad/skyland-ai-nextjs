"use client";

import React, { useRef } from 'react';
import { Brain } from "lucide-react";
import { DanaButton } from "@/components/ui/DanaButton";
import { motion } from "framer-motion";
import { colors, shadow, spacing, typography, glass, hover, transition, layout, sizes, zIndex } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/SectionWrapper";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  const handleDanaClick = () => {
    // Dana widget open logic here
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className={cn(
        "relative min-h-screen",
        layout.flexCenter,
        spacing.sectionY,
        `bg-gradient-to-b from-[${colors.backgroundDark}] via-[${colors.backgroundDark}]/90 to-[${colors.backgroundDark}]`
      )}
    >
      {/* Logo top-left */}
      <a
        href="#"
        className={cn(
          "absolute",
          spacing.positions.header,
          layout.flexCenter,
          "gap-2 group",
          zIndex.modal
        )}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Brain className={cn(
          spacing.icon.md,
          `text-[${colors.primary}]`,
          `group-hover:text-[${colors.primaryHover}]`,
          transition.base
        )} />
        <span className={cn(
          typography.label,
          "tracking-widest",
          `text-[${colors.textPrimary}]`,
          `group-hover:text-[${colors.textSecondary}]`,
          transition.base
        )}>
          SKYLAND AI
        </span>
      </a>

      <div className={spacing.container}>
        <div className={cn(
          layout.gridCols[2],
          "gap-8 md:gap-16 items-center"
        )}>
          {/* Headlines */}
          <div className={spacing.elementSpacing}>
            <h1 className={typography.heading}>
              What If Growing Your Business Didn't Mean More Work?
            </h1>

            <div className={spacing.elementSpacing}>
              <h2 className={cn(
                typography.subheading,
                "text-lg sm:text-xl lg:text-2xl"
              )}>
                What If AI Could Handle 80% of Your Work—Effortlessly?
              </h2>
              <h3 className={cn(
                typography.paragraph,
                "text-base sm:text-lg lg:text-xl"
              )}>
                What If You Had an Employee That Worked 24/7—For Free?
              </h3>
            </div>
          </div>

          {/* Dana button */}
          <div className={cn(
            "relative",
            layout.flexCenter,
            "md:justify-end",
            zIndex.above
          )}>
            <div className={cn(
              "w-full",
              sizes.maxWidth.card,
              glass.card,
              hover.card,
              transition.base,
              spacing.elementSpacing,
              spacing.padding.card
            )}>
              <div className={spacing.elementSpacing}>
                <h4 className={cn(
                  typography.subheading,
                  "text-lg font-medium leading-snug"
                )}>
                  Want to save 10+ hours a week—without changing how you work?
                </h4>
                <p className={typography.paragraph}>
                  What's the one task you'd automate today if you could?
                </p>
              </div>
              <div className={spacing.padding.section}>
                <DanaButton onClick={handleDanaClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 