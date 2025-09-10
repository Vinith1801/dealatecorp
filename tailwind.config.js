/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",         // Sky Blue
        secondary: "#8b5cf6",       // Violet for gradient accent
        accent: "#f0f9ff",          // Light accent for subtle backgrounds
        bgLight: "#f8fafc",         // Section background
        bgDark: "#111827",          // Footer / dark areas
        grayLight: "#f3f4f6",       // Soft neutral for borders
        grayDark: "#1f2937",        // Text dark
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0,0,0,0.06)",
        md: "0 4px 12px rgba(0,0,0,0.06)",
        lg: "0 12px 28px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      transitionDuration: {
        200: "200ms",
        300: "300ms",
      },
    },
  },
  plugins: [],
};
