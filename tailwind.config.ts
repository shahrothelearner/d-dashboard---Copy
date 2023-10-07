import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      'sm': '480px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 640px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        'Proxima': ['Proxima Nova', 'Proxima Nova fallback', 'sans-serif'],
        'Proxima-cond': ['Proxima Nova Condensed', 'Proxima Nova Condensed fallback', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif']
      },
      keyframes:{
        searchAnimation: {
          '0%': {opacity:'0'},
          '100%':{opacity:'1'}
        },
        menuAnimation: {
          '0%': {height:'0'},
          '100%':{height:'470px'}
        },
        mobAnimation: {
          '0%': {height:'0'},
          '100%':{height:'100vh'}
        },
        widthAnimation: {
          '0%': {width:'0'},
          '100%':{width:'100%'}
        },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}
export default config
