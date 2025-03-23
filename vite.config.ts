import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    host: '127.0.0.1',
    strictPort: false,
    watch: {
      usePolling: true,
      interval: 100
    },
    hmr: {
      timeout: 5000
    },
    open: true
  }
});
