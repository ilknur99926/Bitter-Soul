/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C4B2B',     // əsas qəhvəyi
        accent: '#F4E3C1',      // krem-şaftalı
        background: '#FEFBF5',  // sayt fonu
        text: '#2C2C2C',        // əsas yazı
        muted: '#A69888',       // kölgə yazı
      },
    },
  },
  plugins: [],
}
