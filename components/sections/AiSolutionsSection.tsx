'use client';

import { Card } from '@/components/ui/Card';
import { PhoneCall, MessageSquare, Settings2 } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { typography, effects, radius, spacing } from "@/lib/theme";
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";
import type { ThemeSection } from "@/lib/utils/theme-validator";

function AISolutionsSectionBase() {
  return (
    <SectionWrapper id="ai-solutions">
      <Container
        glass={false}
        padding="none"
        className="flex-1 flex items-center py-8 md:py-6 lg:py-4"
      >
        <div
          className={cn(
            "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            "flex flex-col items-center"
          )}
        >
          {/* Section Heading */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-light text-white/85 leading-[1.1] tracking-tight text-center">
              AI Solutions That Do the Work for You
            </h2>
            <div className="mt-6 space-y-2">
              <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-[44rem] mx-auto text-center">
                From missed calls to admin overload—these AI tools handle real work so you don't have to.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full">
            <Card
              icon={<PhoneCall className="h-5 w-5 text-white/40 stroke-1.5" />}
              title="AI Voice Agents"
              description="Answer inbound calls instantly—and follow up with leads automatically. AI voice agents work 24/7 to book clients and never miss an opportunity."
              cta={
                <>
                  <p>Never Miss a Call—or a Client—Again</p>
                  <p>Every missed call is a missed opportunity.</p>
                  <p>Most leads won't leave a voicemail—they just move on.</p>
                  <p>AI Voice Agents fix that instantly.</p>
                  <p>They answer inbound calls 24/7, handle FAQs, qualify leads, and book meetings automatically.</p>
                  <p>They can also make up to 2,000 outbound calls per hour—following up with leads in their own language, fully customized to your business.</p>
                  <p>And they don't just talk—they take action.</p>
                  <p>Push updates directly to your CRM. Trigger workflows. Route calls.</p>
                  <p>All with zero human effort.</p>
                  <p>💬 Talk to Dana to see how AI voice agents could work like 10 reps—on autopilot.</p>
                </>
              }
              showDanaButton={true}
              className={cn(
                typography.text.base,
                typography.heading.h3,
                spacing.elementSpacing,
                effects.glass.light,
                radius.xl,
                "transition duration-300 hover:shadow-xl hover:scale-[1.015]",
                "min-h-[160px]"
              )}
            />

            <Card
              icon={<MessageSquare className="h-5 w-5 text-white/40 stroke-1.5" />}
              title="Custom AI Assistants"
              description="Engage visitors, qualify leads, and support customers—automatically, 24/7. These assistants turn traffic into conversations—and conversations into customers."
              cta={
                <>
                  <p>Your Always-On Lead Qualifier, Support Agent & Personal Assistant</p>
                  <p>Website traffic is great—but only if it turns into action.</p>
                  <p>Most visitors never fill out forms or wait for a reply.</p>
                  <p>That's where Custom AI Assistants step in.</p>
                  <p>These intelligent chatbots engage every visitor in real time, answer questions, qualify leads, and guide them toward next steps—without missing a beat.</p>
                  <p>But they're not limited to your website.</p>
                  <p>These assistants can also act as personal AI sidekicks—connected to your email, calendar, and web—helping you stay productive, on schedule, and in control.</p>
                  <p>Need them tailored to your brand voice, lead process, or support flow? No problem.</p>
                  <p>They're fully customizable—and available 24/7 without human oversight.</p>
                  <p>From lead gen to personal productivity, these assistants do the work of a full team—without the overhead.</p>
                  <p>💬 Talk to Dana to see how a Custom AI Assistant could turn your traffic—and time—into revenue.</p>
                </>
              }
              showDanaButton={true}
              className={cn(
                typography.text.base,
                typography.heading.h3,
                spacing.elementSpacing,
                effects.glass.light,
                radius.xl,
                "transition duration-300 hover:shadow-xl hover:scale-[1.015]",
                "min-h-[160px]"
              )}
            />

            <Card
              icon={<Settings2 className="h-5 w-5 text-white/40 stroke-1.5" />}
              title="Business Automation"
              description="Automate your workflows, eliminate busywork, and reclaim hours—without hiring or micromanaging. These systems run quietly in the background and save you hours, mistakes, and mental load."
              cta={
                <>
                  <p>Let AI Handle the Busywork—So You Can Focus on Growth</p>
                  <p>How much time does your team waste on manual tasks that don't move the needle?</p>
                  <p>Scheduling. Copy-pasting. Data entry. Reporting.</p>
                  <p>The kind of work that keeps things running—but keeps your team from scaling.</p>
                  <p>Business Automation changes that.</p>
                  <p>From onboarding flows to invoice reminders, contract processing to task routing—AI-powered workflows handle it all in the background, with perfect precision.</p>
                  <p>They don't call in sick. They don't forget steps.</p>
                  <p>They just run—quietly, automatically, and exactly how you want them to.</p>
                  <p>Whether you need full process automation or help eliminating small inefficiencies, these systems are built to adapt to your business—not the other way around.</p>
                  <p>💬 Talk to Dana to find out how much time (and sanity) you could save this week.</p>
                </>
              }
              showDanaButton={true}
              className={cn(
                typography.text.base,
                typography.heading.h3,
                spacing.elementSpacing,
                effects.glass.light,
                radius.xl,
                "transition duration-300 hover:shadow-xl hover:scale-[1.015]",
                "min-h-[160px]"
              )}
            />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

const AISolutionsSection = withThemeValidation(AISolutionsSectionBase, "AISolutionsSection", ["sections", "typography", "spacing", "effects", "radius"] as ThemeSection[]);

export default AISolutionsSection;