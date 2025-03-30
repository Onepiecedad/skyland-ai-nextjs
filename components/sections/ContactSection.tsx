"use client";

import { DanaButton } from "@/components/ui/DanaButton";
import { spacing, typography } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function ContactSection() {
  return (
    <section id="contact" className={spacing.padding.sectionY}>
      <div className={spacing.maxWidth.container}>
        <h2 className={cn(typography.heading.h2, "text-center")}>
          Get in Touch
        </h2>
        <p className={cn(typography.text.lg, "text-center")}>
          Ready to transform your business? Let's talk about how we can help.
        </p>
        <div className={spacing.flex.center}>
          <DanaButton>Start the Conversation</DanaButton>
        </div>
      </div>
    </section>
  );
} 