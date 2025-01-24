import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#6db842",
        accentColor: "#359138",
        errorColor: "#ff385c",
        errorColorLight: "#FFEEEF",
        whiteColor: "#f7f7f7",
        blackColor: "#212121",
      },
    },
  },
  plugins: [],
} satisfies Config;
