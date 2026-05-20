import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        surface: "#0a1230",
        foreground: "#e8eeff",
        muted: "#1a2347",
        "muted-foreground": "#8a96b3",
        border: "rgba(255,255,255,0.08)",
        "border-strong": "rgba(255,255,255,0.16)",
        brand: {
          DEFAULT: "#3b82f6",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        accent: {
          DEFAULT: "#7dd3fc",
          light: "#bae6fd",
        },
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "var(--font-display)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "Pretendard",
          "ui-sans-serif",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
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
          "linear-gradient(to right, rgba(125,211,252,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(125,211,252,0.06) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(59,130,246,0.25), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
