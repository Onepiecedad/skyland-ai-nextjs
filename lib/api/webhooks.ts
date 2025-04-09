import { getRequiredEnvVar } from '../utils/env-validation';
import type { ContactFormData } from '../validation/contact-form';

export interface DanaConversationData {
  text?: string;
  transcript?: string;
  summary?: string;
  sentiment?: string;
  intent?: string;
  entities?: Record<string, any>;
  metadata?: Record<string, any>;
}

export interface WebhookPayload<T> {
  data: T;
  conversationId: string;
  timestamp: string;
  source: string;
}

export class WebhookError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public response?: unknown
  ) {
    super(message);
    this.name = 'WebhookError';
  }
}

interface RetryOptions {
  maxAttempts?: number;
  initialDelay?: number;
  maxDelay?: number;
  backoffFactor?: number;
}

const defaultRetryOptions: Required<RetryOptions> = {
  maxAttempts: 3,
  initialDelay: 1000,
  maxDelay: 10000,
  backoffFactor: 2,
};

async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function retryWithBackoff<T>(
  operation: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const config = { ...defaultRetryOptions, ...options };
  let lastError: Error | null = null;
  let delay = config.initialDelay;

  for (let attempt = 1; attempt <= config.maxAttempts; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error as Error;

      if (attempt === config.maxAttempts) {
        break;
      }

      await sleep(delay);
      delay = Math.min(delay * config.backoffFactor, config.maxDelay);
    }
  }

  throw lastError || new Error('Operation failed after retries');
}

async function sendWebhook<T>(url: string, data: WebhookPayload<T>): Promise<Response> {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Skyland-Website/1.0',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    let errorData: unknown;
    try {
      errorData = await response.json();
    } catch {
      errorData = await response.text();
    }

    throw new WebhookError('Webhook request failed', response.status, errorData);
  }

  return response;
}

export const webhookService = {
  async sendContactForm(data: ContactFormData): Promise<Response> {
    const url =
      process.env.NEXT_PUBLIC_VITE_N8N_WEBHOOK_URL ||
      'https://skylandai.app.n8n.cloud/webhook/914fbbce-c3d8-4760-bbce-fe5f6376700b';
    const payload: WebhookPayload<ContactFormData> = {
      data,
      conversationId: `contact-${Date.now()}`,
      timestamp: new Date().toISOString(),
      source: 'website_contact_form',
    };

    return await retryWithBackoff(() => sendWebhook(url, payload));
  },

  async sendDanaConversation(data: DanaConversationData): Promise<Response> {
    const url = getRequiredEnvVar('DANA_WEBHOOK_URL');
    const payload: WebhookPayload<DanaConversationData> = {
      data,
      conversationId: `dana-${Date.now()}`,
      timestamp: new Date().toISOString(),
      source: 'dana_voice_agent',
    };

    return await retryWithBackoff(() => sendWebhook(url, payload));
  },
};
