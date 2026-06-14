import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Use relative paths for built assets
  plugins: [], // Added for Cloudflare Wrangler compatibility
});
