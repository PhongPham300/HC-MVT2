import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Important for deploying to GitHub Pages or subdirectories
  build: {
    outDir: 'dist',
  }
});