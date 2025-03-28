import { AuroraBackground } from "./components/ui/AuroraBackground";
import { Brain } from "lucide-react";
import { typography, spacing, transition, colors } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function App() {
  console.log("App rendering");
  return (
    <div className="relative min-h-screen bg-black">
      <AuroraBackground className="!fixed" />
      
      {/* Logo top-left */}
      <a
        href="#"
        className="absolute top-8 left-6 sm:left-10 flex items-center gap-2 group z-50"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Brain className={cn(
          "h-6 w-6",
          "text-blue-400 group-hover:text-blue-300",
          transition.base
        )} />
        <span className={cn(
          "text-base sm:text-lg tracking-widest",
          "text-white group-hover:text-white/90",
          transition.base
        )}>
          SKYLAND AI
        </span>
      </a>

      <section className={cn(
        "relative min-h-screen flex items-center",
        spacing.sectionY
      )}>
        <div className={spacing.container}>
          <div className="grid grid-cols-1 gap-8 md:gap-16 items-center">
            {/* Headlines */}
            <div className={spacing.elementSpacing}>
              <h1 className={typography.heading}>
                What If Growing Your Business Didn't Mean More Work?
              </h1>

              <div className={spacing.elementSpacing}>
                <h2 className={cn(
                  typography.subheading,
                  "lg:text-2xl"
                )}>
                  What If AI Could Handle 80% of Your Work—Effortlessly?
                </h2>
                <h3 className={cn(
                  typography.paragraph,
                  "lg:text-xl"
                )}>
                  What If You Had an Employee That Worked 24/7—For Free?
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}