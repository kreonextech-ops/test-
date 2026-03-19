import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["DM Sans", "sans-serif"],
        display: ["Cormorant", "Georgia", "serif"],
      },
      colors: {
        cream: "#F2EDE4",
        "cream-dark": "#E8E0D0",
        "warm-brown": "#3D2B1F",
        "dark-earth": "#2A1F14",
        "mid-brown": "#6B4F3A",
        "light-stone": "#C8BBA8",
        "warm-white": "#FAF7F2",
      },
      letterSpacing: {
        widest: "0.3em",
        "extra-wide": "0.2em",
      },
    },
  },
  plugins: [],
};
export default config;
