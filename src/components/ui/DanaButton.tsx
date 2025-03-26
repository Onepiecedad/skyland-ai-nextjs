import { useEffect } from "react";
import { colors, radius, shadow, transition, typography } from "../../lib/theme";
import clsx from "clsx";

interface DanaButtonProps {
  autoExpand?: boolean;
}

export const DanaButton: React.FC<DanaButtonProps> = ({ autoExpand = true }) => {
  // Auto-expand widget effect
  useEffect(() => {
    const interval = setInterval(() => {
      const widget = document.querySelector("elevenlabs-convai") as HTMLElement;
      if (widget && autoExpand && widget.hasAttribute("collapsed")) {
        widget.removeAttribute("collapsed");
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [autoExpand]);

  // Start conversation handler
  const startConversation = () => {
    const widget = document.querySelector("elevenlabs-convai") as any;
    if (widget && typeof widget.open === "function") {
      widget.open();
    }
  };

  return (
    <button
      onClick={startConversation}
      className={clsx(
        "flex items-center gap-2",
        "px-4 py-2",
        radius.button,
        shadow.button,
        transition.base,
        typography.buttonText
      )}
      style={{
        backgroundColor: colors.primary,
        color: colors.white,
        '--hover-bg': colors.primaryHover,
      } as React.CSSProperties}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors.primaryHover)}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = colors.primary)}
    >
      <svg 
        className="w-5 h-5" 
        fill="currentColor" 
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
      <span>Talk to Dana</span>
    </button>
  );
}; 