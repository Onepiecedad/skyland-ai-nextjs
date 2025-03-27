import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeading } from "@/components/MainHeading";
import { ExpandableCard } from "@/components/cards/ExpandableCard";
import { IconKey } from "@/components/cards/iconMap";
import { DanaButton } from "@/components/ui/DanaButton";

interface AiSolution {
  iconKey: IconKey;
  title: string;
  description: string;
  expandedContent: React.ReactNode;
}

function AiSolutionsSection() {
  const solutions: AiSolution[] = [
    {
      iconKey: "phone",
      title: "AI Voice Agents",
      description: "Answer inbound calls instantly—and follow up with leads automatically.",
      expandedContent: (
        <>
          <p>Every missed call is a missed opportunity.</p>
          <p>Most leads won't leave a voicemail—they just move on.</p>
          <p>AI Voice Agents fix that instantly.</p>
          <p>They answer inbound calls 24/7, handle FAQs, qualify leads, and book meetings automatically.</p>
          <p>
            They can also make up to 2,000 outbound calls per hour—following up with leads in their own language, fully customized to your business.
          </p>
          <p>And they don't just talk—they take action.</p>
          <p>Push updates directly to your CRM. Trigger workflows. Route calls. All with zero human effort.</p>
          <div className="pt-4">
            <DanaButton />
          </div>
        </>
      )
    },
    {
      iconKey: "users",
      title: "Custom AI Assistants",
      description: "Engage visitors, qualify leads, support customers—automatically, 24/7.",
      expandedContent: (
        <>
          <p>Website traffic is great—but only if it turns into action.</p>
          <p>Most visitors never fill out forms or wait for a reply. That's where Custom AI Assistants step in.</p>
          <p>
            These intelligent chatbots engage every visitor in real time, answer questions, qualify leads, and guide them toward next steps—without missing a beat.
          </p>
          <p>But they're not limited to your website.</p>
          <p>
            These assistants can also act as personal AI sidekicks—connected to your email, calendar, and web—helping you stay productive, on schedule, and in control.
          </p>
          <p>
            Need them tailored to your brand voice, lead process, or support flow? No problem. They're fully customizable—and available 24/7 without human oversight.
          </p>
          <p>
            From lead gen to personal productivity, these assistants do the work of a full team—without the overhead.
          </p>
          <div className="pt-4">
            <DanaButton />
          </div>
        </>
      )
    },
    {
      iconKey: "zap",
      title: "Business Automation",
      description: "Automate workflows, eliminate busywork, and reclaim hours.",
      expandedContent: (
        <>
          <p>How much time does your team waste on manual tasks that don't move the needle?</p>
          <p>Scheduling. Copy-pasting. Data entry. Reporting.</p>
          <p>The kind of work that keeps things running—but keeps your team from scaling.</p>
          <p>Business Automation changes that.</p>
          <p>
            From onboarding flows to invoice reminders, contract processing to task routing—AI-powered workflows handle it all in the background, with perfect precision.
          </p>
          <p>They don't call in sick. They don't forget steps. They just run—quietly, automatically, and exactly how you want them to.</p>
          <p>
            Whether you need full process automation or help eliminating small inefficiencies, these systems are built to adapt to your business—not the other way around.
          </p>
          <div className="pt-4">
            <DanaButton />
          </div>
        </>
      )
    }
  ];

  return (
    <SectionWrapper id="ai-solutions">
      <SectionHeading
        title="AI Solutions That Do the Work for You"
        subtitle="From missed calls to admin overload—these AI tools handle real work so you don't have to."
      />

      <div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        role="list"
        aria-label="AI Solutions"
      >
        {solutions.map((solution, index) => (
          <ExpandableCard
            key={index}
            icon={solution.iconKey}
            title={solution.title}
            description={solution.description}
            expandedContent={solution.expandedContent}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default AiSolutionsSection; 