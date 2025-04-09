# Theme Validation Guide

## Overview

This document outlines the theme validation system used in our application to ensure consistent usage of design tokens and prevent hardcoded values.

## Enabling Debug Mode

1. Create or update `.env.local`:

```env
NEXT_PUBLIC_THEME_DEBUG=true
```

2. Restart the development server:

```bash
npm run dev
```

## Component Status

### Core Components

| Component          | Token Usage                                               | Status    |
| ------------------ | --------------------------------------------------------- | --------- |
| Modal              | ✅ Uses tokens for overlay, close-button & content        | Validated |
| Card               | ✅ Uses tokens for spacing, radius                        | Validated |
| GridSection        | ✅ Uses tokens for grid gap and col-styling               | Validated |
| InputField         | ✅ Uses tokens for padding, colors, radius and typography | Validated |
| PageWrapper        | ✅ Uses effects.z, effects.overflow                       | Validated |
| AiSolutionsSection | ✅ Uses tokens for card styling                           | Validated |

### Token Categories Used

- **Spacing**: `spacing.padding`, `spacing.margin`, `spacing.gap`, `spacing.stack`
- **Colors**: `colors.text`, `colors.surface`, `colors.border`
- **Typography**: `typography.text`, `typography.heading`
- **Effects**: `effects.glass`, `effects.hover`, `effects.transition`
- **Radius**: `radius.sm`, `radius.md`, `radius.lg`, `radius.xl`
- **Layout**: `layout.container`, `layout.grid`

## Usage in New Components

### Basic Implementation

```tsx
export const FancyCard = withThemeValidation(FancyCardBase, 'FancyCard', [
  'spacing',
  'colors',
  'radius',
]);
```

### Debug Props

- `debug`: Enable debug mode for specific component
- `skip`: Skip validation for development/testing

```tsx
<FancyCard debug /> // Shows validation warnings
<FancyCard skip /> // Skips validation
```

## Common Issues

### Unmatched Classes

If you see warnings about unmatched classes:

1. Check console for `unmatchedClasses` warnings
2. Replace hardcoded Tailwind classes with theme tokens
3. Example fixes:

   ```tsx
   // ❌ Bad
   className="p-4"

   // ✅ Good
   className={spacing.padding.md}
   ```

### Validation Sections

Components can be validated against specific theme sections:

- spacing
- colors
- typography
- effects
- radius
- layout

## Best Practices

1. Always use theme tokens instead of hardcoded values
2. Wrap new components with `withThemeValidation`
3. Specify relevant theme sections for validation
4. Use debug mode during development
5. Document any exceptions or special cases
6. Run validation checks before committing changes

## Testing

### Unit Tests

```tsx
describe('withThemeValidation', () => {
  it('should validate theme tokens correctly', () => {
    // Test implementation
  });
});

describe('collectClassNames', () => {
  it('should collect all classes used in component', () => {
    // Test implementation
  });
});
```

## Troubleshooting

1. If validation warnings persist:

   - Check component's theme sections
   - Verify token imports
   - Ensure cn() utility is used
   - Check for nested components

2. Performance considerations:
   - Use `skip` prop for development
   - Disable debug mode in production
   - Monitor console for warnings

## Resources

- Theme configuration: `/lib/theme`
- Validation HOC: `/lib/hoc/withThemeValidation`
- Token types: `/lib/utils/theme-validator`
