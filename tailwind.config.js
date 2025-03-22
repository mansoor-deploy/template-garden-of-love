
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
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        script: ['Dancing Script', 'cursive'],
        modern: ['Inter', 'sans-serif'],
        futuristic: ['Orbitron', 'sans-serif'],
        handwritten: ['Amatic SC', 'cursive'],
      },
      colors: {
        // Eternal Romance
        navy: "#0A1128",
        gold: "#FFD700",
        champagne: "#F7E7CE",
        'gold-shimmer': "rgba(255, 215, 0, 0.3)",
        
        // Modern Fusion
        charcoal: "#1E1E1E",
        slate: "#2C3E50",
        'electric-blue': "#7DF9FF",
        
        // Star-Crossed
        'deep-space': "#0C0B30",
        'cosmic-purple': "#663399",
        'nebula-pink': "#FF69B4",
        starlight: "#FFFFFF",
        
        // Garden of Love
        'soft-cream': "#FFF8E7",
        'leaf-green': "#4F7942",
        'earth-brown': "#654321",
        'blush-pink': "#FEC5BB",
        
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
      },
      backgroundImage: {
        'garden-gradient': 'linear-gradient(to bottom, rgba(79, 121, 66, 0.1), rgba(255, 248, 231, 1))',
        'cosmic-gradient': 'linear-gradient(to bottom, #0C0B30, #1A1456)',
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
        shimmer: {
          '0%': { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: 'shimmer 3s infinite linear',
      },
      boxShadow: {
        'cosmic': '0 0 20px rgba(102, 51, 153, 0.5)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
