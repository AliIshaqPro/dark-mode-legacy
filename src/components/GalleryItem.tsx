
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface GalleryItemProps {
  imageUrl: string;
  title: string;
  category: string;
}

const GalleryItem = ({ imageUrl, title, category }: GalleryItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      <motion.div 
        className="group cursor-pointer overflow-hidden rounded-lg relative"
        whileHover={{ y: -5 }}
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-video w-full h-64 relative">
          {!imageError ? (
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-dark-300">
              <span className="text-gray-400">Image unavailable</span>
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-dark-100/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
          <h3 className="text-white font-medium text-center">{title}</h3>
          <span className="mt-2 text-xs px-3 py-1 rounded-full bg-neon-blue/20 text-neon-blue">
            {category}
          </span>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {!imageError ? (
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="w-full h-auto max-h-[80vh] object-contain bg-dark-300/90"
                  onError={handleImageError}
                />
              ) : (
                <div className="w-full h-[50vh] flex items-center justify-center bg-dark-300">
                  <span className="text-gray-400">Image unavailable</span>
                </div>
              )}
              <button
                className="absolute top-4 right-4 bg-dark-300/80 rounded-full p-2 text-white hover:text-neon-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-dark-300/80 backdrop-blur-sm">
                <h3 className="text-white font-medium">{title}</h3>
                <span className="mt-1 inline-block text-xs px-3 py-1 rounded-full bg-neon-blue/20 text-neon-blue">
                  {category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryItem;
