import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#081A20",
        surface: "#102830",
        gold: "#B9975B",
        text: "#F6F2EA",
        muted: "#A7A7A7",
        ink: "#F6F2EA",
        line: "#24414A",
        paper: "#081A20",
        soft: "#102830",
        leaf: "#B9975B",
        clay: "#B9975B",
        charcoal: "#081A20"
      },
      boxShadow: {
        soft: "0 18px 48px rgba(0, 0, 0, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
