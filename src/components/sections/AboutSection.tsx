import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeading } from "@/components/MainHeading";
import { DanaButton } from "@/components/ui/DanaButton";

function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        title="What's Really Holding Your Business Back?"
        subtitle="It's not a lack of leads—it's the silent drain of repetitive tasks, manual work, and slow response times."
      />

      <div className="space-y-16 text-white/80 text-base leading-relaxed max-w-3xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold text-white/90 mb-2">
            1. Why Skyland AI Was Built – The Future of Work Starts Here
          </h3>
          <p className="mb-2">
            AI isn't just the future—it's the great equalizer. Discover the vision behind Skyland AI and how it helps businesses of any size do more with less.
          </p>
          <p className="mb-2">
            AI isn't just for tech giants. It's a revolution for the rest of us.
            Skyland was born from a simple belief: small teams shouldn't be held back by manual work, burnout, or limited resources.
          </p>
          <p className="mb-2">
            We saw how time and energy were being wasted—and how automation could change everything.
            So we built a smarter path forward—where AI doesn't just save time, it gives you freedom.
          </p>
          <p>Freedom to grow. To compete. To build something bigger than your bandwidth. And this is only the beginning.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white/90 mb-2">
            2. Your Team Isn't the Problem—Your Systems Are
          </h3>
          <p className="mb-2">It's not about working harder. It's about removing what's slowing you down.</p>
          <p className="mb-2">
            Most teams aren't falling short—they're buried in broken systems. Manual tasks. Constant interruptions. Endless admin.
          </p>
          <p className="mb-2">
            It's the silent chaos you've learned to live with. And it's draining time, money, and energy every single day.
          </p>
          <p className="mb-2">
            Skyland AI replaces that chaos with flow: Automated workflows. Clean handoffs. No friction.
          </p>
          <p className="mb-4">
            Your team gets to focus. Your business gets to move. No burnout. No bottlenecks. Just growth without drag.
          </p>
          <DanaButton />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white/90 mb-2">
            3. From Chaos to Control—In Days, Not Months
          </h3>
          <p className="mb-2">Get your time, team, and sanity back—without adding complexity.</p>
          <p className="mb-2">
            No more firefighting. No more missed messages. No more lost opportunities.
          </p>
          <p className="mb-2">
            Skyland AI replaces chaos with calm—automating repetitive tasks, syncing systems, and making everything run exactly the way it should.
          </p>
          <p className="mb-4">
            The result? Your team moves faster. Your clients get answers. And you finally get to run your business—not chase it.
          </p>
          <DanaButton />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white/90 mb-2">
            4. There Was Before AI—And Then the World Changed
          </h3>
          <p className="mb-2">
            The only thing we know for sure is that change is the only constant. This is the revolution—and those who act will lead it. Skyland is here to guide you forward.
          </p>
          <p className="mb-2">
            Change is never easy—but it's always inevitable.
            We're entering a new era of business—faster, smarter, more automated.
          </p>
          <p className="mb-2">
            The gap is growing between those who embrace it and those who resist it.
            AI isn't just about saving time. It's about staying relevant.
          </p>
          <p className="mb-2">
            Skyland helps you step confidently into what's next—without overwhelm, without guesswork.
          </p>
          <p className="mb-4">
            Because the future doesn't wait. But with the right systems in place, neither do you.
          </p>
          <DanaButton />
        </div>
      </div>
    </SectionWrapper>
  );
}

export default AboutSection; 