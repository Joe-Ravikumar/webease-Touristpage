import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#87ceeb",
        secondary: "#ffffff",
        accent: "#ff6f61",
        foreground: "rgb(var(--foreground-rgb))",
        backgroundStart: "rgb(var(--background-start-rgb))",
        backgroundEnd: "rgb(var(--background-end-rgb))",
      },
    },
  },
  plugins: [],
};

export default config;
