import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Setup proper path resolution for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: join(__dirname, '.env') });

// Validate environment variables
const requiredEnvVars = ['VITE_N8N_WEBHOOK_URL', 'DANA_WEBHOOK_URL'];
const missingEnvVars = requiredEnvVars.filter(v => !process.env[v]);
if (missingEnvVars.length > 0) {
  console.error('❌ Missing required environment variables:', missingEnvVars.join(', '));
  console.error('Please create a .env file with the following variables:');
  console.error(`
VITE_N8N_WEBHOOK_URL=your_contact_webhook_url
DANA_WEBHOOK_URL=your_dana_webhook_url
  `);
  process.exit(1);
}

// Validate webhook URLs
const WEBHOOKS = {
  CONTACT: process.env.VITE_N8N_WEBHOOK_URL,
  DANA: process.env.DANA_WEBHOOK_URL
};

// Validate URL format
Object.entries(WEBHOOKS).forEach(([name, url]) => {
  try {
    new URL(url);
  } catch (error) {
    console.error(`❌ Invalid URL format for ${name} webhook:`, url);
    process.exit(1);
  }
});

const TIMEOUT_MS = 30000; // 30 seconds timeout

/**
 * Send data to a webhook and handle the response
 */
async function sendToWebhook(url, data) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'User-Agent': 'Webhook-Test-Script/1.0'
      },
      body: JSON.stringify(data),
      signal: controller.signal
    });

    let responseData;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }

    return { 
      success: response.ok, 
      status: response.status,
      statusText: response.statusText,
      data: responseData,
      headers: Object.fromEntries(response.headers)
    };
  } catch (error) {
    if (error.name === 'AbortError') {
      return {
        success: false,
        error: `Request timed out after ${TIMEOUT_MS/1000} seconds`,
        details: 'The webhook did not respond in time'
      };
    }
    return { 
      success: false, 
      error: error.message,
      details: error.stack 
    };
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Test the contact form webhook
 */
async function testContactWebhook() {
  const payload = {
    name: "Erik Svensson",
    email: "erik.svensson@techcompany.se",
    phone: "+46 70 123 4567",
    website: "https://techcompany.se",
    message: "Hej! Vi behöver hjälp med att modernisera vår e-handelsplattform.",
    timestamp: new Date().toISOString(),
    source: 'website_contact_form'
  };

  const result = await sendToWebhook(WEBHOOKS.CONTACT, payload);
  return { type: 'Contact Form', payload, ...result };
}

/**
 * Test the Dana conversation webhook
 */
async function testDanaWebhook() {
  const payload = {
    "Full Name": "Maria Lindström",
    "Conversation Id": "dana-" + Date.now(),
    "Date Submitted": new Date().toISOString().split('.')[0]+"Z",
    "Email": "maria.lindstrom@digitalstrategi.se",
    "Phone Number": "+46 73 987 6543",
    "Companies": "Digital Strategi Stockholm AB",
    "User Intent": "Exploring AI automation for marketing",
    "Message": "Inquiry about AI solutions for digital marketing automation",
    "Transcript": "Sample conversation transcript...",
    "Summary": "Discussion about AI-powered marketing automation",
    "Sentiment": "positive",
    "Source": "dana_voice_agent"
  };

  const result = await sendToWebhook(WEBHOOKS.DANA, payload);
  return { type: 'Dana Conversation', payload, ...result };
}

/**
 * Format test results for display
 */
function formatTestResult(result) {
  const status = result.success ? '✅' : '❌';
  const details = result.success 
    ? `Status: ${result.status}\nResponse: ${JSON.stringify(result.data, null, 2)}`
    : `Error: ${result.error}\nDetails: ${result.details}`;
  
  return [
    `\n${status} ${result.type}`,
    'Payload:',
    JSON.stringify(result.payload, null, 2),
    '\nResult:',
    details,
    '-------------------'
  ].join('\n');
}

/**
 * Run all tests
 */
async function runTests() {
  const separator = '\n===================\n';
  
  process.stdout.write('Testing webhooks...\n');
  
  try {
    const results = await Promise.all([
      testContactWebhook(),
      testDanaWebhook()
    ]);

    const summary = results
      .map(formatTestResult)
      .join('\n');

    const succeeded = results.filter(r => r.success).length;
    const failed = results.length - succeeded;
    
    console.log(separator);
    console.log(summary);
    console.log(separator);
    console.log(`Results: ${succeeded} passed, ${failed} failed`);
    
    // Exit with error code if any test failed
    process.exit(failed ? 1 : 0);
  } catch (error) {
    console.error('Test execution failed:', error);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run all tests
runTests(); 