// Simple test script to check if the webhook is active
import fetch from 'node-fetch';

async function testWebhookActive() {
  const webhookUrl = 'https://skylandai.app.n8n.cloud/webhook/914fbbce-c3d8-4760-bbce-fe5f6376700b';
  
  const simpleTestData = {
    "test": "true",
    "message": "Checking if webhook is active"
  };

  console.log('Sending simple test data to check webhook status...');
  
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(simpleTestData)
    });

    console.log('Response status:', response.status);
    let responseData;
    
    try {
      responseData = await response.json();
      console.log('Response data (JSON):', responseData);
    } catch (e) {
      responseData = await response.text();
      console.log('Response data (Text):', responseData);
    }

    if (response.status === 404) {
      console.log('IMPORTANT: Your n8n workflow needs to be activated!');
      console.log('Go to your n8n dashboard and toggle the workflow to active status.');
    } else if (response.status === 200) {
      console.log('Webhook is active and working!');
    }
  } catch (error) {
    console.error('Error testing webhook:', error);
  }
}

// Run the test
testWebhookActive(); 