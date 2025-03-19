
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    document.title = "Premium Engagement Templates";
  }, []);

  const templates = [
    {
      id: "eternal-romance",
      title: "Eternal Romance",
      description: "Timeless elegance & love with a cinematic experience",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=800&auto=format",
      color: "from-navy to-midnight",
      textColor: "text-gold",
    },
    {
      id: "modern-fusion",
      title: "Modern Fusion",
      description: "Contemporary minimalism with a personal touch",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=800&auto=format",
      color: "from-slate to-charcoal",
      textColor: "text-electric-blue",
    },
    {
      id: "star-crossed",
      title: "Star-Crossed",
      description: "Cosmic & mystical romance under the stars",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format",
      color: "from-deep-space to-cosmic-purple",
      textColor: "text-starlight",
    },
    {
      id: "garden-of-love",
      title: "Garden of Love",
      description: "Romantic botanical escape with natural elegance",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800&auto=format",
      color: "from-leaf-green to-blush-pink",
      textColor: "text-soft-cream",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
          Premium Engagement Templates
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Celebrate your special moment with beautifully crafted, elegant designs
          that reflect your unique love story.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
      >
        {templates.map((template) => (
          <motion.div
            key={template.id}
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-80 transition-opacity duration-300 group-hover:opacity-90 z-10 bg-black"></div>
            <img
              src={template.image}
              alt={template.title}
              className="object-cover w-full h-80 transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
              <h2 className={`text-3xl font-serif font-bold mb-2 ${template.textColor}`}>
                {template.title}
              </h2>
              <p className="text-gray-100 mb-4 opacity-90">
                {template.description}
              </p>
              <Link
                to={`/${template.id}`}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white glass-effect hover:bg-white hover:text-gray-900 transition-all duration-300 w-full sm:w-auto"
              >
                View Template
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Index;
