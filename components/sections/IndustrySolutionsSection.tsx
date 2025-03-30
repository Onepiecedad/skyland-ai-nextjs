import { spacing, typography, glass } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { validate } from "@/lib/withValidation";

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
    <section className={spacing.padding.sectionY}>
      <div className={spacing.container}>
        <div className={cn(spacing.gridCols[2], spacing.elementSpacing)}>
          {industries.map((industry, index) => (
            <div
              key={index}
              className={cn(
                glass.layer1,
                spacing.padding.card,
                "rounded-lg"
              )}
            >
              <h3 className={cn(typography.heading, spacing.elementSpacing)}>{industry.title}</h3>
              <p className={typography.paragraph}>{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const IndustrySolutionsSection = validate(IndustrySolutionsSectionBase); 