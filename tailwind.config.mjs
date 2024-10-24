import fluid, { extract, screens } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
    plugins: [fluid],
    content: {
        files: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
        extract,
    },
    theme: {
        screens,
        extend: {
            colors: {
                white: "#f0f0f0",
                black: "#090909",
            },
            backgroundImage: {
                noise: "url(/img/noise.png)",
                hero: "url(/img/bg-hero.png)",
                grid: "url(/img/bg-grid.svg)",
            },
            fontFamily: {
                sans: ["Host Grotesk", "Inter", "Helvetica Neue", "sans-serif"],
                display: ["Medium", "Inter", "Helvetica Neue", "sans-serif"],
                mono: ["Geist Mono", "monospace"],
            },
        },
    },
};
