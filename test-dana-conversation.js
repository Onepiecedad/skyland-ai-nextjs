import fetch from 'node-fetch';

const testDanaConversation = async () => {
  try {
    const webhookUrl = 'https://skylandai.app.n8n.cloud/webhook/914fbbce-c3d8-4760-bbce-fe5f6376700b';
    console.log('Using webhook URL:', webhookUrl);
    
    const conversationData = {
      // Airtable Fields
      "Full Name": "Maria Lindström",
      "Conversation Id": "dana-" + Date.now(),
      "Date Submitted": new Date().toISOString().split('.')[0]+"Z",  // Format: YYYY-MM-DDTHH:mm:ssZ
      "Email": "maria.lindstrom@digitalstrategi.se",
      "Phone Number": "+46 73 987 6543",
      "Companies": "Digital Strategi Stockholm AB",
      "User intent": "Exploring AI automation for marketing and content creation",
      "Message": "Inquiry about AI solutions for digital marketing automation and content generation",
      "Transcript": `User: Hi Dana, I'm interested in using AI for our digital marketing. Can you help?\n
Dana: Hello! Of course, I'd be happy to explain how AI can enhance your digital marketing efforts. AI can be particularly powerful in several areas:\n
1. Content creation and optimization
2. Social media management
3. Customer segmentation
4. Marketing analytics
Which of these areas interests you the most?\n
User: Content creation sounds interesting. How does that work?\n
Dana: AI can assist with content creation in multiple ways:\n
1. Generate blog post ideas and outlines
2. Create social media posts and captions
3. Write email marketing copy
4. Optimize content for SEO
5. Generate product descriptions
The AI analyzes your brand voice and target audience to create relevant, engaging content while saving you time.\n
User: That's exactly what we need! How long does it take to implement?\n
Dana: Implementation time varies but typically takes 2-4 weeks. We start with:\n
1. Initial setup and brand voice training
2. Content strategy alignment
3. Test runs and refinement
4. Team training
Would you like to discuss specific implementation plans for your company?\n
User: Yes, we'd definitely be interested in learning more.\n
Dana: Great! I recommend scheduling a detailed consultation to discuss your specific needs and create a customized implementation plan. Would you like me to have someone reach out to you?`,
      "Summary": "Discussion about AI-powered content creation and marketing automation, focusing on implementation timeline and capabilities. Client showed strong interest in moving forward with implementation.",
      "Sentiment": "positive",
      "Source": "dana_voice_agent",
      
      // Metadata (not stored in Airtable but useful for processing)
      timestamp: new Date().toISOString()
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

testDanaConversation(); 