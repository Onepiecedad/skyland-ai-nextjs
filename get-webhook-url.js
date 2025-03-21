// Simple script to help identify the correct webhook URL for your n8n workflow

// Use this to test your workflow directly in the n8n interface:
console.log("To test your workflow in n8n:");
console.log("1. Go to your n8n workflow editor");
console.log("2. Click on the webhook node to select it");
console.log("3. Look for the 'Webhook URLs' section in the node settings");
console.log("4. Copy the 'Production' URL (should start with https://skylandai.app.n8n.cloud/webhook/)");
console.log("5. Make sure your workflow is activated (toggle in top right)");
console.log("\nAlternatively, click the 'Test workflow' button in n8n to test with sample data");

// Tips for configuring the Airtable node:
console.log("\n----- Airtable Configuration Guide -----");
console.log("1. Click on the Airtable node in your workflow");
console.log("2. Select or create Airtable credentials (API Key)");
console.log("3. Select your Base and Table");
console.log("4. Map these incoming fields to your Airtable columns:");
console.log("   - Full Name → Name/Contact column");
console.log("   - Email → Email column");
console.log("   - Phone Number → Phone column");
console.log("   - Companies → Company column");
console.log("   - Message → Message/Notes column");
console.log("   - User intent → Lead Source/Intent column");
console.log("   - Conversation Id → Unique ID column (if available)");
console.log("   - Transcript → Notes/Conversation column (for Dana data)");
console.log("   - Summary → Summary/Notes column (for Dana data)");
console.log("   - Sentiment → Sentiment column (if available)");
console.log("   - Source → Lead Source column");
console.log("   - Date Submitted → Date column");
console.log("\n5. Save your workflow after configuration");
console.log("6. Test the complete workflow using the 'Test workflow' button"); 