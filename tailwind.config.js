/** @type {import('tailwindcss').Config} */
 
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        192: "48rem", // '192' is the key, which results in the class name `.max-h-192`
      },
    },
  },
  darkMode: "false", // Explicitly disable dark mode
  plugins: [],
};
