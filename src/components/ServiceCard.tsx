
import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  details: string[];
}

const ServiceCard = ({ icon, title, description, color, details }: ServiceCardProps) => {
  const getColorClass = (color: string) => {
    switch (color) {
      case "neon-blue":
        return "bg-neon-blue/20 text-neon-blue";
      case "neon-purple":
        return "bg-neon-purple/20 text-neon-purple";
      case "neon-pink":
        return "bg-neon-pink/20 text-neon-pink";
      default:
        return "bg-neon-blue/20 text-neon-blue";
    }
  };
  
  const getTextColor = (color: string) => {
    switch (color) {
      case "neon-blue":
        return "text-neon-blue";
      case "neon-purple":
        return "text-neon-purple";
      case "neon-pink":
        return "text-neon-pink";
      default:
        return "text-neon-blue";
    }
  };
  
  const getIndicatorColor = (color: string) => {
    switch (color) {
      case "neon-blue":
        return "bg-neon-blue";
      case "neon-purple":
        return "bg-neon-purple";
      case "neon-pink":
        return "bg-neon-pink";
      default:
        return "bg-neon-blue";
    }
  };

  return (
    <div className="glass-panel p-6 rounded-xl h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className={`w-12 h-12 rounded-full ${getColorClass(color)} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      
      <div className="space-y-2">
        {details.map((detail, index) => (
          <div key={index} className="flex items-start">
            <span className={`w-1.5 h-1.5 rounded-full ${getIndicatorColor(color)} mt-2 mr-2 flex-shrink-0`}></span>
            <span className="text-gray-300 text-sm">{detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
