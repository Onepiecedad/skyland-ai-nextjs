type EnvVar = {
  name: string;
  required: boolean;
  validator?: (value: string) => boolean;
};

const envVars: EnvVar[] = [
  {
    name: 'NEXT_PUBLIC_VITE_N8N_WEBHOOK_URL',
    required: true,
    validator: value => value.startsWith('https://') && value.includes('n8n.cloud/webhook/'),
  },
  {
    name: 'DANA_WEBHOOK_URL',
    required: true,
    validator: value => value.startsWith('https://') && value.includes('n8n.cloud/webhook/'),
  },
  {
    name: 'NEXT_PUBLIC_CONVAI_SCRIPT_URL',
    required: true,
    validator: value => value.startsWith('https://'),
  },
  {
    name: 'RATE_LIMIT_MAX_REQUESTS',
    required: false,
    validator: value => !isNaN(Number(value)) && Number(value) > 0,
  },
  {
    name: 'RATE_LIMIT_WINDOW_MS',
    required: false,
    validator: value => !isNaN(Number(value)) && Number(value) > 0,
  },
];

export function validateEnv(): void {
  const errors: string[] = [];

  for (const envVar of envVars) {
    const value = process.env[envVar.name];

    if (envVar.required && !value) {
      errors.push(`Missing required environment variable: ${envVar.name}`);
      continue;
    }

    if (value && envVar.validator && !envVar.validator(value)) {
      errors.push(`Invalid value for environment variable: ${envVar.name}`);
    }
  }

  if (errors.length > 0) {
    console.error('Environment validation failed:');
    errors.forEach(error => console.error(`- ${error}`));
    throw new Error('Environment validation failed. Check your .env file.');
  }
}

export function getRequiredEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}
