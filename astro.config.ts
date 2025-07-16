import path from "node:path";

import { defineConfig } from "astro/config";

import mainSite from "./src/sites/sqky.one/astro.config";

class Site {
    constructor() {
        throw new Error();
    }

    static Main = "main";
    static Files = "filesArchive";
}

const dir = process.cwd();
const fontsDir = path.join(dir, "fonts");
const sitesDir = path.join(dir, "src", "sites");

const site = process.env["SITE_CONFIG"] ?? Site.Main;
function getConfig(): object {
    if (site === Site.Main) {
        return { ...mainSite, srcDir: path.join(sitesDir, "sqky.one", "src") };
    }

    throw new Error(`Invalid site selection: ${site}`);
}
const config = getConfig();

export default defineConfig({
    ...config,
    vite: {
        css: {
            transformer: "postcss",
        },
        cacheDir: path.join(dir, "node_modules", ".vite"),
    },
    experimental: {
        preserveScriptOrder: true,
        fonts: [
            {
                fallbacks: [],
                provider: "local",
                name: "Iosevka Aile Web",
                cssVariable: "--font-iosevka-aile",
                variants: [
                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-Thin.woff2",
                            fontsDir + "/IosevkaAile/TTF/IosevkaAile-Thin.ttf",
                        ],
                        weight: 100,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-ThinItalic.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-ThinItalic.ttf",
                        ],
                        weight: 100,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-ThinOblique.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-ThinOblique.ttf",
                        ],
                        weight: 100,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-ExtraLight.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-ExtraLight.ttf",
                        ],
                        weight: 200,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-ExtraLightItalic.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-ExtraLightItalic.ttf",
                        ],
                        weight: 200,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-ExtraLightOblique.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-ExtraLightOblique.ttf",
                        ],
                        weight: 200,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-Light.woff2",
                            fontsDir + "/IosevkaAile/TTF/IosevkaAile-Light.ttf",
                        ],
                        weight: 300,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-LightItalic.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-LightItalic.ttf",
                        ],
                        weight: 300,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-LightOblique.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-LightOblique.ttf",
                        ],
                        weight: 300,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-Regular.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-Regular.ttf",
                        ],
                        weight: 400,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-Italic.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-Italic.ttf",
                        ],
                        weight: 400,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-Oblique.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-Oblique.ttf",
                        ],
                        weight: 400,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-Medium.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-Medium.ttf",
                        ],
                        weight: 500,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-MediumItalic.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-MediumItalic.ttf",
                        ],
                        weight: 500,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-MediumOblique.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-MediumOblique.ttf",
                        ],
                        weight: 500,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-SemiBold.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-SemiBold.ttf",
                        ],
                        weight: 600,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-SemiBoldItalic.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-SemiBoldItalic.ttf",
                        ],
                        weight: 600,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-SemiBoldOblique.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-SemiBoldOblique.ttf",
                        ],
                        weight: 600,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-Bold.woff2",
                            fontsDir + "/IosevkaAile/TTF/IosevkaAile-Bold.ttf",
                        ],
                        weight: 700,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-BoldItalic.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-BoldItalic.ttf",
                        ],
                        weight: 700,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-BoldOblique.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-BoldOblique.ttf",
                        ],
                        weight: 700,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-ExtraBold.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-ExtraBold.ttf",
                        ],
                        weight: 800,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-ExtraBoldItalic.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-ExtraBoldItalic.ttf",
                        ],
                        weight: 800,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-ExtraBoldOblique.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-ExtraBoldOblique.ttf",
                        ],
                        weight: 800,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-Heavy.woff2",
                            fontsDir + "/IosevkaAile/TTF/IosevkaAile-Heavy.ttf",
                        ],
                        weight: 900,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-HeavyItalic.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-HeavyItalic.ttf",
                        ],
                        weight: 900,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaAile/WOFF2/IosevkaAile-HeavyOblique.woff2",
                            fontsDir +
                                "/IosevkaAile/TTF/IosevkaAile-HeavyOblique.ttf",
                        ],
                        weight: 900,
                    },
                ],
            },
            {
                fallbacks: [],
                provider: "local",
                name: "Iosevka Curly Slab Web",
                cssVariable: "--font-iosevka-curly-slab",
                variants: [
                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-Thin.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-Thin.ttf",
                        ],
                        weight: 100,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-ThinItalic.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-ThinItalic.ttf",
                        ],
                        weight: 100,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-ThinOblique.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-ThinOblique.ttf",
                        ],
                        weight: 100,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-ExtraLight.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-ExtraLight.ttf",
                        ],
                        weight: 200,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-ExtraLightItalic.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-ExtraLightItalic.ttf",
                        ],
                        weight: 200,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-ExtraLightOblique.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-ExtraLightOblique.ttf",
                        ],
                        weight: 200,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-Light.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-Light.ttf",
                        ],
                        weight: 300,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-LightItalic.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-LightItalic.ttf",
                        ],
                        weight: 300,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-LightOblique.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-LightOblique.ttf",
                        ],
                        weight: 300,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-Regular.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-Regular.ttf",
                        ],
                        weight: 400,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-Italic.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-Italic.ttf",
                        ],
                        weight: 400,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-Oblique.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-Oblique.ttf",
                        ],
                        weight: 400,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-Medium.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-Medium.ttf",
                        ],
                        weight: 500,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-MediumItalic.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-MediumItalic.ttf",
                        ],
                        weight: 500,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-MediumOblique.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-MediumOblique.ttf",
                        ],
                        weight: 500,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-SemiBold.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-SemiBold.ttf",
                        ],
                        weight: 600,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-SemiBoldItalic.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-SemiBoldItalic.ttf",
                        ],
                        weight: 600,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-SemiBoldOblique.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-SemiBoldOblique.ttf",
                        ],
                        weight: 600,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-Bold.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-Bold.ttf",
                        ],
                        weight: 700,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-BoldItalic.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-BoldItalic.ttf",
                        ],
                        weight: 700,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-BoldOblique.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-BoldOblique.ttf",
                        ],
                        weight: 700,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-ExtraBold.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-ExtraBold.ttf",
                        ],
                        weight: 800,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-ExtraBoldItalic.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-ExtraBoldItalic.ttf",
                        ],
                        weight: 800,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-ExtraBoldOblique.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-ExtraBoldOblique.ttf",
                        ],
                        weight: 800,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-Heavy.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-Heavy.ttf",
                        ],
                        weight: 900,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-HeavyItalic.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-HeavyItalic.ttf",
                        ],
                        weight: 900,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaCurlySlab/WOFF2/IosevkaCurlySlab-HeavyOblique.woff2",
                            fontsDir +
                                "/IosevkaCurlySlab/TTF/IosevkaCurlySlab-HeavyOblique.ttf",
                        ],
                        weight: 900,
                    },
                ],
            },
            {
                fallbacks: [],
                provider: "local",
                name: "Iosevka Etoile Web",
                cssVariable: "--font-iosevka-etoile",
                variants: [
                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-Thin.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-Thin.ttf",
                        ],
                        weight: 100,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-ThinItalic.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-ThinItalic.ttf",
                        ],
                        weight: 100,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-ThinOblique.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-ThinOblique.ttf",
                        ],
                        weight: 100,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-ExtraLight.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-ExtraLight.ttf",
                        ],
                        weight: 200,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-ExtraLightItalic.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-ExtraLightItalic.ttf",
                        ],
                        weight: 200,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-ExtraLightOblique.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-ExtraLightOblique.ttf",
                        ],
                        weight: 200,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-Light.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-Light.ttf",
                        ],
                        weight: 300,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-LightItalic.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-LightItalic.ttf",
                        ],
                        weight: 300,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-LightOblique.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-LightOblique.ttf",
                        ],
                        weight: 300,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-Regular.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-Regular.ttf",
                        ],
                        weight: 400,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-Italic.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-Italic.ttf",
                        ],
                        weight: 400,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-Oblique.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-Oblique.ttf",
                        ],
                        weight: 400,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-Medium.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-Medium.ttf",
                        ],
                        weight: 500,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-MediumItalic.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-MediumItalic.ttf",
                        ],
                        weight: 500,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-MediumOblique.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-MediumOblique.ttf",
                        ],
                        weight: 500,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-SemiBold.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-SemiBold.ttf",
                        ],
                        weight: 600,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-SemiBoldItalic.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-SemiBoldItalic.ttf",
                        ],
                        weight: 600,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-SemiBoldOblique.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-SemiBoldOblique.ttf",
                        ],
                        weight: 600,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-Bold.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-Bold.ttf",
                        ],
                        weight: 700,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-BoldItalic.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-BoldItalic.ttf",
                        ],
                        weight: 700,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-BoldOblique.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-BoldOblique.ttf",
                        ],
                        weight: 700,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-ExtraBold.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-ExtraBold.ttf",
                        ],
                        weight: 800,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-ExtraBoldItalic.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-ExtraBoldItalic.ttf",
                        ],
                        weight: 800,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-ExtraBoldOblique.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-ExtraBoldOblique.ttf",
                        ],
                        weight: 800,
                    },

                    {
                        style: "normal",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-Heavy.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-Heavy.ttf",
                        ],
                        weight: 900,
                    },
                    {
                        style: "italic",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-HeavyItalic.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-HeavyItalic.ttf",
                        ],
                        weight: 900,
                    },
                    {
                        style: "oblique",
                        src: [
                            fontsDir +
                                "/IosevkaEtoile/WOFF2/IosevkaEtoile-HeavyOblique.woff2",
                            fontsDir +
                                "/IosevkaEtoile/TTF/IosevkaEtoile-HeavyOblique.ttf",
                        ],
                        weight: 900,
                    },
                ],
            },
        ],
    },
});
