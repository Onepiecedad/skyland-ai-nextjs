import { useState, useEffect, useCallback, useRef } from 'react';
import { ElevenLabsService, SpeechOptions, getElevenLabsService } from '../services/ElevenLabsService';
import { Voice } from 'elevenlabs/api';

interface UseElevenLabsOptions {
  apiKey?: string;
  defaultVoiceId?: string;
  defaultModelId?: string;
  autoInitialize?: boolean;
}

interface UseElevenLabsReturn {
  isInitialized: boolean;
  isLoading: boolean;
  error: string | null;
  voices: Voice[];
  selectedVoice: Voice | null;
  setSelectedVoice: (voice: Voice) => void;
  loadVoices: () => Promise<Voice[]>;
  speak: (text: string, options?: SpeechOptions) => Promise<boolean>;
  streamSpeech: (text: string, options?: SpeechOptions) => Promise<boolean>;
  stop: () => void;
  isPlaying: boolean;
}

export function useElevenLabs(options: UseElevenLabsOptions = {}): UseElevenLabsReturn {
  const {
    apiKey = '',
    defaultVoiceId = 'EXAVITQu4vr4xnSDxMaL', // Rachel voice ID
    defaultModelId = 'eleven_multilingual_v2',
    autoInitialize = true,
  } = options;

  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [voices, setVoices] = useState<Voice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<Voice | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  
  // Use ref for the service to maintain reference across renders
  const serviceRef = useRef<ElevenLabsService | null>(null);
  
  // Initialize the service
  useEffect(() => {
    if (!isInitialized && apiKey && autoInitialize) {
      initialize();
    }
  }, [apiKey, autoInitialize]);

  // Initialize the service
  const initialize = useCallback(async () => {
    try {
      serviceRef.current = getElevenLabsService({
        apiKey,
        voiceId: defaultVoiceId,
        modelId: defaultModelId,
      });
      
      setIsInitialized(true);
      
      // Load voices if service was initialized
      if (autoInitialize) {
        await loadVoices();
      }
    } catch (err) {
      console.error('Failed to initialize ElevenLabs service', err);
      setError('Failed to initialize ElevenLabs service');
    }
  }, [apiKey, defaultVoiceId, defaultModelId, autoInitialize]);

  // Load available voices
  const loadVoices = useCallback(async (): Promise<Voice[]> => {
    if (!serviceRef.current) {
      setError('ElevenLabs service not initialized');
      return [];
    }

    setIsLoading(true);
    setError(null);

    try {
      const fetchedVoices = await serviceRef.current.getVoices();
      setVoices(fetchedVoices);
      
      // Set the default selected voice
      if (fetchedVoices.length > 0 && !selectedVoice) {
        const defaultVoice = fetchedVoices.find(v => v.voice_id === defaultVoiceId) || fetchedVoices[0];
        setSelectedVoice(defaultVoice);
      }
      
      return fetchedVoices;
    } catch (err) {
      console.error('Failed to load voices', err);
      setError('Failed to load voices');
      return [];
    } finally {
      setIsLoading(false);
    }
  }, [defaultVoiceId, selectedVoice]);

  // Speak text using the selected voice
  const speak = useCallback(async (text: string, options: SpeechOptions = {}): Promise<boolean> => {
    if (!serviceRef.current) {
      setError('ElevenLabs service not initialized');
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Use the selected voice ID if available
      const voiceId = options.voiceId || (selectedVoice?.voice_id) || defaultVoiceId;
      
      setIsPlaying(true);
      const success = await serviceRef.current.speakText(text, {
        ...options,
        voiceId,
      });
      
      return success;
    } catch (err) {
      console.error('Failed to speak text', err);
      setError('Failed to speak text');
      return false;
    } finally {
      setIsLoading(false);
      // Note: isPlaying will be set to false by the audio.onended callback
    }
  }, [defaultVoiceId, selectedVoice]);

  // Stream speech for longer texts (better UX)
  const streamSpeech = useCallback(async (text: string, options: SpeechOptions = {}): Promise<boolean> => {
    if (!serviceRef.current) {
      setError('ElevenLabs service not initialized');
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      const voiceId = options.voiceId || (selectedVoice?.voice_id) || defaultVoiceId;
      const stream = await serviceRef.current.streamSpeech(text, {
        ...options,
        voiceId,
      });

      if (!stream) {
        setError('Failed to stream speech');
        return false;
      }

      // Create a MediaSource and connect it to an audio element
      const audioElement = new Audio();
      setIsPlaying(true);

      // Handle the stream
      const mediaSource = new MediaSource();
      audioElement.src = URL.createObjectURL(mediaSource);
      
      mediaSource.addEventListener('sourceopen', async () => {
        const sourceBuffer = mediaSource.addSourceBuffer('audio/mpeg');
        const reader = stream.getReader();

        async function readChunk() {
          const { done, value } = await reader.read();
          
          if (done) {
            mediaSource.endOfStream();
            return;
          }

          // Append the chunk to the source buffer
          sourceBuffer.appendBuffer(value);
          
          // Continue reading
          sourceBuffer.addEventListener('updateend', readChunk, { once: true });
        }

        readChunk();
      });

      // Set up event handlers
      audioElement.onended = () => {
        setIsPlaying(false);
        URL.revokeObjectURL(audioElement.src);
      };

      audioElement.onerror = (err) => {
        console.error('Audio playback error', err);
        setIsPlaying(false);
        setError('Audio playback error');
        URL.revokeObjectURL(audioElement.src);
      };

      await audioElement.play();
      return true;

    } catch (err) {
      console.error('Failed to stream speech', err);
      setError('Failed to stream speech');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [defaultVoiceId, selectedVoice]);

  // Stop audio playback
  const stop = useCallback(() => {
    if (serviceRef.current) {
      serviceRef.current.stopAudio();
      setIsPlaying(false);
    }
  }, []);

  return {
    isInitialized,
    isLoading,
    error,
    voices,
    selectedVoice,
    setSelectedVoice,
    loadVoices,
    speak,
    streamSpeech,
    stop,
    isPlaying,
  };
} 