import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/ksa/",  // Ensure correct GitHub Pages base path
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),  // Main index.html
        skagerakSwim: resolve(__dirname, "src/skagerakSwim.html"),
        treningstider: resolve(__dirname, "src/treningstider.html"),
        nyIKlubben: resolve(__dirname, "src/nyIKlubben.html"),
        sponsorer: resolve(__dirname, "src/sponsorer.html"),
      },
    },
  },
});







