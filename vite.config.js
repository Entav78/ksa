import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/ksa/" : "/", // Use "/ksa/" for production, "/" for local
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        skagerakSwim: resolve(__dirname, "skagerakSwim.html"),
        treningstider: resolve(__dirname, "treningstider.html"),
        nyIKlubben: resolve(__dirname, "nyIKlubben.html"),
        sponsorer: resolve(__dirname, "sponsorer.html"),
      },
    },
  },
}));








