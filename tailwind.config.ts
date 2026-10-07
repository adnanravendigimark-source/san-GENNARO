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
        // Pure white background, deep spruce green for dark text/buttons,
        // and Roman antique gold as the warm accent.
        stone: {
          50: "#FFFFFF",   // Pure White
          100: "#F9F9F8",  // Off-white / Crisp surface
          200: "#EFEFEF",  // Light border
          800: "#2B2824",
          900: "#1C1917",  // Deep Charcoal
        },
        gold: {
          400: "rgb(var(--color-gold-400) / <alpha-value>)",
          500: "rgb(var(--color-maya-gold) / <alpha-value>)",  // Antique Roman Gold ⭐
          600: "#9E702D",
        },
        emerald: {
          900: "#0F241E",  // Deep Spruce Forest
          800: "#16332B",
          700: "#18382E",  // Brand Dark Spruce ⭐
          600: "#234E41",
        },
        maya: {
          forest: "rgb(var(--color-maya-forest) / <alpha-value>)",
          jungle: "rgb(var(--color-maya-jungle) / <alpha-value>)",
          ivory: "#FFFFFF",
          gold: "rgb(var(--color-maya-gold) / <alpha-value>)",
          sand: "#EFEFEF",
          sage: "#F5F5F5",
          charcoal: "rgb(var(--color-maya-charcoal) / <alpha-value>)",
          white: "#FFFFFF",
          emerald: "rgb(var(--color-maya-emerald) / <alpha-value>)",
          dark: "#16332B",
        },
        chichen: {
          navy: "rgb(var(--color-maya-forest) / <alpha-value>)",
          ottoman: "#18382E",
          gold: "rgb(var(--color-maya-gold) / <alpha-value>)",
          charcoal: "rgb(var(--color-maya-charcoal) / <alpha-value>)",
          ivory: "#FFFFFF",
          sky: "#F9F9F8",
          sand: "#EFEFEF",
        },
        navy: {
          900: "#0F241E",
          800: "#16332B",
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
