/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#16423C',
        secondaryColor: '#6A9C89',
        backgroundColor: '#C4DAD2',
        lightColor: '#E9EFEC',
      },
    },
  },
  plugins: [],
}
