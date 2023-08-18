/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pirates-red": "#c51c1c",
        "pirates-gold": "#ffb700",
        "pirates-silver": "#fffff",
        "pirates-black": "#111111",
        "pirates-white": "#FFFFFF",
        "pirates-black-hover": "#070707",
        "pirates-shop-card": "rgb(0,0,0,0.9)",
        "pirates-shop-sidebar": "rgb(0,0,0,0.9)",
        "pirates-black-transparent": "rgb(0,0,0,0.6)",
        "pirates-black-transparent-strong": "rgb(0,0,0,0.9)",
        "pirates-container-dark": "#111111",
        "pirates-card-dark": "#161616",
      },
      fontFamily: {
        fredericka: ["Fredericka the Great", "sans-serif"],
        pirata: ["Pirata One", "sans-serif"],
        imfell: ["IM Fell DW Pica SC", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "pirates-card": "1px 4px 15px 2px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
