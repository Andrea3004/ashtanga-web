import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#20231f",
        muted: "#687064",
        line: "#d8ded2",
        paper: "#f7f6f0",
        soft: "#ebe8dd",
        leaf: "#4f6f52",
        clay: "#9d6651",
        charcoal: "#292d2a"
      },
      boxShadow: {
        soft: "0 18px 48px rgba(30, 34, 28, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
