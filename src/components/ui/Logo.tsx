import { Brain } from "lucide-react";
import { colors, transition } from "@/lib/theme";

export function Logo() {
  const scrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#"
      onClick={scrollTop}
      className={`absolute top-8 left-6 sm:left-10 flex items-center gap-2 group z-50 ${transition.base}`}
    >
      <Brain className="h-6 w-6" style={{ color: colors.primary }} />
      <span className="text-base sm:text-lg font-light tracking-widest group-hover:text-white/90 transition">
        SKYLAND AI
      </span>
    </a>
  );
} 