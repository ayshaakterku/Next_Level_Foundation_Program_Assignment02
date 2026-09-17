/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        screen: {
          DEFAULT: "#0C0D10", // house-lights-down black
          raised: "#16181D", // card / surface
          line: "#26292F", // hairline borders
        },
        marquee: {
          DEFAULT: "#E7B559", // marquee gold — CTAs, ratings, accents
          dim: "#B8924A",
        },
        velvet: {
          DEFAULT: "#9A3B34", // curtain red — used sparingly
        },
        paper: {
          DEFAULT: "#F5F3EE", // warm off-white for primary text
          muted: "#A4A8B1", // cool grey for secondary text
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "film-grain":
          "radial-gradient(circle at 1px 1px, rgba(245,243,238,0.035) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
