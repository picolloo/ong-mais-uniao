const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#f99d1c",
      },
      boxShadow: {
        primary: "2px 2px 10px -3px rgba(249,157,28,0.6)",
      },
    },
  },
  plugins: [require("@tailwindcss/ui")],
};
