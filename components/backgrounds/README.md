# Aurora Background Component

## Översikt

Aurora-bakgrundseffekten är en dynamisk gradient-animation som skapar en levande, rörlig bakgrund i dark mode.

## Implementation

### 1. Tailwind Konfiguration

```typescript
// tailwind.config.ts
{
  theme: {
    extend: {
      colors: {
        black: '#000000',
        transparent: 'transparent',
        'blue-300': '#93c5fd',
        'blue-400': '#60a5fa',
        'blue-500': '#3b82f6',
        'indigo-300': '#a5b4fc',
        'violet-200': '#ddd6fe',
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors], // Viktigt: Konverterar Tailwind-färger till CSS-variabler
}
```

### 2. Komponentstruktur

```tsx
// components/backgrounds/AuroraBackground.tsx
export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
}: AuroraBackgroundProps) => {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden bg-zinc-900">
        <div className={/* Aurora effect classes */} />
      </div>
      {children}
    </>
  );
};
```

### 3. Gradient-konfiguration

Aurora-effekten består av två lager:

1. **Dark gradient:**

```css
[--dark-gradient:repeating-linear-gradient(
  100deg,
  var(--black) 0%,
  var(--black) 7%,
  var(--transparent) 10%,
  var(--transparent) 12%,
  var(--black) 16%
)]
```

2. **Aurora gradient:**

```css
[--aurora:repeating-linear-gradient(
  100deg,
  var(--blue-500) 10%,
  var(--indigo-300) 15%,
  var(--blue-300) 20%,
  var(--violet-200) 25%,
  var(--blue-400) 30%
)]
```

### 4. Viktiga CSS-egenskaper

- **Bakgrundsstorlek:** 300%, 200% för huvudlagret, 200%, 100% för after-lagret
- **Opacity:** 50%
- **Blur:** 10px
- **Animation:** 60 sekunder, linjär, oändlig loop
- **Mix-blend-mode:** difference
- **Mask-image:** Radial gradient för mjuk övergång (valfri)

## Användning

```tsx
import { AuroraBackground } from '@/components/backgrounds/AuroraBackground';

export default function Page() {
  return (
    <AuroraBackground>
      <YourContent />
    </AuroraBackground>
  );
}
```

## Felsökning

### Vanliga problem och lösningar

1. **Färger saknas eller är felaktiga**

   - Kontrollera att alla färgvariabler är definierade i tailwind.config.ts
   - Verifiera att addVariablesForColors plugin är aktiverad

2. **Animation fungerar inte**

   - Kontrollera att aurora-animationen är definierad i Tailwind-konfigurationen
   - Verifiera att backgroundPosition-värdena är korrekta

3. **Gradient syns inte**

   - Säkerställ att opacity är satt till 50%
   - Kontrollera z-index och overflow-inställningar

4. **Prestandaproblem**
   - Använd will-change-transform för bättre prestanda
   - Kontrollera att blur-effekten inte är för intensiv

## Prestanda-optimeringar

- Använder `will-change-transform`
- Optimerad animation med GPU-acceleration
- Effektiv hantering av blur och opacity
- Begränsad användning av filter och blandningslägen
