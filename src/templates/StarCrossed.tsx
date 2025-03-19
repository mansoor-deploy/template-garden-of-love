
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import RSVPForm from "@/components/RSVPForm";
import AudioPlayer from "@/components/AudioPlayer";
import CountdownTimer from "@/components/CountdownTimer";

const StarCrossed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [starMap, setStarMap] = useState<{x: number, y: number, size: number}[]>([]);
  const [hoverConstellation, setHoverConstellation] = useState(-1);
  const { scrollYProgress } = useScroll();
  const starfieldRef = useRef<HTMLDivElement>(null);

  // Generate stars for starfield
  useEffect(() => {
    const stars = Array.from({ length: 200 }).map(() => ({
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: 1 + Math.random() * 2,
    }));
    setStarMap(stars);
  }, []);

  // Parallax effects
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Constellations data
  const constellations = [
    {
      name: "The First Meeting",
      description: "When our eyes met across the crowded room, it was like the universe shifted.",
      date: "March 21, 2020",
      stars: [
        { x: 15, y: 20 },
        { x: 20, y: 30 },
        { x: 30, y: 35 },
        { x: 35, y: 25 },
        { x: 25, y: 15 },
      ],
      lines: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 0],
      ],
    },
    {
      name: "The First Date",
      description: "Under the same stars that now shine above, we shared our dreams and fell in love.",
      date: "April 15, 2020",
      stars: [
        { x: 65, y: 20 },
        { x: 70, y: 15 },
        { x: 75, y: 20 },
        { x: 72, y: 30 },
        { x: 68, y: 30 },
      ],
      lines: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 0],
      ],
    },
    {
      name: "The Proposal",
      description: "Beneath the cosmic dance of stars, I asked you to dance with me for eternity.",
      date: "December 24, 2023",
      stars: [
        { x: 40, y: 70 },
        { x: 50, y: 65 },
        { x: 55, y: 75 },
        { x: 45, y: 80 },
        { x: 35, y: 75 },
      ],
      lines: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 0],
      ],
    },
  ];

  useEffect(() => {
    document.title = "Star-Crossed | Engagement Template";
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-deep-space flex items-center justify-center">
        <div className="relative">
          {/* Stars loading animation */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                top: '50%',
                left: '50%',
                opacity: 0,
              }}
              animate={{ 
                top: `${50 + 30 * Math.sin(i * (Math.PI * 2 / 20))}%`,
                left: `${50 + 30 * Math.cos(i * (Math.PI * 2 / 20))}%`,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="absolute h-1 w-1 bg-starlight rounded-full"
            />
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-futuristic text-starlight cosmic-text"
          >
            Star-Crossed
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-deep-space font-futuristic text-starlight relative overflow-hidden">
      <Link 
        to="/"
        className="fixed top-4 left-4 z-50 flex items-center space-x-2 px-4 py-2 bg-deep-space/70 backdrop-blur-md rounded-full border border-cosmic-purple/20 text-starlight transition-all duration-300 hover:bg-cosmic-purple/20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 19-7-7 7-7"/>
          <path d="M19 12H5"/>
        </svg>
        <span>Back to Templates</span>
      </Link>
      
      <AudioPlayer 
        audioSrc="https://cdn.pixabay.com/download/audio/2021/04/07/audio_29c9cd1366.mp3" 
        theme="cosmic"
        className="backdrop-blur-lg"
      />
      
      {/* Starfield Background */}
      <div
        ref={starfieldRef} 
        className="fixed inset-0 z-0 bg-cosmic-gradient"
      >
        {starMap.map((star, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{ 
              top: `${star.y}%`, 
              left: `${star.x}%`, 
              width: `${star.size}px`, 
              height: `${star.size}px`,
              opacity: 0.3 + Math.random() * 0.7
            }}
            animate={{ 
              opacity: [0.3 + Math.random() * 0.7, 0.5 + Math.random() * 0.5, 0.3 + Math.random() * 0.7],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Nebula effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(102,51,153,0.2)_0%,rgba(25,25,112,0)_70%)] opacity-60"></div>
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(255,105,180,0.15)_0%,rgba(25,25,112,0)_70%)] opacity-60 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-[radial-gradient(ellipse_at_bottom,_rgba(64,224,208,0.15)_0%,rgba(25,25,112,0)_70%)] opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: headerOpacity }}
          className="relative container mx-auto px-4 text-center z-10 pt-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block text-xs uppercase tracking-[0.3em] py-2 px-6 border border-cosmic-purple/30 rounded-full text-nebula-pink mb-6"
          >
            Written in the Stars
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 cosmic-text"
          >
            Luna & Orion
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl mb-10"
          >
            November 12, 2024 • Celestial Observatory • Starlight Valley
          </motion.div>
          
          <CountdownTimer 
            targetDate="2024-11-12" 
            theme="cosmic"
            className="mb-12"
          />
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(102, 51, 153, 0.5)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const timelineSection = document.getElementById('constellation-map');
              if (timelineSection) {
                timelineSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 rounded-full bg-cosmic-purple text-starlight font-medium hover:bg-nebula-pink transition-all duration-500"
          >
            View Our Star Map
          </motion.button>
          
          {/* Shooting stars animation */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                top: `${-20 + Math.random() * 40}%`, 
                left: "110%",
                width: "100px",
                height: "1px",
                rotate: `${-20 - Math.random() * 20}deg`,
                opacity: 0,
                background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.3) 100%)"
              }}
              animate={{ 
                top: `${40 + Math.random() * 40}%`,
                left: "-10%",
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 7 + Math.random() * 15,
                delay: i * 5,
                ease: "easeOut"
              }}
              className="absolute z-0"
            />
          ))}
        </motion.div>
      </section>
      
      {/* Constellation Map Section */}
      <section id="constellation-map" className="relative min-h-screen pt-20 pb-32">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-wider mb-2 inline-block text-nebula-pink">
              Our Cosmic Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 cosmic-text">Constellation Map</h2>
            <p className="text-starlight/70 max-w-2xl mx-auto">
              Just as the stars have mapped out the universe, these key moments have mapped out our love story.
              Hover over each constellation to reveal our cosmic journey.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[70vh] md:h-[80vh] max-h-[800px] border border-cosmic-purple/30 rounded-lg overflow-hidden bg-deep-space/50 backdrop-blur-sm mb-20"
          >
            {/* Stars background */}
            {Array.from({ length: 100 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full"
                style={{ 
                  top: `${Math.random() * 100}%`, 
                  left: `${Math.random() * 100}%`, 
                  width: `${1 + Math.random() * 2}px`, 
                  height: `${1 + Math.random() * 2}px`,
                  opacity: 0.3 + Math.random() * 0.7
                }}
                animate={{ 
                  opacity: [0.3 + Math.random() * 0.7, 0.5 + Math.random() * 0.5, 0.3 + Math.random() * 0.7],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Constellations */}
            {constellations.map((constellation, constellationIndex) => (
              <div key={constellationIndex}>
                {/* Constellation lines */}
                <svg 
                  className="absolute inset-0 w-full h-full z-10 pointer-events-none" 
                  style={{ opacity: hoverConstellation === constellationIndex ? 1 : 0.3 }}
                >
                  {constellation.lines.map((line, lineIndex) => {
                    const start = constellation.stars[line[0]];
                    const end = constellation.stars[line[1]];
                    return (
                      <motion.line
                        key={lineIndex}
                        x1={`${start.x}%`}
                        y1={`${start.y}%`}
                        x2={`${end.x}%`}
                        y2={`${end.y}%`}
                        stroke={hoverConstellation === constellationIndex ? "#FF69B4" : "#663399"}
                        strokeWidth="1"
                        strokeDasharray="5,3"
                        initial={{ pathLength: 0, opacity: 0.3 }}
                        animate={{ 
                          pathLength: hoverConstellation === constellationIndex ? 1 : 0.7,
                          opacity: hoverConstellation === constellationIndex ? 0.8 : 0.3
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    );
                  })}
                </svg>
                
                {/* Constellation stars */}
                {constellation.stars.map((star, starIndex) => (
                  <motion.div
                    key={`star-${constellationIndex}-${starIndex}`}
                    className="absolute z-20 rounded-full cursor-pointer"
                    style={{ 
                      top: `${star.y}%`, 
                      left: `${star.x}%`, 
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{ 
                      boxShadow: hoverConstellation === constellationIndex 
                        ? ["0 0 5px rgba(255, 105, 180, 0.5)", "0 0 20px rgba(255, 105, 180, 0.7)", "0 0 5px rgba(255, 105, 180, 0.5)"]
                        : ["0 0 3px rgba(102, 51, 153, 0.3)", "0 0 7px rgba(102, 51, 153, 0.5)", "0 0 3px rgba(102, 51, 153, 0.3)"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    onMouseEnter={() => setHoverConstellation(constellationIndex)}
                    onMouseLeave={() => setHoverConstellation(-1)}
                  >
                    <div 
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                        hoverConstellation === constellationIndex ? "bg-nebula-pink" : "bg-cosmic-purple"
                      }`}
                    />
                  </motion.div>
                ))}
                
                {/* Constellation description */}
                {hoverConstellation === constellationIndex && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="absolute glass-effect dark-glass-effect border border-cosmic-purple/30 p-4 rounded-lg z-30 max-w-xs"
                    style={{
                      top: `${constellation.stars[0].y}%`,
                      left: `${constellation.stars[0].x}%`,
                      transform: 'translate(-20%, -120%)'
                    }}
                  >
                    <div className="text-nebula-pink font-medium mb-1">{constellation.date}</div>
                    <h3 className="text-xl font-bold mb-2 cosmic-text">{constellation.name}</h3>
                    <p className="text-sm text-starlight/80">{constellation.description}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
          
          <div className="text-center mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 cosmic-text">The Night We Got Engaged</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative max-w-2xl mx-auto"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden border border-cosmic-purple/30">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1080&auto=format" 
                  alt="Star Map" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-space to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-sm px-4 cosmic-text">
                    The night sky above Starlight Valley on December 24, 2023
                  </p>
                </div>
              </div>
              <div className="mt-4 text-starlight/70 text-sm max-w-lg mx-auto">
                This custom star map shows the exact celestial arrangement on the night Orion proposed to Luna. 
                The stars aligned perfectly, just as our hearts did.
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Details Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-wider mb-2 inline-block text-nebula-pink">
              The Celestial Gathering
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 cosmic-text">Event Details</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="dark-glass-effect border border-cosmic-purple/30 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-6 cosmic-text">Ceremony & Reception</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-medium mb-2 text-nebula-pink">When</h4>
                  <p className="text-starlight mb-1">November 12, 2024</p>
                  <p className="text-starlight mb-1">Ceremony: 7:00 PM</p>
                  <p className="text-starlight">Reception: 8:30 PM</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium mb-2 text-nebula-pink">Where</h4>
                  <p className="text-starlight mb-1">Celestial Observatory</p>
                  <p className="text-starlight">789 Cosmic Way, Starlight Valley</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium mb-2 text-nebula-pink">Dress Code</h4>
                  <p className="text-starlight">Celestial Elegance</p>
                  <p className="text-starlight/70 text-sm mt-1">Deep blues, purples, silvers, and blacks encouraged. Starlight accents welcome.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="dark-glass-effect border border-cosmic-purple/30 p-8 rounded-lg mb-8">
                <h4 className="text-xl font-medium mb-3 text-nebula-pink">Accommodations</h4>
                <p className="text-starlight/90 mb-3">
                  We've arranged special rates at Nova Hotel.
                  Use code "LUNAORION2024" when booking.
                </p>
                <a href="#" className="inline-flex items-center text-nebula-pink hover:text-starlight transition-colors duration-300">
                  Book Your Stay
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </a>
              </div>
              
              <div className="dark-glass-effect border border-cosmic-purple/30 p-8 rounded-lg">
                <h4 className="text-xl font-medium mb-3 text-nebula-pink">Celestial Activities</h4>
                <p className="text-starlight/90 mb-3">
                  Guided stargazing, night sky photography, and comet cocktails will be available throughout the evening.
                </p>
                <p className="text-starlight/70 text-sm">
                  Weather permitting, telescopes will be set up for viewing the night sky.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* RSVP Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-wider mb-2 inline-block text-nebula-pink">
              Join Our Universe
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 cosmic-text">RSVP</h2>
            <p className="text-starlight/70 max-w-2xl mx-auto">
              We would be honored to have you join us as we begin our cosmic journey together.
              Please RSVP by October 12, 2024.
            </p>
          </motion.div>
          
          <div className="max-w-2xl mx-auto">
            <RSVPForm theme="cosmic" />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative py-16 border-t border-cosmic-purple/20">
        <div className="container mx-auto px-4 text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-4 cosmic-text"
          >
            Luna & Orion
          </motion.h3>
          
          <p className="text-starlight/70 mb-8 max-w-md mx-auto">
            "Two souls, written in the stars, finally found each other in the vast cosmos."
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-xs uppercase tracking-widest text-nebula-pink">
              #LunaAndOrion
            </div>
            <div className="text-xs uppercase tracking-widest text-nebula-pink">
              #WrittenInTheStars
            </div>
          </div>
          
          <div className="text-starlight/50 text-sm">
            © 2024 Luna & Orion | All Rights Reserved | Designed with Cosmic Love
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StarCrossed;
