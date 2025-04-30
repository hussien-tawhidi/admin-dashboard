import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light: "#64748b ",
        lighter: "#fdfeff",
        dark: "#22252e",
        darker: "#111216",
        pink: "#d7406d",
      },
    },
  },
  plugins: [scrollbarHide],
} satisfies Config;
