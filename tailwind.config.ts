import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "#091518",
        background: "#002029ff",
        primary: "#00303dff",
        "midnight-green": "#004052ff",
        "midnight-green-2": "#005066ff",
        secondary: "#00607aff",
        "secondary-light": "#00b1e1",
      },
      backgroundImage: {
        "custom-gradient":
          'linear-gradient("#00b1e1", #00607aff 20%, #00303dff 50%, #00607aff 80%, #00b1e1)',
        test: "#00b1e1",
      },
      minHeight: {
        "min-h-screen-208": "calc(100vh - 208px)",
      },
      animation: {
        tilt: "tilt 10s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(5deg)",
          },
          "75%": {
            transform: "rotate(-5deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
