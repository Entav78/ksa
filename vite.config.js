import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/ksa/",  // Ensure correct GitHub Pages base path
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),  // Main index.html
        skagerakSwim: resolve(__dirname, "skagerakSwim.html"),
        treningstider: resolve(__dirname, "treningstider.html"),
        nyIKlubben: resolve(__dirname, "nyIKlubben.html"),
        sponsorer: resolve(__dirname, "sponsorer.html"),
      },
    },
  },
});







