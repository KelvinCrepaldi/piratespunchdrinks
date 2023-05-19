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
        "pirates-red": "#6D0000",
        "pirates-gold": "#D8A932",
        "pirates-silver": "#b2b2b2",
        "pirates-black": "#111111",
        "pirates-white": "#FFFFFF",
        "pirates-black-hover": "#070707",
      },
      fontFamily: {
        fredericka: ["Fredericka the Great", "sans-serif"],
        pirata: ["Pirata One", "sans-serif"],
        imfell: ["IM Fell DW Pica SC", "sans-serif"],
      },
    },
  },
  plugins: [],
};
