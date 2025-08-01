import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  base: "/miwa/", // ⬅️ penting untuk GitHub Pages
  integrations: [tailwind()],
});
