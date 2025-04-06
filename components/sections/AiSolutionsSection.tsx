'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { BaseSection } from '@/components/ui/BaseSection';
import { ContentStack } from '@/components/ui/ContentStack';
import { Card } from '@/components/ui/Card';
import { GridSection } from '@/components/ui/GridSection';
import { spacing, typography, colors, effects, radius } from '@/lib/theme';
import { MessageSquare, Brain, Eye } from 'lucide-react';

interface AiSolutionsSectionProps {
  className?: string;
}

export function AiSolutionsSection({ className }: AiSolutionsSectionProps) {
  const solutions = [
    {
      id: "nlp",
      icon: <MessageSquare className={cn(typography.icon.lg, colors.text.primary)} aria-hidden="true" />,
      title: "NLP",
      description: "Advanced AI that understands and processes human language naturally.",
      expandedContent: (
        <div className={cn(spacing.stack.lg)}>
          <h3 className={cn(typography.heading.h3, colors.text.primary, "mb-4")}>
            Natural Language Processing
          </h3>
          <p className={cn(typography.text.lg, colors.text.secondary)}>
            Our NLP capabilities include:
          </p>
          <ul className={cn(spacing.stack.md)}>
            <li>Text analysis and understanding</li>
            <li>Sentiment analysis</li>
            <li>Language translation</li>
            <li>Automated response generation</li>
          </ul>
        </div>
      )
    },
    {
      id: "ml",
      icon: <Brain className={cn(typography.icon.lg, colors.text.primary)} aria-hidden="true" />,
      title: "Machine Learning",
      description: "Self-improving algorithms that learn from your business data.",
      expandedContent: (
        <div className={cn(spacing.stack.lg)}>
          <h3 className={cn(typography.heading.h3, colors.text.primary, "mb-4")}>
            Machine Learning
          </h3>
          <p className={cn(typography.text.lg, colors.text.secondary)}>
            Our ML solutions offer:
          </p>
          <ul className={cn(spacing.stack.md)}>
            <li>Pattern recognition</li>
            <li>Predictive analytics</li>
            <li>Automated decision making</li>
            <li>Continuous learning and improvement</li>
          </ul>
        </div>
      )
    },
    {
      id: "vision",
      icon: <Eye className={cn(typography.icon.lg, colors.text.primary)} aria-hidden="true" />,
      title: "Computer Vision",
      description: "AI that can analyze and understand images and videos.",
      expandedContent: (
        <div className={cn(spacing.stack.lg)}>
          <h3 className={cn(typography.heading.h3, colors.text.primary, "mb-4")}>
            Computer Vision
          </h3>
          <p className={cn(typography.text.lg, colors.text.secondary)}>
            Key features include:
          </p>
          <ul className={cn(spacing.stack.md)}>
            <li>Image recognition and classification</li>
            <li>Object detection</li>
            <li>Visual quality control</li>
            <li>Video analysis</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <BaseSection
      id="ai-solutions"
      className={cn(
        spacing.section.base,
        spacing.padding.section,
        effects.glass,
        className
      )}
      ariaLabel="AI Solutions"
    >
      <ContentStack spacing="lg" maxWidth="2xl" className={cn(spacing.section.padding, "w-full max-w-7xl")}>
        <ContentStack spacing="md" className={cn(spacing.alignment.center)}>
          <h2 className={cn(typography.heading.h2, colors.text.primary)}>
            Our AI Solutions
          </h2>
          <p className={cn(typography.text.lg, colors.text.secondary, spacing.stack.md)}>
            Discover how our AI solutions can transform your business
          </p>
        </ContentStack>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {solutions.map((solution) => (
            <div key={solution.id} className={cn(spacing.flex.col, spacing.gap.md)}>
              {solution.icon}
              <Card
                title={solution.title}
                description={solution.description}
                expandedContent={solution.expandedContent}
                ariaLabel={`${solution.title} solution`}
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
