module.exports = {
  purge: [
    // Define the paths to your Next.js components, pages, and other relevant files
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    // Add more paths as needed for your specific project structure
  ],
  darkMode: false, // Set to 'media' or 'class' if you want to enable dark mode
  theme: {
    extend: {
      // Add any custom theme configuration or overrides here
    },
  },
  variants: {
    extend: {
      // Add any custom variants or overrides here
    },
  },
  plugins: [
    // Add any additional Tailwind CSS plugins here
    // Example: require('@tailwindcss/forms'),
  ],
};
