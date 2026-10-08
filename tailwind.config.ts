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
        cyber: {
          bg: "#07060b",
          black: "#07060b",
          panel: "rgba(18, 16, 26, 0.7)",
          card: "rgba(255, 255, 255, 0.03)",
          cardHover: "rgba(255, 255, 255, 0.06)",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(244, 63, 94, 0.4)",
          text: "#f1f5f9",
          muted: "#94a3b8",
        },
        neon: {
          fanta: "#fb7185",
          rose: "#f43f5e",
          purple: "#a855f7",
          cyan: "#22d3ee",
          emerald: "#10b981",
        },
        fanta: "#fb7185",
        pink: "#fda4af",
        cream: "#f8fafc",
        "deep-brown": "#0f0e17",
      },

      fontFamily: {
        sans: ["Manrope", "Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"],
        display: ["Space Grotesk", "Syne", "Manrope", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "SF Mono", "Fira Code", "monospace"],
      },

      letterSpacing: {
        editorial: "-0.04em",
        cyber: "0.22em",
      },

      boxShadow: {
        "neon-fanta": "0 0 35px -5px rgba(251, 113, 133, 0.35)",
        "neon-purple": "0 0 35px -5px rgba(168, 85, 247, 0.35)",
        "neon-cyan": "0 0 35px -5px rgba(34, 211, 238, 0.35)",
        "glass-glow": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
    },
  },

  plugins: [],
};

export default config;