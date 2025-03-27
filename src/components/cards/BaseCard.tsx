import { useState, useEffect, useRef, useCallback, useMemo, Suspense, lazy, Children, isValidElement } from "react";
import { cn } from "@/lib/utils";
import { glass, hover, transition, defaultIconClass } from "@/lib/theme";
import { motion, AnimatePresence, TargetAndTransition } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface BaseCardProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  expandable?: boolean;
  expandedContent?: React.ReactNode;
  cta?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

interface CardError {
  type: 'animation' | 'content' | 'interaction' | 'performance';
  message: string;
  timestamp: number;
}

// Lazy load complex content components
const LazyContent = lazy(() => import('./LazyContent'));

export const BaseCard: React.FC<BaseCardProps> = ({
  icon,
  title,
  description,
  expandable = false,
  expandedContent,
  cta,
  className = "",
  onClick,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [animationError, setAnimationError] = useState(false);
  const [errors, setErrors] = useState<CardError[]>([]);
  const [isRecovering, setIsRecovering] = useState(false);
  
  // Generate IDs early
  const cardId = `card-${title.toLowerCase().replace(/\s+/g, '-')}`;
  const contentId = `card-content-${cardId}`;
  const descriptionId = description ? `${cardId}-description` : undefined;
  const iconId = icon ? `${cardId}-icon` : undefined;
  
  // Refs for cleanup and performance tracking
  const isComponentMounted = useRef(true);
  const mediaQueryRef = useRef<MediaQueryList | null>(null);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationStartTime = useRef(0);
  const animationCleanupRef = useRef<(() => void) | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const renderTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const contentSizeRef = useRef<number>(0);
  const isContentVisibleRef = useRef<boolean>(false);
  const retryTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastErrorRef = useRef<number>(0);
  const errorCountRef = useRef<number>(0);
  const maxErrorCount = 3;
  
  // Performance optimization refs
  const performanceThreshold = useRef<number>(100);
  
  // Error handling and recovery
  const handleError = useCallback((type: CardError['type'], message: string) => {
    if (!isComponentMounted.current) return;

    const now = Date.now();
    const timeSinceLastError = now - lastErrorRef.current;
    lastErrorRef.current = now;

    // Update error count
    if (timeSinceLastError < 1000) {
      errorCountRef.current++;
    } else {
      errorCountRef.current = 1;
    }

    // Log error
    console.error(`Card error (${type}):`, message);
    
    // Add to errors array with timestamp
    setErrors(prev => {
      const newErrors = [...prev, { type, message, timestamp: now }];
      // Keep only last 5 errors
      return newErrors.slice(-5);
    });

    // Handle rapid errors
    if (errorCountRef.current >= maxErrorCount) {
      setIsRecovering(true);
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
      }
      retryTimeoutRef.current = setTimeout(() => {
        if (!isComponentMounted.current) return;
        setIsRecovering(false);
        errorCountRef.current = 0;
      }, 2000);
    }
  }, []);

  // Memoized handlers to prevent unnecessary re-renders
  const handleReducedMotion = useCallback((e: MediaQueryListEvent) => {
    if (isComponentMounted.current) {
      setIsReducedMotion(e.matches);
    }
  }, []);

  const checkMobile = useCallback(() => {
    if (!isComponentMounted.current) return;
    
    const isMobileDevice = window.innerWidth < 768;
    setIsMobile(isMobileDevice);
    performanceThreshold.current = isMobileDevice ? 50 : 100;
  }, []);

  // Debounced resize handler
  const handleResize = useCallback(() => {
    if (!isComponentMounted.current) return;

    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }

    resizeTimeoutRef.current = setTimeout(() => {
      if (!isComponentMounted.current) return;
      setIsMobile(window.innerWidth < 768);
    }, 250);
  }, []);

  // Setup and cleanup
  useEffect(() => {
    isComponentMounted.current = true;

    // Setup media query for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQueryRef.current = mediaQuery;
    setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleReducedMotion);

    // Setup resize listener
    checkMobile();
    window.addEventListener('resize', handleResize);

    // Setup intersection observer
    if (expandable && contentRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isContentVisibleRef.current = entry.isIntersecting;
            if (entry.isIntersecting) {
              if (renderTimeoutRef.current) {
                clearTimeout(renderTimeoutRef.current);
              }
              renderTimeoutRef.current = setTimeout(() => {
                if (isComponentMounted.current) {
                  setIsExpanded(true);
                }
              }, 100);
            }
          });
        },
        { threshold: 0.1 }
      );

      observerRef.current.observe(contentRef.current);
    }

    // Cleanup function
    return () => {
      isComponentMounted.current = false;
      
      // Cleanup media query listener
      if (mediaQueryRef.current) {
        mediaQueryRef.current.removeEventListener('change', handleReducedMotion);
      }
      
      // Cleanup resize listener and timeout
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      
      // Reset states
      setIsExpanded(false);
      setIsReducedMotion(false);
      setIsMobile(false);
      setAnimationError(false);
      
      // Reset refs
      animationStartTime.current = 0;
      performanceThreshold.current = 100;

      // Cleanup intersection observer
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      // Cleanup render timeout
      if (renderTimeoutRef.current) {
        clearTimeout(renderTimeoutRef.current);
      }

      // Cleanup retry timeout
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
      }

      // Cleanup animation
      if (animationCleanupRef.current) {
        animationCleanupRef.current();
      }

      // Reset all refs
      mediaQueryRef.current = null;
      resizeTimeoutRef.current = null;
      observerRef.current = null;
      renderTimeoutRef.current = null;
      retryTimeoutRef.current = null;
      animationCleanupRef.current = null;
      contentSizeRef.current = 0;
      isContentVisibleRef.current = false;
      lastErrorRef.current = 0;
      errorCountRef.current = 0;
    };
  }, [handleReducedMotion, handleResize, checkMobile]);

  // Monitor animation performance
  useEffect(() => {
    if (isExpanded && isComponentMounted.current) {
      try {
        animationStartTime.current = performance.now();
      } catch (error) {
        handleError('animation', 'Failed to start animation');
        console.error('Animation start error:', error);
      }
    }
  }, [isExpanded, handleError]);

  const handleAnimationComplete = useCallback(() => {
    if (!isComponentMounted.current) return;

    const duration = performance.now() - animationStartTime.current;
    const threshold = isMobile ? 150 : 300;

    if (duration > threshold) {
      handleError('performance', `Animation took ${duration.toFixed(2)}ms`);
      console.warn(`Performance warning: Animation took ${duration.toFixed(2)}ms`);
    }

    // Reset animation tracking
    animationStartTime.current = 0;
    if (animationCleanupRef.current) {
      animationCleanupRef.current();
      animationCleanupRef.current = null;
    }
  }, [isMobile, handleError]);

  // Improved click handler with cleanup
  const handleClick = useCallback((e: React.MouseEvent) => {
    try {
      if (!expandable || isRecovering) return;
      
      e.preventDefault();
      e.stopPropagation();
      
      if (onClick) {
        onClick();
      }
      
      setIsExpanded(prev => !prev);
    } catch (error) {
      handleError('interaction', 'Failed to handle click');
      console.error('Click handler error:', error);
    }
  }, [expandable, isRecovering, onClick, handleError]);

  // Improved touch handler with cleanup
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    try {
      if (!expandable || isRecovering) return;
      
      e.preventDefault();
      e.stopPropagation();
      
      if (onClick) {
        onClick();
      }
      
      setIsExpanded(prev => !prev);
    } catch (error) {
      handleError('interaction', 'Failed to handle touch');
      console.error('Touch handler error:', error);
    }
  }, [expandable, isRecovering, onClick, handleError]);

  // Improved key press handler with cleanup
  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    try {
      if (!expandable || isRecovering) return;
      
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        
        if (onClick) {
          onClick();
        }
        
        setIsExpanded(prev => !prev);
      } else if (e.key === 'Escape' && isExpanded) {
        e.preventDefault();
        e.stopPropagation();
        setIsExpanded(false);
      } else if (e.key === 'Tab' && isExpanded) {
        // Handle focus trapping in expanded content
        const focusableElements = document.querySelectorAll(
          `#${contentId} button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])`
        );
        
        if (focusableElements.length > 0) {
          if (e.shiftKey) {
            e.preventDefault();
            (focusableElements[focusableElements.length - 1] as HTMLElement).focus();
          } else if (e.target === focusableElements[focusableElements.length - 1]) {
            e.preventDefault();
            (focusableElements[0] as HTMLElement).focus();
          }
        }
      }
    } catch (error) {
      handleError('interaction', 'Failed to handle key press');
      console.error('Key press handler error:', error);
    }
  }, [expandable, isRecovering, onClick, handleError, isExpanded, contentId]);

  // Focus management
  const handleFocus = useCallback(() => {
    if (!isExpanded) return;
    
    // Focus first focusable element in expanded content
    const focusableElements = document.querySelectorAll(
      `#${contentId} button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])`
    );
    
    if (focusableElements.length > 0) {
      (focusableElements[0] as HTMLElement).focus();
    }
  }, [isExpanded, contentId]);

  // Monitor expansion state for focus management
  useEffect(() => {
    if (isExpanded) {
      // Small delay to ensure content is rendered
      const timeoutId = setTimeout(handleFocus, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [isExpanded, handleFocus]);

  // Memoize static content
  const staticContent = useMemo(() => (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 flex-1">
          {icon && (
            <div 
              className={defaultIconClass} 
              aria-hidden="true"
              id={iconId}
            >
              {icon}
            </div>
          )}
          <div className="flex-1">
            <h3 
              className="text-white font-semibold text-lg"
              id={`${cardId}-title`}
            >
              {title}
            </h3>
            {description && (
              <p 
                className="text-sm text-white/70 mt-1"
                id={descriptionId}
              >
                {description}
              </p>
            )}
          </div>
        </div>
        {expandable && (
          <ChevronDown 
            className={cn(
              "w-5 h-5 text-white/60 transition-transform duration-200 flex-shrink-0",
              isExpanded && "transform rotate-180"
            )}
            aria-hidden="true"
            role="img"
            aria-label={isExpanded ? "Collapse content" : "Expand content"}
          />
        )}
      </div>
    </>
  ), [icon, title, description, expandable, isExpanded, iconId, descriptionId]);

  // Optimize content rendering
  const renderContent = useCallback(() => {
    if (!expandedContent) return null;

    // Estimate content size based on React node
    const estimateContentSize = (node: React.ReactNode): number => {
      if (typeof node === 'string') return node.length;
      if (typeof node === 'number') return String(node).length;
      if (Array.isArray(node)) {
        return node.reduce((sum, child) => {
          const childSize = estimateContentSize(child);
          return typeof childSize === 'number' ? sum + childSize : sum;
        }, 0);
      }
      if (isValidElement(node)) {
        const props = node.props;
        const childrenSize = Children.toArray(props.children).reduce((sum, child) => {
          const childSize = estimateContentSize(child);
          return typeof childSize === 'number' ? sum + childSize : sum;
        }, 0);
        return childrenSize + Object.keys(props).length * 2; // Rough estimate of props size
      }
      return 0;
    };

    const contentSize = estimateContentSize(expandedContent);
    contentSizeRef.current = contentSize;

    // Use lazy loading for large content
    if (contentSize > 10000) { // 10KB threshold
      return (
        <Suspense fallback={
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-white/10 rounded w-3/4" />
            <div className="h-4 bg-white/10 rounded w-1/2" />
            <div className="h-4 bg-white/10 rounded w-5/6" />
          </div>
        }>
          <LazyContent content={expandedContent} />
        </Suspense>
      );
    }

    return expandedContent;
  }, [expandedContent]);

  // Optimize animation performance
  const getAnimationProps = useCallback((): {
    initial: TargetAndTransition;
    animate: TargetAndTransition;
    exit: TargetAndTransition;
  } => {
    try {
      if (isReducedMotion || animationError || isRecovering) {
        return {
          initial: { height: "auto", opacity: 1 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: "auto", opacity: 1 }
        };
      }

      // Use simpler animations for large content
      if (contentSizeRef.current > 50000) {
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 }
        };
      }

      return {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 }
      };
    } catch (error) {
      handleError('animation', 'Failed to get animation props');
      console.error('Animation props error:', error);
      return {
        initial: { height: "auto", opacity: 1 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: "auto", opacity: 1 }
      };
    }
  }, [isReducedMotion, animationError, isRecovering, handleError]);

  return (
    <div
      id={cardId}
      ref={contentRef}
      className={cn(
        "p-6 rounded-xl",
        glass.card,
        transition.base,
        hover.card,
        expandable && "cursor-pointer",
        "z-10",
        "relative",
        "overflow-hidden",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
        isRecovering && "opacity-50",
        className
      )}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onKeyPress={handleKeyPress}
      role={expandable ? "button" : undefined}
      tabIndex={expandable ? 0 : undefined}
      aria-expanded={expandable ? isExpanded : undefined}
      aria-controls={expandable ? contentId : undefined}
      aria-describedby={descriptionId}
      aria-label={expandable ? `${title} - Click to ${isExpanded ? 'collapse' : 'expand'}` : undefined}
      aria-live={expandable ? "polite" : undefined}
      data-state={expandable ? (isExpanded ? "expanded" : "collapsed") : undefined}
      data-recovering={isRecovering}
    >
      {children || (
        <>
          {staticContent}

          <AnimatePresence>
            {isExpanded && expandedContent && (
              <motion.div
                id={contentId}
                className="mt-6 text-sm text-white/80 space-y-4 overflow-hidden"
                {...getAnimationProps()}
                transition={{ 
                  duration: isMobile ? 0.2 : 0.3,
                  ease: "easeInOut" 
                }}
                onClick={(e) => e.stopPropagation()}
                onAnimationComplete={handleAnimationComplete}
                role="region"
                aria-labelledby={`${cardId}-title`}
                aria-describedby={descriptionId}
                tabIndex={-1}
                onFocus={handleFocus}
              >
                {renderContent()}
              </motion.div>
            )}
          </AnimatePresence>

          {cta && (
            <div 
              className="mt-6"
              role="region"
              aria-label="Call to action"
            >
              {cta}
            </div>
          )}
        </>
      )}
    </div>
  );
}; 