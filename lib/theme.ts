// 🎨 Design tokens for the application
// Single source of truth for all design values

export const effects = {
  interaction: {
    cursor: {
      pointer: "cursor-pointer",
      wait: "cursor-wait",
      notAllowed: "cursor-not-allowed",
    },
  },
  hover: {
    scale: "hover:scale-105 transition-transform",
  },
  transition: {
    base: "transition duration-200 ease-in-out",
  },
  glass: {
    light: "backdrop-blur-sm bg-white/5",
    medium: "backdrop-blur-md bg-white/10",
    heavy: "backdrop-blur-lg bg-white/20",
    lighter: "bg-white/5 hover:bg-white/10",
  },
};

export const spacing = {
  padding: {
    card: "p-6",
    section: "px-6 md:px-12",
    none: "",
    modal: "p-6 md:p-8",
  },
  width: {
    full: "w-full",
    screen: "w-screen",
    auto: "w-auto",
  },
  height: {
    full: "h-full",
    screen: "h-screen",
    auto: "h-auto",
  },
  alignment: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  },
  container: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  stack: {
    sm: "space-y-2",
    md: "space-y-4",
    lg: "space-y-8",
  },
  flex: {
    center: "flex items-center justify-center",
    between: "flex items-center justify-between",
    col: "flex flex-col",
  },
  section: {
    base: "relative min-h-screen",
    padding: "px-6 md:px-12",
  },
  elementSpacing: "space-y-4",
  maxWidth: {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    container: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  }
};

export const colors = {
  text: {
    primary: "text-white",
    secondary: "text-white/70",
    accent: "text-blue-400",
  },
  background: {
    card: "bg-white/5",
    glass: "bg-white/5",
    glassHover: "hover:bg-white/10",
  },
  primary: "#60a5fa",
  primaryHover: "#3b82f6",
};

export const typography = {
  text: {
    base: "text-base leading-relaxed",
    secondary: "text-sm",
    sm: "text-sm leading-relaxed",
  },
  heading: {
    h3: "text-xl font-semibold",
    h4: "text-lg font-medium",
  },
  icon: "text-lg",
  paragraph: "text-base leading-relaxed text-white/80",
  buttonText: "text-sm font-medium",
};

export const radius = {
  xl: "rounded-xl",
  lg: "rounded-lg",
  md: "rounded-md",
};

// Additional tokens needed by components
export const border = {
  none: "border-0",
  sm: "border",
  md: "border-2",
  lg: "border-4",
  glass: "border border-white/[0.08]"
};

export const shadow = {
  card: "shadow-md hover:shadow-xl transition-shadow duration-300",
  button: "shadow-md hover:shadow-lg transition-shadow duration-200",
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
};

export const transition = {
  base: "transition duration-200 ease-in-out",
  fast: "transition duration-100 ease-in",
}; 