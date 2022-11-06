/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Components/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/Components/*.{js,ts,jsx,tsx}",
    "./src/Assets/Common/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'soft-black': '#333',
        'theme-green':'#c4da9e'
      },
      content:{
        'x_circle':'url("./Assets/Icons/x_circle.svg")',
        'plus':'url("./Assets/Icons/plus.svg")',
        'check':'url("./Assets/Icons/check.svg")',
        'search':'url("./Assets/Icons/search.svg")',
        'open_book':'url("./Assets/Icons/open-book.svg")',
        'search_book':'url("./Assets/Icons/search-book.png")',
        'goto':'url("./Assets/Icons/goto.svg")'
      },
      backgroundImage:{
        'home':"url('./Assets/Images/book-background.jpg')"
      }

    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
