/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,}"
  ],
  theme: {
    extend: {
      colors:{
        "gray":"var(--gray)",
        "primary-green":"var(--primary-green)",
        "secondary-green":"var(--secondary-green)",
        "blue":"var(--blue)",
      },
        backgroundImage:{
            'BackgroundImg': "url(/public/backgroung.png)"
        }
    },
  },
  plugins: [],
}
