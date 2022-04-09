// const children = require("tailwind-children");
const colors = require("./src/theme/colors.js");
const screens = require("./src/theme/screens.js");

module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.{tsx,html,ts,js}",
    "./dist/**/*.{html,js}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        sm: "1rem",
      },
      screens: {
        lg: "1140px",
      },
    },

    extend: {
      screens,
      colors,
      borderRadius: {
        "4xl": "48px",
      },
    },
  },
  plugins: [
    //children
  ],
  // prefix: "tw-",
};
