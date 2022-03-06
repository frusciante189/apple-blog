module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#141C3A",
        darkBg: "#121212",
        darkText: "#f9f9fa",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        source: ["Source Code Pro", "monospace"],
        spartan: ["Spartan", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
