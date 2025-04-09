import { ThemeSection } from './theme-validator';

// Cache for warning messages to prevent duplicates
const warnedMessages = new Set<string>();

export function warnOnce(message: string, ...args: any[]): void {
  if (!warnedMessages.has(message)) {
    console.warn(message, ...args);
    warnedMessages.add(message);
  }
}

export function clearWarnings(): void {
  warnedMessages.clear();
}

export const isThemeDebugEnabled =
  process.env.NEXT_PUBLIC_THEME_DEBUG === 'true' || process.env.NEXT_PUBLIC_THEME_DEBUG === '1';

export function debugLog(componentName: string, type: string, data: any): void {
  if (!isThemeDebugEnabled) return;

  console.debug(
    `[Theme Debug][${componentName}][${type}]`,
    typeof data === 'string' ? data : '\n',
    typeof data !== 'string' ? data : ''
  );
}

export type ThemeDebugInfo = {
  componentName: string;
  themeTokens?: string[];
  usedClasses: string[];
  matchedSections: Record<ThemeSection, string[]>;
  unmatchedClasses: string[];
};

export function logThemeDebugInfo(info: ThemeDebugInfo): void {
  if (!isThemeDebugEnabled) return;

  console.group(`[Theme Debug] ${info.componentName}`);
  console.debug('Theme Tokens:', info.themeTokens || 'None provided');
  console.debug('Used Classes:', info.usedClasses);
  console.debug('Matched Sections:', info.matchedSections);
  console.debug('Unmatched Classes:', info.unmatchedClasses);
  console.groupEnd();
}
