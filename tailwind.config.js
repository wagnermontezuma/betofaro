/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores do PT (Partido dos Trabalhadores)
        'pt-red': '#FF0000',
        'pt-dark-red': '#C10000',
        'pt-light-red': '#FF3333',
        'pt-white': '#FFFFFF',
        'pt-gray': '#F5F5F5',
        'pt-dark': '#333333',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 