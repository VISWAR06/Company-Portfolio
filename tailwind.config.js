/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED", // Purple accent
        dark: "#0F172A",    // Background
      },
    },
  },
  plugins: [],
};
