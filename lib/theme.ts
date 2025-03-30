// 🔒 theme.ts is now frozen. Design tokens are finalized and ready for production.
// This file serves as the single source of truth for all design tokens in the application.
// All components should reference these tokens instead of using hardcoded values.

import { cn } from "@/lib/utils";

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
  },

  // Colors and backgrounds
  text: {
    primary: "text-white",
    secondary: "text-white/85",
    tertiary: "text-white/75",
    accent: "text-blue-400",
    accentHover: "group-hover:text-blue-300",
    logo: {
      icon: "text-blue-400 group-hover:text-blue-300",
      text: "text-white/90 group-hover:text-white"
    },
    hero: {
      heading: "text-white/80",
      subheading: "text-white/70",
      tertiary: "text-white/65"
    }
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
  card: "max-w-sm md:max-w-md",
};

// Spacing and layout
export const spacing = {
  container: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  cardGap: "gap-6 sm:grid-cols-2 lg:grid-cols-3",
  elementSpacing: "stack-space",
  section: {
    base: "relative min-h-screen",
    hero: {
      outer: "min-h-screen pt-24 pb-10 md:pb-14",
      inner: "space-y-6 md:space-y-8",
      content: "space-y-4 md:space-y-6"
    }
  },
  flex: {
    center: "flex items-center justify-center",
    between: "flex items-center justify-between",
    col: "flex flex-col",
    row: "flex flex-row",
    responsive: "flex-col sm:flex-row"
  },
  icon: {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8"
  },
  positions: {
    header: "top-8 left-6 sm:left-10"
  },
  padding: {
    card: "p-5",
    modal: "p-6",
    sectionY: "py-8 md:py-12 lg:py-16",
    lg: "py-12",
    none: ""
  },
  width: {
    full: "w-full",
    screen: "w-screen",
  },
  maxWidth: {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
    "2xl": "max-w-screen-2xl",
    full: "max-w-full",
    hero: "max-w-2xl",
    container: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
  },
  gap: {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    hero: "gap-8 md:gap-12 lg:gap-20"
  },
  gridCols: {
    1: "grid grid-cols-1",
    2: "grid grid-cols-1 md:grid-cols-2",
    3: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  },
  stack: {
    sm: "space-y-2",
    md: "space-y-4",
    lg: "space-y-8",
    hero: "space-y-6 md:space-y-8",
    sub: "space-y-4 md:space-y-6"
  },
  grid: {
    base: "grid",
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    },
    center: "items-center",
    hero: "grid grid-cols-1 md:grid-cols-2 items-center"
  },
  alignment: {
    centerLeft: "text-center md:text-left"
  },
  size: {
    heroRight: "w-full h-48 md:h-auto"
  },
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
  "4xl": "6rem"
};

// Typography styles
export interface TypographyStyles {
  text: {
    base: string;
    sm: string;
    lg: string;
  };
  heading: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
  };
  hero: {
    heading: string;
    subheading: string;
    tertiary: string;
  };
  logo: string;
  label: string;
  buttonText: string;
  icon: string;
  paragraph: string;
}

export const typography: TypographyStyles = {
  text: {
    base: "text-base leading-relaxed",
    sm: "text-sm leading-relaxed",
    lg: "text-lg leading-relaxed"
  },
  heading: {
    h1: "text-4xl sm:text-5xl font-bold tracking-tight",
    h2: "text-3xl sm:text-4xl font-semibold",
    h3: "text-2xl sm:text-3xl font-medium",
    h4: "text-xl sm:text-2xl font-medium"
  },
  hero: {
    heading: "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-6",
    subheading: "text-lg md:text-xl text-white/80",
    tertiary: "text-base text-white/60"
  },
  logo: "text-xl font-medium tracking-tight",
  label: "text-sm font-medium",
  buttonText: "text-sm font-medium",
  icon: "text-lg",
  paragraph: "text-base leading-relaxed text-white/80"
};

