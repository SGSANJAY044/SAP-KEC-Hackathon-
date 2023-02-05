/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,}"
  ],
  theme: {
    extend: {
        backgroundImage:{
            'BackgroundImg': "url(/public/backgroung.png)"
        }
    },
  },
  plugins: [],
}
