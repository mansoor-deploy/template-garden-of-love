
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import RSVPForm from "@/components/RSVPForm";
import AudioPlayer from "@/components/AudioPlayer";
import CountdownTimer from "@/components/CountdownTimer";

const GardenOfLove = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeMessage, setActiveMessage] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const pathRef = useRef<HTMLDivElement>(null);

  // Parallax effects
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  // Love path milestones
  const pathMilestones = [
    {
      title: "The Seed",
      description: "We met at a community garden workshop. You helped me plant my first tomatoes.",
      date: "Spring 2019",
      message: "I knew from the moment you taught me how to carefully plant those tiny seeds that there was something special about you. Your patience and kindness made my heart bloom that day.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2s2 .9 2 2v4c0 1.1-.9 2-2 2z"/>
          <path d="M12 10v12"/>
          <path d="M9 2v1"/>
          <path d="M15 2v1"/>
          <path d="M12 16c5 0 8-2 8-5H4c0 3 3 5 8 5z"/>
          <path d="M4 11v3c0 4 2 6 8 6s8-2 8-6v-3"/>
        </svg>
      ),
    },
    {
      title: "First Bloom",
      description: "Our first date at the Botanical Gardens. You gave me a single pink rose.",
      date: "Summer 2019",
      message: "Walking through those garden paths with you felt like stepping into a fairytale. I'll never forget how the sunset painted everything gold, and how you looked at me when you handed me that rose.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a9 9 0 0 0-9 9c0 4 3 8 9 11 6-3 9-7 9-11a9 9 0 0 0-9-9Z"/>
          <path d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
        </svg>
      ),
    },
    {
      title: "Growing Together",
      description: "Moving into our first home with the beautiful backyard we've always dreamed of.",
      date: "Spring 2021",
      message: "Planting our first garden together at our new home felt like planting roots for our future. I knew then that there was nowhere else I'd rather be than growing old with you, watching our garden and our love flourish over the years.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9a7.8 7.8 0 0 0 9-1 7.8 7.8 0 0 0 2.3 5.5 8.2 8.2 0 0 0 2.7 2 7.8 7.8 0 0 0-3-6.5A7.8 7.8 0 0 0 9 7"/>
          <path d="M21 15a7.8 7.8 0 0 0-9 1 7.8 7.8 0 0 0-2.3-5.5A8.2 8.2 0 0 0 7 8.5a7.8 7.8 0 0 0 3 6.5 7.8 7.8 0 0 0 5 2"/>
        </svg>
      ),
    },
    {
      title: "Eternal Bloom",
      description: "I proposed in our garden, surrounded by the flowers we planted together.",
      date: "Spring 2024",
      message: "Kneeling before you in our garden, the place that has witnessed our love grow season after season, I knew I was exactly where I was meant to be. When you said yes, I felt like the luckiest person alive. I promise to nurture our love just as carefully as we've nurtured each plant in our garden.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
      ),
    },
  ];

  // Generate random flower positions
  const generateFlowers = (count: number) => {
    return Array.from({ length: count }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      size: 20 + Math.random() * 40,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
    }));
  };

  const [flowers] = useState(generateFlowers(20));

  useEffect(() => {
    document.title = "Garden of Love | Engagement Template";
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-leaf-green/20 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-24 h-24 mb-6 relative"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                style={{
                  position: "absolute",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#4F7942",
                  top: "calc(50% - 6px)",
                  left: "calc(50% - 6px)",
                  transform: `rotate(${i * 45}deg) translateY(-30px)`,
                }}
              />
            ))}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-handwritten text-earth-brown"
          >
            Garden of Love
          </motion.h2>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-soft-cream font-handwritten text-earth-brown relative overflow-hidden">
      <Link 
        to="/"
        className="fixed top-4 left-4 z-50 flex items-center space-x-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-leaf-green/20 text-leaf-green transition-all duration-300 hover:bg-leaf-green/10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 19-7-7 7-7"/>
          <path d="M19 12H5"/>
        </svg>
        <span>Back to Templates</span>
      </Link>
      
      <AudioPlayer 
        audioSrc="https://cdn.pixabay.com/download/audio/2022/10/29/audio_7146d00330.mp3" 
        theme="garden"
      />
      
      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        <motion.div 
          style={{ y: bgY1 }}
          className="absolute inset-0 bg-garden-gradient"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1080&auto=format')] bg-cover bg-center opacity-40"></div>
        </motion.div>
        
        <motion.div 
          style={{ y: bgY2 }}
          className="absolute inset-0 bg-gradient-to-b from-leaf-green/0 via-white/60 to-soft-cream"
        ></motion.div>
        
        {/* Animated flowers */}
        {flowers.map((flower, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 flower pointer-events-none opacity-30"
            style={{
              top: `${flower.y}%`,
              left: `${flower.x}%`,
              rotate: flower.rotation,
              scale: flower.size / 30,
            }}
            animate={{
              y: [0, -10, 0],
              rotate: flower.rotation + 5,
            }}
            transition={{
              duration: flower.duration,
              repeat: Infinity,
              delay: flower.delay,
              ease: "easeInOut",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i % 3 === 0 ? "#FEC5BB" : i % 3 === 1 ? "#4F7942" : "#FFFDD0"} stroke="none">
              <path d="M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4 s4-1.79,4-4S14.21,8,12,8z M12,14c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,14,12,14z M21.5,12c0,1.93-0.35,3.36-1.04,4.33 c-0.67,0.96-1.62,1.52-2.66,1.97C16.76,18.73,14.45,19,12,19s-4.76-0.27-5.8-0.7c-1.04-0.45-1.99-1.01-2.66-1.97 C2.85,15.36,2.5,13.93,2.5,12s0.35-3.36,1.04-4.33c0.67-0.96,1.62-1.52,2.66-1.97C7.24,5.27,9.55,5,12,5s4.76,0.27,5.8,0.7 c1.04,0.45,1.99,1.01,2.66,1.97C21.15,8.64,21.5,10.07,21.5,12z M17,12c0-2.21-1.79-4-4-4V5c-2.76,0-5,2.24-5,5s2.24,5,5,5v-3 C15.21,12,17,10.21,17,12z M12,12c0,2.21,1.79,4,4,4v3c2.76,0,5-2.24,5-5s-2.24-5-5-5v3C13.79,12,12,13.79,12,12z M7,12 c0-2.21-1.79-4-4-4v3c0,2.76,2.24,5,5,5v-3C7.79,16,7,14.21,7,12z M12,7c0-2.21-1.79-4-4-4v3c0,2.76,2.24,5,5,5V7z"/>
            </svg>
          </motion.div>
        ))}
        
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base uppercase tracking-widest mb-4 text-leaf-green"
          >
            We're Getting Married
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-earth-brown"
          >
            Lily & Oliver
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl mb-8 text-earth-brown/80"
          >
            May 24, 2025 • Wildflower Gardens • Meadowville
          </motion.div>
          
          <CountdownTimer 
            targetDate="2025-05-24" 
            theme="garden"
            className="mb-12"
          />
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const pathSection = document.getElementById('garden-path');
              if (pathSection) {
                pathSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 rounded-full bg-leaf-green text-white font-medium hover:bg-earth-brown transition-all duration-300 shadow-md"
          >
            Explore Our Garden
          </motion.button>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center text-center"
        >
          <div className="text-leaf-green animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14"/>
              <path d="m19 12-7 7-7-7"/>
            </svg>
          </div>
        </motion.div>
      </section>
      
      {/* Garden Path Section */}
      <section id="garden-path" className="relative py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-leaf-green/10 rounded-full text-leaf-green text-sm mb-3">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">Our Garden Path</h2>
            <p className="text-earth-brown/80 max-w-2xl mx-auto">
              Follow the stepping stones of our love story. Click on each milestone to read a special love note.
            </p>
          </motion.div>
          
          <div ref={pathRef} className="relative">
            {/* Garden path visualization */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-leaf-green/20 transform -translate-x-1/2"></div>
            
            {pathMilestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative mb-20 flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2"></div>
                
                <div className="absolute left-1/2 top-10 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-leaf-green/20 border-4 border-leaf-green flex items-center justify-center text-leaf-green z-10">
                  {milestone.icon}
                </div>
                
                <div className="md:w-1/2 pt-16 md:pt-0 md:px-10">
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                    }}
                    className="bg-white rounded-lg shadow-md p-6 border border-leaf-green/10"
                  >
                    <div className="text-blush-pink text-sm font-medium mb-2">{milestone.date}</div>
                    <h3 className="text-2xl font-bold mb-3 text-earth-brown">{milestone.title}</h3>
                    <p className="mb-4 text-earth-brown/80">{milestone.description}</p>
                    
                    <motion.button
                      onClick={() => setActiveMessage(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-leaf-green hover:text-earth-brown transition-colors duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M7 10v12"/>
                        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/>
                      </svg>
                      Read Love Note
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Details Section */}
      <section className="relative py-24 bg-leaf-green/5">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-leaf-green/10 rounded-full text-leaf-green text-sm mb-3">
              Join Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">Celebration Details</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md p-8 border border-leaf-green/10"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-leaf-green/10 flex items-center justify-center text-leaf-green mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-earth-brown">Ceremony & Reception</h3>
                
                <div className="text-center mt-4 space-y-2">
                  <p className="text-earth-brown">
                    <span className="font-bold">Date:</span> May 24, 2025
                  </p>
                  <p className="text-earth-brown">
                    <span className="font-bold">Time:</span> 4:00 PM - 10:00 PM
                  </p>
                  <p className="text-earth-brown">
                    <span className="font-bold">Location:</span> Wildflower Gardens
                  </p>
                  <p className="text-earth-brown">
                    123 Blossom Lane, Meadowville
                  </p>
                </div>
                
                <a 
                  href="#" 
                  className="mt-6 inline-flex items-center text-leaf-green hover:text-earth-brown transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M15 21v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4"/>
                    <rect width="20" height="12" x="2" y="9" rx="2"/>
                    <circle cx="12" cy="15" r="2"/>
                    <path d="M9 9v.01"/>
                    <path d="M15 9v.01"/>
                  </svg>
                  View Map
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md p-8 border border-leaf-green/10"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-leaf-green/10 flex items-center justify-center text-leaf-green mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 4h-5L7 7H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-3l-2.5-3Z"/>
                    <circle cx="12" cy="13" r="3"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-earth-brown">Event Details</h3>
                
                <div className="text-center mt-4 space-y-3">
                  <div>
                    <h4 className="font-bold text-leaf-green">Dress Code</h4>
                    <p className="text-earth-brown">Garden Formal</p>
                    <p className="text-earth-brown/70 text-sm">Soft colors and floral accents encouraged</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-leaf-green">Menu</h4>
                    <p className="text-earth-brown">Farm-to-table feast with seasonal ingredients</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-leaf-green">Accommodations</h4>
                    <p className="text-earth-brown">Meadow Inn (1 mile from venue)</p>
                    <p className="text-earth-brown/70 text-sm">Use code "LilyOliver2025" for special rates</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-12 text-center"
          >
            <p className="text-earth-brown/80 italic text-lg">
              "Our wedding will be an organic celebration of love, nature, and the beautiful journey we've shared. 
              We can't wait to have you be part of our special day in the garden where our love has bloomed."
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* RSVP Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-leaf-green/10 rounded-full text-leaf-green text-sm mb-3">
              Your Response
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">RSVP</h2>
            <p className="text-earth-brown/80 max-w-2xl mx-auto">
              We would be honored to have you join us as we celebrate our love.
              Please RSVP by April 24, 2025.
            </p>
          </motion.div>
          
          <div className="max-w-xl mx-auto">
            <RSVPForm theme="garden" />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative py-12 bg-leaf-green/10 border-t border-leaf-green/20">
        <div className="container mx-auto px-4 text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 text-earth-brown"
          >
            Lily & Oliver
          </motion.h3>
          
          <p className="text-earth-brown/70 max-w-md mx-auto mb-6">
            Thank you for being part of our growing love story.
            We can't wait to celebrate with you!
          </p>
          
          <div className="text-leaf-green mb-6 opacity-80">
            #LilyAndOliver2025 #GardenOfLove
          </div>
          
          <div className="text-earth-brown/60 text-sm">
            © 2025 Lily & Oliver | All Rights Reserved | Designed with Love
          </div>
        </div>
      </footer>
      
      {/* Love Note Modal */}
      <AnimatePresence>
        {activeMessage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-earth-brown/40 backdrop-blur-sm p-4"
            onClick={() => setActiveMessage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full bg-white rounded-lg shadow-xl p-6 border-4 border-leaf-green/20"
            >
              <button
                onClick={() => setActiveMessage(null)}
                className="absolute top-3 right-3 text-earth-brown/50 hover:text-earth-brown transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/>
                  <path d="m6 6 12 12"/>
                </svg>
              </button>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-leaf-green/10 flex items-center justify-center text-leaf-green mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-earth-brown">
                  {activeMessage !== null && pathMilestones[activeMessage].title}
                </h3>
                
                <div className="text-blush-pink text-sm font-medium mb-4">
                  {activeMessage !== null && pathMilestones[activeMessage].date}
                </div>
                
                <div className="bg-leaf-green/5 p-4 rounded-lg border border-leaf-green/10 text-left">
                  <p className="text-earth-brown/90 italic">
                    {activeMessage !== null && pathMilestones[activeMessage].message}
                  </p>
                </div>
                
                <div className="mt-6 text-earth-brown/70 text-sm">
                  With all my love,
                </div>
                <div className="text-earth-brown font-bold">
                  Oliver
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GardenOfLove;
