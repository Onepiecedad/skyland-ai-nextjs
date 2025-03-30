import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/MainHeading";
import { spacing, typography, glass } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { validate } from "@/lib/withValidation";

interface Solution {
  title: string;
  description: string;
}

const solutions: Solution[] = [
  {
    title: "Intelligent Process Automation",
    description: "Automate repetitive tasks and workflows with AI-powered solutions that learn and adapt to your business processes.",
  },
  {
    title: "Smart Document Processing",
    description: "Extract, analyze, and process information from documents automatically with advanced OCR and NLP technology.",
  },
  {
    title: "AI-Powered Analytics",
    description: "Get actionable insights from your data with machine learning algorithms that identify patterns and trends.",
  },
];

function AiSolutionsSectionBase() {
  return (
    <SectionWrapper id="ai-solutions">
      <SectionHeading
        title="AI Solutions"
        subtitle="Transform your business with our intelligent automation solutions"
      />
      <div className={spacing.container}>
        <div className={cn(spacing.gridCols[3], spacing.elementSpacing)}>
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={cn(
                glass.layer1,
                spacing.padding.card,
                "rounded-lg"
              )}
            >
              <h3 className={cn(typography.heading, spacing.elementSpacing)}>{solution.title}</h3>
              <p className={typography.paragraph}>{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export const AiSolutionsSection = validate(AiSolutionsSectionBase); 