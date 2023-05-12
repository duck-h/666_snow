/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{html, js, ts, vue}", "./src/**/*"],
  theme: {
    extend: {
      // backgroundImage: {
      //   bgHero: "url('./src/assets/images/bg_clean.png')",
      // },
      fontFamily: { Noto: "Noto Sans TC" },
      
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
