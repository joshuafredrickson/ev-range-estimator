module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        electric: "#e8bd01",
      },
      screens: {
        landscape: { raw: "(orientation: landscape)" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
