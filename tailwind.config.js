module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "375px",
        xxl: "1440px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
