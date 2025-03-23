
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-300/70 border-t border-white/10 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">Ali Ishaq</h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              Senior Developer specializing in WordPress, Ruby on Rails, and MERN stack with 1.5+ years of extensive experience.
            </p>
            <SocialLinks />
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Projects", "Skills", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-neon-blue transition-colors duration-300 flex items-center group"
                  >
                    <span>{item}</span>
                    <ArrowUpRight 
                      size={14} 
                      className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="mailto:aliishaqsandho@gmail.com" 
                  className="hover:text-neon-blue transition-colors duration-300"
                >
                  aliishaqsandho@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+923460422988" 
                  className="hover:text-neon-blue transition-colors duration-300"
                >
                  +92 346 0422988
                </a>
              </li>
              <li>
                <a 
                  href="https://aliishaq.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neon-blue transition-colors duration-300"
                >
                  aliishaq.site
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Ali Ishaq. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed & Built with Precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
