'use client'

import { Card } from "@/components/ui/Card";
import { spacing, typography } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function TestSection() {
  return (
    <section className={spacing.padding.sectionY}>
      <div className={spacing.maxWidth.container}>
        <h2 className={cn(typography.heading.h2, "text-center mb-8")}>Test Section</h2>
        <div className={cn(
          spacing.grid.cols[3],
          spacing.stack.lg
        )}>
          {/* Test Card 1 - Basic */}
          <Card
            title="Basic Card"
            description="This is a basic card with no icon or CTA"
          />

          {/* Test Card 2 - With Icon */}
          <Card
            title="Card with Icon"
            description="This card has an icon"
            icon={<span className={typography.icon}>🔮</span>}
          />

          {/* Test Card 3 - With CTA */}
          <Card
            title="Card with CTA"
            description="This card has a CTA button"
            cta={<button className={cn(
              "px-4 py-2 bg-blue-500 rounded",
              spacing.elementSpacing
            )}>Click me</button>}
          />

          {/* Test Card 4 - With Dana Button */}
          <Card
            title="Card with Dana"
            description="This card has the Dana button"
            showDanaButton={true}
            onDanaClick={() => console.log('Dana clicked')}
          />

          {/* Test Card 5 - Full Featured */}
          <Card
            title="Full Featured Card"
            description="This card has everything: icon, CTA, and Dana button"
            icon={<span className={typography.icon}>✨</span>}
            cta={<button className={cn(
              "px-4 py-2 bg-blue-500 rounded",
              spacing.elementSpacing
            )}>Learn More</button>}
            showDanaButton={true}
            onDanaClick={() => console.log('Dana clicked')}
          />
        </div>
      </div>
    </section>
  );
} 