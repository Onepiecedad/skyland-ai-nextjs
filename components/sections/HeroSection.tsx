"use client";

import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";
import { validate } from "@/lib/withValidation";

function HeroSectionBase() {
  return (
    <SectionWrapper
      id="hero"
      className="relative flex flex-col"
    >
      {/* Logo positioned absolutely */}
      <Logo className="absolute top-8 left-8 md:left-12" />
      
      {/* Main content centered */}
      <Container
        glass={false}
        padding="none"
        className="flex-1 flex items-center"
      >
        <div
          className={cn(
            "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
          )}
        >
          {/* Left column */}
          <div
            className={cn(
              "flex flex-col justify-center",
              "text-left",
              "max-w-2xl"
            )}
          >
            <h1 
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl",
                "font-light",
                "text-white/70",
                "tracking-normal",
                "leading-tight",
                "mt-6 mb-4"
              )}
            >
              What If Growing Your Business Didn't Mean More Work?
            </h1>

            <div className="space-y-6">
              <h2 
                className={cn(
                  "text-lg md:text-xl",
                  "text-white/80"
                )}
              >
                What If AI Could Handle 80% of Your Work—Effortlessly?
              </h2>
              <h3 
                className={cn(
                  "text-base",
                  "text-white/60"
                )}
              >
                What If You Had an Employee That Worked 24/7—For Free?
              </h3>
            </div>
          </div>

          {/* Right column: empty for now but prepared for future content */}
          <div className="hidden lg:block" />
        </div>
      </Container>
    </SectionWrapper>
  );
}

export const HeroSection = validate(HeroSectionBase); 