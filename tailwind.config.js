/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'suisse': ['SuisseIntl-Regular', 'cursive']
      },
      colors: {
        main: "#eeeee4",
        detail: "#8DAA92"
      },
    },
  },
  plugins: [],
};
