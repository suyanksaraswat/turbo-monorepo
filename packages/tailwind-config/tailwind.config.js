/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // apps content
    "app/**/*.{js,jsx,ts,tsx}",
    // packages content
    "../../packages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
