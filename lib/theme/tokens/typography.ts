export const typography = {
  heading: {
    h1: "text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",
    h2: "text-3xl font-bold tracking-tight sm:text-4xl",
    h3: "text-2xl font-bold tracking-tight sm:text-3xl",
    h4: "text-xl font-bold tracking-tight sm:text-2xl",
    h5: "text-lg font-bold tracking-tight",
    h6: "text-base font-bold tracking-tight"
  },
  text: {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl"
  },
  weight: {
    thin: "font-thin",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold"
  },
  icon: {
    xs: "w-4 h-4",
    sm: "w-5 h-5",
    md: "w-6 h-6",
    base: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-10 h-10",
    "2xl": "w-12 h-12"
  },
  buttonText: "text-base font-medium",
  logo: "text-xl font-bold tracking-tight",
  paragraph: "text-base leading-relaxed"
} as const; 