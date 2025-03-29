'use client';

import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import { spacing, typography } from '@/lib/theme';
import { IconKey } from '@/components/cards/iconMap';
import { useOverlay } from '@/contexts/OverlayProvider';
import { glass, hover, transition } from '@/lib/theme';

interface PainPoint {
  iconKey: IconKey;
  title: string;
  description: string;
  expandedContent: React.ReactNode;
}

const painPoints: PainPoint[] = [
  {
    iconKey: "phone",
    title: "Missed Opportunities",
    description: "Every missed call, delayed response, or after-hours inquiry is potential revenue slipping away.",
    expandedContent: (
      <div className="space-y-4">
        <p>Every business faces the same challenge: opportunities don't wait for business hours.</p>
        <p>While you sleep, potential customers are:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Searching for solutions</li>
          <li>Making purchasing decisions</li>
          <li>Moving on to competitors who respond faster</li>
        </ul>
        <p>What if you never missed another opportunity—day or night?</p>
      </div>
    )
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
    )
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
    )
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
    )
  }
];

export default function PainPointSection() {
  const { openModal } = useOverlay();

  return (
    <section 
      id="pain-points" 
      className={cn(
        "relative flex flex-col items-center justify-center",
        "min-h-[100vh] w-full",
        "bg-black/40 backdrop-blur-sm",
        spacing.sectionY
      )}
    >
      <div className={cn("container mx-auto px-4 space-y-16", spacing.container)}>
        <h2 className={cn(
          typography.heading,
          "text-center"
        )}>
          Common Pain Points We Solve
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <Card
              key={index}
              icon={point.iconKey}
              title={point.title}
              description={point.description}
              onClick={() => openModal(
                <div className="space-y-6">
                  <h2 className={cn(typography.heading, "text-2xl")}>{point.title}</h2>
                  <div className={typography.paragraph}>
                    {point.expandedContent}
                  </div>
                </div>
              )}
              className={cn(
                glass.card,
                hover.card,
                transition.base,
                "hover:scale-[1.02]"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 