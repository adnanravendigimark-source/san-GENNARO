import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // San Gennaro Catacombs Tickets palette:
        // Pure white background, warm Roman gold / terracotta amber accent,
        // and soft warm charcoal for dark text.
        stone: {
          50: "#FFFFFF",   // Pure White
          100: "#FAF8F5",  // Off-white / Crisp warm surface
          200: "#EAE5DB",  // Light border
          800: "#2B2824",
          900: "#1E2522",  // Soft Charcoal
        },
        gold: {
          400: "#D4A559",  // Light Gold
          500: "#C28E46",  // Warm Roman Gold ⭐
          600: "#A87635",
        },
        emerald: {
          900: "#C28E46",
          800: "#B37F38",
          700: "#C28E46",  // Roman Gold ⭐
          600: "#B37F38",
        },
        maya: {
          forest: "rgb(var(--color-maya-forest) / <alpha-value>)",
          jungle: "rgb(var(--color-maya-jungle) / <alpha-value>)",
          ivory: "#FFFFFF",
          gold: "rgb(var(--color-maya-gold) / <alpha-value>)",
          sand: "#EAE5DB",
          sage: "#FAF8F5",
          charcoal: "rgb(var(--color-maya-charcoal) / <alpha-value>)",
          white: "#FFFFFF",
          emerald: "rgb(var(--color-maya-emerald) / <alpha-value>)",
          dark: "#1E2522",
        },
        chichen: {
          navy: "rgb(var(--color-maya-forest) / <alpha-value>)",
          ottoman: "#C28E46",
          gold: "rgb(var(--color-maya-gold) / <alpha-value>)",
          charcoal: "rgb(var(--color-maya-charcoal) / <alpha-value>)",
          ivory: "#FFFFFF",
          sky: "#FAF8F5",
          sand: "#EAE5DB",
        },
        navy: {
          900: "#1E2522",
          800: "#2B2824",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "Georgia", "ui-serif", "serif"],
        script: ["var(--font-script)", "Alex Brush", "cursive"],
        body: ["system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        mosaic:
          "radial-gradient(circle at 20% 20%, rgba(184,134,59,0.08) 0, transparent 40%), radial-gradient(circle at 80% 0%, rgba(24,56,46,0.12) 0, transparent 40%)",
      },
    },
  },
  plugins: [],
};
export default config;
