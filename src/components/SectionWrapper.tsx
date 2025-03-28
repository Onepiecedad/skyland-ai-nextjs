import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { spacing } from "@/lib/theme";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "w-full relative z-10",
        spacing.sectionY,
        className
      )}
    >
      <div className={spacing.container}>
        {children}
      </div>
    </section>
  );
} 