// This script creates a comprehensive test payload to help with Airtable field mapping
// It includes both form and Dana data examples

async function sendAirtableTestData() {
  // Define the webhook URL - make sure this is your actual webhook URL
  const webhookUrl = 'https://skylandai.app.n8n.cloud/webhook/914fbbce-c3d8-4760-bbce-fe5f6376700b';
  
  // Form submission example - Complete with all fields
  const formTestData = {
    "type": "form",
    "Full Name": "John Doe",
    "Conversation Id": "form-" + Date.now(),
    "Date Submitted": new Date().toISOString().split('.')[0]+"Z",
    "Email": "john.doe@example.com",
    "Phone Number": "+46 73 123 4567",
    "Companies": "Acme Corporation",
    "User intent": "Contact form submission",
    "Message": "I would like to learn more about your services and how they could benefit my business.",
    "Transcript": "",
    "Summary": "",
    "Sentiment": "neutral",
    "Source": "website_contact_form"
  };
  
  // Dana AI conversation example - Complete with all fields
  const danaTestData = {
    "type": "dana",
    "Full Name": "Jane Smith",
    "Conversation Id": "dana-" + Date.now(),
    "Date Submitted": new Date().toISOString().split('.')[0]+"Z",
    "Email": "jane.smith@example.com",
    "Phone Number": "+46 70 987 6543",
    "Companies": "Globex Inc.",
    "User intent": "Product inquiry",
    "Message": "Initial question about product features",
    "Transcript": "User: Can you tell me about your AI solutions?\nDana: We offer custom AI solutions for various business needs including customer service automation, data analysis, and predictive modeling.\nUser: What about pricing?\nDana: Our pricing is tailored to each client's specific needs. I'd be happy to arrange a call with our sales team to discuss your requirements in detail.",
    "Summary": "Jane was inquiring about our AI product features and pricing. She represents Globex Inc. and showed interest in how our solutions could be implemented at her company.",
    "Sentiment": "positive",
    "Source": "dana_ai_conversation"
  };

  // Choose which data to send (uncomment one)
  const testData = formTestData;
  // const testData = danaTestData;  // Using Dana data as it has more fields filled out

  try {
    console.log(`Sending test data to webhook: ${JSON.stringify(testData, null, 2)}`);
    
    // Send POST request to webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    // Get response data
    let responseData;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }

    // Output results
    console.log(`Response status: ${response.status}`);
    console.log(`Response data: ${JSON.stringify(responseData)}`);
    console.log('Test completed successfully');
  } catch (error) {
    console.error('Error sending test data:', error);
  }
}

// Execute the function
sendAirtableTestData(); 