import { Brain, Mail, Linkedin } from "lucide-react";
import { DanaButton } from "./ui/DanaButton";
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
    <footer className="w-full border-t border-white/10 bg-black/20 backdrop-blur-md mt-20 outline outline-red-500">
      <div className="py-10 px-6 md:px-8">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr] gap-10 md:gap-4 items-center">
            {/* Left: Logo + Kontakt */}
            <div className="text-center md:text-left">
              <a
                href="#"
                className="flex items-center gap-2 justify-center md:justify-start group mb-4"
                onClick={scrollToTop}
              >
                <Brain 
                  className={cn(
                    "h-5 w-5",
                    "text-blue-400",
                    "transition-colors duration-300",
                    "group-hover:text-blue-300",
                    "group-hover:drop-shadow-[0_0_6px_rgba(96,165,250,0.6)]"
                  )} 
                />
                <span className={cn(
                  "text-base",
                  "font-light",
                  "tracking-wider",
                  "text-white",
                  "transition-colors duration-300",
                  "group-hover:text-white/90",
                  "group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                )}>
                  SKYLAND AI
                </span>
              </a>

              <div className="flex items-center justify-center md:justify-start gap-6 mt-3">
                <a
                  href="mailto:info@skylandai.se"
                  className={cn(
                    "flex items-center gap-2",
                    "text-xs",
                    "text-white/70",
                    transition.base,
                    "hover:text-white",
                    "hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                  )}
                >
                  <Mail className="w-3.5 h-3.5" />
                  info@skylandai.se
                </a>
                <a
                  href="https://linkedin.com/company/skylandai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-2",
                    "text-xs",
                    "text-white/70",
                    transition.base,
                    "hover:text-white",
                    "hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                  )}
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right: Nav + Dana */}
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

              <div className="mt-2">
                <DanaButton />
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