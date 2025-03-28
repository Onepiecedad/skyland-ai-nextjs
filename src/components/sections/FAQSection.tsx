'use client';

import { useState } from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { SectionHeading } from '@/components/MainHeading';
import { iconMap, IconKey } from '@/components/cards/iconMap';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import { layout, typography, glass, hover, transition } from '@/lib/theme';

interface FAQ {
  iconKey: IconKey;
  question: string;
  answer: string;
  expandedContent: React.ReactNode;
}

const faqs: FAQ[] = [
  {
    iconKey: "bot",
    question: "Is this AI hard to set up?",
    answer: "I'm not technical—how do I get started?",
    expandedContent: (
      <>
        <p className="text-white/70 mb-2">
          Nope! We do everything for you. After a short call, we build, train and test the system. You don't need to code, configure, or connect anything yourself.
        </p>
        <p className="text-white/70 mb-2">
          Once ready, you get a live preview and can launch in days—not months.
        </p>
      </>
    ),
  },
  {
    iconKey: "zap",
    question: "What can I automate with this?",
    answer: "Which tasks can AI take over?",
    expandedContent: (
      <>
        <p className="text-white/70 mb-2">
          Common tasks include: call answering, lead intake, FAQs, booking, reminders, support, follow-ups, CRM updates and more.
        </p>
        <p className="text-white/70">
          If it's repetitive, it's likely automatable.
        </p>
      </>
    ),
  },
  {
    iconKey: "building",
    question: "Can this connect to my systems?",
    answer: "Like my CRM or calendar?",
    expandedContent: (
      <>
        <p className="text-white/70 mb-2">
          Yes! We can integrate with most popular tools—Google Calendar, Notion, Airtable, HubSpot, Zapier, and more.
        </p>
        <p className="text-white/70">We'll set it up for you.</p>
      </>
    ),
  },
];

export function FAQSection() {
  return (
    <SectionWrapper id="faq">
      <SectionHeading
        title="Common Questions About AI"
        subtitle="Get answers to the most common questions about implementing AI in your business."
      />

      <div className="grid gap-8 mt-12">
        {faqs.map((faq, i) => (
          <Card
            key={i}
            icon={faq.iconKey}
            title={faq.question}
            description={faq.answer}
          />
        ))}
      </div>
    </SectionWrapper>
  );
} 