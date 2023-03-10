/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "boxabl-blue": "#184273",
        "boxabl-orange": "#FFA400",
      },
    },
  },
  plugins: [],
};
