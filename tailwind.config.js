/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f66251", //
          secondary: "#a3a1a1", // text
          accent: "#efc4b6", //
          light: "#acb3f2",
          neutral: "#2b2b2b",
          "base-100": "#2b2b2b", // bg
          info: "#efc4b6",
          success: "#090a27",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
