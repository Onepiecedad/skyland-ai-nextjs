import { typography, colors, spacing, radius, transition, glass, hover, zIndex } from '@/lib/theme';
import { type Theme } from '../theme';

export type ThemeSection = 'typography' | 'colors' | 'spacing' | 'radius' | 'transition' | 'glass' | 'sizes' | 'hover' | 'zIndex';

type ThemeValue = string | number | { [key: string]: ThemeValue };

function getAllSpacingValues(spacing: { [key: string]: ThemeValue }): string[] {
  const values: string[] = [];
  const traverse = (obj: { [key: string]: ThemeValue }) => {
    for (const key in obj) {
      if (typeof obj[key] === 'string') {
        values.push(obj[key]);
      } else if (typeof obj[key] === 'object') {
        traverse(obj[key] as { [key: string]: ThemeValue });
      }
    }
  };
  traverse(spacing);
  return values;
}

// Hjälpfunktion för att validera att en komponent använder theme-värden
export function validateThemeUsage(componentName: string, usedClasses: string[], requiredThemeSections: ThemeSection[]) {
  // I development mode, validera theme-användning
  if (process.env.NODE_ENV === 'development') {
    const missingThemeValues: string[] = [];

    requiredThemeSections.forEach(section => {
      switch (section) {
        case 'typography':
          if (!usedClasses.some(cls => Object.values(typography).some(t => cls.includes(t)))) {
            missingThemeValues.push('typography');
          }
          break;
        case 'colors':
          if (!usedClasses.some(cls => Object.values(colors).some(c => cls.includes(String(c))))) {
            missingThemeValues.push('colors');
          }
          break;
        case 'spacing':
          const allSpacingValues = getAllSpacingValues(spacing);
          if (!usedClasses.some(cls => allSpacingValues.some(s => cls.includes(s)))) {
            missingThemeValues.push('spacing');
          }
          break;
        case 'radius':
          if (!usedClasses.some(cls => Object.values(radius).some(r => cls.includes(r)))) {
            missingThemeValues.push('radius');
          }
          break;
        case 'transition':
          if (!usedClasses.some(cls => Object.values(transition).some(t => cls.includes(t)))) {
            missingThemeValues.push('transition');
          }
          break;
        case 'glass':
          if (!usedClasses.some(cls => Object.values(glass).some(g => cls.includes(g)))) {
            missingThemeValues.push('glass');
          }
          break;
        case 'sizes':
          if (!usedClasses.some(cls => Object.values(spacing.maxWidth).some(s => cls.includes(s)))) {
            missingThemeValues.push('sizes');
          }
          break;
        case 'hover':
          if (!usedClasses.some(cls => Object.values(hover).some(h => cls.includes(h)))) {
            missingThemeValues.push('hover');
          }
          break;
        case 'zIndex':
          if (!usedClasses.some(cls => Object.values(zIndex).some(z => cls.includes(z)))) {
            missingThemeValues.push('zIndex');
          }
          break;
      }
    });

    if (missingThemeValues.length > 0) {
      console.warn(
        `[Theme Warning] Component "${componentName}" might not be using theme values for: ${missingThemeValues.join(', ')}. ` +
        'Please ensure all styles come from the theme file.'
      );
    }
  }
}

export interface ThemeValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validateTheme(theme: Partial<Theme>): ThemeValidationResult {
  const errors: string[] = [];
  
  // Add your theme validation logic here
  // Example:
  if (!theme.colors) {
    errors.push('Theme must include colors');
  }
  
  if (!theme.spacing) {
    errors.push('Theme must include spacing');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validateThemeProperty<T extends keyof Theme>(
  theme: Partial<Theme>,
  property: T,
  requiredKeys: string[]
): ThemeValidationResult {
  const errors: string[] = [];
  
  if (!theme[property]) {
    errors.push(`Theme must include ${property}`);
    return { isValid: false, errors };
  }
  
  const propertyValue = theme[property] as Record<string, unknown>;
  const missingKeys = requiredKeys.filter(key => !propertyValue[key]);
  
  if (missingKeys.length > 0) {
    errors.push(`Missing required ${property} keys: ${missingKeys.join(', ')}`);
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
} 