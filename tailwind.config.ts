import type { Config } from "tailwindcss";
import * as theme from "./src/styles/theme";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e76d56",
        "n-100": "#f0f0f0",
        "n-200": "#f4f4f4",
        "n-300": "#f6f6f6",
        "n-400": "#eaeaea",
        "n-500": "#a9a9a9", // icon
        "n-600": "#929292",
        "n-700": "#6a6a6a",
        "n-800": "#575757",
        "n-900": "#222222",
        error: "#e76d56",
      },
      fontSize: {
        xxs: "0.6875rem",
        xs: "0.75rem",
        sm: "0.8125rem",
        md: "0.875rem",
        lg: "0.9375rem",
        xl: "1rem",
        xxl: "1.25rem",
      },
    },
  },
};
export default config;
