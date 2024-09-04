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
        primary: "#299D91",
        secondary: "#E4E7EB",
        black: "#191919",
        white: "#ffffff",
        gray: "#525256",
        grayOne: "#666666",
        grayTwo: "#878787",
        grayThree: "#9F9F9F",
        grayLight: "#E8E8E8",
        grayLightTwo: "#F3F3F3",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "22px",
        "3xl": "24px",
      },
      fontWeight: {
        "extra-light": "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        "extra-bold": "800",
        "black-bold": "900",
      },
    },
  },
  plugins: [],
};
export default config;
