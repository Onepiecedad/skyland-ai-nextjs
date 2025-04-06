// This file is maintained for legacy reasons
// All theme exports should now be imported from '@/lib/theme' directly
// which will use the lib/theme/index.ts exports

// Export all theme tokens and types directly
export * from './theme/tokens/colors';
export * from './theme/tokens/spacing';
export * from './theme/tokens/radius';
export * from './theme/tokens/effects';
export * from './theme/tokens/layout';
export * from './theme/tokens/typography';
export * from './theme/tokens/border';

// Re-export types
export type { ThemeSection } from './utils/theme-validator';