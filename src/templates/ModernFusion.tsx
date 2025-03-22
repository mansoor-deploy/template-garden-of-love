
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import RSVPForm from "@/components/RSVPForm";
import AudioPlayer from "@/components/AudioPlayer";
import CountdownTimer from "@/components/CountdownTimer";
import { useIsMobile } from "@/hooks/use-mobile";
import { Play } from "lucide-react";

const ModernFusion = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const isMobile = useIsMobile();

  // Navigation items
  const navItems = [
    { id: "home", label: "Home" },
    { id: "couple", label: "Couple" },
    { id: "details", label: "Details" },
    { id: "rsvp", label: "RSVP" },
  ];

  // Parallax effects
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const opacityHeader = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scaleHeader = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  useEffect(() => {
    document.title = "Modern Fusion | Engagement Template";
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    
    // Track scroll position for active section
    const handleScroll = () => {
      const sections = navItems.map((item) => {
        const element = document.getElementById(item.id);
        if (!element) return { id: item.id, top: 0 };
        const rect = element.getBoundingClientRect();
        return {
          id: item.id,
          top: rect.top,
        };
      });
      
      const currentSection = sections.reduce((closest, section) => {
        return Math.abs(section.top) < Math.abs(closest.top) ? section : closest;
      });
      
      setActiveSection(currentSection.id);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-charcoal flex items-center justify-center">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              rotate: 360,
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "linear" 
            }}
            className="w-16 h-16 relative mb-6"
          >
            <div className="absolute inset-0 rounded-full border-4 border-t-electric-blue border-r-transparent border-b-transparent border-l-transparent"></div>
            <div className="absolute inset-0 rounded-full border-4 border-r-electric-blue border-t-transparent border-b-transparent border-l-transparent" style={{ transform: "rotate(120deg)" }}></div>
            <div className="absolute inset-0 rounded-full border-4 border-b-electric-blue border-t-transparent border-r-transparent border-l-transparent" style={{ transform: "rotate(240deg)" }}></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-modern text-electric-blue"
          >
            Modern Fusion
          </motion.h2>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-charcoal font-modern text-white relative">
      {/* Navigation */}
      <div className="fixed top-0 left-0 w-full z-50 bg-charcoal/80 backdrop-blur-md border-b border-electric-blue/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-electric-blue font-medium tracking-wider">Modern Fusion</div>
            
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm uppercase tracking-wider py-1 border-b-2 ${
                    activeSection === item.id
                      ? "border-electric-blue text-electric-blue"
                      : "border-transparent hover:text-electric-blue"
                  } transition-all duration-300`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            <div className="md:hidden">
              <button className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12"/>
                  <line x1="4" x2="20" y1="6" y2="6"/>
                  <line x1="4" x2="20" y1="18" y2="18"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <AudioPlayer 
        audioSrc="https://cdn.pixabay.com/download/audio/2022/03/15/audio_9575d61323.mp3" 
        theme="modern"
      />

      {/* Floating Video Button */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed right-4 bottom-20 z-40"
      >
        <button
          onClick={() => setIsVideoModalOpen(true)}
          className="bg-electric-blue text-charcoal p-3 rounded-full shadow-lg hover:bg-electric-blue/80 transition-all duration-300"
          aria-label="Watch couple's message"
        >
          <Play className="w-6 h-6" />
        </button>
      </motion.div>
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="relative h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32"
      >
        <div className="absolute inset-0 bg-charcoal">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=1080&auto=format')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-transparent"></div>
        </div>
        
        <motion.div 
          style={{ y: headerY, opacity: opacityHeader, scale: scaleHeader }}
          className="relative container mx-auto px-4 text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="text-xs uppercase tracking-[0.5em] py-2 px-4 border border-electric-blue/30 text-electric-blue">
              We're Getting Engaged
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white"
          >
            <span className="block">Alex</span>
            <span className="inline-block mx-4 text-electric-blue">&</span>
            <span className="block">Morgan</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl mb-10 text-gray-300"
          >
            October 30, 2024 • The Urban Gallery • Chicago
          </motion.div>
          
          <CountdownTimer 
            targetDate="2024-10-30" 
            theme="modern"
            className="mb-12"
          />
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsVideoModalOpen(true)}
            className="px-8 py-3 border-2 border-electric-blue text-electric-blue font-medium rounded-sm hover:bg-electric-blue hover:text-charcoal transition-all duration-300 flex items-center mx-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            Watch Our Story
          </motion.button>
        </motion.div>
        
        {/* Animated square background elements */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0.1 + Math.random() * 0.2,
              rotate: Math.random() * 360
            }}
            animate={{ 
              y: [
                Math.random() * window.innerHeight, 
                Math.random() * window.innerHeight
              ],
              rotate: 360
            }}
            transition={{
              duration: 20 + Math.random() * 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-10 h-10 md:w-20 md:h-20 border border-electric-blue/10 rounded-sm"
            style={{ background: 'rgba(125, 249, 255, 0.03)' }}
          />
        ))}
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center text-center"
        >
          <a 
            href="#couple"
            className="text-electric-blue animate-bounce"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14"/>
              <path d="m19 12-7 7-7-7"/>
            </svg>
          </a>
        </motion.div>
      </section>
      
      {/* Couple Section */}
      <section 
        id="couple" 
        className="relative py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-slate/10"></div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-wider mb-4 inline-block text-electric-blue border border-electric-blue/30 px-4 py-1">
              The Couple
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
            <div className="w-16 h-1 bg-electric-blue mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="relative mb-6 mx-auto w-48 h-48 md:w-64 md:h-64 rounded-sm overflow-hidden border-2 border-electric-blue/30">
                  <img 
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=400&auto=format" 
                    alt="Alex" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <h3 className="text-xl font-bold text-white">Alex</h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  An architect with a passion for minimalist design and urban exploration. 
                  When not drafting the next innovative building, Alex can be found 
                  exploring art galleries or mixing electronic music.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="relative mb-6 mx-auto w-48 h-48 md:w-64 md:h-64 rounded-sm overflow-hidden border-2 border-electric-blue/30">
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format" 
                    alt="Morgan" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <h3 className="text-xl font-bold text-white">Morgan</h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  A tech entrepreneur with a love for photography and travel. 
                  Morgan believes in capturing moments and creating memories. 
                  On weekends, you'll find Morgan hiking with a camera or 
                  coding the next innovative app.
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-16 max-w-3xl mx-auto"
          >
            <p className="text-gray-300 text-lg mb-8">
              Our paths crossed at a tech conference in Chicago three years ago. 
              What began as a discussion about architecture and design technology 
              led to coffee, then dinner, and eventually a lifetime commitment. 
              We share a love for innovation, minimalist aesthetics, and creating 
              spaces that inspire.
            </p>
            
            <div className="flex justify-center">
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="flex items-center text-electric-blue hover:text-white transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                Watch Our Video
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Details Section */}
      <section 
        id="details" 
        className="relative py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-charcoal">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=1080&auto=format')] bg-cover bg-fixed bg-center opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-wider mb-4 inline-block text-electric-blue border border-electric-blue/30 px-4 py-1">
              The Details
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Engagement Celebration</h2>
            <div className="w-16 h-1 bg-electric-blue mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Ceremony",
                time: "4:30 PM",
                location: "The Urban Gallery",
                address: "123 Modern Ave, Chicago",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h3.5"/>
                    <path d="M14 2v6h6"/>
                    <path d="M11.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/>
                    <path d="M11.5 21v-3"/>
                  </svg>
                ),
              },
              {
                title: "Reception",
                time: "6:00 PM",
                location: "Skyline Loft",
                address: "Same Building, 15th Floor",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 20H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                    <path d="M12 10v6"/>
                    <path d="M8 10v6"/>
                    <path d="M16 10v6"/>
                    <path d="M9 20h6"/>
                  </svg>
                ),
              },
              {
                title: "Afterparty",
                time: "10:00 PM",
                location: "Spectrum Lounge",
                address: "456 Digital Blvd, Chicago",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"/>
                    <circle cx="17" cy="7" r="5"/>
                  </svg>
                ),
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-slate/10 backdrop-blur-sm border border-electric-blue/20 p-8 rounded-sm"
              >
                <div className="text-electric-blue w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <div className="text-electric-blue font-medium mb-2">{item.time}</div>
                <div className="text-gray-300 mb-1">{item.location}</div>
                <div className="text-gray-400 text-sm">{item.address}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4">Additional Information</h3>
            
            <div className="grid sm:grid-cols-2 gap-8 mt-8">
              <div className="p-6 bg-slate/10 backdrop-blur-sm border border-electric-blue/20 rounded-sm">
                <h4 className="text-xl font-medium mb-3 text-electric-blue">Accommodation</h4>
                <p className="text-gray-300 mb-3">
                  We've arranged special rates at City View Hotel.
                  Use code "ALEXMORGAN2024" when booking.
                </p>
                <a href="#" className="text-electric-blue hover:text-white transition-colors duration-300 inline-flex items-center">
                  Book Now
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </a>
              </div>
              
              <div className="p-6 bg-slate/10 backdrop-blur-sm border border-electric-blue/20 rounded-sm">
                <h4 className="text-xl font-medium mb-3 text-electric-blue">Transportation</h4>
                <p className="text-gray-300 mb-3">
                  Shuttle service will be provided between the hotel and venue.
                  Pickup times: 3:30PM and 3:45PM.
                </p>
                <a href="#" className="text-electric-blue hover:text-white transition-colors duration-300 inline-flex items-center">
                  View Map
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* RSVP Section */}
      <section 
        id="rsvp" 
        className="relative py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-charcoal">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1080&auto=format')] bg-cover bg-fixed bg-center opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-wider mb-4 inline-block text-electric-blue border border-electric-blue/30 px-4 py-1">
              Join Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">RSVP</h2>
            <div className="w-16 h-1 bg-electric-blue mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We'd be honored to have you join us on our special day.
              Please let us know if you can make it by September 30, 2024.
            </p>
          </motion.div>
          
          <div className="max-w-xl mx-auto">
            <RSVPForm theme="dark" />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 bg-charcoal border-t border-electric-blue/20">
        <div className="container mx-auto px-4 text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-4"
          >
            <span className="text-electric-blue">#</span>AlexAndMorgan
          </motion.h3>
          
          <p className="text-gray-400 mb-6">
            Thank you for being part of our journey.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
          </div>
          
          <div className="text-gray-500 text-sm">
            © 2024 Alex & Morgan | All Rights Reserved | Designed with Love
          </div>
        </div>
      </footer>
      
      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-4xl bg-slate/20 rounded-sm overflow-hidden"
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 text-white hover:text-electric-blue transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/>
                  <path d="m6 6 12 12"/>
                </svg>
              </button>
              
              <div className="aspect-video">
                <video
                  ref={videoRef}
                  controls
                  autoPlay
                  className="w-full h-full"
                  poster="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1080&auto=format"
                >
                  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2 text-electric-blue">A Message From Us</h3>
                <p className="text-gray-300">We're thrilled to invite you to celebrate our engagement with us! This special day marks the beginning of our journey together, and we would love for you to be part of it.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModernFusion;
