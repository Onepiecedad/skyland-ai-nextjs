import React from 'react';

export const withThemeValidation = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return function WithThemeValidation(props: P) {
    return <WrappedComponent {...props} />;
  };
}; 