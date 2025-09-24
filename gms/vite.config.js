import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    fs: {
      // Allow serving files from these directories
      allow: ['..']
    }
  },
  build: {
    // Ensure proper chunking
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});