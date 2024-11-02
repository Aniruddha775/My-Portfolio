/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            borderRight: "4px solid white",
          },
          "100%": {
            width: "100%",
            borderRight: "4px solid transparent",
          },
        },
      },
      animation: {
        typing: "typing 3.5s steps(40, end)",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};
