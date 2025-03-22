
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

// Add custom CSS class for gold shimmer effect
export const customEffects = {
  shimmerEffect: 'animate-shimmer bg-[linear-gradient(90deg,transparent,rgba(255,215,0,0.4),transparent)] bg-[length:500px_100%] bg-no-repeat',
  cosmicPulse: 'animate-pulse',
  floatingAnimation: 'animate-floating',
};

// Helper for theme-based content rendering
export const getThemeContent = (theme: keyof typeof themeConfig) => {
  switch (theme) {
    case 'eternalRomance':
      return {
        title: 'Engagement Celebration',
        subtitle: 'A Timeless Love Story',
        emphasis: 'gold-text'
      };
    case 'modernFusion':
      return {
        title: 'Engagement Party',
        subtitle: 'Modern Love, Modern Celebration',
        emphasis: 'electric-text'
      };
    case 'starCrossed':
      return {
        title: 'Cosmic Engagement',
        subtitle: 'Written in the Stars',
        emphasis: 'cosmic-text'
      };
    case 'gardenOfLove':
      return {
        title: 'Garden Engagement',
        subtitle: 'Growing Our Love Story',
        emphasis: 'garden-text'
      };
    default:
      return {
        title: 'Engagement',
        subtitle: 'Our Love Story',
        emphasis: ''
      };
  }
};
