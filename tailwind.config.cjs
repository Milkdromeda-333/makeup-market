/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hot-pink": {
          50: "#f542a1",
          100: "#d6388c"
        }
      },
      fontFamily: {
        brand: "Cinzel, serif",
        regular: "Cormorant Garamond, serif;"
      }
    },
  },
  plugins: [],
};
