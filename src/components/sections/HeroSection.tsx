import { Brain } from "lucide-react";
import { useRef } from "react";
import { DanaButton } from "@/components/ui/DanaButton";
import { cn } from "@/lib/utils";
import { glass, hover, transition } from "@/lib/theme";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className={cn(
        "relative min-h-screen flex items-center",
        "pt-20 sm:pt-24 lg:pt-28",
        "pb-10 md:pb-14",
        "text-white"
      )}
    >
      {/* Logo top-left */}
      <a
        href="#"
        className={cn(
          "absolute top-8 left-6 sm:left-10",
          "flex items-center gap-2",
          "group z-50"
        )}
        onClick={scrollToTop}
      >
        <Brain 
          className={cn(
            "h-6 w-6",
            "text-blue-400",
            "transition-colors duration-300",
            "group-hover:text-blue-300",
            "group-hover:drop-shadow-[0_0_6px_rgba(96,165,250,0.6)]"
          )} 
        />
        <span className={cn(
          "text-base sm:text-lg",
          "font-light tracking-widest",
          "transition-colors duration-300",
          "group-hover:text-white/90",
          "group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
        )}>
          SKYLAND AI
        </span>
      </a>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,400px] gap-8 md:gap-16 items-center">
          {/* Headlines */}
          <div className="space-y-6 md:space-y-8">
            <h1 className={cn(
              "text-[38px] sm:text-[46px] lg:text-[56px]",
              "font-extralight tracking-[-0.03em]",
              "leading-[1.1]",
              "text-white/95"
            )}>
              What If Growing Your Business Didn't Mean More Work?
            </h1>

            <div className="space-y-4 md:space-y-6">
              <h2 className={cn(
                "text-lg sm:text-xl lg:text-2xl",
                "font-extralight tracking-[-0.02em]",
                "text-white/85",
                "transition-colors duration-300",
                "hover:text-white/95"
              )}>
                What If AI Could Handle 80% of Your Work—Effortlessly?
              </h2>
              <h3 className={cn(
                "text-base sm:text-lg lg:text-xl",
                "font-extralight tracking-[-0.015em]",
                "text-white/75",
                "transition-colors duration-300",
                "hover:text-white/90"
              )}>
                What If You Had an Employee That Worked 24/7—For Free?
              </h3>
            </div>
          </div>

          {/* Dana button */}
          <div className={cn(
            "w-full max-w-sm md:max-w-md",
            glass.card,
            transition.base,
            hover.card,
            "p-5"
          )}>
            <div className="pb-3">
              <h4 className={cn(
                "text-white/90",
                "text-lg font-medium",
                "leading-snug",
                "transition-colors duration-300",
                "hover:text-white"
              )}>
                Want to save 10+ hours a week—without changing how you work?
              </h4>
              <p className={cn(
                "text-white/70",
                "text-sm mt-2",
                "transition-colors duration-300",
                "hover:text-white/80"
              )}>
                What's the one task you'd automate today if you could?
              </p>
            </div>
            <div className="pt-3">
              <DanaButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection; 