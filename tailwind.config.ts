import type { Config } from "tailwindcss";

const config: Config = {
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
        // Pure Nordic whites and warm grays (inspired by top row)
        primary: {
          50: '#fefefe',  // Pure white
          100: '#fcfcfc', // Off white (like top-left circle)
          200: '#f7f6f5', // Warm white (like second circle)
          300: '#f0ede8', // Light warm gray (like third circle)
          400: '#e8e4df', // Medium warm gray (like fourth circle)
          500: '#9aa0a6', // Neutral gray
          600: '#5f6368', // Medium gray
          700: '#3c4043', // Dark gray
          800: '#202124', // Charcoal
          900: '#1a1a1a', // Deep charcoal
        },
        // Warm Nordic tones (inspired by middle row - blush, sage, dusty blue)
        nordic: {
          50: '#faf9f8',  // Warm white base
          100: '#f5f3f1', // Cream base
          200: '#ede8e4', // Light blush (like middle-left circle)
          300: '#ddd6d0', // Warm beige
          400: '#c4bab2', // Medium warm tone
          500: '#a69c94', // Muted warm gray
          600: '#8b7f75', // Deep warm gray
          700: '#6b5f55', // Dark warm tone
          800: '#4a3e34', // Deep brown
          900: '#2d1f17', // Dark brown
        },
        // Natural sage and muted tones (inspired by middle-right colors)
        sage: {
          50: '#f8f9f8',  // Soft white
          100: '#f0f2f0', // Light sage white
          200: '#e6e8e4', // Very light sage (like middle-right circle)
          300: '#d4d8d2', // Light sage
          400: '#b8c0b6', // Medium sage
          500: '#9aa69a', // Sage green
          600: '#7d8a7d', // Deep sage
          700: '#626b62', // Dark sage
          800: '#454b45', // Very dark sage
          900: '#2a2d2a', // Deep forest
        },
        // Cool dusty blue tones (inspired by blue circle)
        dusty: {
          50: '#f7f8f9',  // Cool white
          100: '#eff2f4', // Light blue white
          200: '#e2e8ec', // Very light dusty blue
          300: '#d0d8df', // Light dusty blue (like the blue circle)
          400: '#b4c2cc', // Medium dusty blue
          500: '#96a8b5', // Dusty blue
          600: '#7a8c9a', // Deep dusty blue
          700: '#5f6b76', // Dark dusty blue
          800: '#454b52', // Very dark blue
          900: '#2a2d31', // Deep navy
        },
        // Deep charcoals (inspired by bottom row)
        charcoal: {
          50: '#f8f8f8',  // Light base
          100: '#f0f0f0', // Soft gray
          200: '#e0e0e0', // Light charcoal base
          300: '#c8c8c8', // Medium light
          400: '#a0a0a0', // Medium charcoal
          500: '#808080', // Mid charcoal
          600: '#5a5d60', // Deep charcoal (like bottom circles)
          700: '#434649', // Very dark charcoal
          800: '#2d3033', // Near black
          900: '#1a1c1e', // Deep black
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['var(--font-bricolage)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'custom': '8px',
      },
    },
  },
  plugins: [],
};
export default config;