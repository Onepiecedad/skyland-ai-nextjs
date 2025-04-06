'use client';

import React from 'react';
import { BaseSection } from "@/components/ui/BaseSection";
import { ContentStack } from "@/components/ui/ContentStack";
import { Card } from "@/components/ui/Card";
import { GridSection } from "@/components/ui/GridSection";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/theme/tokens/colors";
import { effects } from "@/lib/theme/tokens/effects";
import { radius } from "@/lib/theme/tokens/radius";
import { spacing } from "@/lib/theme/tokens/spacing";
import { typography } from "@/lib/theme/tokens/typography";
import { Wallet, TrendingUp, CheckCircle } from 'lucide-react';

const pricingCards = [
  {
    id: "value",
    icon: <Wallet className={cn(typography.icon.lg, colors.text.primary)} aria-hidden="true" />,
    title: "No Fixed Pricing—Just Real Results",
    description: "Every business is different. So is every price.",
    modalContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary, "font-normal")}>
          A Simple Model That Puts Results First
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            We don't do fixed prices. You pay based on the value we create.
            Here's how it works:
          </p>
          <div className={cn(spacing.stack.sm)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • You pay a <strong>10–15% deposit</strong> to get started.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • We build and deliver a working system.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • You test it for <strong>two full weeks—risk-free.</strong>
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • If you're happy, you pay the rest and start your monthly plan.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • If not, you walk away. The deposit is non-refundable, but there's no further cost.
            </p>
          </div>
          <p className={cn(typography.text.base, colors.text.accent, "mt-4 flex items-center")}>
            <span className="inline-block mr-2">👉</span> Book a free call to see what your custom solution could look like.
          </p>
        </div>
      </ContentStack>
    )
  },
  {
    id: "roi",
    icon: <TrendingUp className={cn(typography.icon.lg, colors.text.primary)} aria-hidden="true" />,
    title: "It's Not About Cost—It's About Value",
    description: "What matters isn't what it costs. It's what it earns.",
    modalContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary, "font-normal")}>
          Every Project Is Tailored Around ROI
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Skyland AI isn't a standard product—it's a custom solution built to generate measurable results.
          </p>
          <div className={cn(spacing.stack.sm, "mt-4")}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              Some clients save <strong>10+ hours a week</strong>.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              Others double their conversion rates.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              A few do both—and more.
            </p>
          </div>
          <div className={cn(spacing.stack.sm, "mt-4")}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              That's why we don't publish prices.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              We design solutions around <strong>what your business stands to gain</strong>—not just what they cost.
            </p>
          </div>
          <p className={cn(typography.text.base, colors.text.accent, "mt-4 flex items-center")}>
            <span className="inline-block mr-2">👉</span> Curious what's possible for your business? Let's talk.
          </p>
        </div>
      </ContentStack>
    )
  },
  {
    id: "trial",
    icon: <CheckCircle className={cn(typography.icon.lg, colors.text.primary)} aria-hidden="true" />,
    title: "Try It First. Decide Later",
    description: "No pressure. No risk. Just results.",
    modalContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary, "font-normal")}>
          You Only Commit When You See the Value
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            You shouldn't have to guess if AI will work for your business.
          </p>
          <div className={cn(spacing.stack.sm, "mt-4")}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              That's why we let you test your custom-built system for <strong>two weeks</strong>, in real conditions.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              You'll see what it can do—before committing to anything beyond the deposit.
            </p>
          </div>
          <div className={cn(spacing.stack.sm, "mt-4")}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              Not impressed? You walk away.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              Happy? We move forward and scale what's working.
            </p>
          </div>
          <p className={cn(typography.text.base, colors.text.accent, "mt-4 flex items-center")}>
            <span className="inline-block mr-2">👉</span> Schedule a free strategy call and see what's possible.
          </p>
        </div>
      </ContentStack>
    )
  }
];

export function PricingSection() {
  return (
    <BaseSection
      id="pricing"
      className={cn(
        spacing.section.base,
        spacing.padding.section,
        effects.glass
      )}
      ariaLabel="Pricing Options"
    >
      <ContentStack spacing="lg" maxWidth="2xl" className={cn(spacing.section.padding, "w-full max-w-7xl")}>
        <ContentStack spacing="md" className={cn(spacing.alignment.center)}>
          <h2 
            className={cn(
              typography.heading.h2,
              colors.text.primary,
              "font-normal"
            )}
          >
            AI That Pays for Itself—And Drives Real Growth
          </h2>
          <p 
            className={cn(
              typography.text.lg,
              colors.text.secondary,
              spacing.stack.md
            )}
          >
            See measurable savings and growth tailored to your business in just two weeks
          </p>
        </ContentStack>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {pricingCards.map((card) => (
            <div key={card.id} className={cn(spacing.flex.col, spacing.gap.md)}>
              {card.icon}
              <Card
                title={card.title}
                description={card.description}
                expandedContent={card.modalContent}
                ariaLabel={`${card.title} pricing option`}
                className={cn(
                  effects.hover.scale,
                  effects.transition.base,
                  "bg-white/5 w-full",
                  effects.shadow.card,
                  radius.lg
                )}
              />
            </div>
          ))}
        </div>
      </ContentStack>
    </BaseSection>
  );
}

