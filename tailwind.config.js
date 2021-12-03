module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
      colors: {
        "dark-back": "#1f2028",
        secondary: "#ffb301",
        "white-text": "#EAEAE9",
      },
      inset: {
        17: "68px",
        26: "104px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
