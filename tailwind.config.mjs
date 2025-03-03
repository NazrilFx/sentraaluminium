/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Tambahkan ini untuk kontrol manual mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        lilita: ["var(--font-lilita)"],
        inter: ["var(--font-inter)"],
      }
    },
  },
  plugins: [],
};
