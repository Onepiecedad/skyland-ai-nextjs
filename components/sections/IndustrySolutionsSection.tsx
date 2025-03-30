import { spacing, typography, effects } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";
import type { ThemeSection } from "@/lib/utils/theme-validator";

interface Industry {
  title: string;
  description: string;
}

const industries: Industry[] = [
  {
    title: "Healthcare",
    description: "Streamline patient care, automate administrative tasks, and enhance medical record management with AI-powered solutions.",
  },
  {
    title: "Finance",
    description: "Automate risk assessment, fraud detection, and customer service while ensuring compliance and security.",
  },
  {
    title: "Real Estate",
    description: "Optimize property management, automate lead follow-ups, and streamline document processing with intelligent automation.",
  },
  {
    title: "Legal",
    description: "Enhance document review, automate contract analysis, and streamline case management with AI assistance.",
  },
];

function IndustrySolutionsSectionBase() {
  return (
    <section className={spacing.section.base}>
      <div className={spacing.container}>
        <div className={cn(spacing.stack.lg, spacing.elementSpacing)}>
          {industries.map((industry, index) => (
            <div
              key={index}
              className={cn(
                effects.glass.light,
                spacing.padding.card,
                "rounded-lg"
              )}
            >
              <h3 className={cn(typography.heading.h3, spacing.elementSpacing)}>{industry.title}</h3>
              <p className={typography.paragraph}>{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const IndustrySolutionsSection = withThemeValidation(IndustrySolutionsSectionBase, "IndustrySolutionsSection", ["sections", "typography", "spacing", "effects"] as ThemeSection[]); 