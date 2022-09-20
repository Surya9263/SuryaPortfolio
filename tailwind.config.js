/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        "1/3": "33.33333%",
        "2/3": "66.666667%",
      },
      animation:{
        tilt:"tilt 10s infinite linear"
      },
      keyframes: {
        tilt: {
          "0%,50%,100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(3deg)",
          },
          "75%": {
            transform: "rotate(-3deg)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
