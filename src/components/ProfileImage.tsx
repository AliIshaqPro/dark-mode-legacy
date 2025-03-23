
import { useState } from "react";
import { CalendarClock } from "lucide-react";

interface ProfileImageProps {
  imageUrl: string;
  alt: string;
}

const ProfileImage = ({ imageUrl, alt }: ProfileImageProps) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    console.log("Image failed to load:", imageUrl);
  };

  const fallbackImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=6000&auto=format&fit=crop&crop=entropy";

  return (
    <div className="relative z-10 rounded-xl overflow-hidden border border-white/10 shadow-2xl aspect-square md:aspect-auto max-h-[500px]">
      {!imageError ? (
        <img 
          src={imageUrl}
          alt={alt} 
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      ) : (
        <img 
          src={fallbackImage}
          alt={alt} 
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-transparent to-transparent"></div>
      
      <div className="absolute -bottom-5 -right-5 p-4 glass-panel rounded-lg backdrop-blur-xl w-48">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
          <p className="text-white text-sm font-medium">Available for work</p>
        </div>
      </div>
      
      <div className="absolute -top-5 -left-5 p-4 glass-panel rounded-lg backdrop-blur-xl">
        <div className="flex items-center space-x-3">
          <div className="bg-neon-blue/20 w-10 h-10 rounded-full flex items-center justify-center text-neon-blue">
            <CalendarClock size={20} />
          </div>
          <div>
            <p className="text-gray-400 text-xs">Experience</p>
            <p className="text-white font-medium">1.5+ Years</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
