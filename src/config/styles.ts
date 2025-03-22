
// Typography and color configurations for all themes

export const themeConfig = {
  eternalRomance: {
    fonts: {
      primary: 'font-serif',
      accent: 'font-script',
    },
    colors: {
      primary: 'text-gold',
      secondary: 'text-champagne',
      background: 'bg-navy',
      accent: 'text-gold',
      border: 'border-gold/20',
    },
  },
  modernFusion: {
    fonts: {
      primary: 'font-modern',
      accent: 'font-modern font-light',
    },
    colors: {
      primary: 'text-electric-blue',
      secondary: 'text-white',
      background: 'bg-charcoal',
      accent: 'text-electric-blue',
      border: 'border-electric-blue/20',
    },
  },
  starCrossed: {
    fonts: {
      primary: 'font-futuristic',
      accent: 'font-futuristic font-light',
    },
    colors: {
      primary: 'text-starlight',
      secondary: 'text-starlight/80',
      background: 'bg-deep-space',
      accent: 'text-nebula-pink',
      border: 'border-cosmic-purple/30',
    },
  },
  gardenOfLove: {
    fonts: {
      primary: 'font-handwritten',
      accent: 'font-handwritten font-light',
    },
    colors: {
      primary: 'text-earth-brown',
      secondary: 'text-earth-brown/80',
      background: 'bg-soft-cream',
      accent: 'text-leaf-green',
      border: 'border-leaf-green/20',
    },
  },
};

// Helper function to get theme classes
export const getThemeClasses = (theme: keyof typeof themeConfig, element: keyof (typeof themeConfig)[keyof typeof themeConfig]['colors']) => {
  return themeConfig[theme]?.colors[element] || '';
};

export const getFontClasses = (theme: keyof typeof themeConfig, type: keyof (typeof themeConfig)[keyof typeof themeConfig]['fonts']) => {
  return themeConfig[theme]?.fonts[type] || '';
};
