import { defineConfig } from 'vite';

export default defineConfig({
  base: "/ksa/",  // Ensure correct GitHub Pages base path
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name][extname]",  // Keep predictable file names
      },
    },
  },
});


