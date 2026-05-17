import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        surface: "#f7f9fc",
        foreground: "#0a1f44",
        muted: "#f0f4fa",
        "muted-foreground": "#5a6b82",
        border: "#e3e9f2",
        brand: {
          DEFAULT: "#002c5f",
          50: "#eef3fb",
          100: "#d6e2f3",
          200: "#a8bee0",
          300: "#7898c9",
          400: "#4972b1",
          500: "#1e4d8e",
          600: "#002c5f",
          700: "#00224a",
          800: "#001838",
          900: "#000f24",
        },
        accent: {
          DEFAULT: "#00aad2",
          light: "#5cc6e0",
        },
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "Pretendard", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(0,44,95,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,44,95,0.05) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,44,95,0.12), transparent)",
      },
    },
  },
  plugins: [],
};

export default config;