// Rounded corners for different elements
export const radius = {
  card: "rounded-xl",
  modal: "rounded-2xl",
  button: "rounded-full",
  small: "rounded-md",
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full"
};

// Shadows for depth
export const shadow = {
  card: "shadow-md hover:shadow-xl transition-shadow duration-300",
  button: "shadow-md hover:shadow-lg transition-shadow duration-200",
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl"
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
export interface GlassEffects {
  layer1: string;
  layer2: string;
  layer3: string;
  overlay: string;
}

export const glass: GlassEffects = {
  layer1: cn(
    "bg-white/5",
    "backdrop-blur-sm",
    "border border-white/10"
  ),
  layer2: cn(
    "bg-white/10",
    "backdrop-blur-md",
    "border border-white/20"
  ),
  layer3: cn(
    "bg-white/15",
    "backdrop-blur-lg",
    "border border-white/30"
  ),
  overlay: cn(
    "bg-black/50",
    "backdrop-blur-sm"
  )
};

// Hover effects
export const hover = {
  card: "hover:border-white/[0.15] hover:bg-black/30",
  scale: "hover:scale-[1.02]",
};

// Colors and effects
export const effects = {
  glass: {
    light: "bg-white/10 hover:bg-white/20",
    lighter: "bg-white/5 hover:bg-white/10"
  },
  text: {
    gradient: "bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
  },
  transition: "transition-all duration-200 ease-in-out",
  hover: {
    scale: "hover:scale-105",
    lift: "hover:-translate-y-1"
  }
};

// Border tokens
export const border = {
  none: "border-0",
  sm: "border",
  md: "border-2",
  lg: "border-4",
  glass: "border border-white/[0.08]"
};

// Container defaults
export const container = {
  default: "max-w-6xl mx-auto px-6 sm:px-8"
};

// Gap tokens
export const gap = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
  "2xl": "gap-12",
  hero: "gap-8 md:gap-12 lg:gap-20"
};

// Grid tokens
export const grid = {
  base: "grid",
  cols: {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  },
  hero: "grid grid-cols-1 md:grid-cols-2 items-center"
};

// Stack tokens
export const stack = {
  sm: "space-y-2",
  md: "space-y-4",
  lg: "space-y-8",
  hero: "space-y-6 md:space-y-8"
};

// Alignment tokens
export const alignment = {
  centerLeft: "text-center md:text-left"
};

// Button theme - must be defined after all other tokens
export const button = {
  size: {
    sm: "h-8 px-4",
    md: "h-10 px-6",
    lg: "h-12 px-8"
  },
  variant: {
    primary: cn(
      `bg-[${colors.primary}]`,
      colors.text.primary,
      `hover:bg-[${colors.primaryHover}]`
    ),
    secondary: cn(
      `bg-[${colors.backgroundGlass}]`,
      colors.text.primary,
      `hover:bg-[${colors.backgroundGlass}]/20`
    ),
    outline: cn(
      `bg-[${colors.transparent}]`,
      colors.text.primary,
      border.glass,
      shadow.card
    )
  },
  base: {
    layout: spacing.flex.center,
    radius: radius.button,
    typography: typography.buttonText,
    transition: transition.base,
    shadow: shadow.button,
    focus: "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white",
    disabled: "disabled:pointer-events-none disabled:opacity-50"
  }
};

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    foreground: string;
    [key: string]: string;
  };
  spacing: {
    base: string;
    sm: string;
    lg: string;
    [key: string]: string;
  };
  typography: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    [key: string]: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
    [key: string]: string;
  };
  transition: {
    base: string;
    fast: string;
    slow: string;
    [key: string]: string;
  };
  glass: {
    base: string;
    [key: string]: string;
  };
  sizes: {
    card: string;
    [key: string]: string;
  };
  hover: {
    base: string;
    [key: string]: string;
  };
  zIndex: {
    modal: number;
    overlay: number;
    dropdown: number;
    [key: string]: number;
  };
} 