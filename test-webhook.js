import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const testWebhook = async () => {
  try {
    const webhookUrl = 'https://skylandai.app.n8n.cloud/webhook/395ed9c4-a6dd-4428-91da-73e50b089783';
    console.log('Using webhook URL:', webhookUrl);
    
    const payload = {
      name: "Erik Svensson",
      email: "erik.svensson@techcompany.se",
      phone: "+46 70 123 4567",
      website: "https://techcompany.se",
      message: "Hej! Vi behöver hjälp med att modernisera vår e-handelsplattform. Kan ni hjälpa oss med design och implementation?",
      timestamp: new Date().toISOString(),
      source: 'website_contact_form'
    };
    
    console.log('Sending payload:', JSON.stringify(payload, null, 2));
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log('Response status:', response.status);
    const data = await response.json();
    console.log('Response data:', JSON.stringify(data, null, 2));

  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      stack: error.stack
    });
  }
};

testWebhook(); 