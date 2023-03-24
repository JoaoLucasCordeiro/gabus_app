/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bgBlue': 'linear-gradient(25deg, rgba(37,99,235,1) 0%, rgba(6,51,149,1) 100%)',
      }),
      backgroundColor: {
        'mainBg': '#464747',
        'secondaryBg': '#6a6e6e',
      },
    },
  },
  plugins: [],
}
