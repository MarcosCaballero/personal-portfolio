module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(calc(-250px * 2))",
          },
        },
      },
      animation: {
        scroll: "scroll 15s ease-out infinite",
      },
    },
  },
  plugins: [],
};
