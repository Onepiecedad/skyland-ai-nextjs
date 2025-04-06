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
import { Search, Lightbulb, Rocket, Target } from 'lucide-react';

const howItWorksSteps = [
  {
    id: "discovery",
    icon: <Search className={cn(typography.icon.lg, colors.text.primary)} aria-hidden="true" />,
    title: "Discovery",
    description: "We analyze your business to identify the highest-impact opportunities for AI.",
    modalContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary)}>
          In-Depth Business Analysis
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            What we assess:
          </p>
          <div className={cn(spacing.stack.sm)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Current workflows and bottlenecks
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Time-consuming manual tasks
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Growth opportunities
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Cost reduction potential
            </p>
          </div>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            We identify exactly where AI can create the most value for your business.
          </p>
        </div>
      </ContentStack>
    )
  },
  {
    id: "solution-design",
    icon: <Lightbulb className={cn(typography.icon.lg, colors.text.primary)} aria-hidden="true" />,
    title: "Solution Design",
    description: "We create a custom AI solution tailored to your specific needs and goals.",
    modalContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary)}>
          Custom Solution Development
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Our design process:
          </p>
          <div className={cn(spacing.stack.sm)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Tailored AI architecture
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Integration planning
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Workflow optimization
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • ROI projections
            </p>
          </div>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Every solution is built specifically for your business needs and goals.
          </p>
        </div>
      </ContentStack>
    )
  },
  {
    id: "implementation",
    icon: <Rocket className={cn(typography.icon.lg, colors.text.primary)} aria-hidden="true" />,
    title: "Implementation",
    description: "We deploy your AI solution with minimal disruption to your operations.",
    modalContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary)}>
          Seamless Deployment
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Implementation steps:
          </p>
          <div className={cn(spacing.stack.sm)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • System integration
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Team training
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Process transition
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Performance testing
            </p>
          </div>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Get up and running quickly with minimal disruption to your business.
          </p>
        </div>
      </ContentStack>
    )
  },
  {
    id: "optimization",
    icon: <Target className={cn(typography.icon.lg, colors.text.primary)} aria-hidden="true" />,
    title: "Optimization",
    description: "We continuously improve your AI solution to maximize ROI and performance.",
    modalContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary)}>
          Continuous Improvement
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Optimization focus:
          </p>
          <div className={cn(spacing.stack.sm)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Performance monitoring
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • ROI tracking
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • System refinement
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Capability expansion
            </p>
          </div>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            We ensure your AI solution keeps getting better and delivering more value.
          </p>
        </div>
      </ContentStack>
    )
  }
];

export function HowItWorksSection() {
  return (
    <BaseSection
      id="how-it-works"
      className={cn(
        spacing.section.base,
        spacing.padding.section,
        effects.glass
      )}
      ariaLabel="How It Works"
    >
      <ContentStack spacing="lg" maxWidth="2xl" className={cn(spacing.section.padding)}>
        <ContentStack spacing="md" className={cn(spacing.alignment.center)}>
          <h2 
            className={cn(
              typography.heading.h2,
              colors.text.primary
            )}
          >
            How We Transform Your Business
          </h2>
          <p 
            className={cn(
              typography.text.lg,
              colors.text.secondary,
              spacing.stack.md
            )}
          >
            A proven process that delivers results in weeks, not months
          </p>
        </ContentStack>

        <GridSection 
          columns="two" 
          gap="lg"
          ariaLabel="How It Works Process Grid"
        >
          {howItWorksSteps.map((step) => (
            <div key={step.id} className={cn(spacing.flex.col, spacing.gap.sm)}>
              {step.icon}
              <Card
                title={step.title}
                description={step.description}
                expandedContent={step.modalContent}
                ariaLabel={`${step.title} explanation card`}
                className={cn(
                  effects.hover.scale,
                  effects.transition.base,
                  "bg-white/5",
                  effects.shadow.card,
                  radius.lg
                )}
              />
            </div>
          ))}
        </GridSection>
      </ContentStack>
    </BaseSection>
  );
} 
