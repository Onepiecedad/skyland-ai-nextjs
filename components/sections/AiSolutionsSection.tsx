'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { BaseSection } from '@/components/ui/BaseSection';
import { ContentStack } from '@/components/ui/ContentStack';
import { Card } from '@/components/ui/Card';
import { spacing, typography, colors, effects, radius } from '@/lib/theme';

interface AiSolutionsSectionProps {
  className?: string;
}

export function AiSolutionsSection({ className }: AiSolutionsSectionProps) {
  const solutions = [
    {
      id: 'voice-agents',
      title: 'AI Voice Agents',
      description:
        "Want to answer every call instantly—even when you're busy? What if your phone system could follow up with leads automatically while you focus on delivering results?",
      expandedContent: (
        <ContentStack spacing="md">
          <h4 className={cn(typography.heading.h4, colors.text.primary, 'font-normal')}>
            Never Miss a Call—or a Client—Again
          </h4>
          <div className={cn(spacing.stack.md)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              Every missed call is a missed opportunity. Most leads won't leave a voicemail—they
              just move on.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              AI Voice Agents fix that instantly.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              They answer inbound calls 24/7, handle FAQs, qualify leads, and book meetings
              automatically. They can also make up to 2,000 outbound calls per hour—following up
              with leads in their own language, fully customized to your business.
            </p>

            <h5 className={cn(typography.heading.h5, colors.text.primary, 'font-normal', 'mt-4')}>
              And they don't just talk—they take action.
            </h5>

            <div className={cn(spacing.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4')}>
              <p className={cn(typography.text.base, colors.text.secondary)}>
                Push updates directly to your CRM. Trigger workflows. Route calls.
              </p>
              <p className={cn(typography.text.base, colors.text.secondary)}>
                All with zero human effort.
              </p>
            </div>

            <p className={cn(typography.text.base, colors.text.accent, 'mt-4 flex items-center')}>
              <span className="mr-2 inline-block">💬</span> Talk to Dana to see how AI voice agents
              could work like 10 reps—on autopilot.
            </p>
          </div>
        </ContentStack>
      ),
    },
    {
      id: 'custom-assistants',
      title: 'Custom AI Assistants',
      description:
        'Want to engage with every website visitor and qualify leads 24/7? What if you had a personal AI assistant that could handle questions, meetings, and support without you being there?',
      expandedContent: (
        <ContentStack spacing="md">
          <h4 className={cn(typography.heading.h4, colors.text.primary, 'font-normal')}>
            Your Always-On Lead Qualifier, Support Agent & Personal Assistant
          </h4>
          <div className={cn(spacing.stack.md)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              Website traffic is great—but only if it turns into action. Most visitors never fill
              out forms or wait for a reply. That's where Custom AI Assistants step in.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              These intelligent chatbots engage every visitor in real time, answer questions,
              qualify leads, and guide them toward next steps—without missing a beat.
            </p>

            <h5 className={cn(typography.heading.h5, colors.text.primary, 'font-normal', 'mt-4')}>
              But they're not limited to your website.
            </h5>

            <div className={cn(spacing.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4')}>
              <p className={cn(typography.text.base, colors.text.secondary)}>
                These assistants can also act as personal AI sidekicks—connected to your email,
                calendar, and web—helping you stay productive, on schedule, and in control.
              </p>
              <p className={cn(typography.text.base, colors.text.secondary)}>
                Need them tailored to your brand voice, lead process, or support flow? No problem.
                They're fully customizable—and available 24/7 without human oversight.
              </p>
            </div>

            <p className={cn(typography.text.base, colors.text.secondary, 'mt-4')}>
              From lead gen to personal productivity, these assistants do the work of a full
              team—without the overhead.
            </p>

            <p className={cn(typography.text.base, colors.text.accent, 'mt-4 flex items-center')}>
              <span className="mr-2 inline-block">💬</span> Talk to Dana to see how a Custom AI
              Assistant could turn your traffic—and time—into revenue.
            </p>
          </div>
        </ContentStack>
      ),
    },
    {
      id: 'business-automation',
      title: 'Business Automation',
      description:
        "Tired of wasting time on repetitive tasks that don't grow your business? What if your workflows could run themselves in the background—saving you hours, mistakes, and mental load?",
      expandedContent: (
        <ContentStack spacing="md">
          <h4 className={cn(typography.heading.h4, colors.text.primary, 'font-normal')}>
            Let AI Handle the Busywork—So You Can Focus on Growth
          </h4>
          <div className={cn(spacing.stack.md)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              How much time does your team waste on manual tasks that don't move the needle?
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              Scheduling. Copy-pasting. Data entry. Reporting. The kind of work that keeps things
              running—but keeps your team from scaling.
            </p>

            <h5 className={cn(typography.heading.h5, colors.text.primary, 'font-normal', 'mt-4')}>
              Business Automation changes that.
            </h5>

            <div className={cn(spacing.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4')}>
              <p className={cn(typography.text.base, colors.text.secondary)}>
                From onboarding flows to invoice reminders, contract processing to task
                routing—AI-powered workflows handle it all in the background, with perfect
                precision.
              </p>
              <p className={cn(typography.text.base, colors.text.secondary)}>
                They don't call in sick. They don't forget steps. They just run—quietly,
                automatically, and exactly how you want them to.
              </p>
            </div>

            <p className={cn(typography.text.base, colors.text.secondary, 'mt-4')}>
              Whether you need full process automation or help eliminating small inefficiencies,
              these systems are built to adapt to your business—not the other way around.
            </p>

            <p className={cn(typography.text.base, colors.text.accent, 'mt-4 flex items-center')}>
              <span className="mr-2 inline-block">💬</span> Talk to Dana to find out how much time
              (and sanity) you could save this week.
            </p>
          </div>
        </ContentStack>
      ),
    },
  ];

  return (
    <BaseSection
      id="ai-solutions"
      className={cn(spacing.section.base, spacing.padding.section, effects.glass, className)}
      ariaLabel="AI Solutions"
    >
      <ContentStack
        spacing="lg"
        maxWidth="2xl"
        className={cn(spacing.section.padding, 'w-full max-w-7xl')}
      >
        <ContentStack spacing="md" className={cn(spacing.alignment.center)}>
          <h2 className={cn(typography.heading.h2, colors.text.primary, 'font-normal')}>
            AI Solutions That Do the Work for You
          </h2>
          <p className={cn(typography.text.lg, colors.text.secondary, spacing.stack.md)}>
            From missed calls to admin overload—these AI tools handle real work so you don't have
            to.
          </p>
        </ContentStack>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12">
          {solutions.map((solution) => (
            <div key={solution.id} className={cn(spacing.flex.col)}>
              <Card
                title={solution.title}
                description={solution.description}
                expandedContent={solution.expandedContent}
                ariaLabel={`${solution.title} solution`}
                className={cn(
                  effects.hover.scale,
                  effects.transition.base,
                  'bg-white/5 w-full',
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
