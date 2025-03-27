import { useOverlay } from "@/components/cards/OverlayProvider";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeading } from "@/components/MainHeading";
import { ExpandableCard } from "@/components/cards/ExpandableCard";
import { IconKey } from "@/components/cards/iconMap";
import { DanaButton } from "@/components/ui/DanaButton";
import { cn } from "@/lib/utils";

interface PainPoint {
  iconKey: IconKey;
  title: string;
  description: string;
  expandedContent: React.ReactNode;
}

function PainPointSection() {
  const painPoints: PainPoint[] = [
    {
      iconKey: "phone",
      title: "Too many customer calls & repetitive inquiries?",
      description: "What if your business could respond instantly—even when you can't?",
      expandedContent: (
        <>
          <p>You're deep in work—then the phone rings. Again. And again.</p>
          <p>Same questions. Same interruptions. Same stress.</p>
          <p>And every missed call? That's a cold lead. A lost sale.</p>
          <p>How much is one client worth to you? Now multiply that by ten.</p>
          <p>Now imagine this:</p>
          <p>An AI voice assistant that answers instantly—24/7.</p>
          <p>It books appointments. Handles FAQs. Qualifies leads—without you lifting a finger.</p>
          <p>This isn't about replacing you.</p>
          <p>It's about reclaiming your time and sealing the cracks in your growth.</p>
          <p>Now your customers get answers. You stay in control. And growth stops leaking through the cracks.</p>
          <div className="pt-4">
            <DanaButton autoExpand={false} />
          </div>
        </>
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
          <div className="pt-4">
            <DanaButton autoExpand={false} />
          </div>
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
          <div className="pt-4">
            <DanaButton autoExpand={false} />
          </div>
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
          <div className="pt-4">
            <DanaButton autoExpand={false} />
          </div>
        </>
      )
    }
  ];

  return (
    <section className={cn(
      "relative py-20 md:py-24"
    )}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="What's Really Slowing Your Business Down?"
          subtitle="The biggest growth killer in business isn't lack of customers—it's wasted time. Every minute spent on repetitive tasks is a minute not spent growing your business."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <ExpandableCard
              key={index}
              icon={point.iconKey}
              title={point.title}
              description={point.description}
              expandedContent={point.expandedContent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PainPointSection; 