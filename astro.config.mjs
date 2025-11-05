import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      // Disable the default base styles
      applyBaseStyles: false,
    }),
  ],
});
