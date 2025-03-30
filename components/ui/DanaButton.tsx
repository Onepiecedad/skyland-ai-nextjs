import { cn } from "@/lib/utils";
import { button } from "@/lib/theme";
import { showDanaWidget } from "@/components/DanaWidget";
import { withThemeValidation } from '@/lib/theme-validation';

interface DanaButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

function DanaButtonBase({ 
  onClick = showDanaWidget,
  className,
  children = "Chat with Dana"
}: DanaButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        button.base.layout,
        button.base.radius,
        button.base.typography,
        button.base.transition,
        button.base.shadow,
        button.size.md,
        button.variant.primary,
        button.base.focus,
        button.base.disabled,
        className
      )}
    >
      {children}
    </button>
  );
}

export const DanaButton = withThemeValidation(DanaButtonBase); 