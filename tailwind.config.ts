import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-bg)",
        foreground: "var(--color-fg)",
        accent: "var(--color-accent)",
        card: "var(--color-card)",
        border: "var(--color-border)"
      },
      boxShadow: {
        glow: "0 0 30px color-mix(in srgb, var(--color-accent) 22%, transparent)",
        soft: "0 40px 120px rgba(0,0,0,0.45)"
      },
      backgroundImage: {
        radial: "radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 60%)"
      }
    }
  },
  plugins: []
};

export default config;
