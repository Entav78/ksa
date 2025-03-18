import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  base: "/ksa/",
  plugins: [
    createHtmlPlugin({
      minify: true, // Minify HTML for better performance
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        nyIKlubben: "public/nyIKlubben.html",
        skagerakSwim: "public/skagerakSwim.html",
        sponsorer: "public/sponsorer.html",
        treningstider: "public/treningstider.html",
      },
      output: {
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
});



