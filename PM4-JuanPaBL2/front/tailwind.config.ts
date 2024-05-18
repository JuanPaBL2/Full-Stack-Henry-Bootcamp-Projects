import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customGray: '#f2f2f2',
        bruViolet: '#614ad9',
        pastel: '#f2cc67',
        mlgray: '#333333',
        blueMl: '#3483fa'
      },
      fontFamily: {
        'plus-jakarta-sans': ['"Plus Jakarta Sans"', 'sans-serif'],
        'encode-sans-expanded': ['"Encode Sans Expanded"', 'sans-serif'],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
