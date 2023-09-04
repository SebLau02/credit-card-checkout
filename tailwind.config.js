/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const myUtilities = {
        ".text-neo": {
          "text-shadow":
            " -0.5px 0.5px 2px #fbe05b, 0.4px -0.4px #2b2b2b, 1px -1px 3px #2b2b2b",
        },
      };
      addUtilities(myUtilities);
    }),
  ],
};
