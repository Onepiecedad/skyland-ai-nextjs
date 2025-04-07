'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { BaseSection } from '@/components/ui/BaseSection';
import { ContentStack } from '@/components/ui/ContentStack';
import { Card } from '@/components/ui/Card';
import { GridSection } from '@/components/ui/GridSection';
import { spacing, typography, colors, effects, radius } from '@/lib/theme';

interface IndustrySolutionsSectionProps {
  className?: string;
}

export function IndustrySolutionsSection({ className }: IndustrySolutionsSectionProps) {
  const industries = [
    {
      id: "real-estate",
      title: "AI for Real Estate",
      description: "Capture leads, book viewings, and follow up—automatically, 24/7. Never miss a buyer again.",
      expandedContent: (
        <ContentStack spacing="md">
          <h4 className={cn(typography.heading.h4, colors.text.primary, "font-normal")}>
            Turn Missed Calls Into Closed Deals—While You Sleep
          </h4>
          <div className={cn(spacing.stack.md)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              Real estate doesn't stop at 5 PM—but you do.
              Missed calls, unqualified leads, and non-stop questions pull you away from what really matters: closing deals.
            </p>
            
            <h5 className={cn(typography.heading.h5, colors.text.primary, "font-normal", "mt-4")}>
              The solution:
            </h5>
            
            <div className={cn(spacing.stack.sm, "ml-2 border-l-2 border-blue-500/40 pl-4")}>
              <p className={cn(typography.text.base, colors.text.secondary)}>
                Your AI agent answers instantly—day or night—knows every listing in real time, and handles follow-ups without missing a beat.
              </p>
            </div>
            
            <p className={cn(typography.text.base, colors.text.secondary, "mt-4")}>
              No more chasing. No more stress. Just more showings, more sleep, and more deals.
            </p>
            
            <p className={cn(typography.text.base, colors.text.accent, "mt-4 flex items-center")}>
              <span className="inline-block mr-2">👉</span> Curious what this could look like in your agency? Talk to Dana to find out.
            </p>
          </div>
        </ContentStack>
      )
    },
    {
      id: "customer-support",
      title: "AI for Customer Support",
      description: "Answer instantly, resolve faster, and scale support—without adding headcount.",
      expandedContent: (
        <ContentStack spacing="md">
          <h4 className={cn(typography.heading.h4, colors.text.primary, "font-normal")}>
            Your AI Support Agent—Working 24/7, So Your Team Doesn't Have To
          </h4>
          <div className={cn(spacing.stack.md)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              Support teams are stretched thin—and customers don't wait.
            </p>
            
            <h5 className={cn(typography.heading.h5, colors.text.primary, "font-normal", "mt-4")}>
              The solution:
            </h5>
            
            <div className={cn(spacing.stack.sm, "ml-2 border-l-2 border-blue-500/40 pl-4")}>
              <p className={cn(typography.text.base, colors.text.secondary)}>
                Your AI support agent handles up to 80% of incoming questions instantly, 24/7—by voice or chat.
              </p>
              <p className={cn(typography.text.base, colors.text.secondary)}>
                It works across channels, speaks multiple languages, and integrates directly into your CRM or helpdesk.
              </p>
            </div>
            
            <p className={cn(typography.text.base, colors.text.secondary, "mt-4")}>
              No more ticket backlogs. No more missed calls. Just faster answers, happier customers, and a team that can finally breathe.
            </p>
            
            <p className={cn(typography.text.base, colors.text.accent, "mt-4 flex items-center")}>
              <span className="inline-block mr-2">👉</span> Want to see what this looks like for your business? Talk to Dana now.
            </p>
          </div>
        </ContentStack>
      )
    },
    {
      id: "hospitality",
      title: "AI for Hospitality",
      description: "Answer guest questions, handle bookings, and increase upsells—day or night, no staff needed.",
      expandedContent: (
        <ContentStack spacing="md">
          <h4 className={cn(typography.heading.h4, colors.text.primary, "font-normal")}>
            Give Guests Instant Answers—Without Adding to Your Team
          </h4>
          <div className={cn(spacing.stack.md)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              Guests expect fast, helpful service—no matter the hour.
            </p>
            
            <h5 className={cn(typography.heading.h5, colors.text.primary, "font-normal", "mt-4")}>
              The solution:
            </h5>
            
            <div className={cn(spacing.stack.sm, "ml-2 border-l-2 border-blue-500/40 pl-4")}>
              <p className={cn(typography.text.base, colors.text.secondary)}>
                Your AI concierge responds instantly by voice or chat, handles bookings, FAQs, and even upsells room upgrades or services automatically.
              </p>
              <p className={cn(typography.text.base, colors.text.secondary)}>
                It works 24/7, speaks multiple languages, and connects with your existing booking system or CRM.
              </p>
            </div>
            
            <p className={cn(typography.text.base, colors.text.secondary, "mt-4")}>
              Fewer delays. Happier guests. More revenue—without hiring more staff.
            </p>
            
            <p className={cn(typography.text.base, colors.text.accent, "mt-4 flex items-center")}>
              <span className="inline-block mr-2">👉</span> Wondering how this could work at your front desk? Talk to Dana to find out.
            </p>
          </div>
        </ContentStack>
      )
    },
    {
      id: "admin",
      title: "AI for Admin & Workflow Automation",
      description: "Free up your time by automating repetitive tasks, reminders, and follow-ups—without hiring or micromanaging.",
      expandedContent: (
        <ContentStack spacing="md">
          <h4 className={cn(typography.heading.h4, colors.text.primary, "font-normal")}>
            Handle the Busywork—Without Lifting a Finger
          </h4>
          <div className={cn(spacing.stack.md)}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              Emails, reminders, scheduling, updates, follow-ups… admin never ends.
            </p>
            
            <h5 className={cn(typography.heading.h5, colors.text.primary, "font-normal", "mt-4")}>
              The solution:
            </h5>
            
            <div className={cn(spacing.stack.sm, "ml-2 border-l-2 border-blue-500/40 pl-4")}>
              <p className={cn(typography.text.base, colors.text.secondary)}>
                Your AI assistant handles repetitive tasks automatically—so you can focus on work that actually moves the needle.
              </p>
              <p className={cn(typography.text.base, colors.text.secondary)}>
                It updates systems, sends messages, reminds clients, tracks progress, and more—without dropping the ball.
              </p>
            </div>
            
            <p className={cn(typography.text.base, colors.text.secondary, "mt-4")}>
              Save hours, prevent mistakes, and finally get your time back.
            </p>
            
            <p className={cn(typography.text.base, colors.text.accent, "mt-4 flex items-center")}>
              <span className="inline-block mr-2">👉</span> Wondering how much of your admin could disappear? Talk to Dana to find out.
            </p>
          </div>
        </ContentStack>
      )
    }
  ];

  return (
    <BaseSection
      id="industry-solutions"
      className={cn(
        spacing.section.base,
        spacing.padding.section,
        effects.glass,
        className
      )}
      ariaLabel="Industry Solutions"
    >
      <ContentStack spacing="lg" maxWidth="2xl" className={cn(spacing.section.padding, "w-full max-w-7xl")}>
        <ContentStack spacing="md" className={cn(spacing.alignment.center)}>
          <h2 className={cn(typography.heading.h2, colors.text.primary, "font-normal")}>
            Real AI, Solving Real Problems—Across Industries
          </h2>
          <p className={cn(typography.text.lg, colors.text.secondary, spacing.stack.md)}>
            From real estate to hospitality to customer support—AI is already handling the work that slows businesses down.
          </p>
        </ContentStack>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {industries.map((industry) => (
            <div key={industry.id} className={cn(spacing.flex.col)}>
              <Card
                title={industry.title}
                description={industry.description}
                expandedContent={industry.expandedContent}
                ariaLabel={`${industry.title} solution`}
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
