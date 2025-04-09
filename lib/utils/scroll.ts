interface ScrollOptions {
  behavior?: ScrollBehavior;
  offset?: number;
  onComplete?: () => void;
}

/**
 * Smoothly scrolls to a target element with configurable options
 * @param target - Element ID or HTMLElement to scroll to
 * @param options - Scroll configuration options
 * @returns Promise that resolves when scroll is complete
 */
export const scrollTo = async (
  target: string | HTMLElement,
  options: ScrollOptions = {}
): Promise<void> => {
  const { behavior = 'smooth', offset = 0, onComplete } = options;

  const element = typeof target === 'string' ? document.getElementById(target) : target;

  if (!element) {
    console.warn(`Scroll target not found: ${target}`);
    return;
  }

  const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;

  try {
    await window.scrollTo({
      top: targetPosition,
      behavior,
    });

    // Wait for scroll to complete
    return new Promise(resolve => {
      const checkScrollEnd = setInterval(() => {
        if (window.scrollY === targetPosition) {
          clearInterval(checkScrollEnd);
          onComplete?.();
          resolve();
        }
      }, 100);

      // Timeout after 2 seconds
      setTimeout(() => {
        clearInterval(checkScrollEnd);
        onComplete?.();
        resolve();
      }, 2000);
    });
  } catch (error) {
    // Fallback for browsers that don't support smooth scrolling
    window.scrollTo(0, targetPosition);
    onComplete?.();
  }
};

/**
 * Returns a function that scrolls to a section when called
 * @param sectionId - ID of the target section
 * @param options - Scroll configuration options
 */
export const useScrollToSection = (sectionId: string, options?: ScrollOptions) => {
  return () => scrollTo(sectionId, options);
};
