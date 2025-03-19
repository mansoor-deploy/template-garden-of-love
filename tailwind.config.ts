
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'serif': ['Playfair Display', 'serif'],
				'script': ['Dancing Script', 'cursive'],
				'sans': ['Inter', 'sans-serif'],
				'modern': ['Montserrat', 'sans-serif'],
				'futuristic': ['Orbitron', 'sans-serif'],
				'handwritten': ['Amatic SC', 'cursive'],
			},
			colors: {
				// Template 1: Eternal Romance
				'navy': '#0A1128',
				'midnight': '#001F54',
				'gold': '#FFD700',
				'champagne': '#F7E7CE',
				
				// Template 2: Modern Fusion
				'slate': '#708090',
				'electric-blue': '#7DF9FF',
				'charcoal': '#36454F',
				
				// Template 3: Star-Crossed
				'cosmic-purple': '#663399',
				'starlight': '#E0E0E0',
				'deep-space': '#191970',
				'nebula-pink': '#FF69B4',
				
				// Template 4: Garden of Love
				'leaf-green': '#4F7942',
				'blush-pink': '#FEC5BB',
				'earth-brown': '#8B4513',
				'soft-cream': '#FFFDD0',
				
				// Default shadcn colors
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'sparkle': {
					'0%': { opacity: '0', transform: 'scale(0)' },
					'50%': { opacity: '1', transform: 'scale(1)' },
					'100%': { opacity: '0', transform: 'scale(0)' }
				},
				'floating': {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
					'100%': { transform: 'translateY(0px)' }
				},
				'pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-500px 0' },
					'100%': { backgroundPosition: '500px 0' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'bloom': {
					'0%': { transform: 'scale(1)', opacity: '0.7' },
					'50%': { transform: 'scale(1.05)', opacity: '1' },
					'100%': { transform: 'scale(1)', opacity: '0.7' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-out': 'fade-out 0.5s ease-out forwards',
				'scale-in': 'scale-in 0.5s ease-out forwards',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'floating': 'floating 3s ease-in-out infinite',
				'pulse': 'pulse 2s ease-in-out infinite',
				'shimmer': 'shimmer 3s infinite linear',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'bloom': 'bloom 3s ease-in-out infinite'
			},
			backgroundImage: {
				'gold-shimmer': 'linear-gradient(90deg, rgba(255,215,0,0) 0%, rgba(255,215,0,0.5) 50%, rgba(255,215,0,0) 100%)',
				'silver-shimmer': 'linear-gradient(90deg, rgba(192,192,192,0) 0%, rgba(192,192,192,0.5) 50%, rgba(192,192,192,0) 100%)',
				'cosmic-gradient': 'linear-gradient(to bottom, #0B0B3B 0%, #3D348B 35%, #201335 100%)',
				'garden-gradient': 'linear-gradient(to bottom, #A9D18E 0%, #DAEBD0 50%, #F7F7E3 100%)'
			},
			transitionTimingFunction: {
				'bounce-in': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
