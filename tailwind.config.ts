import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold:       "#C9A96E",
        "gold-light": "#E8D5B0",
        deep:       "#1A1410",
        earth:      "#2C2016",
        cream:      "#F7F3EE",
        sage:       "#7A8C6E",
        river:      "#4A6670",
        "text-dark":  "#1A1410",
        "text-mid":   "#5C4F3A",
        "text-light": "#9E8E78",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body:    ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
