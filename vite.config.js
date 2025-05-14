import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; 

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: "dist",
  },
  /*
  corePlugins: {
    preflight: false, // disables Tailwind base styles (OPTIONAL if needed)
  },*/
});










