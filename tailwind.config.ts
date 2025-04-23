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
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        body: "#191D24",
        enthu: "#AFB0B3",
        "enthu-bg": "#2B2F35",
        border: "#45484E",
        "fe-wannabe": "#AFB0B3",
        "span-g1": "#68A1D7",
        "span-g2": "#FBF0FB",
        "span-g3": "#FB6565",
        "cv-g1" : "#4A90E2",
        "cv-g2" : "#2A5CBE"
      },
      backgroundImage: {
        "grid-pattern": `
          linear-gradient(to right, #23262C 1px, transparent 1px),
          linear-gradient(to bottom, #23262C 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        "grid-size": "120px 120px",
      },
      backgroundPosition: {
        "grid-crop": "0 center; ",
      },
    },
  },
  plugins: [],
};
export default config;
