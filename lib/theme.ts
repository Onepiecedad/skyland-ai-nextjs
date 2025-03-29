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
  transparent: "transparent",
  
  // Depth colors for gradients and effects
  blue: {
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb"
  },

  indigo: {
    300: "#a5b4fc"
  },

  violet: {
    200: "#ddd6fe"
  }
};

// Aurora effect configuration
export const aurora = {
  gradients: {
    white: "repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)",
    dark: "repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)",
    colors: "repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)"
  },
  backgroundSize: "300%,_200%",
  backgroundPosition: "50%_50%,50%_50%",
  blur: "blur-[10px]",
  after: {
    backgroundSize: "200%,_100%",
    backgroundAttachment: "fixed",
    mixBlendMode: "difference" as const
  }
};

// Z-index layers
export const zIndex = {
  base: "z-0",
  above: "z-10",
  modal: "z-50",
  top: "z-100",
};

// Sizes and dimensions
export const sizes = {
  maxWidth: {
    card: "max-w-sm md:max-w-md",
    container: "max-w-6xl",
  },
};

// Spacing and layout
export const spacing = {
  sectionY: "py-20 sm:py-28",
  container: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  cardGap: "gap-6 sm:grid-cols-2 lg:grid-cols-3",
  elementSpacing: "space-y-4",
  icon: {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8"
  },
  positions: {
    header: "top-8 left-6 sm:left-10",
  },
  padding: {
    card: "p-5",
    section: "pt-3",
  },
};

export const layout = {
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex items-center justify-between",
  gridCols: {
    1: "grid grid-cols-1",
    2: "grid grid-cols-1 md:grid-cols-2",
    3: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  }
};

// Typography styles
export const typography = {
  heading: "text-white/90 text-3xl sm:text-4xl md:text-5xl font-extralight tracking-[-0.03em] leading-tight",
  subheading: "text-white/70 text-lg font-light max-w-2xl mx-auto mt-4",
  paragraph: "text-white/70 text-base font-light",
  label: "text-sm text-white/70",
  buttonText: "text-sm font-medium text-white",
};

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
};

// Animations and transitions
export const transition = {
  base: "transition duration-200 ease-in-out",
  fast: "transition duration-100 ease-in",
};

// Font weights
export const font = {
  base: "font-sans",
  light: "font-extralight",
  medium: "font-medium",
};

// Glassmorphism effects
interface GlassEffects {
  card: string;
  layer1: string;
  layer2: string;
  overlay: string;
  modal: string;
}

export const glass: GlassEffects = {
  card: "bg-black/20 backdrop-blur-lg border border-white/[0.08] rounded-xl",
  layer1: "bg-black/20 backdrop-blur-sm",
  layer2: "bg-black/40 backdrop-blur-md",
  overlay: "bg-black/40 backdrop-blur-sm",
  modal: "bg-black/30 backdrop-blur-lg border border-white/[0.08]"
};

// Hover effects
export const hover = {
  card: "hover:border-white/[0.15] hover:bg-black/30",
  scale: "hover:scale-[1.02]",
};

// Initialize dark mode
export function initializeDarkMode() {
  document.documentElement.classList.add('dark');
  document.body.style.backgroundColor = colors.backgroundDark;
  document.body.style.color = colors.textPrimary;
}

// Default styling for icons
export const defaultIconClass = "text-blue-400 flex-shrink-0"; 