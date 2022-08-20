/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Shown in the SocialBar component as font-open-sans
        'open-sans': 'sans-serif',
      }
    },
  },
  plugins: [],
}
