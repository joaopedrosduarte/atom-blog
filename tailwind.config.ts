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
        "auxiliar-white": "#FBF6FF",
        "maintext-white": "FFFFFF",
        "light-purple": "#9E6DC2",
        "lime-green": "#4FFF4B",
        "bg-purple": "#290742",
        "h1-color": "#9E6DC2",
        "h2-color": "#290742",
      }
    },
  },
  plugins: [],
};
export default config;
