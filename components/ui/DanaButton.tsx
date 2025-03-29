import { cn } from "@/lib/utils";
import { typography, colors, transition, radius, hover } from "@/lib/theme";
import { showDanaWidget } from "@/components/DanaWidget";

interface DanaButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  autoExpand?: boolean;
}

export function DanaButton({ 
  onClick = showDanaWidget,
  className,
  children = "Chat with Dana",
  autoExpand
}: DanaButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center",
        radius.button,
        typography.buttonText,
        transition.base,
        hover.scale,
        `bg-[${colors.primary}]`,
        `hover:bg-[${colors.primaryHover}]`,
        "text-white",
        "px-4 py-2",
        className
      )}
    >
      {children}
    </button>
  );
} 