
import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: string;
}

const SkillCard = ({ name, icon, level, category }: SkillCardProps) => {
  return (
    <motion.div 
      className="bg-dark-300/80 rounded-xl p-4 border border-white/10 hover:border-white/20 card-hover"
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-dark-400 rounded-lg text-neon-blue">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-white font-medium">{name}</h3>
          <div className="mt-1 w-full bg-dark-400 rounded-full h-1.5">
            <div 
              className="h-1.5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple" 
              style={{ 
                width: `${level}%`,
                boxShadow: '0 0 10px rgba(120, 220, 255, 0.3)' 
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <span className="text-xs px-2 py-1 rounded-md bg-dark-400 text-gray-300 border border-white/5 hover:bg-dark-500 transition-colors">
          {category}
        </span>
      </div>
    </motion.div>
  );
};

export default SkillCard;
