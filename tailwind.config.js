/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const textStyle = {
        ".text-neo": {
          "text-shadow":
            " -0.5px 0.5px 2px #fbe05b, 0.4px -0.4px #2b2b2b, 1px -1px 3px #2b2b2b",
        },
      };

      const marges = {
        ".mr-20perc": {
          "margin-left": "50%",
        },
      };
      const position = {
        ".top-20perc": {
          top: "20%",
        },
        ".left-20perc": {
          left: "20%",
        },
      };
      addUtilities(textStyle);
      addUtilities(marges);
      addUtilities(position);
    }),
  ],
};
