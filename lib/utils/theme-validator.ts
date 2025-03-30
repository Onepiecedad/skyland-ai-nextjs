import { 
  typography, 
  spacing, 
  radius, 
  colors,
  effects,
  border,
  transition,
  shadow
} from "@/lib/theme";
import { type Theme, type TypographyStyles, type GlassEffects } from '../theme';

export type ThemeSection = 
  | 'typography' 
  | 'colors' 
  | 'spacing' 
  | 'radius' 
  | 'transition'
  | 'effects'
  | 'border'
  | 'shadow';

type ThemeValue = string | number | { [key: string]: ThemeValue };

function getAllThemeValues(obj: any): string[] {
  const values = new Set<string>();

  function traverse(current: any) {
    if (!current) return;
    
    if (typeof current === 'string') {
      // Split the string in case it contains multiple classes
      current.split(' ').forEach(cls => values.add(cls));
    } else if (typeof current === 'object') {
      Object.values(current).forEach(value => traverse(value));
    }
  }

  traverse(obj);
  return Array.from(values);
}

function classesMatch(usedClass: string, themeValue: string): boolean {
  // Split compound classes
  const usedParts = usedClass.split(' ');
  const themeParts = themeValue.split(' ');
  
  // Check if any part matches
  return usedParts.some(used => 
    themeParts.some(theme => {
      // Remove modifiers for base comparison
      const usedBase = used.split(':').pop()?.split('/')[0] || '';
      const themeBase = theme.split(':').pop()?.split('/')[0] || '';
      return usedBase === themeBase || used.includes(themeBase) || theme.includes(usedBase);
    })
  );
}

// Hjälpfunktion för att validera att en komponent använder theme-värden
export function validateThemeUsage(
  componentName: string,
  usedClasses: string[],
  allowedTokens: string[]
): boolean {
  console.log(`[Theme Debug] Validating ${componentName}`);
  console.log(`[Theme Debug] Used classes:`, usedClasses);

  const themeTokens = {
    typography,
    spacing,
    radius,
    colors,
    effects,
    border,
    transition,
    shadow
  };

  const missingThemeValues: string[] = [];

  allowedTokens.forEach(section => {
    let themeValues: string[] = [];
    
    switch (section) {
      case 'typography':
        themeValues = getAllThemeValues(typography);
        break;
      case 'spacing':
        themeValues = getAllThemeValues(spacing);
        break;
      case 'radius':
        themeValues = getAllThemeValues(radius);
        break;
      case 'colors':
        themeValues = getAllThemeValues(colors);
        break;
      case 'effects':
        themeValues = getAllThemeValues(effects);
        break;
      case 'border':
        themeValues = getAllThemeValues(border);
        break;
      case 'transition':
        themeValues = getAllThemeValues(transition);
        break;
      case 'shadow':
        themeValues = getAllThemeValues(shadow);
        break;
    }

    console.log(`[Theme Debug] ${section} values:`, themeValues);

    const matches = usedClasses.filter(cls => themeValues.includes(cls));
    console.log(`[Theme Debug] Matches found for ${section}:`, matches);

    if (matches.length === 0) {
      missingThemeValues.push(section);
    }
  });

  if (missingThemeValues.length > 0) {
    console.warn(
      `[Theme Warning] Component "${componentName}" is not using any values from these theme sections: ${missingThemeValues.join(', ')}.\n` +
      'Please ensure all styles come from the theme file.'
    );
    return false;
  } else {
    console.log('[Theme Debug] All theme sections validated successfully!');
    return true;
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