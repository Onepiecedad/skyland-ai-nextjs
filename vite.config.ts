import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true, // Listen on all addresses
    open: true, // Open browser on start
    cors: true, // Enable CORS
  },
});
