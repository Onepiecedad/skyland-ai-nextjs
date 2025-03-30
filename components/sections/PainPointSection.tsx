'use client';

import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import { spacing, typography } from '@/lib/theme';
import type { IconKey } from '@/components/cards/iconMap';

interface PainPoint {
  iconKey: IconKey;
  title: string;
  description: string;
  expandedContent: React.ReactNode;
  bullets: string[];
}

const painPoints: PainPoint[] = [
  {
    iconKey: "missed-calls" as IconKey,
    title: "Missed Opportunities",
    description: "Every missed call, delayed response, or after-hours inquiry is potential revenue slipping away.",
    expandedContent: (
      <div className={spacing.elementSpacing}>
        <p>Every business faces the same challenge: opportunities don't wait for business hours.</p>
        <p>While you sleep, potential customers are:</p>
        <ul className={spacing.elementSpacing}>
          <li>• Searching for your services</li>
          <li>• Making purchasing decisions</li>
          <li>• Choosing your competitors who respond faster</li>
        </ul>
        <p>Don't let another opportunity slip through the cracks.</p>
      </div>
    ),
    bullets: []
  },
  {
    iconKey: "message-square",
    title: "Still buried in admin that doesn't grow your business?",
    description: "What if your daily busywork ran itself—without extra staff?",
    expandedContent: (
      <>
        <p>Admin tasks are necessary—but not where your genius lies.</p>
        <p>Every form filled. Every email sent. Every document processed.</p>
        <p>It's all time you could spend on strategy. On growth. On life.</p>
        <p>Picture this instead:</p>
        <p>Your AI assistant handles it all. Forms? Filled. Emails? Drafted. Documents? Processed.</p>
        <p>While you focus on what really matters: Growing your business.</p>
        <p>This isn't about cutting corners.</p>
        <p>It's about cutting through the busywork that's holding you back.</p>
        <p>Now your business runs smoother. Your team works smarter. And you? You lead instead of manage.</p>
      </>
    ),
    bullets: []
  },
  {
    iconKey: "clock",
    title: "Losing leads because you didn't respond fast enough?",
    description: "What if your leads got a reply in seconds—not hours?",
    expandedContent: (
      <>
        <p>In sales, timing is everything. But you can't be everywhere at once.</p>
        <p>Every delayed response. Every missed opportunity. Every lost lead.</p>
        <p>It all adds up to revenue slipping through your fingers.</p>
        <p>But what if you could respond instantly—every time?</p>
        <p>Your AI assistant never sleeps. Never delays. Never misses a chance.</p>
        <p>It engages leads the moment they reach out. Qualifies them. Books meetings.</p>
        <p>This isn't about replacing human connection.</p>
        <p>It's about making sure you never miss another opportunity.</p>
        <p>Now your leads get instant attention. Your pipeline stays full. And your business grows while you sleep.</p>
      </>
    ),
    bullets: []
  },
  {
    iconKey: "zap",
    title: "Scaling feels impossible without hiring more staff?",
    description: "What if your operations scaled automatically as your business grew?",
    expandedContent: (
      <>
        <p>Growth should be exciting—not exhausting.</p>
        <p>But right now? More clients mean more work. More work means more staff.</p>
        <p>And more staff means more management, more overhead, more complexity.</p>
        <p>Imagine a different way:</p>
        <p>Your AI system scales instantly. Handles more volume. Maintains quality.</p>
        <p>No hiring sprees. No training periods. No growing pains.</p>
        <p>This isn't about replacing your team.</p>
        <p>It's about empowering them to do more—without burning out.</p>
        <p>Now your business grows smoothly. Your team stays lean. And scaling feels natural, not painful.</p>
      </>
    ),
    bullets: []
  }
];

export default function PainPointSection() {
  return (
    <section 
      id="pain-points" 
      className={cn(
        "relative flex flex-col items-center justify-center",
        "min-h-[100vh] w-full",
        "bg-black/40 backdrop-blur-sm",
        spacing.padding.sectionY
      )}
      data-theme-debug={`spacing:${spacing.padding.sectionY}`}
    >
      <div className={spacing.container}>
        <h2 className={cn(typography.heading, "text-center", spacing.elementSpacing)}>
          Common Pain Points
        </h2>
        <div className={spacing.gridCols[2]}>
          {painPoints.map((point, index) => (
            <Card
              key={index}
              icon={point.iconKey}
              title={point.title}
              description={point.description}
              cta={point.expandedContent}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 