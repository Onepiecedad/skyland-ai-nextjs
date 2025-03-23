// Test script to send sample Dana AI conversation data to the webhook
import fetch from 'node-fetch';

async function sendDanaConversationTest() {
  const webhookUrl = 'https://skylandai.app.n8n.cloud/webhook/914fbbce-c3d8-4760-bbce-fe5f6376700b';
  
  const danaConversationData = {
    "type": "post_call_transcription",
    "event_timestamp": Math.floor(Date.now() / 1000),
    "body": {
      "type": "post_call_transcription",
      "event_timestamp": Math.floor(Date.now() / 1000),
      "data": {
        "agent_id": "4mN4rizdi79gwLhFxlOu",
        "conversation_id": "test-conv-" + Date.now(),
        "status": "done",
        "transcript": [
          {
            "role": "agent",
            "message": "Hi there. I'm Dana from Skyland AI Solutions. How are you today?",
            "time_in_call_secs": 0
          },
          {
            "role": "user",
            "message": "I'm good. Just testing the webhook integration.",
            "time_in_call_secs": 4
          },
          {
            "role": "agent",
            "message": "Great! This is a test conversation for webhook integration.",
            "time_in_call_secs": 8
          }
        ],
        "metadata": {
          "start_time_unix_secs": Math.floor(Date.now() / 1000) - 30,
          "call_duration_secs": 30
        },
        "analysis": {
          "data_collection_results": {
            "Email": {
              "data_collection_id": "Email",
              "value": "test@example.com",
              "rationale": "The user provided their email address during the conversation."
            },
            "Phone Number": {
              "data_collection_id": "Phone Number",
              "value": "+46 73 111 2222",
              "rationale": "The user provided their phone number during the conversation."
            },
            "Full Name": {
              "data_collection_id": "Full Name",
              "value": "Test Dana User",
              "rationale": "The user provided their name during the conversation."
            },
            "Companies": {
              "data_collection_id": "Companies",
              "value": "Test Company AB",
              "rationale": "The user mentioned their company name during the conversation."
            }
          },
          "transcript_summary": "Brief test conversation for webhook integration testing. The user is testing Dana AI integration with n8n.",
          "call_successful": "success"
        }
      }
    }
  };

  console.log('Sending test Dana data to webhook...');
  
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'elevenlabs-signature': 't='+Math.floor(Date.now()/1000)+',v0=dummysignature123456'
      },
      body: JSON.stringify(danaConversationData)
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
sendDanaConversationTest(); 