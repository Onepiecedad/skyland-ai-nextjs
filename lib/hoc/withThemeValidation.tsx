'use client';

import React from 'react';
import type { ThemeSection } from '../utils/theme-validator';
import { validateThemeUsage } from '../utils/theme-validator';

type WithThemeValidationProps = {
  themeTokens?: string[];
  debug?: boolean;
  skip?: boolean;
};

type ComponentWithRef<P> = P & WithThemeValidationProps & { ref?: React.Ref<any> };

export function withThemeValidation<P extends { className?: string }>(
  WrappedComponent: React.ComponentType<P>,
  componentName: string,
  requiredThemeSections: ThemeSection[],
  options: { skip?: boolean } = { skip: true }
): React.ComponentType<ComponentWithRef<P>> {
  function ValidatedComponent(props: ComponentWithRef<P>) {
    const { themeTokens = [], debug = false, skip = options.skip, className = '', ...componentProps } = props;

    React.useEffect(() => {
      if (!skip && className) {
        validateThemeUsage(
          componentName,
          [...themeTokens, ...className.split(' ')],
          requiredThemeSections,
          debug
        );
      }
    }, [className, themeTokens, debug, skip]);

    return <WrappedComponent {...(componentProps as P)} className={className} />;
  }

  ValidatedComponent.displayName = `withThemeValidation(${componentName})`;
  return ValidatedComponent;
} 
