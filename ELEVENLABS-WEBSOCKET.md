# ElevenLabs WebSocket Integration

This document explains how to integrate ElevenLabs Conversational AI with WebSockets in a React application.

## Overview

The Dana AI agent uses WebSockets to stream audio data between the client and ElevenLabs' servers. This document explains the connection flow, configuration, and common issues.

## Connection Flow

The connection process follows these steps:

1. **Get Signed URL**: First, obtain a signed WebSocket URL from ElevenLabs' API
2. **Establish WebSocket Connection**: Connect to the signed URL
3. **Initialize Conversation**: Send initialization data to start the conversation
4. **Stream Audio**: Send audio from microphone and receive responses

## Implementation

### 1. Proxy Server

Our implementation uses a proxy server (`server.js`) that:
- Forwards REST API requests to ElevenLabs
- Manages WebSocket connections
- Handles authentication with the API key

```javascript
// Handle WebSocket connections
wss.on('connection', (ws, req) => {
  // Extract agent ID from query
  const url = new URL(req.url, `http://${req.headers.host}`);
  const agentId = url.searchParams.get('agent_id');
  
  // Get signed URL from ElevenLabs
  const signedUrlResponse = await fetch(`https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${agentId}`, {
    headers: {
      'xi-api-key': API_KEY
    }
  });
  
  // Connect to ElevenLabs WebSocket with signed URL
  const elevenlabsWs = new WebSocket(signed_url);
  
  // Forward messages between client and ElevenLabs
});
```

### 2. Client Implementation

The client (`DanaChat.tsx`) handles:
- UI for the chat interface
- Microphone capture and streaming
- WebSocket connection management
- Message processing

```javascript
// Connect to proxy server's WebSocket endpoint
const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
const wsUrl = `${protocol}//${window.location.hostname}:8080/api/elevenlabs/convai/conversation?agent_id=${agentId}`;
const ws = new WebSocket(wsUrl);
```

## Recent Fixes

We addressed several issues in our implementation:

1. **JSON Parsing Issues**: Fixed config file parsing by trimming whitespace
2. **Port Mismatch**: Ensured WebSocket connection uses port 8080 (proxy) not 8081 (dev server)
3. **Enhanced Logging**: Added detailed logging of WebSocket connections and messages
4. **Error Handling**: Improved error messages and connection timeout handling

## Configuration

Configuration is stored in `elevenlabs-config.json`:

```json
{
  "apiKey": "your_api_key_here",
  "agentId": "your_agent_id_here"
}
```

## Troubleshooting

Common issues and solutions:

1. **"WebSocket closed before connection established"**:
   - Check that the proxy server is running on port 8080
   - Verify API key has permissions for Conversational AI

2. **"API key is invalid"**:
   - Ensure your API key has permissions for the Conversational AI feature
   - Check that the key is correctly formatted with no whitespace

3. **"Agent not found"**:
   - Verify your agent ID is correct 
   - Ensure the agent is properly configured in ElevenLabs dashboard

## Testing

Use the test endpoint to verify your configuration:

```
GET /test-elevenlabs-api
```

This will check:
- API key validity
- Agent access
- Signed URL generation

## References

- [ElevenLabs API Documentation](https://docs.elevenlabs.io/api-reference/websocket-endpoint)
- [WebSocket API Standard](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) 