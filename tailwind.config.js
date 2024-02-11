/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,svg,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,svg,mdx}",
    "./components/**/*.{js,ts,jsx,svg,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,svg,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
      },
      scrollSnapType: {
        mandatory: "mandatory",
      },
      scrollSnapAlign: {
        start: "start",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
