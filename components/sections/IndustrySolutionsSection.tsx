'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { BaseSection } from '@/components/ui/BaseSection';
import { ContentStack } from '@/components/ui/ContentStack';
import { Card } from '@/components/ui/Card';
import { GridSection } from '@/components/ui/GridSection';
import { spacing, typography, colors, effects, radius } from '@/lib/theme';
import { Building2, Factory, Stethoscope, BarChart3 } from 'lucide-react';

interface IndustrySolutionsSectionProps {
  className?: string;
}

export function IndustrySolutionsSection({ className }: IndustrySolutionsSectionProps) {
  const industries = [
    {
      id: "enterprise",
      icon: <Building2 className={cn(typography.icon.lg, colors.text.primary)} aria-hidden="true" />,
      title: "Enterprise",
      description: "Transform your business with scalable AI solutions.",
    },
    {
      id: "manufacturing",
      icon: <Factory className={cn(typography.icon.lg, colors.text.primary)} aria-hidden="true" />,
      title: "Manufacturing",
      description: "Optimize production and quality control processes.",
    },
    {
      id: "healthcare",
      icon: <Stethoscope className={cn(typography.icon.lg, colors.text.primary)} aria-hidden="true" />,
      title: "Healthcare",
      description: "Streamline patient care, scheduling, and administrative tasks.",
    },
    {
      id: "finance",
      icon: <BarChart3 className={cn(typography.icon.lg, colors.text.primary)} aria-hidden="true" />,
      title: "Finance",
      description: "Enhance financial operations and risk management.",
    }
  ];

  return (
    <BaseSection
      id="industry-solutions"
      className={cn(
        spacing.section.base,
        spacing.padding.section,
        effects.glass,
        className
      )}
      ariaLabel="Industry Solutions"
    >
      <ContentStack spacing="lg" maxWidth="2xl" className={cn(spacing.section.padding, "w-full max-w-7xl")}>
        <ContentStack spacing="md" className={cn(spacing.alignment.center)}>
          <h2 className={cn(typography.heading.h2, colors.text.primary)}>
            Industry Solutions
          </h2>
          <p className={cn(typography.text.lg, colors.text.secondary, spacing.stack.md)}>
            Discover how our AI solutions can transform your industry
          </p>
        </ContentStack>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {industries.map((industry) => (
            <div key={industry.id} className={cn(spacing.flex.col, spacing.gap.md)}>
              {industry.icon}
              <Card
                title={industry.title}
                description={industry.description}
                ariaLabel={`AI for ${industry.title}`}
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
