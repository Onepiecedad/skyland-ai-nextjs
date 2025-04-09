'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { spacing, typography, colors, effects, radius } from '@/lib/theme';
import { withThemeValidation } from '@/lib/hoc/withThemeValidation';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, required, className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        typography.text.base,
        colors.text.primary,
        'flex items-center gap-1',
        className
      )}
      {...props}
    >
      {children}
      {required && (
        <>
          <span className={colors.text.accent} aria-hidden="true">
            *
          </span>
          <span className="sr-only">required</span>
        </>
      )}
    </label>
  )
);

Label.displayName = 'Label';

interface ErrorMessageProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const ErrorMessage = ({ children, id, className }: ErrorMessageProps) => (
  <div
    id={id}
    role="alert"
    aria-live="assertive"
    className={cn(typography.text.sm, colors.text.error, spacing.stack.xs, className)}
  >
    {children}
  </div>
);

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  description?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  descriptionClassName?: string;
  hideLabel?: boolean;
  required?: boolean;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

const InputFieldBase = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      error,
      description,
      className,
      inputClassName,
      labelClassName,
      errorClassName,
      descriptionClassName,
      hideLabel = false,
      required = false,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-') || 'input';
    const descriptionId = `${inputId}-description`;
    const errorId = `${inputId}-error`;

    return (
      <div className={cn(spacing.flex.col, spacing.gap.xs, className)}>
        {label && !hideLabel && (
          <Label
            htmlFor={inputId}
            required={required}
            className={cn(typography.text.base, labelClassName)}
          >
            {label}
          </Label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-label={hideLabel ? label : ariaLabel}
          aria-describedby={cn(description && descriptionId, error && errorId, ariaDescribedBy)}
          aria-invalid={!!error}
          required={required}
          className={cn(
            spacing.padding.sm,
            typography.text.base,
            colors.text.primary,
            colors.surface.card,
            colors.text.primary,
            radius.md,
            effects.transition.base,
            effects.interaction.focus.primary,
            error && colors.text.error,
            inputClassName
          )}
          {...props}
        />
        {description && !error && (
          <p
            id={descriptionId}
            className={cn(typography.text.sm, colors.text.secondary, descriptionClassName)}
          >
            {description}
          </p>
        )}
        {error && (
          <ErrorMessage id={errorId} className={cn(typography.text.sm, errorClassName)}>
            {error}
          </ErrorMessage>
        )}
      </div>
    );
  }
);

InputFieldBase.displayName = 'InputField';

export const InputField = withThemeValidation<InputFieldProps>(InputFieldBase, 'InputField', [
  'spacing',
  'typography',
  'colors',
  'effects',
  'radius',
]);
