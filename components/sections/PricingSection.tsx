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
    description: "Our pricing is based on the value we create for your business.",
    modalContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary)}>
          Value-Based Pricing Model
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Our flexible pricing structure ensures you only pay for the value we deliver:
          </p>
          <div className={cn(spacing.stack.sm)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Pay based on measurable results and ROI
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • No upfront costs or fixed monthly fees
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Transparent pricing tied to your success
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Scale up or down based on your needs
            </p>
          </div>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            We believe in aligning our success with yours. Our pricing model ensures you only pay for the value we deliver, making it a risk-free investment in your business's future.
          </p>
        </div>
      </ContentStack>
    )
  },
  {
    id: "roi",
    icon: <TrendingUp className={cn(typography.icon.lg, colors.text.primary)} aria-hidden="true" />,
    title: "It's Not About Cost—It's About Value",
    description: "We tailor our approach around your ROI goals.",
    modalContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary)}>
          ROI-Focused Implementation
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Our ROI-driven approach ensures maximum value from your investment:
          </p>
          <div className={cn(spacing.stack.sm)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Custom ROI analysis for your business
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Clear metrics and success indicators
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Regular performance reviews
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Continuous optimization for better results
            </p>
          </div>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            We work closely with you to identify, track, and maximize the return on your AI investment, ensuring every dollar spent contributes to your growth.
          </p>
        </div>
      </ContentStack>
    )
  },
  {
    id: "trial",
    icon: <CheckCircle className={cn(typography.icon.lg, colors.text.primary)} aria-hidden="true" />,
    title: "Try It First. Decide Later",
    description: "Test your custom-built system risk-free.",
    modalContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary)}>
          Risk-Free Trial Period
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Experience the full potential of our AI solutions without risk:
          </p>
          <div className={cn(spacing.stack.sm)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • 2-week trial of your custom system
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Full access to all features
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Dedicated support and training
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • No commitment required
            </p>
          </div>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Start your journey with a risk-free trial and see firsthand how our AI solutions can transform your business operations.
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
              colors.text.primary
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
