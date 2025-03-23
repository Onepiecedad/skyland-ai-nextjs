// Test script to send simplified Dana AI conversation data to the webhook
import fetch from 'node-fetch';

async function sendSimpleDanaTest() {
  const webhookUrl = 'https://skylandai.app.n8n.cloud/webhook/914fbbce-c3d8-4760-bbce-fe5f6376700b';
  
  // Create a simpler structure that includes the type field for IF node routing
  const simpleDanaData = {
    "type": "post_call_transcription",
    "Full Name": "Dana Test User",
    "Conversation Id": "dana-" + Date.now(),
    "Date Submitted": new Date().toISOString().split('.')[0]+"Z",
    "Email": "dana-test@example.com",
    "Phone Number": "+46 73 555 1234",
    "Companies": "Dana Test AB",
    "User intent": "Dana AI test submission",
    "Message": "This is a test for Dana AI path in n8n",
    "Transcript": "Agent: Hi there! User: Hello, testing. Agent: Thanks for testing!",
    "Summary": "Test conversation for Dana path",
    "Sentiment": "positive",
    "Source": "dana_ai_voice_agent"
  };

  console.log('Sending simplified Dana test data to webhook...');
  
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(simpleDanaData)
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

    console.log('Test completed successfully');
  } catch (error) {
    console.error('Error sending test data:', error);
  }
}

// Run the test
sendSimpleDanaTest(); 