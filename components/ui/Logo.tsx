import { cn } from "@/lib/utils";
import { Brain } from "lucide-react";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn(
      "flex items-center gap-2 group",
      className
    )}>
      <Brain className="h-8 w-8 text-blue-400 group-hover:text-blue-300" />
      <span className="text-white/90 group-hover:text-white font-medium">
        Skyland AI
      </span>
    </div>
  );
} 