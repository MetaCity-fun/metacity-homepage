const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "2xl": "100px",
        "3xl": "242px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Share Tech", ...defaultTheme.fontFamily.sans],
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        primary: "#FFC25B",
        bgColor: "#180F33",
      },
      screens: {
        "3xl": "1820px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")]
};
