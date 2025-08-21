// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom neon purple colors
        neon: {
          purple: {
            100: '#faf5ff',
            200: '#e9d8fd',
            300: '#d6bcfa',
            400: '#b794f4',
            500: '#9f7aea', // Main neon purple
            600: '#805ad5',
            700: '#6b46c1',
            800: '#553c9a',
            900: '#44337a',
            glow: '#c084fc', // Special glow color
          }
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        // Custom animations for neon effects
        "neon-pulse": {
          '0%, 100%': {
            boxShadow: '0 0 5px theme("colors.neon.purple.500"), 0 0 10px theme("colors.neon.purple.500")',
          },
          '50%': {
            boxShadow: '0 0 20px theme("colors.neon.purple.500"), 0 0 30px theme("colors.neon.purple.500")',
          },
        },
        "neon-flicker": {
          '0%, 100%': {
            opacity: 1,
            boxShadow: '0 0 5px theme("colors.neon.purple.500"), 0 0 10px theme("colors.neon.purple.500")',
          },
          '50%': {
            opacity: 0.8,
            boxShadow: '0 0 5px theme("colors.neon.purple.500"), 0 0 15px theme("colors.neon.purple.500")',
          },
        },
        "glow": {
          '0%': {
            boxShadow: '0 0 5px theme("colors.neon.purple.500")',
          },
          '100%': {
            boxShadow: '0 0 20px theme("colors.neon.purple.500"), 0 0 30px theme("colors.neon.purple.glow")',
          },
        },
        "float": {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        "slide-in": {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
        "neon-flicker": "neon-flicker 1.5s ease-in-out infinite",
        "glow": "glow 1.5s ease-in-out infinite alternate",
        "float": "float 3s ease-in-out infinite",
        "slide-in": "slide-in 0.5s ease-out",
      },
      // Custom background images
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #9f7aea 0%, #805ad5 50%, #6b46c1 100%)',
        'dark-gradient': 'linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #4a5568 100%)',
        'light-gradient': 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 50%, #e2e8f0 100%)',
        'purple-glows': 'radial-gradient(circle, rgba(159, 122, 234, 0.3) 0%, transparent 70%)',
      },
      // Custom box shadows for neon effects
      boxShadow: {
        'neon-sm': '0 0 5px theme("colors.neon.purple.500"), 0 0 10px theme("colors.neon.purple.500")',
        'neon-md': '0 0 10px theme("colors.neon.purple.500"), 0 0 20px theme("colors.neon.purple.500")',
        'neon-lg': '0 0 15px theme("colors.neon.purple.500"), 0 0 30px theme("colors.neon.purple.500")',
        'neon-xl': '0 0 20px theme("colors.neon.purple.500"), 0 0 40px theme("colors.neon.purple.500")',
      },
      // Custom spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Custom font sizes
      fontSize: {
        'xxs': '0.625rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
      },
      // Custom z-index
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      // Custom opacity
      opacity: {
        '10': '0.1',
        '85': '0.85',
        '95': '0.95',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Custom plugin for neon text effects
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.neon-text': {
          textShadow: `0 0 5px ${theme('colors.neon.purple.500')}, 0 0 10px ${theme('colors.neon.purple.500')}, 0 0 15px ${theme('colors.neon.purple.500')}, 0 0 20px ${theme('colors.neon.purple.500')}`,
        },
        '.neon-text-glow': {
          textShadow: `0 0 5px ${theme('colors.neon.purple.500')}, 0 0 10px ${theme('colors.neon.purple.500')}, 0 0 15px ${theme('colors.neon.purple.500')}, 0 0 20px ${theme('colors.neon.purple.500')}, 0 0 35px ${theme('colors.neon.purple.500')}, 0 0 40px ${theme('colors.neon.purple.glow')}`,
        },
        '.glass-effect': {
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-effect-dark': {
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
