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

