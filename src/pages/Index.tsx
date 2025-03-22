
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Index = () => {
  const templates = [
    {
      name: "Eternal Romance",
      description: "Timeless elegance with gold accents and cinematic effects",
      path: "/eternal-romance",
      bgColor: "bg-navy",
      textColor: "text-gold",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=600&auto=format"
    },
    {
      name: "Modern Fusion",
      description: "Contemporary minimalism with a personal touch",
      path: "/modern-fusion",
      bgColor: "bg-charcoal",
      textColor: "text-electric-blue",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=600&auto=format"
    },
    {
      name: "Star-Crossed",
      description: "Cosmic and mystical romance under the stars",
      path: "/star-crossed",
      bgColor: "bg-deep-space",
      textColor: "text-starlight",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format"
    },
    {
      name: "Garden of Love",
      description: "A romantic botanical escape with natural beauty",
      path: "/garden-of-love",
      bgColor: "bg-soft-cream",
      textColor: "text-leaf-green",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=600&auto=format"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Engagement Website Templates</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our collection of premium engagement announcement templates, each designed to tell your unique love story.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={template.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to={template.path} className="block relative rounded-lg overflow-hidden shadow-2xl h-80">
                <div className={`absolute inset-0 ${template.bgColor} opacity-90 group-hover:opacity-80 transition-opacity duration-300`}>
                  <img 
                    src={template.image} 
                    alt={template.name} 
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300 mix-blend-overlay"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
                  <h2 className={`text-3xl font-bold mb-3 ${template.textColor}`}>{template.name}</h2>
                  <p className="text-white mb-6 max-w-xs">{template.description}</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-6 py-2 border-2 ${template.textColor} border-current rounded-full font-medium hover:bg-white/10 transition-colors duration-300`}
                  >
                    View Template
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
