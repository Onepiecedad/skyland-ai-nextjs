import { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
        "w-full",
        "py-20",
        "px-6 md:px-8",
        className
      )}
    >
      <div className="max-w-[1120px] mx-auto">
        {children}
      </div>
    </section>
  );
} 