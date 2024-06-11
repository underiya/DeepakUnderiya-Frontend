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
        outfit: "Outfit",
        inter: "Inter",
      },
      animation: {
        "bounce-slow": "bounce 4s ease-out infinite ",
        disappear: "disppear 4s ease-in-out infinite",
        move: "move 4s ease-in-out infinite ",
      },
      keyframes: {
        disppear: {
          " 0%": {
            opacity: "0.1",
          },
          "100%": {
            opacity: "0.1",
          },
          " 50%": {
            opacity: "1",
          },
        },
        move: {
          "0%, 100%": {
            transform: "translateX(0%)",
          },
          " 50%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
