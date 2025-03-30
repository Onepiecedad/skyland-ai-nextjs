import { Brain } from "lucide-react";
import { colors, effects, spacing, typography } from "@/lib/theme";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <button
      className={cn(
        spacing.flex.row,
        spacing.gap.sm,
        "group",
        className
      )}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      data-theme-debug="logo"
    >
      <Brain
        className={cn(
          spacing.icon.md,
          colors.text.logo.icon,
          effects.transition
        )}
      />
      <span 
        className={cn(
          typography.logo,
          colors.text.logo.text,
          effects.transition
        )}
      >
        SKYLAND AI
      </span>
    </button>
  );
}; 