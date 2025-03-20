import { Voice } from 'elevenlabs/api';

// Define the API key type - can be stored in .env or passed in
type ApiKeyProvider = string | (() => string) | (() => Promise<string>);

export interface ElevenLabsConfig {
  apiKey?: ApiKeyProvider;
  voiceId?: string;
  modelId?: string;
}

// Speech generation options
export interface SpeechOptions {
  voiceId?: string;
  modelId?: string;
  stability?: number;
  similarityBoost?: number;
  style?: number;
  speakerBoost?: boolean;
}

// Define our service class
export class ElevenLabsService {
  private apiKey: ApiKeyProvider;
  private defaultVoiceId: string;
  private defaultModelId: string;
  private audio: HTMLAudioElement | null = null;
  
  constructor(config: ElevenLabsConfig = {}) {
    this.apiKey = config.apiKey || '';
    this.defaultVoiceId = config.voiceId || 'EXAVITQu4vr4xnSDxMaL'; // Default voice (Rachel)
    this.defaultModelId = config.modelId || 'eleven_multilingual_v2'; // Default model
  }

  // Helper to resolve the API key (could be a function)
  private async resolveApiKey(): Promise<string> {
    if (typeof this.apiKey === 'function') {
      return await this.apiKey();
    }
    return this.apiKey as string;
  }

  // List available voices
  public async getVoices(): Promise<Voice[]> {
    try {
      const apiKey = await this.resolveApiKey();
      const response = await fetch('https://api.elevenlabs.io/v1/voices', {
        method: 'GET',
        headers: {
          'xi-api-key': apiKey,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch voices: ${response.statusText}`);
      }

      const data = await response.json();
      return data.voices || [];
    } catch (error) {
      console.error('Error fetching voices:', error);
      return [];
    }
  }

  // Generate speech from text
  public async generateSpeech(
    text: string, 
    options: SpeechOptions = {}
  ): Promise<ArrayBuffer | null> {
    try {
      const apiKey = await this.resolveApiKey();
      const voiceId = options.voiceId || this.defaultVoiceId;
      const modelId = options.modelId || this.defaultModelId;
      
      const response = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
        {
          method: 'POST',
          headers: {
            'xi-api-key': apiKey,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text,
            model_id: modelId,
            voice_settings: {
              stability: options.stability ?? 0.5,
              similarity_boost: options.similarityBoost ?? 0.75,
              style: options.style ?? 0,
              use_speaker_boost: options.speakerBoost ?? true,
            },
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to generate speech: ${errorText}`);
      }

      return await response.arrayBuffer();
    } catch (error) {
      console.error('Error generating speech:', error);
      return null;
    }
  }

  // Play audio directly
  public async speakText(text: string, options: SpeechOptions = {}): Promise<boolean> {
    try {
      const audioData = await this.generateSpeech(text, options);
      if (!audioData) return false;

      // Stop any currently playing audio
      this.stopAudio();

      // Create a new audio element
      const blob = new Blob([audioData], { type: 'audio/mpeg' });
      const url = URL.createObjectURL(blob);
      this.audio = new Audio(url);
      
      // Set up cleanup
      this.audio.onended = () => {
        if (this.audio) {
          URL.revokeObjectURL(url);
          this.audio = null;
        }
      };

      // Play the audio
      await this.audio.play();
      return true;
    } catch (error) {
      console.error('Error speaking text:', error);
      return false;
    }
  }

  // Stop any currently playing audio
  public stopAudio(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = null;
    }
  }

  // Stream audio for real-time playback (better UX for longer texts)
  public async streamSpeech(
    text: string,
    options: SpeechOptions = {}
  ): Promise<ReadableStream<Uint8Array> | null> {
    try {
      const apiKey = await this.resolveApiKey();
      const voiceId = options.voiceId || this.defaultVoiceId;
      const modelId = options.modelId || this.defaultModelId;
      
      const response = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream`,
        {
          method: 'POST',
          headers: {
            'xi-api-key': apiKey,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text,
            model_id: modelId,
            voice_settings: {
              stability: options.stability ?? 0.5,
              similarity_boost: options.similarityBoost ?? 0.75,
              style: options.style ?? 0,
              use_speaker_boost: options.speakerBoost ?? true,
            },
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to stream speech: ${errorText}`);
      }

      return response.body;
    } catch (error) {
      console.error('Error streaming speech:', error);
      return null;
    }
  }
}

// Create a singleton instance with default configuration
let elevenLabsServiceInstance: ElevenLabsService | null = null;

export const getElevenLabsService = (config?: ElevenLabsConfig): ElevenLabsService => {
  if (!elevenLabsServiceInstance) {
    elevenLabsServiceInstance = new ElevenLabsService(config);
  }
  return elevenLabsServiceInstance;
}; 