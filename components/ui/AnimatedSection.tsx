import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { spacing, transition, effects } from '@/lib/theme';
import { withThemeValidation } from '@/lib/hoc/withThemeValidation';
import type { ThemeSection } from "@/lib/utils/theme-validator";

interface AnimatedSectionProps extends Omit<HTMLMotionProps<"div">, "className"> {
  className?: string;
  children: React.ReactNode;
  useGlass?: boolean;
}

function AnimatedSectionBase({ 
  children, 
  className,
  useGlass = false,
  ...props 
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        ease: "easeOut"
      }}
      className={cn(
        spacing.section.base,
        transition.base,
        useGlass && effects.glass.light,
        className
      )}
      {...props}
    >
      <div className={cn(
        spacing.container,
        spacing.elementSpacing
      )}>
        {children}
      </div>
    </motion.div>
  );
}

export const AnimatedSection = withThemeValidation(AnimatedSectionBase, "AnimatedSection", ["sections", "typography", "spacing", "effects", "transition"] as ThemeSection[]); 