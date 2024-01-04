import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        'brand-primary-1': '#FF9F0D',
        'brand-secondary-1': '#AF872F',
        'brand-primary-2': '#BC9A6C',
        'brand-secondary-2': '#EDEAE3',
        'brand-primary-3': '#FF9F0D',
        'brand-secondary-3': '#999966',
        info: '#2F80ED',
        success: '#27AE60',
        warning: '#E2B93B',
        error: '#EB5757',
        'black-1': '#1E1E1E',
        'black-2': '#1D1D1D',
        'black-3': '#282828',
        'gray-1': '#333333',
        'gray-2': '#4F4F4F',
        'gray-3': '#828282',
        'gray-4': '#BDBDBD',
        'gray-5': '#E0E0E0',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config