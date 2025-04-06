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
      title: "What is Skyland AI?",
      description: "Skyland AI is a cutting-edge artificial intelligence platform designed to help businesses automate processes, gain insights from data, and make better decisions.",
      expandedContent: (
        <div className={cn(spacing.stack.lg)}>
          <p className={cn(typography.text.lg, colors.text.secondary)}>
            Our platform offers:
          </p>
          <ul className={cn(spacing.stack.md)}>
            <li>Advanced AI automation capabilities</li>
            <li>Industry-specific solutions</li>
            <li>Seamless integration with existing systems</li>
            <li>Comprehensive support and training</li>
          </ul>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Our solutions are tailored to meet the specific needs of various industries and organizations of all sizes.
          </p>
        </div>
      )
    },
    {
      title: "How can AI benefit my business?",
      description: "AI can benefit your business in multiple ways: automating tasks, analyzing data, improving customer service, and helping make data-driven decisions.",
      expandedContent: (
        <div className={cn(spacing.stack.lg)}>
          <p className={cn(typography.text.lg, colors.text.secondary)}>
            Key benefits include:
          </p>
          <ul className={cn(spacing.stack.md)}>
            <li>Automation of repetitive tasks</li>
            <li>Advanced data analysis and insights</li>
            <li>Improved customer service through AI chatbots</li>
            <li>Optimized operations and resource allocation</li>
            <li>Enhanced decision-making capabilities</li>
          </ul>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Our platform makes these benefits accessible and practical for your specific needs.
          </p>
        </div>
      )
    },
    {
      title: "Is AI implementation complicated?",
      description: "While AI technology is complex, we've designed our platform to be user-friendly and accessible.",
      expandedContent: (
        <div className={cn(spacing.stack.lg)}>
          <p className={cn(typography.text.lg, colors.text.secondary)}>
            Our implementation process includes:
          </p>
          <ul className={cn(spacing.stack.md)}>
            <li>Initial assessment and planning</li>
            <li>Step-by-step guided setup</li>
            <li>Comprehensive training and documentation</li>
            <li>Ongoing support and optimization</li>
          </ul>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Our team provides comprehensive support throughout the implementation process, ensuring a smooth transition and minimal disruption to your operations.
          </p>
        </div>
      )
    },
    {
      title: "How long does implementation take?",
      description: "Implementation time varies, but our streamlined process typically allows for basic implementation within weeks.",
      expandedContent: (
        <div className={cn(spacing.stack.lg)}>
          <p className={cn(typography.text.lg, colors.text.secondary)}>
            Typical implementation timeline:
          </p>
          <ul className={cn(spacing.stack.md)}>
            <li>Initial setup: 1-2 weeks</li>
            <li>Basic integration: 2-4 weeks</li>
            <li>Advanced features: 4-8 weeks</li>
            <li>Full optimization: 8-12 weeks</li>
          </ul>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            We work closely with you to establish a timeline that meets your needs and ensures successful implementation.
          </p>
        </div>
      )
    },
    {
      title: "What about data security?",
      description: "Data security is our top priority. We employ industry-leading security measures and comply with major data protection regulations.",
      expandedContent: (
        <div className={cn(spacing.stack.lg)}>
          <p className={cn(typography.text.lg, colors.text.secondary)}>
            Our security measures include:
          </p>
          <ul className={cn(spacing.stack.md)}>
            <li>End-to-end encryption</li>
            <li>Secure data centers</li>
            <li>Regular security audits</li>
            <li>Compliance with GDPR, HIPAA, and other regulations</li>
          </ul>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            We provide transparent information about our security practices and maintain strict data protection protocols.
          </p>
        </div>
      )
    },
    {
      title: "What are the costs involved?",
      description: "Our pricing is flexible and based on your specific needs and usage.",
      expandedContent: (
        <div className={cn(spacing.stack.lg)}>
          <p className={cn(typography.text.lg, colors.text.secondary)}>
            Our pricing model includes:
          </p>
          <ul className={cn(spacing.stack.md)}>
            <li>Flexible subscription plans</li>
            <li>Pay-as-you-grow options</li>
            <li>Custom enterprise pricing</li>
            <li>No hidden fees or long-term commitments</li>
          </ul>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Contact us for a detailed quote tailored to your organization's specific needs and requirements.
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
            Find answers to common questions about Skyland AI and our services
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
