// Colors used throughout the site
export const colors = {
  // Text colors with depth
  textPrimary: "rgba(255,255,255,0.85)",    // Standard text på mörk bakgrund
  textSecondary: "rgba(255,255,255,0.7)",    // Svagare text (beskrivningar)
  textTertiary: "rgba(255,255,255,0.5)",     // Extrainfo, hinttext
  
  // Glass effects
  borderGlass: "rgba(255,255,255,0.1)",      // Kantlinjer i glas UI
  backgroundGlass: "rgba(255,255,255,0.05)",  // Bakgrunder till kort
  
  // Base colors
  backgroundDark: "#0a0a0a",                  // Standard bakgrundsfärg (dark mode)
  primary: "#60a5fa",                         // Huvudfärg (t.ex. knappar)
  primaryHover: "#3b82f6",                    // Hover-färg för primary
  
  // Pure colors
  white: "#ffffff",
  black: "#000000",
  
  // Depth colors for gradients and effects
  blue: {
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb"
  },
  
  // Aurora colors
  aurora: {
    blue: "rgba(59,130,246,0.5)",
    purple: "rgba(168,85,247,0.5)",
    green: "rgba(16,185,129,0.5)"
  }
};

// Default styling for icons
export const defaultIconClass = "text-blue-400 flex-shrink-0";

// Rounded corners for different elements
export const radius = {
  card: "rounded-xl",
  modal: "rounded-2xl",
  button: "rounded-full",
  small: "rounded-md",
};

// Shadows for depth
export const shadow = {
  card: "shadow-md hover:shadow-xl transition-shadow duration-300",
  button: "shadow-md hover:shadow-lg transition-shadow duration-200",
  text: "drop-shadow-sm"
};

// Spacing and container sizes
export const spacing = {
  sectionY: "py-20 sm:py-28",
  container: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  cardGap: "gap-6 sm:grid-cols-2 lg:grid-cols-3",
  elementSpacing: "space-y-4",
};

// Animations and transitions
export const transition = {
  base: "transition duration-200 ease-in-out",
  fast: "transition duration-100 ease-in",
};

// Typography styles
export const typography = {
  heading: "text-white/90 text-3xl sm:text-4xl md:text-5xl font-extralight tracking-[-0.03em] leading-tight",
  subheading: "text-white/70 text-lg font-light max-w-2xl mx-auto mt-4",
  paragraph: "text-white/70 text-base font-light",
  label: "text-sm text-white/70",
  buttonText: "text-sm font-medium text-white"
};

// Glassmorphism effects
export const glass = {
  card: [
    'bg-white/[0.07]',
    'backdrop-blur-xl',
    'border border-white/[0.15]'
  ].join(" "),
  
  modal: [
    'bg-black/80',
    'backdrop-blur-2xl',
    'border border-white/[0.15]'
  ].join(" "),
  
  overlay: [
    'bg-black/60',
    'backdrop-blur-sm'
  ].join(" ")
};

// Hover effects
export const hover = {
  card: [
    'hover:bg-white/[0.09]',
    'hover:border-white/20',
    'hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]',
    'transition-all duration-300'
  ].join(" "),
  
  button: [
    'hover:bg-white/[0.12]',
    'hover:border-white/25',
    'hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]',
    'transition-all duration-200'
  ].join(" ")
};

// Initialize dark mode
export function initializeDarkMode() {
  document.documentElement.classList.add('dark');
  document.body.style.backgroundColor = colors.backgroundDark;
  document.body.style.color = colors.textPrimary;
}

export const font = {
  base: "font-sans",
  light: "font-extralight",
  medium: "font-medium",
}; 