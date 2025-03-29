import { cn } from "@/lib/utils";
import { typography, colors, spacing, transition } from "@/lib/theme";
import { Brain } from "lucide-react";

interface LogoProps {
  className?: string;
  textClassName?: string;
}

export function Logo({ className, textClassName }: LogoProps) {
  const scrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#"
      onClick={scrollTop}
      className={cn("absolute top-8 left-6 sm:left-10 flex items-center gap-2 group z-50", className)}
    >
      <div className={cn(
        "flex items-center gap-2",
        spacing.elementSpacing,
        transition.base
      )}>
        <Brain className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 group-hover:drop-shadow-[0_0_6px_rgba(96,165,250,0.6)]" />
        <span className={cn(
          typography.heading,
          "text-xl tracking-tight",
          `text-[${colors.textPrimary}]`,
          transition.base,
          textClassName
        )}>
          Skyland AI
        </span>
      </div>
    </a>
  );
} 