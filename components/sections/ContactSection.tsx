"use client";

import React from 'react';
import { BaseSection } from "@/components/ui/BaseSection";
import { ContentStack } from "@/components/ui/ContentStack";
import { ContactForm } from "@/components/forms/ContactForm";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/theme/tokens/colors";
import { effects } from "@/lib/theme/tokens/effects";
import { radius } from "@/lib/theme/tokens/radius";
import { spacing } from "@/lib/theme/tokens/spacing";
import { typography } from "@/lib/theme/tokens/typography";

export function ContactSection() {
  return (
    <BaseSection
      id="contact"
      className={cn(
        spacing.section.base,
        spacing.padding.section,
        effects.glass
      )}
      ariaLabel="Contact Us"
    >
      <ContentStack spacing="lg" maxWidth="2xl" className={cn(spacing.section.padding)}>
        <ContentStack spacing="md" className={cn(spacing.alignment.center)}>
          <h2 
            className={cn(
              typography.heading.h2,
              colors.text.primary
            )}
          >
            Let's Talk
          </h2>
          <p 
            className={cn(
              typography.text.lg,
              colors.text.secondary,
              spacing.stack.md
            )}
          >
            Send us a message and we'll get back to you within 24 hours
          </p>
        </ContentStack>

        <div className={cn(
          spacing.stack.lg,
          effects.glass,
          radius.lg,
          spacing.padding.card
        )}>
          <ContactForm />
        </div>
      </ContentStack>
    </BaseSection>
  );
} 
