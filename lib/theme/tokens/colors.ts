export const colors = {
  surface: {
    default: "bg-zinc-900",
    card: "bg-white/10",
  },
  bg: {
    dark: "bg-zinc-900",
    darker: "bg-zinc-950",
    light: "bg-zinc-800",
  },
  hover: {
    primary: "hover:text-primary",
    secondary: "hover:text-white/90",
    muted: "hover:text-white/75"
  },
  text: {
    primary: "text-white",
    secondary: "text-white/90",
    muted: "text-white/75",
    tertiary: "text-white/70",
    accent: "text-primary/95",
    success: "text-green-400",
    error: "text-red-400",
    warning: "text-yellow-400",
    logo: {
      icon: "text-white",
      text: "text-white"
    }
  }
} as const; 