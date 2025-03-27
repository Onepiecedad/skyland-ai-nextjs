'use client';

import { useState } from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { SectionHeading } from '@/components/MainHeading';
import { ExpandableCard } from '@/components/cards/ExpandableCard';
import { IconKey } from '@/components/cards/iconMap';
import { DanaButton } from '@/components/ui/DanaButton';

interface FAQ {
  iconKey: IconKey;
  title: string;
  description: string;
  answer: React.ReactNode;
}

const faqs: FAQ[] = [
  {
    iconKey: "bot",
    title: "Is this AI hard to set up?",
    description: "I'm not technical—how do I get started?",
    answer: (
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
    title: "What can I automate with this?",
    description: "Which tasks can AI take over?",
    answer: (
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
    title: "Can this connect to my systems?",
    description: "Like my CRM or calendar?",
    answer: (
      <>
        <p className="text-white/70 mb-2">
          Yes! We can integrate with most popular tools—Google Calendar, Notion, Airtable, HubSpot, Zapier, and more.
        </p>
        <p className="text-white/70">We'll set it up for you.</p>
      </>
    ),
  },
];

function FAQSection() {
  return (
    <SectionWrapper id="faq">
      <SectionHeading
        title="Frequently Asked Questions"
        subtitle="Still unsure? Get quick answers here—or talk to Dana directly."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {faqs.map((faq, i) => (
          <ExpandableCard
            key={i}
            icon={faq.iconKey}
            title={faq.title}
            description={faq.description}
            expandedContent={
              <>
                {faq.answer}
                <div className="mt-4">
                  <DanaButton />
                </div>
              </>
            }
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default FAQSection; 