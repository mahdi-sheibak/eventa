import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  plugins: [require("daisyui")],
  theme: {
    screens: {
      mobile: "560px",
      tablet: "760px",
      desktop: "960px",
      wide: "1370px",
    },
    extend: {
      fontFamily: {
        sans: ["IRANSans", "IRANSans fallback", ...fontFamily.sans],
      },
      animation: {
        fade: "fadeIn .5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
};
