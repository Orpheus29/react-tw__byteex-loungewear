/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xxsm1: ['11px', '20px'],
      xxsm2: ['11px', '35px'],
      xsm1: ['12px', '20px'],
      xsm2: ['12px', '23px'],
      sm1: ['13px', '18px'],
      sm2: ['13px', '22px'],
      md1: ['14px', '18px'],
      md2: ['14px', '20px'],
      base1: ['15px', '18px'],
      base2: ['15px', '22px'],
      base3: ['15px', '23px'],
      lg1: ['18px', '23.35px'],
      lg2: ['18px', '24px'],
      xl1: ['20px', '23px'],
      xl2: ['20px', '24px'],
      '2xl1': ['22px', '20px'],
      '2xl2': ['22px', '24px'],
      '2xl3': ['22px', '40px'],
      '3xl': ['25px', '40px'],
      '4xl1': ['26px', '30px'],
      '4xl2': ['26px', '34px'],
      '4xl3': ['26px', '40px'],
      '5xl': ['32px', '40px'],
      '6xl': ['38px', '45px'],
    },
    extend: {
      fontFamily: {
        sofia: ['Sofia Pro', 'sans-serif'],
        suisse: ['SuisseIntl-Regular', 'sans-serif'],
      },
      colors: {
        'primary-sofia': "#676869",
        'secondary-sofia': '#6C6C6C',
        'thirdary-sofia': '#868787',
        'primary-suisse': '#565656',
        'secondary-suisse': '#828282',
        'primary-bg': "#F9F0E5",
        'primary-bg-lighter': "#F9F0E6",
        'secondary-bg': "#F0EEEF",
        'primary-navy': "#01005B",
        'secondary-navy': "#2A2996",
        'thirdary-navy': "#15005B",
        'quadrary-navy': '#1C2E58',
        'primary-border': "#EDEDED",
        'secondary-border': "#C4C4C4",
      },
      backgroundImage: {
        'hero1': "url('assets/images/hero-1.jpg')",
        'hero2': "url('assets/images/hero-6.jpg')",
        'hero3': "url('assets/images/hero-3.jpg')",
      },
      screens: {
        "wide": "1300px",
        "small": "388px",
      }
    },
  },
  plugins: [],
}
