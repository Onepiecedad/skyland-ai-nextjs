import fetch from 'node-fetch';

const testWebhook = async () => {
  try {
    const webhookUrl = 'https://skylandai.app.n8n.cloud/webhook/395ed9c4-a6dd-4428-91da-73e50b089783';
    console.log('Using webhook URL:', webhookUrl);
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        workflow_data: {
          name: "Test User",
          email: "test@example.com",
          phone: "+46 70 123 4567",
          website: "https://company-test.com",
          message: "Test message",
          timestamp: new Date().toISOString(),
          source: 'website_contact_form'
        }
      }),
    });

    console.log('Response status:', response.status);
    const data = await response.json();
    console.log('Response data:', data);

  } catch (error) {
    console.error('Error:', error);
  }
};

testWebhook(); 