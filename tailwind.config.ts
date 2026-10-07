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
        fanta: "#F58FA3",
        pink: "#F7C5CF",
        cream: "#FFF7EC",
        brown: "#6B4A43",
        "deep-brown": "#3A2926",
        white: "#FFFDF9",
      },

      fontFamily: {
        sans: ["Manrope", "system-ui", "-apple-system", "sans-serif"],
        display: ["\"DM Serif Display\"", "Georgia", "serif"],
      },

      letterSpacing: {
        editorial: "-0.07em",
      },
    },
  },

  plugins: [],
};

export default config;