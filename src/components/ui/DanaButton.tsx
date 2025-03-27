import { useEffect } from "react";
import { Mic } from "lucide-react";
import { cn } from "../../lib/utils";

interface DanaButtonProps {
  autoExpand?: boolean;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const DanaButton: React.FC<DanaButtonProps> = ({ 
  autoExpand = true,
  variant = 'default',
  size = 'md',
  className
}) => {
  // Load Dana widget script
  useEffect(() => {
    const scriptId = "elevenlabs-convai-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://elevenlabs.io/convai-widget/index.js";
      script.async = true;
      document.body.appendChild(script);

      // Create widget element if it doesn't exist
      const widgetId = "elevenlabs-convai-widget";
      if (!document.getElementById(widgetId)) {
        const widget = document.createElement("elevenlabs-convai");
        widget.id = widgetId;
        widget.setAttribute("agent-id", "4mN4rizdi79gwLhFxlOu");
        widget.setAttribute("collapsed", "");
        document.body.appendChild(widget);
      }
    }

    // Cleanup function
    return () => {
      const widget = document.getElementById("elevenlabs-convai-widget");
      if (widget && !document.querySelector("[data-keep-widget]")) {
        widget.remove();
        const script = document.getElementById(scriptId);
        if (script) script.remove();
      }
    };
  }, []);

  // Auto-expand widget effect (if enabled)
  useEffect(() => {
    if (!autoExpand) return;
    
    const interval = setInterval(() => {
      const widget = document.querySelector("elevenlabs-convai") as HTMLElement;
      if (widget && widget.hasAttribute("collapsed")) {
        widget.removeAttribute("collapsed");
        clearInterval(interval);
      }
    }, 500);
    
    return () => clearInterval(interval);
  }, [autoExpand]);

  // Start conversation handler
  const startConversation = () => {
    // Try to find the widget
    const widget = document.querySelector("elevenlabs-convai") as any;
    
    if (widget) {
      // Remove collapsed attribute
      if (widget.hasAttribute("collapsed")) {
        widget.removeAttribute("collapsed");
      }
      
      // Try to open the conversation using the widget's API
      if (typeof widget.open === "function") {
        widget.open();
      }
      
      // Ensure widget is visible
      widget.style.display = "block";
      widget.style.opacity = "1";
      
      // Optional: Scroll widget into view if needed
      widget.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      console.warn("Dana widget not found. Please try again in a moment.");
    }
  };

  return (
    <button
      onClick={startConversation}
      className={cn(
        // Base styles
        "relative group flex items-center gap-2 font-medium transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:ring-offset-2 focus:ring-offset-black",
        
        // Variants
        variant === 'default' && [
          "bg-blue-500/10 hover:bg-blue-500/20",
          "border border-blue-500/20 hover:border-blue-500/30",
          "text-blue-400 hover:text-blue-300",
          "shadow-[0_0_12px_-3px_rgba(96,165,250,0.3)] hover:shadow-[0_0_16px_-3px_rgba(96,165,250,0.4)]",
        ],
        variant === 'outline' && [
          "bg-transparent hover:bg-blue-500/10",
          "border border-blue-500/30 hover:border-blue-500/40",
          "text-blue-400 hover:text-blue-300",
        ],
        variant === 'ghost' && [
          "bg-transparent hover:bg-blue-500/10",
          "text-blue-400 hover:text-blue-300",
        ],

        // Sizes
        size === 'sm' && "text-sm px-3 py-1.5 rounded-lg",
        size === 'md' && "text-base px-4 py-2 rounded-xl",
        size === 'lg' && "text-lg px-5 py-2.5 rounded-xl",

        // Backdrop blur
        "backdrop-blur-sm",
        
        // Custom classes
        className
      )}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      
      {/* Icon */}
      <Mic className={cn(
        "transition-transform duration-500 transform-gpu",
        size === 'sm' && "w-4 h-4",
        size === 'md' && "w-5 h-5",
        size === 'lg' && "w-6 h-6",
        "group-hover:scale-110 group-hover:animate-pulse"
      )} />
      
      {/* Text */}
      <span className="relative">Talk to Dana</span>
    </button>
  );
}; 