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
import { Clock, BrainCircuit, DollarSign, Users } from 'lucide-react';

const painPoints = [
  {
    id: "manual-tasks",
    icon: <Clock className={cn(typography.icon.lg, colors.text.primary)} aria-hidden="true" />,
    title: "Drowning in Manual Tasks?",
    description: "Spending too much time on repetitive work instead of growing your business?",
    modalContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary)}>
          Time-Consuming Manual Work
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Common time-draining tasks we can automate:
          </p>
          <div className={cn(spacing.stack.sm)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Data entry and document processing
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Email responses and follow-ups
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Calendar management and scheduling
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Report generation and analysis
            </p>
          </div>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Our AI solutions can handle these tasks 24/7, freeing up your time for strategic work.
          </p>
        </div>
      </ContentStack>
    )
  },
  {
    id: "scaling",
    icon: <BrainCircuit />,
    title: "Struggling to Scale?",
    description: "Can't grow because you're maxed out on what you can handle?",
    modalContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary)}>
          Scaling Challenges
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            How AI helps you scale efficiently:
          </p>
          <div className={cn(spacing.stack.sm)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Automated customer onboarding
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • 24/7 customer support coverage
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Streamlined operations
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Intelligent task prioritization
            </p>
          </div>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Scale your business without proportionally increasing overhead or staff.
          </p>
        </div>
      </ContentStack>
    )
  },
  {
    id: "costs",
    icon: <DollarSign />,
    title: "High Operational Costs?",
    description: "Spending too much on routine tasks that could be automated?",
    modalContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary)}>
          Cost Reduction Through AI
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Areas where AI can reduce costs:
          </p>
          <div className={cn(spacing.stack.sm)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Customer service automation
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Administrative task reduction
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Error prevention and quality control
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Resource optimization
            </p>
          </div>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Most clients see 30-50% reduction in operational costs within months.
          </p>
        </div>
      </ContentStack>
    )
  },
  {
    id: "staff",
    icon: <Users />,
    title: "Staff Overwhelmed?",
    description: "Team stressed by repetitive tasks and constant interruptions?",
    modalContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary)}>
          Employee Satisfaction
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            How AI improves work life:
          </p>
          <div className={cn(spacing.stack.sm)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Eliminates repetitive tasks
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Reduces work interruptions
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Enables focus on meaningful work
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              • Provides 24/7 support coverage
            </p>
          </div>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Let your team focus on what matters while AI handles the routine work.
          </p>
        </div>
      </ContentStack>
    )
  }
];

export function PainPointSection() {
  return (
    <BaseSection
      id="pain-points"
      className={cn(
        spacing.section.base,
        spacing.padding.section,
        effects.glass
      )}
      ariaLabel="Common Business Challenges"
    >
      <ContentStack spacing="lg" maxWidth="2xl" className={cn(spacing.section.padding)}>
        <ContentStack spacing="md" className={cn(spacing.alignment.center)}>
          <h2 
            className={cn(
              typography.heading.h2,
              colors.text.primary
            )}
          >
            Running a Business Shouldn't Be This Hard
          </h2>
          <p 
            className={cn(
              typography.text.lg,
              colors.text.secondary,
              spacing.stack.md
            )}
          >
            Discover how AI can eliminate your biggest operational headaches
          </p>
        </ContentStack>

        <GridSection 
          columns="two" 
          gap="lg"
          ariaLabel="Common Business Challenges Grid"
        >
          {painPoints.map((point) => (
            <div key={point.id} className={cn(spacing.flex.col, spacing.gap.sm)}>
              {point.icon}
              <Card
                title={point.title}
                description={point.description}
                expandedContent={point.modalContent}
                ariaLabel={`${point.title} challenge card`}
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
