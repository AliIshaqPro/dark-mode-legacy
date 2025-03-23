
import { useState } from "react";
import { Image } from "lucide-react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
  fallbackSrc?: string;
}

const ImageWithFallback = ({ 
  src, 
  alt, 
  className = "", 
  fallbackClassName = "flex flex-col items-center justify-center bg-dark-400", 
  fallbackSrc 
}: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);
  const defaultFallback = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&auto=format&fit=crop";
  
  const handleError = () => {
    setError(true);
  };

  if (error) {
    if (fallbackSrc) {
      return (
        <img
          src={fallbackSrc}
          alt={alt}
          className={className}
          onError={() => {
            console.log("Even fallback image failed to load");
          }}
        />
      );
    }
    
    return (
      <div className={`${fallbackClassName} ${className}`}>
        <Image size={24} className="text-gray-500 mb-1" />
        <span className="text-gray-400 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
};

export default ImageWithFallback;
