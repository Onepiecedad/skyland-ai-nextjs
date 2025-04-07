'use client';

import React from 'react';
import { BaseSection } from "@/components/ui/BaseSection";
import { ContentStack } from "@/components/ui/ContentStack";
import { Card } from "@/components/ui/Card";
import { GridSection } from "@/components/ui/GridSection";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/theme/tokens/colors";
import { effects } from "@/lib/theme/tokens/effects";
import { radius } from "@/lib/theme/tokens/radius";
import { spacing } from "@/lib/theme/tokens/spacing";
import { typography } from "@/lib/theme/tokens/typography";

const howItWorksSteps = [
  {
    id: "discovery",
    title: "Step 1: Book Your Free AI Strategy Call",
    description: "Let's break down your workflow to uncover time-wasters, bottlenecks, and untapped opportunities—then map out how AI can fix them fast.",
    modalContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary, "font-normal")}>
          Let's Talk About What's Not Working—And How to Fix It Fast
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            This 15-minute call is where your transformation starts.
            We'll walk through your daily workflows and identify what's costing you time, money, and momentum. 
          </p>
          
          <p className={cn(typography.text.base, colors.text.secondary)}>
            You'll get expert insight into what's possible with AI—without the jargon or sales pitch. Just clarity, strategy, and next steps you can act on.
          </p>
          
          <p className={cn(typography.text.base, colors.text.accent, "mt-4 flex items-center")}>
            <span className="inline-block mr-2">💬</span> Talk to Dana to schedule your free AI strategy call.
          </p>
        </div>
      </ContentStack>
    )
  },
  {
    id: "solution-design",
    title: "Step 2: Get Your Custom AI Plan",
    description: "You'll receive a personalized automation roadmap—tailored to your workflows, goals, and growth potential.",
    modalContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary, "font-normal")}>
          Your Custom AI Plan—Built for Growth and Efficiency
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            After the strategy call, you'll receive a tailored automation plan based on your workflows, goals, and biggest opportunities. No generic advice—just clear, actionable next steps.
          </p>
          
          <h5 className={cn(typography.heading.h5, colors.text.primary, "font-normal", "mt-4")}>
            What your plan includes:
          </h5>
          
          <div className={cn(spacing.stack.sm, "ml-2 border-l-2 border-blue-500/40 pl-4")}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              We'll show you what to automate, how it works, and the results you can expect.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              You'll know exactly what it costs, what it delivers, and how quickly it can go live—so you can move forward with total confidence.
            </p>
          </div>
          
          <p className={cn(typography.text.base, colors.text.accent, "mt-4 flex items-center")}>
            <span className="inline-block mr-2">💬</span> Talk to Dana to learn more about our custom AI planning process.
          </p>
        </div>
      </ContentStack>
    )
  },
  {
    id: "implementation",
    title: "Step 3: We Build & Test Your AI Solution",
    description: "We build, train, and test your custom AI system—so it's ready to perform from day one.",
    modalContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary, "font-normal")}>
          Your AI Solution—Fully Built, Tested, and Ready to Launch
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Once you approve the plan, we get to work.
          </p>
          
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Your custom AI system is built, trained, and configured to match your workflows, rules, and preferences. We handle the complexity—so you don't have to lift a finger.
          </p>
          
          <h5 className={cn(typography.heading.h5, colors.text.primary, "font-normal", "mt-4")}>
            The final stages:
          </h5>
          
          <div className={cn(spacing.stack.sm, "ml-2 border-l-2 border-blue-500/40 pl-4")}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              You'll preview the system, test it live, and make any final tweaks—so it works exactly how you want it.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              Launch in days, not months.
            </p>
          </div>
          
          <p className={cn(typography.text.base, colors.text.accent, "mt-4 flex items-center")}>
            <span className="inline-block mr-2">💬</span> Talk to Dana to find out how quickly we could build your custom AI solution.
          </p>
        </div>
      </ContentStack>
    )
  },
  {
    id: "optimization",
    title: "Step 4: Launch & Start Seeing Results",
    description: "Your AI system goes live—and keeps getting smarter with every interaction.",
    modalContent: (
      <ContentStack spacing="md">
        <h4 className={cn(typography.heading.h4, colors.text.primary, "font-normal")}>
          Your AI Gets Smarter—So You Keep Getting Better Results
        </h4>
        <div className={cn(spacing.stack.md)}>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Once your system goes live, it doesn't just run—it learns.
          </p>
          
          <p className={cn(typography.text.base, colors.text.secondary)}>
            Every call, click, and conversation helps your AI improve accuracy, speed, and impact automatically.
          </p>
          
          <h5 className={cn(typography.heading.h5, colors.text.primary, "font-normal", "mt-4")}>
            Continuous improvement:
          </h5>
          
          <div className={cn(spacing.stack.sm, "ml-2 border-l-2 border-blue-500/40 pl-4")}>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              We monitor performance, refine workflows, and make smart updates—so your results keep compounding.
            </p>
            <p className={cn(typography.text.base, colors.text.secondary)}>
              No extra work on your part. Just better outcomes, week after week.
            </p>
          </div>
          
          <p className={cn(typography.text.base, colors.text.accent, "mt-4 flex items-center")}>
            <span className="inline-block mr-2">💬</span> Talk to Dana to see how our AI solutions continuously improve over time.
          </p>
        </div>
      </ContentStack>
    )
  }
];

export function HowItWorksSection() {
  return (
    <BaseSection
      id="how-it-works"
      className={cn(
        spacing.section.base,
        spacing.padding.section,
        effects.glass
      )}
      ariaLabel="How It Works"
    >
      <ContentStack spacing="lg" maxWidth="2xl" className={cn(spacing.section.padding)}>
        <ContentStack spacing="md" className={cn(spacing.alignment.center)}>
          <h2 
            className={cn(
              typography.heading.h2,
              colors.text.primary,
              "font-normal"
            )}
          >
            Your AI Employee—Fully Trained in Days, No Effort Required
          </h2>
          <p 
            className={cn(
              typography.text.lg,
              colors.text.secondary,
              spacing.stack.md
            )}
          >
            You focus on the results—we'll handle the setup. Just follow 4 simple steps.
          </p>
        </ContentStack>

        <GridSection 
          columns="two" 
          gap="lg"
          ariaLabel="How It Works Process Grid"
        >
          {howItWorksSteps.map((step) => (
            <div key={step.id} className={cn(spacing.flex.col)}>
              <Card
                title={step.title}
                description={step.description}
                expandedContent={step.modalContent}
                ariaLabel={`${step.title} process step`}
              />
            </div>
          ))}
        </GridSection>
      </ContentStack>
    </BaseSection>
  );
} 
