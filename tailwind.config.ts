import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
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
          red: "var(--color-status-red)",
          blue: "var(--color-status-blue)",
          green: "var(--color-status-green)",
          yellow: "var(--color-status-yellow)",
        },
      },
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.non-selectable': {
          'userSelect': 'none',
          'pointerEvents': 'none'
        }
      })
    })
  ],
};

export default config;
