// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://myhabitshero.com', // your custom domain
  base: '/', // root path
  vite: {
    plugins: [tailwindcss()],
  },
});
