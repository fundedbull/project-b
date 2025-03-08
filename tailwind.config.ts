import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
          "0%, 100%": {
            opacity: "0%",
          },
          "50%": {
            opacity: "100%",
          },
        },
      },
      colors: {
        background: "#090912",
        blue: "#4DA6FF",
        orange: "#FF990A",
        neutral: {
          "100": "#ffffff",
          "200": "#f5f4fa",
          "300": "#d9d7e6",
          "400": "#b7b4c7",
          "500": "#88849c",
          "600": "#5e5b71",
          "700": "#302c3f",
          "800": "#13111a",
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
