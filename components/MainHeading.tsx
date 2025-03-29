import { typography, spacing } from "@/lib/theme";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <div className={cn(
      spacing.elementSpacing,
      "mb-12",
      align === "center" ? "text-center" : "text-left"
    )}>
      <h2 className={typography.heading}>{title}</h2>
      {subtitle && (
        <p className={typography.subheading}>{subtitle}</p>
      )}
    </div>
  );
} 