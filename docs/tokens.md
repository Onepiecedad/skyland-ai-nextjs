# Grimoire Design Tokens

This document serves as the definitive guide for our design token system. All visual styling in the application must use these tokens - no direct Tailwind classes allowed.

## Core Principles

- **Single Source of Truth**: All visual tokens are defined in `lib/theme.ts`
- **No Direct Tailwind**: Components must use theme tokens instead of Tailwind classes
- **Debug Tracing**: All components require `data-theme-debug` attributes
- **Validation**: Use `withThemeValidation` HOC to enforce token usage

## Available Tokens

### Colors

```typescript
colors.primary; // Primary brand color
colors.textPrimary; // Primary text color
colors.backgroundGlass; // Glass effect background
// See theme.ts for full color palette
```

### Typography

```typescript
typography.text.base; // Base text style
typography.heading.h1; // H1 heading style
typography.buttonText; // Button text style
```

### Spacing

```typescript
spacing.container; // Container width & padding
spacing.padding.card; // Card padding
spacing.flex.center; // Centered flex layout
```

### Effects

```typescript
glass.light; // Light glass effect
glass.medium; // Medium glass effect
effects.hover.scale; // Hover scale effect
```

### Interaction

```typescript
effects.interaction.cursor.pointer; // cursor-pointer
effects.interaction.cursor.wait; // cursor-wait
effects.interaction.cursor.notAllowed; // cursor-not-allowed
```

### Layout

```typescript
grid.cols.2           // 2-column responsive grid
stack.md             // Medium vertical stack spacing
gap.lg              // Large gap between elements
```

### Components

```typescript
button.variant.primary; // Primary button style
button.size.md; // Medium button size
button.base.layout; // Base button layout
```

## Usage Example

```tsx
// ❌ Don't use Tailwind directly
<div className="p-4 text-lg bg-white">

// ✅ Use theme tokens instead
<div className={cn(
  spacing.padding.card,
  typography.text.lg,
  colors.text.primary
)}>
```

## Validation

All components should use the theme validation HOC:

```tsx
function MyComponent({ className, ...props }) {
  return <div className={cn(tokens..., className)} {...props} />;
}

export default withThemeValidation(MyComponent, "MyComponent");
```

## Debug Attributes

Every component must include a debug attribute:

```tsx
<Component data-theme-debug="ComponentName" />
```

## Token Categories

1. **Layout & Spacing**

   - container
   - spacing
   - gap
   - grid
   - stack

2. **Typography**

   - text styles
   - headings
   - labels

3. **Colors & Effects**

   - colors
   - glass
   - effects
   - shadows

4. **Components**
   - button
   - card
   - modal

## Best Practices

1. Always use the closest matching token
2. Combine tokens with cn() utility
3. Validate className props
4. Include debug attributes
5. Document custom tokens
