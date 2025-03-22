
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md px-4"
      >
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <h2 className="text-3xl font-medium mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/"
          className="px-6 py-3 bg-electric-blue text-charcoal font-medium rounded-md hover:bg-electric-blue/90 transition-colors duration-300"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
