import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { colors, typography, transition, shadow } from "@/lib/theme";

export function DanaButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "w-full py-3 px-6 rounded-lg",
        "bg-gradient-to-r from-blue-500 to-blue-600",
        "hover:from-blue-600 hover:to-blue-700",
        typography.buttonText,
        shadow.button,
        transition.base,
        "text-white"
      )}
    >
      Get Started
    </motion.button>
  );
} 