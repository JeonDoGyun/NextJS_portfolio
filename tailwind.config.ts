import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/app/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textShadow: {
        sm: "1px 1px 2px var(--tw-shadow-color)",
        DEFAULT: "2px 2px 4px var(--tw-shadow-color)",
        lg: "4px 4px 8px var(--tw-shadow-color)",
        xl: "4px 4px 16px var(--tw-shadow-color)",
      },
      keyframes: {
        typingCursor: {
          from: {
            borderRight: "2px solid white",
          },
          to: { borderRight: "2px solid black" },
        },
      },
      animation: {
        typingCursor: "typingCursor 1s ease-in-out 0ms 2",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
export default config;
