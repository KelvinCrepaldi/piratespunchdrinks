/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pirates-gold": "#ffb700",
        "pirates-black": "#111111",
        "pirates-white": "#FFFFFF",
        "pirates-red": "#c51c1c",
        "pirates-red-strong": "#751000",
      },
      fontFamily: {
        fredericka: ["var(--font-fredericka_the_Great)"],
        pirata: ["var(--font-Pirata_One)"],
        imfell: ["var(--font-im_fell_dw)"],
        inter: ["var(--font-inter)"],
      },
      boxShadow: {
        "pirates-card": "1px 4px 15px 2px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        Ship: "url('/images/event/cardShip.jpg')",
        Person: "url('/images/event/man.webp')",
        Bar: "url('/images/event/barPhoto.webp')",
        hero: "url('/background.webp')",
        adventure: "url('/images/adventure.jpeg')",
      },
    },
  },
  plugins: [],
};
