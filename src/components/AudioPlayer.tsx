
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AudioPlayerProps {
  audioSrc: string;
  theme?: 'gold' | 'cosmic' | 'modern' | 'garden';
  className?: string;
}

const AudioPlayer = ({ audioSrc, theme = 'gold', className = '' }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const getThemeClasses = () => {
    switch (theme) {
      case 'gold':
        return {
          container: 'bg-navy/30 border-gold/20',
          button: 'text-gold hover:text-champagne',
          slider: 'bg-navy accent-gold',
        };
      case 'cosmic':
        return {
          container: 'bg-deep-space/30 border-cosmic-purple/20',
          button: 'text-starlight hover:text-nebula-pink',
          slider: 'bg-deep-space accent-starlight',
        };
      case 'modern':
        return {
          container: 'bg-slate/20 border-electric-blue/20',
          button: 'text-electric-blue hover:text-white',
          slider: 'bg-charcoal accent-electric-blue',
        };
      case 'garden':
        return {
          container: 'bg-white/30 border-leaf-green/20',
          button: 'text-leaf-green hover:text-earth-brown',
          slider: 'bg-white accent-leaf-green',
        };
      default:
        return {
          container: 'bg-white/20 border-white/20',
          button: 'text-white hover:text-gray-200',
          slider: 'bg-gray-700 accent-white',
        };
    }
  };

  const themeClasses = getThemeClasses();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`fixed bottom-4 right-4 z-50 rounded-full ${themeClasses.container} backdrop-blur-lg glass-effect border p-2 flex items-center space-x-2 ${className}`}
    >
      <audio ref={audioRef} src={audioSrc} loop />
      
      <button 
        onClick={togglePlay}
        className={`w-10 h-10 rounded-full flex items-center justify-center ${themeClasses.button} transition-colors duration-300`}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        )}
      </button>
      
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className={`w-16 h-1 rounded-full appearance-none ${themeClasses.slider}`}
      />
    </motion.div>
  );
};

export default AudioPlayer;
