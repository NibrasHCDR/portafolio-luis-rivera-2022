/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colores_app: {
          primary: "#142850",
          secondary: "#27496D",
          third: "#0C7B93",
          four: "#00A8CC",
        }
      }
    },
  },
  plugins: [],
}
