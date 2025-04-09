'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { BaseSection } from '@/components/ui/BaseSection';
import { ContentStack } from '@/components/ui/ContentStack';
import { Card } from '@/components/ui/Card';
import { GridSection } from '@/components/ui/GridSection';
import { spacing } from '@/lib/theme/tokens/spacing';
import { typography } from '@/lib/theme/tokens/typography';
import { colors } from '@/lib/theme/tokens/colors';
import { effects } from '@/lib/theme/tokens/effects';
import { radius } from '@/lib/theme/tokens/radius';

interface AboutSectionProps {
  className?: string;
}

export function AboutSection({ className }: AboutSectionProps) {
  const features = [
    {
      title: 'Why Skyland AI Was Built – The Future of Work Starts Here',
      description: "AI isn't just the future—it's the great equalizer.",
      expandedContent: (
        <ContentStack spacing="md">
          <h4 className={cn(typography.heading.h4, colors.text.primary, 'font-normal')}>
            The Vision Behind Skyland AI
          </h4>
          <div className={cn(spacing.stack.md)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              AI isn't just for tech giants. It's a revolution for the rest of us.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              Skyland was born from a simple belief: small teams shouldn't be held back by manual
              work, burnout, or limited resources. We saw how time and energy were being wasted—and
              how automation could change everything.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              So we built a smarter path forward—where AI doesn't just save time, it gives you
              freedom. Freedom to grow. To compete. To build something bigger than your bandwidth.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              And this is only the beginning.
            </p>
          </div>
        </ContentStack>
      ),
    },
    {
      title: "Your Team Isn't the Problem—Your Systems Are",
      description: "It's not about working harder. It's about removing what's slowing you down.",
      expandedContent: (
        <ContentStack spacing="md">
          <h4 className={cn(typography.heading.h4, colors.text.primary, 'font-normal')}>
            The Cost of Chaos You've Learned to Live With
          </h4>
          <div className={cn(spacing.stack.md)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              Most teams aren't falling short—they're buried in broken systems. Manual tasks.
              Constant interruptions. Endless admin.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              It's the silent chaos you've learned to live with. And it's draining time, money, and
              energy every single day.
            </p>

            <h5 className={cn(typography.heading.h5, colors.text.primary, 'font-normal', 'mt-4')}>
              The solution:
            </h5>

            <div className={cn(spacing.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4')}>
              <p className={cn(typography.text.base, colors.text.secondary)}>
                Skyland AI replaces that chaos with flow: Automated workflows. Clean handoffs. No
                friction.
              </p>
            </div>

            <p className={cn(typography.text.base, colors.text.secondary, 'mt-4')}>
              Your team gets to focus. Your business gets to move. No burnout. No bottlenecks. Just
              growth without drag.
            </p>

            <p className={cn(typography.text.base, colors.text.accent, 'mt-4 flex items-center')}>
              <span className="mr-2 inline-block">👉</span> Talk to Dana to see what you could stop
              doing—starting today.
            </p>
          </div>
        </ContentStack>
      ),
    },
    {
      title: 'From Chaos to Control—In Days, Not Months',
      description: 'Get your time, team, and sanity back—without adding complexity.',
      expandedContent: (
        <ContentStack spacing="md">
          <h4 className={cn(typography.heading.h4, colors.text.primary, 'font-normal')}>
            This Is What It Feels Like When Business Just Works
          </h4>
          <div className={cn(spacing.stack.md)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              No more firefighting. No more missed messages. No more lost opportunities.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              Skyland AI replaces chaos with calm—automating repetitive tasks, syncing systems, and
              making everything run exactly the way it should.
            </p>

            <h5 className={cn(typography.heading.h5, colors.text.primary, 'font-normal', 'mt-4')}>
              The result?
            </h5>

            <div className={cn(spacing.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4')}>
              <p className={cn(typography.text.base, colors.text.secondary)}>
                Your team moves faster. Your clients get answers. And you finally get to run your
                business—not chase it.
              </p>
            </div>

            <p className={cn(typography.text.base, colors.text.accent, 'mt-4 flex items-center')}>
              <span className="mr-2 inline-block">👉</span> Talk to Dana to see how fast clarity can
              replace chaos.
            </p>
          </div>
        </ContentStack>
      ),
    },
    {
      title: 'There Was Before AI—And Then the World Changed',
      description: 'This is the revolution—and those who act will lead it',
      expandedContent: (
        <ContentStack spacing="md">
          <h4 className={cn(typography.heading.h4, colors.text.primary, 'font-normal')}>
            This Shift Is Bigger Than Any One Tool—It's a New Era
          </h4>
          <div className={cn(spacing.stack.md)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              Change is never easy—but it's always inevitable.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              We're entering a new era of business—faster, smarter, more automated. And the gap is
              growing between those who embrace it and those who resist it.
            </p>

            <h5 className={cn(typography.heading.h5, colors.text.primary, 'font-normal', 'mt-4')}>
              The opportunity:
            </h5>

            <div className={cn(spacing.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4')}>
              <p className={cn(typography.text.base, colors.text.secondary)}>
                AI isn't just about saving time. It's about staying relevant. About building systems
                that scale without stress.
              </p>
              <p className={cn(typography.text.base, colors.text.secondary)}>
                Skyland helps you step confidently into what's next—without overwhelm, without
                guesswork.
              </p>
            </div>

            <p className={cn(typography.text.base, colors.text.secondary, 'mt-4')}>
              Because the future doesn't wait. But with the right systems in place, neither do you.
            </p>

            <p className={cn(typography.text.base, colors.text.accent, 'mt-4 flex items-center')}>
              <span className="mr-2 inline-block">👉</span> Talk to Dana and take your first step
              into the after-AI era.
            </p>
          </div>
        </ContentStack>
      ),
    },
  ];

  return (
    <BaseSection
      id="about"
      className={cn(spacing.section.base, spacing.padding.section, effects.glass, className)}
      ariaLabel="About Skyland AI"
    >
      <ContentStack spacing="lg" maxWidth="2xl" className={cn(spacing.section.padding)}>
        <ContentStack spacing="md" className={cn(spacing.alignment.center)}>
          <h2 className={cn(typography.heading.h2, colors.text.primary, 'font-normal')}>
            What's Really Holding Your Business Back?
          </h2>
          <p className={cn(typography.text.lg, colors.text.secondary, spacing.stack.md)}>
            It's not a lack of leads—it's the silent drain of repetitive tasks, manual work, and
            slow response times.
          </p>
        </ContentStack>
        <GridSection columns="two" gap="lg" ariaLabel="Features Grid">
          {features.map((feature, index) => (
            <div key={index} className={cn(spacing.flex.col)}>
              <Card
                title={feature.title}
                description={feature.description}
                expandedContent={feature.expandedContent}
                className={cn(
                  effects.hover.scale,
                  effects.transition.base,
                  'bg-white/5',
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
