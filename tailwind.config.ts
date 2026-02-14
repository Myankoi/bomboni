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
        "rose-primary": "#D95D7E",
        "rose-light": "#FFC2D1",
        "rose-dark": "#9D314E",
        "gold-accent": "#D4AF37",
        "gold-light": "#F9E4B7",
        "cream-bg": "#FFF8F0",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Poppins'", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out infinite 1s",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 12s linear infinite",
        gradient: "gradient 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
