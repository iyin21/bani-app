/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors:{
      black:{
        10:"#000000",
        20:"#65717C",
        30:"#1E1E1E",
      }, 
      blue:"#5444F2",
      white:"#ffffff",
      neutral:"#F4F3FF",
      red:"#FC3C60",
      transparent: "transparent",
    },
    fontSize: {
      "sm":["10px", "12px"],
      "md":["14px", "20px"],
      "2md":["16px","22px"],
      "xl":["19px","21px"],
    },
    fontFamily: {
            HelveticaNeueCyr: ["HelveticaNeueCyr", "sans-serif"],
            HelveticaNeueCyrMedium: ["HelveticaNeueCyrMedium", "sans-serif"],
            HelveticaNeueCyrBold: ["HelveticaNeueCyrBold", "sans-serif"],
            HelveticaNeueCyrBlack: ["HelveticaNeueCyrBlack", "sans-serif"],
            HelveticaNeueCyrLight: ["HelveticaNeueCyrLight", "sans-serif"],
            HelveticaNeueCyrDisplayItalic: ["HelveticaNeueCyrItalic", "sans-serif"],
        },
    extend: {},
  },
  plugins: [],
}
