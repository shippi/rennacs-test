import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    animation: { 
      alert: 'alert 2s cubic-bezier(0,1,0.4,1)',
    },
    extend: {
      keyframes: {
        "alert": {
          "0%": {
            opacity: "0",
            transform: "translateY(-50px)"
          },
          "30%": {
            opacity: "1",
            transform: "translateY(-1px)"
          },
          "90%": {
            opacity: "1",
            transform: "translateY(0px)"
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-50px)"
          },
        }
      }
    },
  },
  plugins: [],
};
export default config;
