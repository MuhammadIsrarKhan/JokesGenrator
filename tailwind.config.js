/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      SuicideSquad : ["SuicideSquad"],
      RobotoMono: ['Roboto Mono', "monospace"]
    }
  },
  plugins: [],
}