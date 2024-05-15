import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  logLevel: 'silent',
  plugins: [react()],
  server: { open: true, port: 3000 },
  build: {
    outDir: 'dist', // output build to directory name dist - this works with default netlify configs
  },
  resolve: {
    alias: {
      '@src': '/src',
      '@comp': '/src/components',
      '@context': '/src/contexts',
      '@page': '/src/pages',
      '@asset': '/src/assets',
      '@class': '/src/classes',
      '@hook': '/src/hooks',
      '@ref': '/src/reference',
      '@content': '/src/content',
    },
  },
});
