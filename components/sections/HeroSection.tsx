
"use client";

import React, { useEffect, useState } from "react";
import { BaseSection } from "@/components/ui/BaseSection";
import { Card } from "@/components/ui/Card";
import { Logo } from "@/components/common/Logo";
import { ContentStack } from "@/components/ui/ContentStack";
import { cn } from "@/lib/utils";
import { layout } from "@/lib/theme/tokens/layout";
import { typography } from "@/lib/theme/tokens/typography";
import { colors } from "@/lib/theme/tokens/colors";

export function HeroSection() {
  const [isWidgetReady, setIsWidgetReady] = useState(false);

  useEffect(() => {
    console.log("🔄 Loading ElevenLabs widget script");
    
    if (!window.customElements.get("elevenlabs-convai")) {
      const script = document.createElement("script");
      script.src = "https://elevenlabs.io/convai-widget/index.js";
      script.async = true;
      script.crossOrigin = "anonymous";

      script.onload = () => {
        console.log("✅ ElevenLabs widget script loaded");
        setIsWidgetReady(true);
      };

      script.onerror = () => {
        console.error("❌ Failed to load ElevenLabs widget script");
      };

      document.head.appendChild(script);

      return () => {
        script.remove();
      };
    } else {
      setIsWidgetReady(true);
    }
  }, []);

  const expandedContent = (
    <ContentStack spacing="lg">
      <h4 className={cn(typography.heading.h4, colors.text.primary, "font-normal")}>
        Meet Dana—Our Always-On AI Strategy Assistant
      </h4>
      <div className="flex flex-col gap-6 text-left items-center max-w-xl">
        <p className="text-gray-300 text-sm">
          Dana isn't just a chatbot—she's an AI assistant trained to answer your questions,
          handle leads, and help you automate key parts of your business.
        </p>
        {isWidgetReady ? (
          <div className="w-full max-w-sm">
            <elevenlabs-convai
              agent-id="4mN4rizdi79gwLhFxlOu"
              style={{
                display: "block",
                width: "100%",
                background: "transparent", 
                borderRadius: "12px",
              }}
            />
          </div>
        ) : (
          <div className="text-sm text-gray-400">Loading Dana...</div>
        )}
      </div>
    </ContentStack>
  );

  return (
    <BaseSection
      id="hero"
      className={cn(
        layout.section.base,
        "min-h-screen py-16 md:py-20 lg:py-24 flex items-center justify-center"
      )}
      ariaLabel="Hero Section"
    >
      <div className="absolute left-6 top-6 z-20 md:left-8 md:top-8 lg:left-10 lg:top-10">
        <Logo className="text-lg sm:text-xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-10 grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6">
          <h1
            className={cn(
              typography.heading.h1,
              colors.text.primary,
              "font-normal leading-tight"
            )}
          >
            What if growing your business didn't mean more work?
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Let AI Handle 80% of Your Work—Effortlessly. Meet Your 24/7 Digital Employee—For Free
          </p>
        </div>

        <Card
          title="Meet Dana—Our AI Assistant"
          description="She's here to show you how automation can save time, reduce workload, and help your business grow. What's the one task you'd automate today if you could?"
          expandedContent={expandedContent}
          ariaLabel="Meet Dana AI Assistant"
        />
      </div>
    </BaseSection>
  );
}
