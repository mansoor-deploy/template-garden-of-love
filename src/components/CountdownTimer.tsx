
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownProps {
  targetDate: string; // Format: 'YYYY-MM-DD'
  className?: string;
  theme?: 'gold' | 'cosmic' | 'modern' | 'garden';
}

const CountdownTimer = ({ targetDate, className = '', theme = 'gold' }: CountdownProps) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const getThemeClasses = () => {
    switch (theme) {
      case 'gold':
        return {
          container: 'text-champagne',
          item: 'bg-navy/50 border-gold/30',
          number: 'text-gold',
          label: 'text-champagne/80',
        };
      case 'cosmic':
        return {
          container: 'text-starlight',
          item: 'bg-deep-space/50 border-cosmic-purple/30',
          number: 'text-starlight',
          label: 'text-starlight/80',
        };
      case 'modern':
        return {
          container: 'text-white',
          item: 'bg-charcoal/70 border-electric-blue/30',
          number: 'text-electric-blue',
          label: 'text-gray-300',
        };
      case 'garden':
        return {
          container: 'text-earth-brown',
          item: 'bg-white/70 border-leaf-green/30',
          number: 'text-leaf-green',
          label: 'text-earth-brown/80',
        };
      default:
        return {
          container: 'text-white',
          item: 'bg-black/50 border-white/30',
          number: 'text-white',
          label: 'text-gray-300',
        };
    }
  };

  const themeClasses = getThemeClasses();

  const timerItems = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`${themeClasses.container} ${className}`}
    >
      <div className="flex justify-center space-x-4 sm:space-x-6">
        {timerItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`flex flex-col items-center justify-center ${themeClasses.item} backdrop-blur-md rounded-lg p-2 sm:p-4 min-w-[60px] sm:min-w-[80px] border`}
          >
            <div className={`text-xl sm:text-3xl font-bold mb-1 ${themeClasses.number}`}>
              {item.value < 10 ? `0${item.value}` : item.value}
            </div>
            <div className={`text-xs sm:text-sm font-medium ${themeClasses.label}`}>
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
