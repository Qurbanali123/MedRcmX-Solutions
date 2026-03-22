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
        /* ✅ LIGHT THEME CORE */
        primary: "#FFFFFF",        // main background
        "primary-soft": "#f5f7fb", // soft sections
        "primary-muted": "#eef2f7",

        /* ✅ TEXT COLORS */
        "text-dark": "#0f172a",    // main text
        "text-light": "#475569",   // secondary text

        /* ✅ BRAND COLORS */
        secondary: "#27D083",      // emerald (main accent)
        accent: "#38F8FF",         // cyan (highlight)

        /* ✅ UI COLORS */
        border: "#e2e8f0",
        "border-light": "#f1f5f9",

        /* OPTIONAL (keep for flexibility) */
        dark: "#0f172a",
        light: "#f8f9fa",

        /* REMOVE heavy navy usage (kept only if needed) */
        navy: "#0F2D4D",
        "navy-dark": "#091e35",
        "navy-light": "#163d68",

        emerald: "#27D083",
        cyan: "#38F8FF",
        white: "#FFFFFF",
      },

      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "slide-up": "slideUp 0.6s ease-out",
        "fade-in": "fadeIn 0.8s ease-out",
        "draw-line": "drawLine 2s ease-out forwards",
        shimmer: "shimmer 2s infinite",
        morph: "morph 8s ease-in-out infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },

        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(39, 208, 131, 0.25)" },
          "50%": { boxShadow: "0 0 40px rgba(39, 208, 131, 0.6)" },
        },

        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },

        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        drawLine: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },

        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },

        morph: {
          "0%, 100%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
          },
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