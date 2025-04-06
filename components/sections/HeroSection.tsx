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
  const danaCard = {
    title: "Meet Dana—Our AI Assistant",
    description: "She's here to show you how automation can save time, reduce workload, and help your business grow.\nWhat's the one task you'd automate today if you could?",
    expandedContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary, "font-normal")}>
          Meet Dana—Our Always-On AI Strategy Assistant
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Dana isn't just a chatbot—she's an AI assistant trained to answer your questions, handle leads, and help you automate key parts of your business.
          </p>
          
          <p className={cn(typography.text.base, colors.text.secondary, "mt-4")}>
            Here's what Dana can help you with:
          </p>
          
          <div className={cn(spacing.stack.md, "mt-2")}>
            <h5 className={cn(typography.heading.h5, colors.text.primary, "font-normal")}>
              🧠 <span className="font-medium">Understand & Explore</span>
            </h5>
            <ul className={cn(spacing.stack.sm, "ml-6 list-disc")}>
              <li className={cn(typography.text.base, colors.text.secondary)}>
                Answer your questions about Skyland AI
              </li>
              <li className={cn(typography.text.base, colors.text.secondary)}>
                Explain how our services, trial model, and pricing work
              </li>
              <li className={cn(typography.text.base, colors.text.secondary)}>
                Suggest automation ideas tailored to your business and goals
              </li>
            </ul>
          </div>
          
          <div className={cn(spacing.stack.md, "mt-4")}>
            <h5 className={cn(typography.heading.h5, colors.text.primary, "font-normal")}>
              ⚙️ <span className="font-medium">Take Action</span>
            </h5>
            <ul className={cn(spacing.stack.sm, "ml-6 list-disc")}>
              <li className={cn(typography.text.base, colors.text.secondary)}>
                Collect and save lead info directly into our CRM
              </li>
              <li className={cn(typography.text.base, colors.text.secondary)}>
                Send custom emails and take messages
              </li>
              <li className={cn(typography.text.base, colors.text.secondary)}>
                Book meetings or appointments through calendar integrations
              </li>
              <li className={cn(typography.text.base, colors.text.secondary)}>
                Follow up with visitors via email or summaries
              </li>
            </ul>
          </div>
          
          <p className={cn(typography.text.base, colors.text.secondary, "mt-4")}>
            She's not here to sell. She's here to help you explore if—and how—automation can work for your business.
          </p>
          
          <div className={cn(spacing.stack.md, "mt-4")}>
            <h5 className={cn(typography.heading.h5, colors.text.primary, "font-normal")}>
              💬 <span className="font-medium">You can ask her things like:</span>
            </h5>
            <ul className={cn(spacing.stack.sm, "ml-6")}>
              <li className={cn(typography.text.base, colors.text.secondary, "italic")}>
                "What would you automate first in a business like mine?"
              </li>
              <li className={cn(typography.text.base, colors.text.secondary, "italic")}>
                "Can AI help me respond faster to new leads?"
              </li>
              <li className={cn(typography.text.base, colors.text.secondary, "italic")}>
                "How does the two-week trial work?"
              </li>
              <li className={cn(typography.text.base, colors.text.secondary, "italic")}>
                "What's a voice agent, and do I need one?"
              </li>
            </ul>
          </div>
          
          <p className={cn(typography.text.base, colors.text.accent, "mt-6 flex items-center font-medium")}>
            <span className="inline-block mr-2">👉</span> Ask Dana now and see what AI can actually do—for your business
          </p>
        </div>
      </ContentStack>
    )
  };

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
              title={danaCard.title}
              description={danaCard.description}
              expandedContent={danaCard.expandedContent}
              ariaLabel="Meet Dana AI Assistant"
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
