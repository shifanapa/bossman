/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'clash': ['Clash Grotesk', 'sans-serif',],
      'montserrat': ['Montserrat', 'sans-serif',]
    },
    extend: {
      colors: {
        'primary':'#DEB99E',
        'secondary':'#0D0D0D',
      },
      screens: {
        'xm':'320px',
        'sm': '640px',   // Custom small breakpoint at 640 pixels
        'md': '768px',   // Custom medium breakpoint at 768 pixels
        'lg': '1024px',  // Custom large breakpoint at 1024 pixels
        'xl': '1280px',  // Custom extra-large breakpoint at 1280 pixels
        
      }, 
    },
    
  },
  plugins: [],
};
