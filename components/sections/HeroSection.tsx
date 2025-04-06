"use client";

import React from 'react';
import { BaseSection } from "@/components/ui/BaseSection";
import { ContentStack } from "@/components/ui/ContentStack";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/theme/tokens/colors";
import { effects } from "@/lib/theme/tokens/effects";
import { layout } from "@/lib/theme/tokens/layout";
import { typography } from "@/lib/theme/tokens/typography";
import { radius } from "@/lib/theme/tokens/radius";
import { spacing } from "@/lib/theme/tokens/spacing";
import { MessageCircle } from 'lucide-react';
import { Logo } from "@/components/common/Logo";

export function HeroSection() {
  return (
    <BaseSection
      id="hero"
      className={cn(
        layout.section.base,
        layout.hero.container,
        "pt-0 pb-8 md:pt-0 md:pb-10 lg:pt-0 lg:pb-12 min-h-[80vh] md:min-h-[75vh] flex items-start justify-center"
      )}
      ariaLabel="Hero Section"
      containerGlass={false}
    >
      {/* Logo i övre vänstra hörnet */}
      <div className="absolute top-3 left-4 md:top-4 md:left-6 lg:top-5 lg:left-8 z-20">
        <Logo className="text-lg sm:text-xl" />
      </div>
      
      <ContentStack spacing="md" className="max-w-7xl mx-auto px-5 lg:px-8 w-full mt-[40px] md:mt-[60px] lg:mt-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left column */}
          <ContentStack spacing="sm" className={cn("space-y-3")}>
            <h1 className={cn(
              typography.heading.h1,
              colors.text.primary,
              "font-normal"
            )}>
              What if growing your business didn't mean more work?
            </h1>
            <p className={cn(
              typography.text.lg,
              colors.text.secondary
            )}>
              Let AI Handle 80% of Your Work—Effortlessly. Meet Your 24/7 Digital Employee—For Free
            </p>
          </ContentStack>

          {/* Right column */}
          <div className="flex flex-col items-center w-full max-w-md lg:max-w-none mx-auto lg:mx-0 relative">
            <Card
              title="Want to save 10+ hours a week—without changing how you work?"
              description="What's the one task you'd automate today if you could? Talk to Dana to find out how."
              ariaLabel="AI Automation Card"
              className={cn(
                effects.hover.scale,
                effects.transition.base,
                "bg-white/5 w-full p-5 md:p-6",
                effects.shadow.card,
                radius.lg,
                "border border-white/10"
              )}
            />
            <div className="absolute top-[-20px] right-[-20px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-2 shadow-lg">
              <MessageCircle className={cn("w-8 h-8 text-white")} aria-hidden="true" />
            </div>
          </div>
        </div>
      </ContentStack>
    </BaseSection>
  );
} 
