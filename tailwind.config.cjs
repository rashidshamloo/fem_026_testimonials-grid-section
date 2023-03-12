/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlowSemiCondensed: ["Barlow Semi Condensed", "sans-serif"],
      },
      colors: {
        darkBlue: "hsl(219, 29%, 14%)",
        darkGrayishBlue: "hsl(217, 19%, 35%)",
        lightGray: "hsl(0, 0%, 81%)",
        lightGrayishBlue: "hsl(210, 46%, 95%)",
        lightGrayishBlueButton: "hsl(210, 35%, 90%)",
      },
      gridTemplateAreas: {
        large: ["a1 a1 a2 a5", "a3 a4 a4 a5"],
        medium: ["a1 a1 a2", "a3 a4 a4", "a5 a5 a5"],
        small: ["a1 a1", "a2 a3", "a4 a4", "a5 a5"],
      },
      gridTemplateRows: {
        large: "repeat(2,17.625rem)",
        medium: "repeat(3,17.625rem)",
        small: "repeat(4,17.625rem)",
      },
      gridTemplateColumns: {
        large: "repeat(4,minmax(0,4fr))",
        medium: "repeat(3,minmax(0,1fr))",
        small: "repeat(2,minmax(0,1fr))",
      },
    },
  },
  safelist: [
    "grid-in-a1",
    "grid-in-a2",
    "grid-in-a3",
    "grid-in-a4",
    "grid-in-a5",
  ],
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
