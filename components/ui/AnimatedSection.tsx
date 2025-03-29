import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { spacing, transition, glass } from '@/lib/theme';

interface AnimatedSectionProps extends Omit<HTMLMotionProps<"div">, "className"> {
  className?: string;
  children: React.ReactNode;
  useGlass?: boolean;
}

export function AnimatedSection({ 
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
        spacing.sectionY,
        transition.base,
        useGlass && glass.layer1,
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