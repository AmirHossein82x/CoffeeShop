/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  darkMode: "class",
  
  theme: {
    fontFamily :{
      "vazir": "vazir regular",
      "vazir-bold": "vazir bold",
      "vazir-semibold":  "vazir semibold",
      "diplomat": "diplomat"
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
  
      'md': '768px',
      // => @media (min-width: 768px) { ... }
  
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
  
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      
      colors: {
        "brown": {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832"
        }

      },
      boxShadow:{
        "normal": "0px 1px 10px rgba(0, 0, 0, 0.05)"
      },
      borderRadius: {
        "4xl": "2rem",

      },
      letterSpacing: {
        "tightest": "-0.065em"

      },
      spacing: {
        "30": "7.5rem"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem",
        }, 

      },
      backgroundImage: {
        "home_mobile": "url(../images/headerBgMobile.webp)",
        "home_desktop": "url(../images/headerBgDesktop.webp)",
      }
      
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
}

