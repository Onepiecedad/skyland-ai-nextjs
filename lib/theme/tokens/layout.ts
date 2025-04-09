export const layout = {
  section: {
    base: 'relative isolate min-h-[40vh] py-12 md:py-16 lg:py-20',
    content: 'relative max-w-7xl mx-auto px-6 lg:px-8',
    wrapper: 'w-full',
  },
  hero: {
    container: 'relative isolate overflow-visible min-h-[80vh] flex items-center',
    content: 'mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-24 lg:px-8 lg:pt-28',
    wrapper: 'relative',
  },
  card: {
    base: 'flex flex-col justify-between bg-white/8 rounded-xl transition-all duration-300',
    compact: 'max-h-[400px]',
    responsive: {
      three: 'p-6 md:p-8 h-full w-full md:min-w-[240px]',
      four: 'p-5 md:p-6 md:min-w-[180px] h-full',
      six: 'p-4 md:p-5 h-full',
    },
    content: {
      base: 'flex flex-col gap-3',
      title: '',
      description: '',
    },
    hover: 'hover:scale-[1.02] hover:shadow-lg hover:shadow-white/10 transition-all duration-300',
  },
  grid: {
    base: 'grid gap-6 md:gap-8 auto-rows-fr',
    responsive: {
      two: 'grid-cols-1 lg:grid-cols-2',
      three: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      four: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
      six: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    },
    gap: {
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
      xl: 'gap-10 md:gap-12',
    },
  },
  container: {
    base: 'mx-auto w-full',
    max: {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
    },
    padding: {
      none: 'px-0',
      sm: 'px-4 md:px-6',
      md: 'px-6 md:px-8',
      lg: 'px-8 md:px-10',
    },
  },
} as const;
