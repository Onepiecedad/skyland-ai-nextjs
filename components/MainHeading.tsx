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
      align === "center" ? "text-center" : "text-left"
    )}>
      <h2 className={typography.heading.h2}>{title}</h2>
      {subtitle && (
        <p className={typography.text.lg}>{subtitle}</p>
      )}
    </div>
  );
} 