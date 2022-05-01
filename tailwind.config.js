// tailwind.config.js
module.exports = {
  future: {},
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["autumn"],

  },
}