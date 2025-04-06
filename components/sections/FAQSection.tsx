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

interface FAQSectionProps {
  className?: string;
}

export function FAQSection({ className }: FAQSectionProps) {
  const faqs = [
    {
      title: "What exactly is Skyland AI?",
      description: "",
      expandedContent: (
        <div className={cn(spacing.stack.lg)}>
          <p className={cn(typography.text.lg, colors.text.secondary)}>
            Skyland AI builds tailored automation systems using AI. From voice agents and chatbots to workflow automation and lead qualification—we design intelligent tools to save you time and grow your business, fast.
          </p>
          <p className={cn(typography.text.lg, colors.text.secondary, "mt-4")}>
            Our platform offers:
          </p>
          <ul className={cn(spacing.stack.md)}>
            <li>Voice agents that handle inbound calls</li>
            <li>Chatbots that answer customer questions</li>
            <li>Booking systems and reminders</li>
            <li>Lead capture and qualification</li>
            <li>Internal process automation</li>
          </ul>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            We always start by identifying what's slowing you down—then we build a system that handles it.
          </p>
        </div>
      )
    },
    {
      title: "How much does it cost?",
      description: "",
      expandedContent: (
        <div className={cn(spacing.stack.lg)}>
          <p className={cn(typography.text.lg, colors.text.secondary)}>
            It depends on what we build for you. There's no fixed pricing—just value-driven pricing based on your needs.
          </p>
          <p className={cn(typography.text.lg, colors.text.secondary, "mt-4")}>
            Here's how it works:
          </p>
          <ul className={cn(spacing.stack.md)}>
            <li>You pay a <strong>10–15% deposit</strong> to get started</li>
            <li>We build your solution and let you try it for <strong>two full weeks, risk-free</strong></li>
            <li>If you're happy, you pay the rest and begin your monthly subscription</li>
            <li>If not, you walk away. The deposit is non-refundable, but there's no ongoing cost</li>
          </ul>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Our pricing model ensures you only pay for the value we deliver, making it a risk-free investment in your business's future.
          </p>
        </div>
      )
    },
    {
      title: "How does the trial actually work?",
      description: "",
      expandedContent: (
        <div className={cn(spacing.stack.lg)}>
          <p className={cn(typography.text.lg, colors.text.secondary)}>
            After the strategy call, we build a working version tailored to your business. You test it in real conditions for two weeks—no sandbox, no fake data.
          </p>
          <p className={cn(typography.text.lg, colors.text.secondary, "mt-4")}>
            At the end of the trial, you decide:
          </p>
          <ul className={cn(spacing.stack.md)}>
            <li>✅ Move forward and scale</li>
            <li>❌ Walk away (no additional cost)</li>
          </ul>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            This risk-free approach lets you see exactly what our AI solutions can do for your specific business before making a full commitment.
          </p>
        </div>
      )
    },
    {
      title: "What kinds of things can you automate?",
      description: "",
      expandedContent: (
        <div className={cn(spacing.stack.lg)}>
          <p className={cn(typography.text.lg, colors.text.secondary)}>
            Plenty. From customer interactions to internal workflows, we can automate virtually any repetitive process that's eating up your time.
          </p>
          <p className={cn(typography.text.lg, colors.text.secondary, "mt-4")}>
            Common use cases include:
          </p>
          <ul className={cn(spacing.stack.md)}>
            <li>Voice agents that handle inbound calls</li>
            <li>Chatbots that answer customer questions</li>
            <li>Booking systems and reminders</li>
            <li>Lead capture and qualification</li>
            <li>Internal process automation</li>
          </ul>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            We always start by identifying what's slowing you down—then we build a system that handles it.
          </p>
        </div>
      )
    },
    {
      title: "How fast can I get started?",
      description: "",
      expandedContent: (
        <div className={cn(spacing.stack.lg)}>
          <p className={cn(typography.text.lg, colors.text.secondary)}>
            Very. Once your strategy call is done and the plan is approved, we usually deliver a working system within a few days.
          </p>
          <p className={cn(typography.text.lg, colors.text.secondary, "mt-4")}>
            Our streamlined process includes:
          </p>
          <ul className={cn(spacing.stack.md)}>
            <li>Initial strategy call to understand your needs</li>
            <li>Custom solution design (1-2 days)</li>
            <li>Development and implementation (a few days)</li>
            <li>Your two-week trial period</li>
          </ul>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Then you test it for two weeks and decide what's next. The entire process is designed to get you results fast.
          </p>
        </div>
      )
    },
    {
      title: "Will this replace my team?",
      description: "",
      expandedContent: (
        <div className={cn(spacing.stack.lg)}>
          <p className={cn(typography.text.lg, colors.text.secondary)}>
            No—it makes them faster. Skyland AI doesn't replace people. It eliminates repetitive, low-value tasks so your team can focus on what matters.
          </p>
          <p className={cn(typography.text.lg, colors.text.secondary, "mt-4")}>
            Our AI solutions help your team by:
          </p>
          <ul className={cn(spacing.stack.md)}>
            <li>Handling repetitive tasks automatically</li>
            <li>Reducing manual data entry and processing</li>
            <li>Freeing up time for high-value work</li>
            <li>Supporting decision-making with better data</li>
            <li>Scaling their efforts without increasing workload</li>
          </ul>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Think of Skyland AI as giving your team superpowers—not replacing them. The goal is to make them more effective, not obsolete.
          </p>
        </div>
      )
    }
  ];

  return (
    <BaseSection
      id="faq"
      className={cn(
        spacing.section.base,
        spacing.padding.section,
        effects.glass,
        className
      )}
      ariaLabel="Frequently Asked Questions"
    >
      <ContentStack spacing="lg" maxWidth="2xl" className={cn(spacing.section.padding)}>
        <ContentStack spacing="md" className={cn(spacing.alignment.center)}>
          <h2 className={cn(typography.heading.h2, colors.text.primary, "font-normal")}>
            Frequently Asked Questions
          </h2>
          <p className={cn(typography.text.lg, colors.text.secondary, spacing.stack.md)}>
            Straight answers about how Skyland AI works for your business
          </p>
        </ContentStack>
        <GridSection 
          columns="two"
          gap="lg"
          ariaLabel="FAQ Grid"
        >
          {faqs.map((faq) => (
            <Card
              key={faq.title}
              title={faq.title}
              description={faq.description}
              expandedContent={faq.expandedContent}
              ariaLabel={`FAQ: ${faq.title}`}
              variant="three"
              centerText={true}
            />
          ))}
        </GridSection>
      </ContentStack>
    </BaseSection>
  );
} 
