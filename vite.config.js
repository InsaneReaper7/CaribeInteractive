import { defineConfig } from 'vite';

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  base: './', // Use relative paths for built assets
  plugins: [cloudflare()], // Added for Cloudflare Wrangler compatibility
});