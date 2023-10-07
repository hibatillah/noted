import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-bg)",
        card: "var(--color-card)",
        text: "var(--color-text)",
        title: "var(--color-title)",
        profile: "var(--color-profile)",
        divider: "var(--color-divider)",
        status: {
          red: "var(--color-red)",
          blue: "var(--color-blue)",
          green: "var(--color-green)",
          yellow: "var(--color-yellow)",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".non-selectable": {
          userSelect: "none",
          pointerEvents: "none",
        },
      });
    }),
  ],
};

export default config;
