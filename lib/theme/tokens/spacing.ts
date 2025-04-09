export const spacing = {
  padding: {
    none: 'p-0',
    sm: 'p-2',
    card: 'p-6',
    section: 'py-12 px-6 md:py-16 md:px-8 lg:py-20 lg:px-10',
    modal: 'p-8',
    button: 'px-6 py-3',
  },
  width: {
    full: 'w-full',
    screen: 'w-screen',
    auto: 'w-auto',
  },
  height: {
    full: 'h-full',
    screen: 'h-screen',
    auto: 'h-auto',
  },
  alignment: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  },
  stack: {
    xs: 'space-y-2',
    sm: 'space-y-4',
    md: 'space-y-6',
    lg: 'space-y-8',
  },
  flex: {
    center: 'flex items-center justify-center',
    between: 'flex items-center justify-between',
    col: 'flex flex-col',
    row: 'flex flex-row items-center',
    grow: 'flex-grow',
    shrink: {
      none: 'flex-shrink-0',
    },
  },
  gap: {
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    base: 'gap-4',
  },
  section: {
    base: 'relative isolate min-h-[40vh] py-12 md:py-16',
    padding: 'px-4 md:px-6',
  },
  elementSpacing: 'space-y-3',
  maxWidth: {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  },
  container: 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
  grid: {
    cols: {
      base: 'grid grid-cols-1 gap-4 md:gap-6',
      sm: 'sm:grid-cols-2',
      md: 'md:grid-cols-2',
      lg: 'lg:grid-cols-3',
      two: {
        base: 'grid grid-cols-1',
        lg: 'lg:grid-cols-2',
      },
      three: {
        base: 'grid grid-cols-1',
        md: 'md:grid-cols-2',
        lg: 'lg:grid-cols-3',
      },
      four: {
        base: 'grid grid-cols-1',
        sm: 'sm:grid-cols-2',
        lg: 'lg:grid-cols-4',
      },
    },
    gap: {
      sm: 'gap-3',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
      '2xl': 'gap-10',
    },
  },
  margin: {
    base: 'm-4',
    bottom: {
      sm: 'mb-2',
      md: 'mb-4',
      lg: 'mb-6',
    },
  },
} as const;
