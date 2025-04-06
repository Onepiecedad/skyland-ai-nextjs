'use client';

import React, { useState } from 'react';
import { InputField } from '@/components/ui/InputField';
import { cn } from '@/lib/utils';
import { colors, effects, radius, spacing } from '@/lib/theme';
import { typography } from '@/lib/theme/typography';
import { webhookService } from '@/lib/api/webhooks';
import { validateContactForm, type ContactFormData } from '@/lib/validation/contact-form';
import type { ValidationError } from '@/lib/validation/contact-form';
import type { WebhookError } from '@/lib/api/webhooks';

interface FormState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  errors: Record<string, string>;
  generalError?: string;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  website: '',
  message: ''
};

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    errors: {}
  });

  const handleValidationError = (error: ValidationError) => {
    const fieldErrors: Record<string, string> = {};
    error.errors.errors.forEach(err => {
      if (err.path) {
        fieldErrors[err.path[0]] = err.message;
      }
    });
    setFormState(prev => ({
      ...prev,
      status: 'error',
      errors: fieldErrors
    }));
  };

  const handleWebhookError = (error: WebhookError) => {
    setFormState(prev => ({
      ...prev,
      status: 'error',
      generalError: 'Failed to send message. Please try again or contact us directly.'
    }));
    console.error('Webhook error:', error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: 'submitting', errors: {} });

    try {
      const validatedData = validateContactForm(formData);
      await webhookService.sendContactForm(validatedData);
      
      setFormState({
        status: 'success',
        errors: {}
      });
      setFormData(initialFormData);
    } catch (error) {
      if ((error as Error).name === 'ValidationError') {
        handleValidationError(error as ValidationError);
      } else if ((error as Error).name === 'WebhookError') {
        handleWebhookError(error as WebhookError);
      } else {
        setFormState(prev => ({
          ...prev,
          status: 'error',
          generalError: 'An unexpected error occurred. Please try again.'
        }));
        console.error('Unexpected error:', error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field-specific error when user starts typing
    if (formState.errors[name]) {
      setFormState(prev => ({
        ...prev,
        errors: {
          ...prev.errors,
          [name]: ''
        }
      }));
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={cn(spacing.stack.md)}
      aria-busy={formState.status === 'submitting'}
    >
      <InputField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        disabled={formState.status === 'submitting'}
        error={formState.errors.name}
        aria-invalid={!!formState.errors.name}
        aria-describedby={formState.errors.name ? 'name-error' : undefined}
      />
      
      <InputField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        disabled={formState.status === 'submitting'}
        error={formState.errors.email}
        aria-invalid={!!formState.errors.email}
        aria-describedby={formState.errors.email ? 'email-error' : undefined}
      />
      
      <InputField
        label="Phone"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        required
        disabled={formState.status === 'submitting'}
        error={formState.errors.phone}
        aria-invalid={!!formState.errors.phone}
        aria-describedby={formState.errors.phone ? 'phone-error' : undefined}
      />
      
      <InputField
        label="Website (optional)"
        name="website"
        type="url"
        value={formData.website}
        onChange={handleChange}
        disabled={formState.status === 'submitting'}
        error={formState.errors.website}
        aria-invalid={!!formState.errors.website}
        aria-describedby={formState.errors.website ? 'website-error' : undefined}
      />
      
      <div className={spacing.stack.sm}>
        <label 
          htmlFor="message" 
          className={cn(typography.text.base, colors.text.primary)}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={formState.status === 'submitting'}
          rows={4}
          className={cn(
            typography.text.base,
            colors.text.primary,
            effects.glass.light,
            radius.md,
            "w-full p-3 resize-none",
            "focus:outline-none focus:ring-2 focus:ring-primary/50",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            formState.errors.message && "border-red-500"
          )}
          aria-invalid={!!formState.errors.message}
          aria-describedby={formState.errors.message ? 'message-error' : undefined}
        />
        {formState.errors.message && (
          <p 
            id="message-error"
            className={cn(typography.text.sm, colors.text.error)}
          >
            {formState.errors.message}
          </p>
        )}
      </div>

      {formState.generalError && (
        <div 
          role="alert"
          className={cn(
            typography.text.base, 
            colors.text.error, 
            "text-center p-4", 
            effects.glass.light, 
            radius.md
          )}
        >
          {formState.generalError}
        </div>
      )}

      {formState.status === 'success' && (
        <div 
          role="alert"
          className={cn(
            "text-center p-4", 
            effects.glass.light, 
            radius.md, 
            spacing.stack.sm
          )}
        >
          <p className={cn(typography.text.base, colors.text.success, "font-semibold")}>
            Thank you for your message!
          </p>
          <p className={cn(typography.text.base, colors.text.secondary)}>
            We'll get back to you as soon as possible.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={formState.status === 'submitting'}
        className={cn(
          typography.buttonText,
          colors.text.primary,
          effects.glass.lighter,
          effects.hover.scale,
          radius.lg,
          "w-full px-6 py-3",
          "focus:outline-none focus:ring-2 focus:ring-primary/50",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          formState.status === 'submitting' && "animate-pulse"
        )}
        aria-disabled={formState.status === 'submitting'}
      >
        {formState.status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
} 
