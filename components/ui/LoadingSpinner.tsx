import { spacing } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function LoadingSpinner() {
  return (
    <div className={cn(
      "animate-spin",
      spacing.elementSpacing
    )}>
      <div className={cn(
        "w-8 h-8 border-4 border-blue-500 rounded-full",
        "border-t-transparent",
        "opacity-25"
      )} />
      <div className={cn(
        "w-8 h-8 border-4 border-blue-500 rounded-full",
        "border-t-transparent",
        "opacity-75"
      )} />
    </div>
  );
} 