
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="container-custom py-16">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative mb-8">
              <h1 className="text-[150px] font-bold text-white opacity-10">404</h1>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
                <h2 className="text-2xl md:text-3xl font-bold text-gradient">Page Not Found</h2>
              </div>
            </div>
            
            <p className="text-gray-400 text-lg mb-10">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/"
                className="neo-button flex items-center"
              >
                <Home size={18} className="mr-2" />
                <span>Back to Home</span>
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="px-6 py-3 rounded-md border border-white/10 text-white font-medium hover:bg-white/5 transition-colors duration-300 flex items-center"
              >
                <ArrowLeft size={18} className="mr-2" />
                <span>Go Back</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
