import type { Config } from "tailwindcss";

export default {
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
      fontSize: {
        'responsive-h1': '4vw',
        'responsive-p': 'clamp(0.75rem, 1.5vw, 1.125rem)',
      },
      lineHeight: {
        'responsive-h1': 'clamp(4.5vw, 6.5rem, 7.5rem)',
        'responsive-p': 'clamp(1.25rem, 2vw, 1.375rem)',
      },
      screens: {
        'lg': '1024px',
        'xl': '1440px',
        '2xl': '1920px',
      },
    },
  },
  plugins: [],
} satisfies Config;
