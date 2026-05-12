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
        brand: {
          bg: "#ffffff",
          bgSec: "#f4f6fb",
          card: "#ffffff",
          navy: "#0d2461",
          navyDark: "#071540",
          navyLight: "#1a3a8a",
          red: "#c8102e",
          redDark: "#a00d24",
          redLight: "#e8203f",
          textPri: "#0d2461",
          textSec: "#3a4a6b",
          textMuted: "#7a8aaa",
        },
      },
      fontFamily: {
        display: ["var(--font-rajdhani)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        "slider-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "slider-scroll": "slider-scroll 30s linear infinite",
        "fade-up": "fade-up 0.5s ease forwards",
      },
      boxShadow: {
        "navy-sm": "0 2px 12px rgba(13,36,97,0.10)",
        "navy-md": "0 8px 32px rgba(13,36,97,0.14)",
        "navy-lg": "0 20px 60px rgba(13,36,97,0.18)",
        "red-glow": "0 0 20px rgba(200,16,46,0.20)",
        "card": "0 2px 16px rgba(13,36,97,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;