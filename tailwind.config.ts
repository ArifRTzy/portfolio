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
        "cv-g2" : "#2A5CBE",
        "about-bor" : "#757779",
        "about-bg1" : "#3A3B3E",
        "about-bg2" : "#242528",
        "about-bg3" : "#221D20",
        "about-f-stu" : "#AAAAAA",
        "about-text" : "#DFDFDF",
        "h1-black1" : "#EAEAEA",
        "h1-black2" : "#C6C6C6",
        card1 : "#0A0A0A",
        card2 : "#222222",
        card3 : "#121212",
        "card-text": "#989898",
        "card-btn" : "#303030"
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
      screens: {
        "abt-img" : {'max': '767px'},
        "abt-ttl" : {'min' : '445px'}
      }
    },
  },
  plugins: [],
};
export default config;
