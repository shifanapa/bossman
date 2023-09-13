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
        'bigscreen': {'min': '1535px'},
        'phone': {'max': '600px'},
        'ipad': {'max': '800px'},
        'bigphone': {'max': '500px'},
        'smallphone': {'max': '400px'},
        
      }, 
    },
    
  },
  plugins: [],
};
