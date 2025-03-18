import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  base: "/ksa/",  // Ensure GitHub Pages uses the correct base path
  plugins: [
    createHtmlPlugin({ minify: true }), // Ensures all HTML files get processed
  ],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        nyIKlubben: "src/pages/nyIKlubben.html",
        skagerakSwim: "src/pages/skagerakSwim.html",
        sponsorer: "src/pages/sponsorer.html",
        treningstider: "src/pages/treningstider.html",
      },
      output: {
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
});





