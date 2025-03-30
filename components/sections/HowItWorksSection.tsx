import { spacing, typography } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function HowItWorksSection() {
  return (
    <section className={spacing.padding.sectionY}>
      <div className={spacing.maxWidth.container}>
        <h2 className={cn(typography.heading.h2, "text-center mb-8")}>How It Works</h2>
        <ul className={cn(
          spacing.grid.cols[3],
          spacing.stack.lg
        )}>
          {/* Steps will go here */}
        </ul>
      </div>
    </section>
  );
} 