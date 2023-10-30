/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        smallLaptop: "1440px",
      },
      colors: {
        rajuRed: "#FF4444",
      },
      fontFamily: {
        DM: ["DM Sans", "sans-serif"],
      },
      width: {
        w648: "648px",
      },
      height: {
        h398: "398px",
      },
    },
  },
  plugins: [],
};
