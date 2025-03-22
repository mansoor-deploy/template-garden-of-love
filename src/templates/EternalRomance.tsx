
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RSVPForm from "@/components/RSVPForm";
import AudioPlayer from "@/components/AudioPlayer";
import CountdownTimer from "@/components/CountdownTimer";

const EternalRomance = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const ref = useRef<HTMLDivElement>(null);

  // Timeline milestones
  const milestones = [
    {
      date: "June 15, 2018",
      title: "First Meeting",
      description: "We met at a friend's birthday party and couldn't stop talking all night.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=600&auto=format",
    },
    {
      date: "December 24, 2018",
      title: "First Date",
      description: "A magical evening at the Christmas market, ending with our first kiss under the stars.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=600&auto=format",
    },
    {
      date: "July 10, 2020",
      title: "Moving In Together",
      description: "Starting our life together in our first apartment, surrounded by boxes and dreams.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=600&auto=format",
    },
    {
      date: "February 14, 2024",
      title: "The Proposal",
      description: "I asked the love of my life to marry me, and she said yes!",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format",
    },
  ];

  // Parallax effect for background layers
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 1, 0]);

  useEffect(() => {
    document.title = "Eternal Romance | Engagement Template";
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-navy flex items-center justify-center">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 rounded-full border-4 border-t-transparent border-gold animate-spin mb-6"
          ></motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-serif text-gold"
          >
            Eternal Romance
          </motion.h2>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="bg-midnight font-serif text-champagne relative">
      <AudioPlayer 
        audioSrc="https://cdn.pixabay.com/download/audio/2022/01/18/audio_dc39caa7a9.mp3" 
        theme="gold"
      />

      {/* Hero Section with Parallax */}
      <div className="h-screen relative overflow-hidden">
        <motion.div 
          style={{ y: bgY1 }}
          className="absolute inset-0 bg-navy"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1080&auto=format')] bg-cover bg-center opacity-20"></div>
        </motion.div>
        
        <motion.div 
          style={{ y: bgY2 }}
          className="absolute inset-0 bg-gradient-to-b from-navy/0 via-navy/60 to-navy"
        ></motion.div>
        
        {/* Sparkles Animation */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0,
              scale: 0 
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 rounded-full bg-gold"
          />
        ))}
        
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base uppercase tracking-[0.2em] mb-4 text-gold"
          >
            We're Getting Engaged
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gold-text"
          >
            Emily & James
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl mb-8"
          >
            September 14, 2024 • Engagement Celebration • Golden Palace Hotel
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="w-full mb-12"
          >
            <CountdownTimer 
              targetDate="2024-09-14" 
              theme="gold"
            />
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const timelineSection = document.getElementById('timeline');
              if (timelineSection) {
                timelineSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 rounded-full bg-gold text-navy font-medium relative overflow-hidden group"
          >
            <span className="relative z-10">Our Story</span>
            <span className="absolute inset-0 w-full bg-gold-shimmer shimmer-effect"></span>
          </motion.button>
        </div>
        
        <motion.div 
          style={{ opacity, y: textY }}
          className="absolute bottom-10 left-0 right-0 flex justify-center text-center"
        >
          <div className="text-gold animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14"/>
              <path d="m19 12-7 7-7-7"/>
            </svg>
          </div>
        </motion.div>
      </div>
      
      {/* Our Story Timeline Section */}
      <div id="timeline" className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-navy">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=1080&auto=format')] bg-fixed bg-cover bg-center opacity-10"></div>
        </div>
        
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm uppercase tracking-[0.2em] mb-2 inline-block text-gold">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gold-text">Our Love Story</h2>
          </motion.div>
          
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gold/30"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative mb-16 md:mb-24 flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:block w-1/2"></div>
                
                <div className="absolute left-1/2 md:left-1/2 top-10 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy border-4 border-gold z-10"></div>
                
                <div className="relative md:w-1/2 md:pl-10 md:pr-6 pt-4 md:pt-0">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-navy/80 backdrop-blur-sm border border-gold/20 p-6 rounded-lg shadow-xl"
                  >
                    <div className="text-gold text-sm font-medium mb-2">{milestone.date}</div>
                    <h3 className="text-2xl font-bold mb-3 text-gold">{milestone.title}</h3>
                    <p className="mb-4 text-champagne/80">{milestone.description}</p>
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <img 
                        src={milestone.image} 
                        alt={milestone.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* RSVP Section */}
      <div className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-navy">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1080&auto=format')] bg-fixed bg-cover bg-center opacity-10"></div>
        </div>
        
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm uppercase tracking-[0.2em] mb-2 inline-block text-gold">
              Join Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gold-text">Celebrate Our Engagement</h2>
            <p className="text-xl max-w-3xl mx-auto text-champagne/80">
              We would be honored to have you join us for our engagement celebration. Please RSVP by August 14, 2024.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-navy/80 backdrop-blur-sm border border-gold/20 p-6 rounded-lg shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4 text-gold">Event Details</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2 text-gold">Engagement Celebration</h4>
                  <p className="text-champagne/80 mb-1">September 14, 2024 at 6:00 PM</p>
                  <p className="text-champagne/80 mb-1">Golden Palace Hotel</p>
                  <p className="text-champagne/80">123 Timeless Avenue, New York</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 text-gold">Reception</h4>
                  <p className="text-champagne/80 mb-1">September 14, 2024 at 7:30 PM</p>
                  <p className="text-champagne/80 mb-1">Golden Palace Grand Ballroom</p>
                  <p className="text-champagne/80">Dinner & Dancing</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 text-gold">Dress Code</h4>
                  <p className="text-champagne/80">Formal Attire</p>
                </div>
              </div>
            </motion.div>
            
            <div>
              <RSVPForm theme="gold" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="relative py-10 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-script mb-4 gold-text">#EmilyAndJames2024</h3>
            <p className="text-champagne/80 max-w-lg mx-auto mb-6">
              Thank you for being part of our engagement celebration. We can't wait to share this special moment with you!
            </p>
            <div className="bg-gold h-px w-24 mx-auto mb-6 opacity-50"></div>
            <p className="text-sm text-champagne/60">
              © 2024 Emily & James | All Rights Reserved | Designed with Love
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EternalRomance;
