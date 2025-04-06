'use client';

import React from 'react';
import { cn } from "@/lib/utils";
import { BaseSection } from "@/components/ui/BaseSection";
import { ContentStack } from "@/components/ui/ContentStack";
import { Card } from "@/components/ui/Card";
import { GridSection } from "@/components/ui/GridSection";
import { spacing } from "@/lib/theme/tokens/spacing";
import { typography } from "@/lib/theme/tokens/typography";
import { colors } from "@/lib/theme/tokens/colors";
import { effects } from "@/lib/theme/tokens/effects";
import { radius } from "@/lib/theme/tokens/radius";
import { Brain, Zap, Target, TrendingUp } from 'lucide-react';

interface AboutSectionProps {
  className?: string;
}

export function AboutSection({ className }: AboutSectionProps) {
  const features = [
    {
      icon: <Brain className={cn(typography.icon.lg)} />,
      title: "AI-Driven Automation",
      description: "Leverage cutting-edge AI to automate repetitive tasks and streamline your business operations.",
      expandedContent: (
        <div className={cn(spacing.stack.lg)}>
          <p className={cn(typography.text.lg, colors.text.secondary)}>
            Our AI-driven automation solutions help businesses:
          </p>
          <ul className={cn(spacing.stack.md)}>
            <li>Automate repetitive tasks and workflows</li>
            <li>Reduce manual errors and processing time</li>
            <li>Increase operational efficiency</li>
            <li>Free up staff for higher-value work</li>
          </ul>
        </div>
      )
    },
    {
      icon: <Zap className={cn(typography.icon.lg)} />,
      title: "Rapid Implementation",
      description: "Get up and running quickly with our efficient implementation process and expert support.",
      expandedContent: (
        <div className={cn(spacing.stack.lg)}>
          <p className={cn(typography.text.lg, colors.text.secondary)}>
            Our rapid implementation approach ensures:
          </p>
          <ul className={cn(spacing.stack.md)}>
            <li>Quick setup and configuration</li>
            <li>Minimal disruption to operations</li>
            <li>Expert guidance throughout the process</li>
            <li>Fast time-to-value</li>
          </ul>
        </div>
      )
    },
    {
      icon: <Target className={cn(typography.icon.lg)} />,
      title: "Customized Solutions",
      description: "Tailored AI solutions designed specifically for your business needs and industry requirements.",
      expandedContent: (
        <div className={cn(spacing.stack.lg)}>
          <p className={cn(typography.text.lg, colors.text.secondary)}>
            Our customization capabilities include:
          </p>
          <ul className={cn(spacing.stack.md)}>
            <li>Industry-specific AI models</li>
            <li>Custom workflow automation</li>
            <li>Integration with existing systems</li>
            <li>Scalable solutions that grow with you</li>
          </ul>
        </div>
      )
    },
    {
      icon: <TrendingUp className={cn(typography.icon.lg)} />,
      title: "Measurable Results",
      description: "Track and optimize your AI implementation with clear metrics and performance indicators.",
      expandedContent: (
        <div className={cn(spacing.stack.lg)}>
          <p className={cn(typography.text.lg, colors.text.secondary)}>
            Our performance tracking includes:
          </p>
          <ul className={cn(spacing.stack.md)}>
            <li>Real-time performance dashboards</li>
            <li>ROI tracking and reporting</li>
            <li>Continuous optimization recommendations</li>
            <li>Regular performance reviews</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <BaseSection
      id="about"
      className={cn(
        spacing.section.base,
        spacing.padding.section,
        effects.glass,
        className
      )}
      ariaLabel="About Skyland AI"
    >
      <ContentStack spacing="lg" maxWidth="2xl" className={cn(spacing.section.padding)}>
        <ContentStack spacing="md" className={cn(spacing.alignment.center)}>
          <h2 className={cn(typography.heading.h2, colors.text.primary, "font-normal")}>
            About Skyland AI
          </h2>
          <p className={cn(typography.text.lg, colors.text.secondary, spacing.stack.md)}>
            Discover how our AI solutions can revolutionize your operations and drive growth
          </p>
        </ContentStack>
        <GridSection 
          columns="two" 
          gap="lg"
          ariaLabel="Features Grid"
        >
          {features.map((feature, index) => (
            <div key={index} className={cn(spacing.flex.col, spacing.gap.md)}>
              {feature.icon}
              <Card
                title={feature.title}
                description={feature.description}
                expandedContent={feature.expandedContent}
                className={cn(
                  effects.hover.scale,
                  effects.transition.base,
                  "bg-white/5",
                  effects.shadow.card,
                  radius.lg
                )}
                ariaLabel={`${feature.title} feature card`}
              />
            </div>
          ))}
        </GridSection>
      </ContentStack>
    </BaseSection>
  );
} 
