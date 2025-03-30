import { spacing } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/MainHeading";

export function PricingSection() {
  return (
    <SectionWrapper id="pricing">
      <SectionHeading
        title="Pricing"
        subtitle="Flexible pricing that scales with your needs."
      />

      <div className={spacing.container}>
        <div className={cn(
          spacing.maxWidth.xl,
          spacing.elementSpacing,
          "text-white/80 text-base leading-relaxed text-center"
        )}>
          <p className="text-white/90 text-xl font-light">
            AI That Scales with Your Business, Delivering Tangible Results
          </p>
          <p>
            Skyland AI adapts to your business needs, helping you grow faster and more efficiently.
            Book a call to discover how we can unlock real value for you.
          </p>
          <p>
            Skyland AI isn't just about automating tasks—it's about delivering measurable impact that helps your business grow.
            Whether it's increasing efficiency, accelerating growth, or unlocking new revenue streams,
            our solutions are designed to work for you.
          </p>
          <p>
            Try AI risk-free for two weeks and see how it can start driving results immediately.
            The question isn't the price—it's how much value we can create.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
} 