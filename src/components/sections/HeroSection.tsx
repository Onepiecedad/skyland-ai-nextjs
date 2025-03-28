"use client";

import React, { useRef } from 'react';
import { Brain } from "lucide-react";
import { DanaButton } from "@/components/ui/DanaButton";
import { motion } from "framer-motion";
import { colors, shadow, spacing, typography, glass, hover, transition } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  const scrollToTop = (e: React.MouseEvent) => {
    try {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error('Failed to scroll to top:', error);
      // Fallback to instant scroll if smooth scroll fails
      window.scrollTo(0, 0);
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className={cn(
        "relative min-h-screen flex items-center justify-center",
        "bg-transparent",
        spacing.sectionY
      )}
    >
      {/* Logo top-left */}
      <motion.a
        href="#"
        className={cn(
          "absolute top-8 left-6 sm:left-10 flex items-center gap-2 group z-50",
          transition.base
        )}
        onClick={scrollToTop}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Brain className={cn(
          "h-6 w-6",
          "text-blue-400 group-hover:text-blue-600",
          transition.base
        )} />
        <span className={cn(
          typography.buttonText,
          "group-hover:text-white/90",
          transition.base
        )}>
          SKYLAND AI
        </span>
      </motion.a>

      <div className={cn(spacing.container, "relative z-10")}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr,450px] gap-8 md:gap-20 items-center">
          {/* Headlines */}
          <motion.div 
            className={cn("max-w-2xl", spacing.elementSpacing)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className={cn(
              typography.heading,
              "bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80"
            )}>
              What If Growing Your Business Didn't Mean More Work?
            </h1>

            <div className={spacing.elementSpacing}>
              <h2 className={cn(
                typography.subheading,
                "tracking-[-0.02em]"
              )}>
                What If AI Could Handle 80% of Your Work—Effortlessly?
              </h2>
              <h3 className={cn(
                typography.paragraph,
                "tracking-[-0.015em]"
              )}>
                What If You Had an Employee That Worked 24/7—For Free?
              </h3>
            </div>
          </motion.div>

          {/* Dana button card */}
          <motion.div 
            className={cn(
              "relative z-20 flex justify-center md:justify-end",
              transition.base
            )}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div
              className={cn(
                "w-full max-w-sm md:max-w-md p-6",
                glass.card,
                hover.card,
                shadow.card,
                "backdrop-blur-xl bg-black/20"
              )}
            >
              <div className="pb-4">
                <h4 className={cn(
                  typography.subheading,
                  "leading-snug"
                )}>
                  Want to save 10+ hours a week—without changing how you work?
                </h4>
                <p className={cn(
                  typography.paragraph,
                  "mt-3"
                )}>
                  What's the one task you'd automate today if you could?
                </p>
              </div>
              <div className="pt-4">
                <DanaButton />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 