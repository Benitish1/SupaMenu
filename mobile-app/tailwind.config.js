/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  presets: [require("nativewind/preset")],
  // "class" lets the in-app theme button switch light/dark (see src/contexts/ThemeProvider.tsx).
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f7941d",
        // Keep in sync with src/constants/Colors.ts
        cream: "#FFF4E6",
        "border-light": "#FFE0B8",
        "surface-dark": "#151718",
        "card-dark": "#1E2022",
        "border-dark": "#3A2A17",
        "text-dark": "#ECEDEE",
      }
    },
  },
  plugins: [],
}
