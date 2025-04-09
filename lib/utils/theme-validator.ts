import { typography } from '../theme/tokens/typography';
import { spacing } from '../theme/tokens/spacing';
import { radius } from '../theme/tokens/radius';
import { colors } from '../theme/tokens/colors';
import { effects } from '../theme/tokens/effects';
import { layout } from '../theme/tokens/layout';
import { border } from '../theme/tokens/border';
import { warnOnce, logThemeDebugInfo } from './theme-debug';

export type ThemeSection =
  | 'typography'
  | 'colors'
  | 'spacing'
  | 'radius'
  | 'effects'
  | 'layout'
  | 'border';

type ThemeTokens = {
  typography: typeof typography;
  spacing: typeof spacing;
  radius: typeof radius;
  colors: typeof colors;
  effects: typeof effects;
  layout: typeof layout;
  border: typeof border;
};

type RecursiveRecord = {
  [key: string]: string | number | RecursiveRecord;
};

const themeTokens: ThemeTokens = {
  typography,
  spacing,
  radius,
  colors,
  effects,
  layout,
  border,
};

type ThemeValue = {
  path: string;
  value: string;
  parts: string[];
};

const isDevelopment = process.env.NODE_ENV === 'development';

function debugLog(...args: unknown[]): void {
  if (isDevelopment) {
    console.log(...args);
  }
}

type ClassPart = {
  original: string;
  normalized: string;
};

function normalizeClassName(className: string): string {
  // Remove responsive/state prefixes while preserving the base class
  return className.replace(/^(sm|md|lg|xl|2xl|hover|focus|active|group-hover|dark):/g, '');
}

function getClassParts(className: string): ClassPart[] {
  // Split compound classes and normalize each part
  return className
    .split(' ')
    .map(part => part.trim())
    .filter(Boolean)
    .map(part => ({
      original: part,
      normalized: normalizeClassName(part),
    }));
}

function getValueFromPath(obj: any, path: string[]): string | undefined {
  let current = obj;
  for (const key of path) {
    if (current === undefined || current === null) return undefined;
    current = current[key];
  }
  return typeof current === 'string' ? current : undefined;
}

function getAllThemeValues(obj: RecursiveRecord, section: ThemeSection): ThemeValue[] {
  const values: ThemeValue[] = [];

  function traverse(current: RecursiveRecord | string | number, path: string[] = []): void {
    if (!current) return;

    if (typeof current === 'string') {
      // Add both the object path and individual classes
      const fullPath = [section, ...path].join('.');
      const classes = current
        .split(' ')
        .map(cls => cls.trim())
        .filter(Boolean);

      values.push({
        path: fullPath,
        value: current,
        parts: classes,
      });
    } else if (typeof current === 'object') {
      Object.entries(current).forEach(([key, value]) => {
        traverse(value, [...path, key]);
      });
    }
  }

  traverse(obj);
  return values;
}

function classesMatch(usedClass: string, themeValue: ThemeValue): boolean {
  // First check if it's a direct object path reference
  if (usedClass === themeValue.path) {
    return true;
  }

  // If the used class is an object path, get its actual value
  if (usedClass.includes('.')) {
    const pathParts = usedClass.split('.');
    const section = pathParts[0] as ThemeSection;
    if (section && themeTokens[section]) {
      const value = getValueFromPath(themeTokens[section], pathParts.slice(1));
      if (value === themeValue.value) {
        return true;
      }
      usedClass = value || usedClass;
    }
  }

  // Get all parts of the used class, including original and normalized versions
  const usedParts = getClassParts(usedClass);

  // For each part of the used class, check if it matches any theme value
  return usedParts.some(({ original, normalized }) => {
    // Check for exact matches (including responsive variants)
    if (themeValue.parts.includes(original)) {
      return true;
    }

    // Check for normalized matches (without responsive/state prefixes)
    if (themeValue.parts.some(part => normalizeClassName(part) === normalized)) {
      return true;
    }

    // Check for partial matches (e.g., "text-lg" in "hover:text-lg")
    return themeValue.parts.some(part => {
      const normalizedPart = normalizeClassName(part);
      return normalizedPart.includes(normalized) || normalized.includes(normalizedPart);
    });
  });
}

