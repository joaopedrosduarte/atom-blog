import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "#F2E7FA",
        "auxiliartext-white": "#FBF6FF",
        "maintext-white": "#FFFFFF",
        "light-purple": "#9E6DC2",
        "dark-purple": "#170027",
        "lime-green": "#4FFF4B",
        "main-purple": "#290742",
        "h1-color": "#9E6DC2",
        "h2-color": "#290742",
      },
      screens: {
        "lg2": "1094px",
        "md3": "964px",
        "md2": "914px",
        "xs": "524px",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        roboto: "var(--font-roboto)",
      },
    },
  },
  plugins: [],
};
export default config;
