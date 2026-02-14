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
        primary: {
          DEFAULT: "#FF8E3C",
          50: "#FFF3E8",
          100: "#FFE4CC",
          200: "#FFC999",
          300: "#FFAE66",
          400: "#FF9E4F",
          500: "#FF8E3C",
          600: "#E67A2E",
          700: "#CC6A22",
          800: "#995018",
          900: "#66350F",
        },
        cream: {
          DEFAULT: "#FFF9F0",
          50: "#FFFDFB",
          100: "#FFF9F0",
          200: "#FFF0DB",
          300: "#FFE7C7",
          400: "#FFDEB2",
        },
        chocolate: {
          DEFAULT: "#603813",
          50: "#F5EDE5",
          100: "#E8D5C3",
          200: "#D1AB87",
          300: "#BA814B",
          400: "#8A5A2A",
          500: "#603813",
          600: "#4D2D0F",
          700: "#3A210B",
          800: "#261608",
          900: "#130B04",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "soft": "0 4px 20px rgba(96, 56, 19, 0.08)",
        "soft-lg": "0 8px 40px rgba(96, 56, 19, 0.12)",
        "soft-xl": "0 12px 60px rgba(96, 56, 19, 0.16)",
        "glow": "0 0 40px rgba(255, 142, 60, 0.3)",
        "glow-lg": "0 0 60px rgba(255, 142, 60, 0.4)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "gradient": "gradient 8s ease infinite",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in-right": "slideInRight 0.4s ease-out",
        "fade-in": "fadeIn 0.6s ease-out",
        "pop": "pop 0.3s ease-out",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pop: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [],
};
export default config;
