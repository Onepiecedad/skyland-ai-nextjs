export const effects = {
  interaction: {
    cursor: {
      pointer: 'cursor-pointer',
      wait: 'cursor-wait',
      notAllowed: 'cursor-not-allowed',
    },
    focus: {
      primary:
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-opacity-50',
      ring: 'ring-2 ring-offset-2 ring-primary ring-opacity-50',
    },
  },
  hover: {
    scale: 'hover:scale-[1.02] transition-transform duration-300',
    shadow: 'hover:shadow-lg hover:shadow-white/10 transition-shadow duration-300',
    opacity: 'hover:opacity-95 transition-opacity duration-300',
    premium:
      'hover:translate-y-[-4px] hover:shadow-xl hover:shadow-white/20 hover:border-white/20 transition-all duration-300',
  },
  transform: {
    rotate: {
      '180': 'transform rotate-180',
    },
  },
  overflow: {
    hidden: 'overflow-hidden',
    visible: 'overflow-visible',
    auto: 'overflow-auto',
  },
  collapse: {
    hidden: 'max-h-0 opacity-0',
    visible: 'max-h-full opacity-100',
  },
  glass: {
    light: 'backdrop-blur-sm bg-white/5 border border-white/10',
    medium: 'backdrop-blur-md bg-white/10 border border-white/15',
    heavy: 'backdrop-blur-lg bg-white/15 border border-white/20',
    lighter: 'bg-white/5 hover:bg-white/10 transition-colors',
    premium: 'backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/20 shadow-lg',
  },
  transition: {
    base: 'transition-all duration-300 ease-out',
    fast: 'transition-all duration-200 ease-out',
    slow: 'transition-all duration-500 ease-out',
    transform: 'transition-transform duration-300 ease-out',
    opacity: 'transition-opacity duration-300 ease-in-out',
    colors: 'transition-colors duration-300 ease-in-out',
    shadow: 'transition-shadow duration-300 ease-in-out',
  },
  z: {
    background: 'z-0',
    content: 'z-10',
    modal: 'z-30',
    tooltip: 'z-40',
  },
  aurora: {
    base: 'absolute inset-0 bg-aurora',
    animation: 'animate-aurora',
  },
  shadow: {
    none: 'shadow-none',
    sm: 'shadow-sm shadow-white/5',
    base: 'shadow shadow-white/10',
    md: 'shadow-md shadow-white/10',
    lg: 'shadow-lg shadow-white/10',
    xl: 'shadow-xl shadow-white/15',
    '2xl': 'shadow-2xl shadow-white/20',
    inner: 'shadow-inner shadow-white/5',
    card: 'shadow-md hover:shadow-xl transition-shadow duration-300',
    button: 'shadow-md hover:shadow-lg transition-shadow duration-200',
    premium:
      'shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 transition-all duration-300',
  },
} as const;
