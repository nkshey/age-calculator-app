/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: "hsl(259, 100%, 65%)",
      "light-red": "hsl(0, 100%, 67%)",

      white: " hsl(0, 0%, 100%)",
      "off-white": "hsl(0, 0%, 94%)",
      "light-gray": "hsl(0, 0%, 86%)",
      "smoke-gray": "hsl(0, 1%, 44%)",
      "off-black": "hsl(0, 0%, 8%)",
    },

    fontFamily: {
      sans: "Poppins, sans-serif",
    },

    fontWeight: {
      regular: "400",
      bold: "700",
      extrabold: "800",
    },

    extend: {
      screens: {
        md: "870px",
        xs: { max: "370px" },
      },
    },
  },
  plugins: [],
};
