import type { Config } from "tailwindcss";
import * as theme from "./src/styles/theme";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    ...theme,
  },
};
export default config;
