# ElevenLabs Setup Guide

This guide will help you set up the Dana Chat component with a valid ElevenLabs API key.

## Getting an API Key

1. Go to [ElevenLabs](https://elevenlabs.io/) and create an account or log in to your existing account.
2. Navigate to your profile settings (click on your avatar in the top-right corner).
3. In the profile settings, find the "API Key" section.
4. Copy your API key (it should look like a long string of characters).

## Configuring the Application

1. Open the `elevenlabs-config.json` file in the root of the project.
2. Replace the placeholder text with your actual API key:
   ```json
   {
     "apiKey": "YOUR_ACTUAL_API_KEY_HERE",
     "agentId": "4mN4rizdi79gwLhFxlOu",
     "updatedAt": "2025-03-20T14:30:00.000Z"
   }
   ```
3. Save the file.
4. Restart the proxy server:
   ```
   npx kill-port 8080
   npm run proxy
   ```

## Verifying the Setup

1. After restarting the server, open your browser to http://localhost:8081
2. Click on the "Dana Chat" button in the bottom-right corner.
3. If everything is set up correctly, you should be able to start a conversation with Dana.

## Troubleshooting

### API Key Issues

- If you see "Invalid API key" errors, double-check that you've copied the entire API key correctly.
- Make sure there are no extra spaces or characters in the API key.
- Verify that your ElevenLabs account is active and the API key hasn't expired.

### Agent ID Issues

- If the API key is valid but you're seeing agent-related errors, you may need to adjust the agent ID.
- In the Dana Chat configuration panel, you can enter a different agent ID if needed.
- To view available agents in your account, use the "Test API" button in the configuration panel.

### Connection Issues

- If you're having connection issues, make sure both the development server (port 8081) and the proxy server (port 8080) are running.
- Check the network tab in your browser's developer tools for any API or WebSocket connection errors. 