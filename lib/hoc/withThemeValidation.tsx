import React from 'react';
import { validateThemeUsage } from '../utils/theme-validator';
import type { ThemeSection } from '../utils/theme-validator';

export function withThemeValidation<P extends { className?: string }>(
  WrappedComponent: React.ComponentType<P>,
  componentName: string,
  requiredThemeSections: ThemeSection[]
) {
  return function ThemeValidatedComponent(props: P) {
    React.useEffect(() => {
      if (props.className) {
        validateThemeUsage(
          componentName,
          props.className.split(' '),
          requiredThemeSections
        );
      }
    }, [props.className]);

    return <WrappedComponent {...props} />;
  };
} 