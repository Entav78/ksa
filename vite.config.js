import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/ksa/",  // Ensure correct paths for GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),  // Main index.html
        skagerakSwim: resolve(__dirname, "src/pages/skagerakSwim.html"),
        treningstider: resolve(__dirname, "src/pages/treningstider.html"),
        nyIKlubben: resolve(__dirname, "src/pages/nyIKlubben.html"),
        sponsorer: resolve(__dirname, "src/pages/sponsorer.html"),
      },
    },
  },
});






