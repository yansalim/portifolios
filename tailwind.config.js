/** @type {import('tailwindcss').Config} */
export default { // ou module.exports = { ... } se não for ES Module
  darkMode: 'class',
  content: [
    "./index.html", // Para Vite
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}