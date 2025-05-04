
import { Link } from "react-router-dom";
import { Calendar, User, Clock, Tag } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  tags: string[];
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="glass-panel rounded-xl overflow-hidden h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg card-hover">
      <Link to={`/blog/${post.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <ImageWithFallback
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-dark-300/80 backdrop-blur-sm text-xs font-medium text-neon-blue">
              {post.category}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 line-clamp-2">
          <Link to={`/blog/${post.id}`} className="hover:text-neon-blue transition-colors">
            {post.title}
          </Link>
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-md bg-dark-300 text-xs font-medium text-gray-300"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-white/5">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {post.date}
          </div>
          
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            {post.readTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
