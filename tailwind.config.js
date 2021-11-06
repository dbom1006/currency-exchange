module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      width: {
        104: "26rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
