module.exports = {
  purge: ["./public/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        silver: "#A1A1A1",
        deepBlue: "#011C39",
        cyberGrape: "#513D7A",
        powderBlue: "#A2D9E0",
        pinkPanther: {
          100: "#E7556A",
          200: "#9B354B",
        },
      },
      fontFamily: {
        vt: ["VT323"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
