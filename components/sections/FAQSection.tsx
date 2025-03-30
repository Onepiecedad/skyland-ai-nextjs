'use client';

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from '@/components/MainHeading';
import { spacing, typography, effects } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";
import type { ThemeSection } from "@/lib/utils/theme-validator";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Is this AI hard to set up?",
    answer: "Nope! We do everything for you. After a short call, we build, train and test the system. You don't need to code, configure, or connect anything yourself. Once ready, you get a live preview and can launch in days—not months.",
  },
  {
    question: "What can I automate with this?",
    answer: "Common tasks include: call answering, lead intake, FAQs, booking, reminders, support, follow-ups, CRM updates and more. If it's repetitive, it's likely automatable.",
  },
  {
    question: "Can this connect to my systems?",
    answer: "Yes! We can integrate with most popular tools—Google Calendar, Notion, Airtable, HubSpot, Zapier, and more. We'll set it up for you.",
  },
];

function FAQSectionBase() {
  return (
    <SectionWrapper id="faq">
      <SectionHeading
        title="Common Questions About AI"
        subtitle="Get answers to the most common questions about implementing AI in your business."
      />

      <div className={spacing.container}>
        <div className={cn(spacing.stack.lg, spacing.elementSpacing)}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                effects.glass.light,
                spacing.padding.card,
                "rounded-lg"
              )}
            >
              <h3 className={cn(typography.heading.h3, spacing.elementSpacing)}>{faq.question}</h3>
              <p className={typography.paragraph}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export const FAQSection = withThemeValidation(FAQSectionBase, "FAQSection", ["sections", "typography", "spacing", "effects"] as ThemeSection[]); 