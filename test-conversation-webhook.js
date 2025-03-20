import fetch from 'node-fetch';

const testConversationWebhook = async () => {
  try {
    const webhookUrl = 'https://skylandai.app.n8n.cloud/webhook/395ed9c4-a6dd-4428-91da-73e50b089783';
    console.log('Using webhook URL:', webhookUrl);
    
    const conversationData = {
      conversation_id: 'test-conversation-123',
      transcript: 'User: How can AI help my business?\nDana: AI can help automate tasks, improve customer service, and increase efficiency...',
      summary: 'Discussion about AI business applications and automation possibilities',
      user_intent: 'Seeking information about AI business solutions',
      timestamp: new Date().toISOString(),
      source: 'dana_voice_agent',
      metadata: {
        duration: 180, // conversation duration in seconds
        turns: 4, // number of conversation turns
        language: 'en-US'
      }
    };
    
    console.log('Sending conversation data:', JSON.stringify(conversationData, null, 2));
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(conversationData)
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

testConversationWebhook(); 