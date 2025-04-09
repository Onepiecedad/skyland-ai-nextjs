'use client';

import React from 'react';
import { BaseSection } from '@/components/ui/BaseSection';
import { ContentStack } from '@/components/ui/ContentStack';
import { Card } from '@/components/ui/Card';
import { GridSection } from '@/components/ui/GridSection';
import { cn } from '@/lib/utils';
import { colors } from '@/lib/theme/tokens/colors';
import { effects } from '@/lib/theme/tokens/effects';
import { radius } from '@/lib/theme/tokens/radius';
import { spacing } from '@/lib/theme/tokens/spacing';
import { typography } from '@/lib/theme/tokens/typography';

const painPoints = [
  {
    id: 'manual-tasks',
    title: 'Every missed call could be a lost client. How many did you miss today?',
    description:
      "What if your business could respond instantly—even when you can't? What if you could have fewer lost leads—and more clients saying yes?",
    modalContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary, 'font-normal')}>
          Too Many Customer Calls & Repetitive Inquiries?
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            You're deep in work—then the phone rings. Again. And again. Same questions. Same
            interruptions. Same stress.
          </p>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            And every missed call? That's a cold lead. A lost sale. How much is one client worth to
            you? Now multiply that by ten.
          </p>

          <h5 className={cn(typography.heading.h5, colors.text.primary, 'font-normal', 'mt-4')}>
            Now imagine this:
          </h5>

          <div className={cn(spacing.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4')}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              An AI voice assistant that answers instantly—24/7.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              It books appointments. Handles FAQs. Qualifies leads—without you lifting a finger.
            </p>
          </div>

          <p className={cn(typography.text.base, colors.text.secondary, 'mt-4')}>
            This isn't about replacing you. It's about reclaiming your time and sealing the cracks
            in your growth.
          </p>

          <p className={cn(typography.text.base, colors.text.secondary)}>
            Now your customers get answers. You stay in control. And growth stops leaking through
            the cracks.
          </p>

          <p className={cn(typography.text.base, colors.text.accent, 'mt-4 flex items-center')}>
            <span className="mr-2 inline-block">💬</span> Talk to Dana to see what that could look
            like in your business.
          </p>
        </div>
      </ContentStack>
    ),
  },
  {
    id: 'scaling',
    title: "Still buried in admin that doesn't grow your business?",
    description:
      'What if your daily busywork ran itself—without extra staff? What if you could free up hours and finally focus on real growth?',
    modalContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary, 'font-normal')}>
          Let AI Turn Admin Chaos Into Growth Hours
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            You didn't start your business to spend your days filling out forms, updating
            spreadsheets, or chasing paperwork.
          </p>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            But somehow, all that "small stuff" eats up your time—and pulls your focus away from the
            work that actually moves the needle.
          </p>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            It's not just exhausting. It's expensive. Because every hour spent on admin is an hour
            not spent on growth.
          </p>

          <h5 className={cn(typography.heading.h5, colors.text.primary, 'font-normal', 'mt-4')}>
            Now imagine this:
          </h5>

          <div className={cn(spacing.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4')}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              AI systems that quietly run your backend operations—automating reports, scheduling,
              client intake, follow-ups, and more.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              No new hires. No complicated tech. Just your workflows—streamlined and self-managing.
            </p>
          </div>

          <p className={cn(typography.text.base, colors.text.secondary, 'mt-4')}>
            This isn't about doing more. It's about finally doing what matters most.
          </p>

          <p className={cn(typography.text.base, colors.text.accent, 'mt-4 flex items-center')}>
            <span className="mr-2 inline-block">💬</span> Talk to Dana to find out what your
            business could automate first.
          </p>
        </div>
      </ContentStack>
    ),
  },
  {
    id: 'costs',
    title: "Losing leads because you didn't respond fast enough?",
    description:
      'What if your leads got a reply in seconds—not hours? What if your leads never went cold again?',
    modalContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary, 'font-normal')}>
          Turn Cold Leads Into Instant Conversations
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            You had their attention—but you didn't reply fast enough. They moved on. Or worse—your
            competitor beat you to it.
          </p>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            In today's world, leads expect instant answers. If you're not responding within minutes,
            you're losing deals you never even knew you had.
          </p>

          <h5 className={cn(typography.heading.h5, colors.text.primary, 'font-normal', 'mt-4')}>
            Now imagine this:
          </h5>

          <div className={cn(spacing.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4')}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              AI-powered assistants that engage new leads the moment they reach out—via chat, voice,
              or form.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              They qualify, respond, and even book meetings while you focus on the work that
              matters.
            </p>
          </div>

          <p className={cn(typography.text.base, colors.text.secondary, 'mt-4')}>
            No missed messages. No cold leads. Just warm conversations happening on autopilot.
          </p>

          <p className={cn(typography.text.base, colors.text.accent, 'mt-4 flex items-center')}>
            <span className="mr-2 inline-block">💬</span> Talk to Dana to see how fast you could
            start winning back lost leads.
          </p>
        </div>
      </ContentStack>
    ),
  },
  {
    id: 'staff',
    title: 'Scaling feels impossible without hiring more staff?',
    description:
      'What if your operations scaled automatically as your business grew? What if you could serve more clients—without growing your team?',
    modalContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary, 'font-normal')}>
          Scale Smarter—Without Hiring or Burning Out
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Growth should feel exciting—not exhausting. But when every new client means more staff,
            more training, and more overhead… scaling starts to feel like a trap.
          </p>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            What if your business could handle more leads, more clients, and more complexity—without
            growing your team?
          </p>

          <h5 className={cn(typography.heading.h5, colors.text.primary, 'font-normal', 'mt-4')}>
            Now imagine this:
          </h5>

          <div className={cn(spacing.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4')}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              That's what AI automation delivers.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              It replaces manual busywork with intelligent systems that work behind the
              scenes—handling onboarding, follow-ups, scheduling, reporting, and more.
            </p>
          </div>

          <p className={cn(typography.text.base, colors.text.secondary, 'mt-4')}>
            No burnout. No bloated payroll. Just a lean, scalable business that grows without
            friction.
          </p>

          <p className={cn(typography.text.base, colors.text.accent, 'mt-4 flex items-center')}>
            <span className="mr-2 inline-block">💬</span> Talk to Dana to see how your business
            could scale faster—with less stress.
          </p>
        </div>
      </ContentStack>
    ),
  },
];

export function PainPointSection() {
  return (
    <BaseSection
      id="pain-points"
      className={cn(spacing.section.base, spacing.padding.section, effects.glass)}
      ariaLabel="Common Business Challenges"
    >
      <ContentStack spacing="lg" maxWidth="2xl" className={cn(spacing.section.padding)}>
        <ContentStack spacing="md" className={cn(spacing.alignment.center)}>
          <h2 className={cn(typography.heading.h2, colors.text.primary, 'font-normal')}>
            Which of These Problems Is Costing You the Most Right Now?
          </h2>
          <p className={cn(typography.text.lg, colors.text.secondary, spacing.stack.md)}>
            These issues don't just slow you down—they quietly drain your time, energy, and profit.
            AI can start fixing them in days—not months.
          </p>
        </ContentStack>

        <GridSection columns="two" gap="lg" ariaLabel="Common Business Challenges Grid">
          {painPoints.map((point) => (
            <div key={point.id} className={cn(spacing.flex.col)}>
              <Card
                title={point.title}
                description={point.description}
                expandedContent={point.modalContent}
                ariaLabel={`${point.title} challenge card`}
              />
            </div>
          ))}
        </GridSection>
      </ContentStack>
    </BaseSection>
  );
}
