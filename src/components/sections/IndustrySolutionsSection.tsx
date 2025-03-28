import { iconMap, IconKey } from "@/components/cards/iconMap";
import { DanaButton } from "@/components/ui/DanaButton";
import { Card } from "@/components/ui/Card";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { layout, typography, glass, hover, transition } from "@/lib/theme";

interface IndustrySolution {
  iconKey: IconKey;
  title: string;
  description: string;
  expandedContent: React.ReactNode;
}

export function IndustrySolutionsSection() {
  const solutions: IndustrySolution[] = [
    {
      iconKey: "phone",
      title: "AI for Real Estate",
      description: "Capture leads, book viewings, and follow up—automatically, 24/7.",
      expandedContent: (
        <>
          <p>Real estate doesn't stop at 5 PM—but you do.</p>
          <p>Missed calls, unqualified leads, and non-stop questions pull you away from what really matters: closing deals.</p>
          <p>Your AI agent answers instantly—day or night—knows every listing in real time, and handles follow-ups without missing a beat.</p>
          <p>No more chasing. No more stress. Just more showings, more sleep, and more deals.</p>
          <p>👉 Curious what this could look like in your agency? Talk to Dana to find out.</p>
          <div className="pt-4">
            <DanaButton autoExpand={false} />
          </div>
        </>
      )
    },
    {
      iconKey: "users",
      title: "AI for Customer Support",
      description: "Answer instantly, resolve faster, and scale—without new staff.",
      expandedContent: (
        <>
          <p>Support teams are stretched thin—and customers don't wait.</p>
          <p>Your AI support agent handles up to 80% of incoming questions instantly, 24/7—by voice or chat.</p>
          <p>It works across channels, speaks multiple languages, and integrates directly into your CRM or helpdesk.</p>
          <p>No more ticket backlogs. No more missed calls. Just faster answers, happier customers, and a team that can finally breathe.</p>
          <p>👉 Want to see what this looks like for your business? Talk to Dana now.</p>
          <div className="pt-4">
            <DanaButton autoExpand={false} />
          </div>
        </>
      )
    },
    {
      iconKey: "clock",
      title: "AI for Hospitality",
      description: "Answer questions, handle bookings, and upsell—24/7.",
      expandedContent: (
        <>
          <p>Guests expect fast, helpful service—no matter the hour.</p>
          <p>Your AI concierge responds instantly by voice or chat, handles bookings, FAQs, and even upsells room upgrades or services automatically.</p>
          <p>It works 24/7, speaks multiple languages, and connects with your existing booking system or CRM.</p>
          <p>Fewer delays. Happier guests. More revenue—without hiring more staff.</p>
          <p>👉 Wondering how this could work at your front desk? Talk to Dana to find out.</p>
          <div className="pt-4">
            <DanaButton autoExpand={false} />
          </div>
        </>
      )
    },
    {
      iconKey: "zap",
      title: "AI for Admin & Workflow Automation",
      description: "Automate reminders, forms, and follow-ups—on autopilot.",
      expandedContent: (
        <>
          <p>Emails, reminders, scheduling, updates, follow-ups… admin never ends.</p>
          <p>Your AI assistant handles repetitive tasks automatically—so you can focus on work that actually moves the needle.</p>
          <p>It updates systems, sends messages, reminds clients, tracks progress, and more—without dropping the ball.</p>
          <p>Save hours, prevent mistakes, and finally get your time back.</p>
          <p>👉 Wondering how much of your admin could disappear? Talk to Dana to find out.</p>
          <div className="pt-4">
            <DanaButton autoExpand={false} />
          </div>
        </>
      )
    }
  ];

  return (
    <section id="industry-solutions" className={cn("py-20 bg-black/5", layout.container)}>
      <div className={layout.elementSpacing}>
        <h2 className={cn(typography.heading, "text-3xl sm:text-4xl")}>
          Real AI, Solving Real Problems—Across Industries
        </h2>
        <p className={cn(typography.paragraph, "max-w-2xl")}>
          From real estate to hospitality to customer support—AI is already handling the work that slows businesses down.
        </p>
      </div>

      <div className={cn("grid", layout.cardGap, "mt-12")}>
        {solutions.map((solution, i) => {
          return (
            <Card
              key={i}
              icon={solution.iconKey}
              title={solution.title}
              description={solution.description}
              expandedContent={solution.expandedContent}
            />
          );
        })}
      </div>
    </section>
  );
} 