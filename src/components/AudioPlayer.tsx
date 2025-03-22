
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AudioPlayerProps {
  audioSrc: string;
  theme?: 'gold' | 'cosmic' | 'modern' | 'garden';
  className?: string;
}

const AudioPlayer = ({ audioSrc, theme = 'gold', className = '' }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Handle playing and pausing
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch(error => {
          console.error("Audio play failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Apply theme-specific styling
  const getThemeClasses = () => {
    switch (theme) {
      case 'gold':
        return {
          container: 'bg-navy/70 border-gold/30 text-gold',
          icon: 'text-gold',
        };
      case 'cosmic':
        return {
          container: 'bg-deep-space/70 border-cosmic-purple/30 text-nebula-pink',
          icon: 'text-nebula-pink',
        };
      case 'modern':
        return {
          container: 'bg-charcoal/70 border-electric-blue/30 text-electric-blue',
          icon: 'text-electric-blue',
        };
      case 'garden':
        return {
          container: 'bg-white/80 border-leaf-green/30 text-leaf-green',
          icon: 'text-leaf-green',
        };
      default:
        return {
          container: 'bg-black/50 border-white/30 text-white',
          icon: 'text-white',
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <>
      <audio ref={audioRef} src={audioSrc} loop />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          x: isVisible ? 0 : 70
        }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-6 right-6 z-50 flex items-center backdrop-blur-md border rounded-full shadow-lg ${themeClasses.container} ${className}`}
      >
        {isVisible && (
          <div className="flex items-center px-4 py-2">
            <button onClick={togglePlay} className={`p-2 rounded-full focus:outline-none ${themeClasses.icon}`}>
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="4" width="4" height="16"/>
                  <rect x="14" y="4" width="4" height="16"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              )}
            </button>
            <span className="text-sm ml-2 whitespace-nowrap">
              {isPlaying ? 'Pause Music' : 'Play Music'}
            </span>
          </div>
        )}
        
        <button 
          onClick={toggleVisibility}
          className={`p-2 rounded-full focus:outline-none ${themeClasses.icon}`}
        >
          {isVisible ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m5 9 7 7 7-7"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a1 1 0 0 0-1 1v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2h-6V4a1 1 0 0 0-1-1Z"/>
            </svg>
          )}
        </button>
      </motion.div>
    </>
  );
};

export default AudioPlayer;
