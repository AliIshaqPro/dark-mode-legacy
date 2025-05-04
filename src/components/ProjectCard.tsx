
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ChevronDown, ChevronUp, Image } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
  category,
}: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  const handleImageError = () => {
    setImageError(true);
  };
  
  const projectUrl = `/projects/${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <motion.div 
      className="bg-dark-300/80 rounded-xl overflow-hidden card-hover border border-white/10"
      whileHover={{ y: -5 }}
    >
      <Link to={projectUrl} className="block">
        <div className="relative overflow-hidden group aspect-video h-48">
          {!imageError ? (
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-dark-400">
              <Image size={32} className="text-gray-500 mb-2" />
              <span className="text-gray-400 text-sm">Image unavailable</span>
            </div>
          )}
          <div className="absolute inset-0 bg-dark-100/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-4">
              {githubUrl && (
                <motion.a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-dark-300/80 p-2 rounded-full text-white hover:text-neon-blue transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={20} />
                </motion.a>
              )}
              {liveUrl && (
                <motion.a 
                  href={liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-dark-300/80 p-2 rounded-full text-white hover:text-neon-blue transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={20} />
                </motion.a>
              )}
            </div>
          </div>
          <div className="absolute top-3 left-3">
            <span className="bg-neon-blue/20 text-neon-blue text-xs px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">
          <Link to={projectUrl} className="hover:text-neon-blue transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          {expanded ? description : `${description.substring(0, 100)}${description.length > 100 ? '...' : ''}`}
        </p>
        
        {description.length > 100 && (
          <button 
            onClick={toggleExpanded}
            className="text-neon-blue text-sm flex items-center mb-4 hover:underline"
          >
            {expanded ? (
              <>
                <span>Show less</span>
                <ChevronUp size={16} className="ml-1" />
              </>
            ) : (
              <>
                <span>Read more</span>
                <ChevronDown size={16} className="ml-1" />
              </>
            )}
          </button>
        )}
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-xs px-2 py-1 rounded-md bg-dark-400 border border-white/5 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
