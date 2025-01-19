import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: "#ffffff",
          200: "#f5f4fa",
          300: "#d9d7e6",
          400: "#b7b4c7",
          500: "#88849c",
          600: "#5e5b71",
          700: "#302c3f",
          800: "#13111a",
        },
        primary: {
          "50": "#edfffe",
          "100": "#c0feff",
          "200": "#81fbff",
          "300": "#3af8ff",
          "400": "#00ffff",
          "500": "#00e1e2",
          "600": "#00b2b7",
          "700": "#008c91",
          "800": "#006c72",
          "900": "#04585d",
          "950": "#00343a",
        },
        secondary: {
          "50": "#fffaec",
          "100": "#fff4d3",
          "200": "#ffe5a5",
          "300": "#ffd16d",
          "400": "#ffb132",
          "500": "#ff970a",
          "600": "#ff7f00",
          "700": "#cc5c02",
          "800": "#a1470b",
          "900": "#823c0c",
          "950": "#461c04",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
