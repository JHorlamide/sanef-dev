/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    fontFamily: {
      body: ['"Avenir Next"']
    },
    extend: {
      lineHeight: {
        "text-line-height": "34px"
      },
      colors: {
        primaryColor: "#432779",
        secondaryColor: "#F3FCF5",
        infoColor: "#FA9917",
        buttonColor: "#2AAF4A",
        modalColor: "#463E52"
      },

      backgroundImage: {
        "home-hero-desktop": "url('/public/assets/images/home-hero-bg-desktop.png')",
        "home-hero-mobile": "url('/public/assets/images/home-hero-bg-mobile-bg.png')",
        "about-hero-desktop": "url('/public/assets/images/about-hero-bg-desktop.png')",
        "about-hero-mobile": "url('/public/assets/images/about-hero-bg-mobile.png')",
        "footer-image-desktop": "url('/public/assets/images/Footer-Image-Desktop.png')",
        "footer-image-mobile": "url('/public/assets/images/Footer-Image-Mobile.png')",
      },
      
      screens: {
        sm: '512px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
    }
  },
  plugins: [require("flowbite/plugin"), require("tw-elements/dist/plugin")]
};
