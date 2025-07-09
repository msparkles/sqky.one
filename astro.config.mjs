// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://sqky.one",
    experimental: {
        clientPrerender: true,
        contentIntellisense: true,
    },
    vite: {
        css: {
            transformer: "postcss",
        },
    },
});
