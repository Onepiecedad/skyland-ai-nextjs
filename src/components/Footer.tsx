import { Brain, Mail, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { colors, typography, transition } from "@/lib/theme";

const navigation = [
  { name: "AI Solutions", href: "#ai-solutions" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 bg-black/30 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-between items-center gap-8 md:gap-16">
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex flex-wrap gap-5 text-xs tracking-normal text-white/70 justify-center md:justify-end">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={cn(
                      transition.base,
                      "hover:text-white",
                      "hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <p className="text-[10px] text-white/40 mt-2">
                © {new Date().getFullYear()} Skyland AI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 