import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled 200px or 25% of viewport height, whichever is smaller
      const threshold = Math.min(200, window.innerHeight * 0.25);
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    // Initial check
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 p-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:bg-white/10 transition-colors z-[100] group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 text-white/60 group-hover:text-white/90 transition-colors" />
        </motion.button>
      )}
    </AnimatePresence>
  );
} 