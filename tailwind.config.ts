import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        pastel: {
          bg: "#fdf2f8",
          pink: "#fce7f3",
          rose: "#fbcfe8",
          blush: "#fff1f2",
          cream: "#fffaf7",
        },
        chocolate: {
          DEFAULT: "#2b1810",
          deep: "#1c0d0a",
          dark: "#3a221c",
          muted: "#6b473f",
          light: "#8c6258",
        },
        fanta: {
          DEFAULT: "#e11d48",
          rose: "#fb7185",
          soft: "#fda4af",
        },
        cream: "#fffaf7",
        "deep-brown": "#2b1810",
      },

      fontFamily: {
        sans: ["Plus Jakarta Sans", "Manrope", "system-ui", "-apple-system", "sans-serif"],
        display: ["Space Grotesk", "Syne", "Manrope", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "SF Mono", "Fira Code", "monospace"],
      },

      letterSpacing: {
        editorial: "-0.04em",
        cyber: "0.22em",
      },

      boxShadow: {
        "pastel-glow": "0 15px 40px -10px rgba(225, 29, 72, 0.15)",
        "glass-card": "0 15px 35px 0 rgba(43, 24, 16, 0.06)",
        "glass-hover": "0 20px 45px -5px rgba(225, 29, 72, 0.2)",
      },
    },
  },

  plugins: [],
};

export default config;