export function validateThemeUsage(
  componentName: string,
  usedClasses: string[],
  requiredThemeSections: ThemeSection[],
  debug: boolean = false
): void {
  if (process.env.NODE_ENV !== 'development' || !process.env.NEXT_PUBLIC_THEME_DEBUG) {
    return;
  }

  // Get all unique classes from the component
  const uniqueClasses = Array.from(new Set(usedClasses));

  if (debug) {
    debugLog(`[Theme Validation] Component: ${componentName}`, '\nUsed classes:', uniqueClasses);
  }

  const foundMatches: Partial<Record<ThemeSection, Set<string>>> = {};
  const unmatchedClasses: Set<string> = new Set(uniqueClasses);

  // Get theme values for each required section
  requiredThemeSections.forEach(section => {
    foundMatches[section] = new Set();
    const themeValues = getAllThemeValues(themeTokens[section], section);

    if (debug) {
      debugLog(
        `[Theme Validation] ${section} theme values:`,
        themeValues.map(v => `${v.path} = ${v.value}`)
      );
    }

    uniqueClasses.forEach(usedClass => {
      const matches = themeValues.filter(token => classesMatch(usedClass, token));

      if (matches.length > 0) {
        matches.forEach(match => {
          foundMatches[section]!.add(match.path);
          unmatchedClasses.delete(usedClass);
        });
      } else if (debug) {
        debugLog(
          `[Theme Validation] No matches found for class "${usedClass}" in section "${section}"`
        );
      }
    });

    if (debug) {
      debugLog(`[Theme Validation] ${section} matches:`, Array.from(foundMatches[section] || []));
    }
  });

  // Check which sections are missing tokens
  const missingSections = requiredThemeSections.filter(
    section => !foundMatches[section] || foundMatches[section]!.size === 0
  );

  if (missingSections.length > 0 && debug) {
    const foundTokens = requiredThemeSections
      .filter(section => foundMatches[section] && foundMatches[section]!.size > 0)
      .map(section => ({
        section,
        tokens: Array.from(foundMatches[section]!),
      }));

    warnOnce(
      `[Theme Validation Warning] Component "${componentName}" is not using any values from theme sections: ${missingSections.join(', ')}`,
      '\nFound tokens:',
      foundTokens.map(({ section, tokens }) => `\n  ${section}: ${tokens.join(', ')}`),
      '\nUnmatched classes:',
      Array.from(unmatchedClasses)
    );

    if (debug) {
      logThemeDebugInfo({
        componentName,
        usedClasses: uniqueClasses,
        matchedSections: Object.fromEntries(
          Object.entries(foundMatches).map(([section, tokens]) => [
            section,
            Array.from(tokens || []),
          ])
        ) as Record<ThemeSection, string[]>,
        unmatchedClasses: Array.from(unmatchedClasses),
      });
    }
  }
}

export interface ThemeValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validateTheme(theme: Partial<ThemeTokens>): ThemeValidationResult {
  const errors: string[] = [];

  if (!theme.colors) {
    errors.push('Theme must include colors');
  }

  if (!theme.spacing) {
    errors.push('Theme must include spacing');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function validateThemeProperty<T extends keyof ThemeTokens>(
  theme: Partial<ThemeTokens>,
  property: T,
  requiredKeys: string[]
): ThemeValidationResult {
  const errors: string[] = [];

  if (!theme[property]) {
    errors.push(`Theme must include ${String(property)}`);
    return { isValid: false, errors };
  }

  const propertyValue = theme[property] as Record<string, unknown>;
  const missingKeys = requiredKeys.filter(key => !propertyValue[key]);

  if (missingKeys.length > 0) {
    errors.push(`Missing required ${String(property)} keys: ${missingKeys.join(', ')}`);
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
