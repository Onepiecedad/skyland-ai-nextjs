import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/MainHeading";
import { spacing, typography } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        title="What's Really Holding Your Business Back?"
        subtitle="It's not a lack of leads—it's the silent drain of repetitive tasks, manual work, and slow response times."
      />

      <div className={spacing.container}>
        <div className={cn(
          spacing.elementSpacing,
          "text-white/80 text-base leading-relaxed"
        )}>
          <div className={cn(
            spacing.elementSpacing,
            "max-w-3xl mx-auto"
          )}>
            <h3 className={cn(typography.heading, spacing.elementSpacing)}>
              Our Vision
            </h3>
            <p className={spacing.elementSpacing}>
              We believe in a future where service businesses can focus on what they do best—delivering exceptional value to their clients.
            </p>
            <p className={spacing.elementSpacing}>
              Our AI solutions handle the repetitive tasks, complex scheduling, and routine communications that eat up your valuable time.
            </p>
            <p className={spacing.elementSpacing}>
              This isn't just about automation—it's about transformation. About giving you back control of your business and your time.
            </p>
            <p className={spacing.elementSpacing}>Freedom to grow. To compete. To build something bigger than your bandwidth. And this is only the beginning.</p>
          </div>

          <div className={cn(
            spacing.elementSpacing,
            "max-w-3xl mx-auto"
          )}>
            <h3 className={cn(typography.heading, spacing.elementSpacing)}>
              The Problem We Solve
            </h3>
            <p className={spacing.elementSpacing}>It's not about working harder. It's about removing what's slowing you down.</p>
            <p className={spacing.elementSpacing}>
              Service businesses are drowning in administrative tasks. Hours spent on scheduling, follow-ups, and client communication.
            </p>
            <p className={spacing.elementSpacing}>
              Your expertise should be focused on delivering value, not managing calendars and inbox zero.
            </p>
            <p className={spacing.elementSpacing}>
              Traditional solutions add more complexity—more tools, more training, more things to manage.
            </p>
            <p className={spacing.elementSpacing}>
              What if there was a better way?
            </p>
          </div>

          <div className={cn(
            spacing.elementSpacing,
            "max-w-3xl mx-auto"
          )}>
            <h3 className={cn(typography.heading, spacing.elementSpacing)}>
              Our Solution
            </h3>
            <p className={spacing.elementSpacing}>Get your time, team, and sanity back—without adding complexity.</p>
            <p className={spacing.elementSpacing}>
              Skyland AI integrates seamlessly with your existing workflow. No new systems to learn. No complex setups.
            </p>
            <p className={spacing.elementSpacing}>
              Our AI understands your business context, handles client interactions naturally, and manages the details automatically.
            </p>
            <p className={spacing.elementSpacing}>
              You stay in control while we handle the routine tasks that slow you down.
            </p>
          </div>

          <div className={cn(
            spacing.elementSpacing,
            "max-w-3xl mx-auto"
          )}>
            <h3 className={cn(typography.heading, spacing.elementSpacing)}>
              The Future of Service Business
            </h3>
            <p className={spacing.elementSpacing}>
              Join us in building a future where service businesses can scale without sacrificing quality or burning out their teams.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
} 