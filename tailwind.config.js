/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#092635",
        secondary: "#1B4242",
        textColor: "#9EC8B9",
      },
    },
  },
  plugins: [],
};
