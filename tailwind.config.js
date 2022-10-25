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
        "text-line-height": "34px",
      },
      colors: {
        primaryColor: "#432779",
        secondaryColor: "#F3FCF5",
        infoColor: "#FA9917",
        buttonColor: "#2AAF4A",
        modalColor: "#463E52",
        modalTextColor: "#0E0817",
        lightGreen: "rgb(165, 222, 165)"
      },

      backgroundImage: {
        "home-hero-desktop": "url('/public/assets/images/hero-img/home-hero-bg-desktop.png')",
        "home-hero-mobile": "url('/public/assets/images/hero-img/home-hero-bg-mobile-bg.png')",
        "about-hero-desktop": "url('/public/assets/images/hero-img/about-hero-bg-desktop.png')",
        "about-hero-mobile": "url('/public/assets/images/hero-img/about-hero-bg-mobile.png')",
        "contact-hero-desktop": "url('/public/assets/images/hero-img/desktop_contact.jpg')",
        "contact-hero-mobile": "url('/public/assets/images/hero-img/mobile_contact.jpg')",
        "footer-image-desktop": "url('/public/assets/images/hero-img/Footer-Image-Desktop.png')",
        "footer-image-mobile": "url('/public/assets/images/hero-img/Footer-Image-Mobile.png')",
        "mobile-nav-bg": "url('/public/assets/images/hero-img/Mobile-Background.png')"
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
  plugins: [
    require("flowbite/plugin"),
    require("tw-elements/dist/plugin"),
    require("@tailwindcss/aspect-ratio")
  ]
};
