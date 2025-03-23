
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, 
  Database, 
  Server, 
  Layers, 
  PenTool, 
  Globe, 
  BarChart,
  FileCode,
  Coffee,
  GitBranch,
  Command,
  Cpu,
  Workflow,
  Compass,
  ShoppingCart,
  Zap,
  Package,
  Settings,
  Search,
  Shield,
  Cloud,
  Monitor,
  Table,
  RefreshCw,
  Share2,
  LineChart,
  HardDrive
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SkillCard from "@/components/SkillCard";

const skillsData = [
  // WordPress
  { name: "WordPress", icon: <Globe size={20} />, level: 95, category: "WordPress" },
  { name: "PHP", icon: <FileCode size={20} />, level: 90, category: "WordPress" },
  { name: "ACF Pro", icon: <Layers size={20} />, level: 90, category: "WordPress" },
  { name: "WooCommerce", icon: <ShoppingCart size={20} />, level: 85, category: "WordPress" },
  { name: "WordPress REST API", icon: <Server size={20} />, level: 85, category: "WordPress" },
  { name: "WordPress Theme Dev", icon: <PenTool size={20} />, level: 95, category: "WordPress" },
  { name: "WordPress Plugin Dev", icon: <Command size={20} />, level: 90, category: "WordPress" },
  { name: "Elementor", icon: <Layers size={20} />, level: 90, category: "WordPress" },
  { name: "Gutenberg", icon: <Layers size={20} />, level: 85, category: "WordPress" },
  { name: "Custom Post Types", icon: <Table size={20} />, level: 95, category: "WordPress" },
  { name: "WordPress Security", icon: <Shield size={20} />, level: 80, category: "WordPress" },
  { name: "WordPress SEO", icon: <Search size={20} />, level: 85, category: "WordPress" },
  
  // Ruby on Rails
  { name: "Ruby", icon: <Code size={20} />, level: 85, category: "Ruby on Rails" },
  { name: "Ruby on Rails", icon: <Workflow size={20} />, level: 85, category: "Ruby on Rails" },
  { name: "PostgreSQL", icon: <Database size={20} />, level: 80, category: "Ruby on Rails" },
  { name: "Sidekiq", icon: <Cpu size={20} />, level: 75, category: "Ruby on Rails" },
  { name: "RSpec", icon: <Command size={20} />, level: 80, category: "Ruby on Rails" },
  { name: "ActiveRecord", icon: <Database size={20} />, level: 85, category: "Ruby on Rails" },
  { name: "Hotwire", icon: <Zap size={20} />, level: 80, category: "Ruby on Rails" },
  { name: "Redis", icon: <Database size={20} />, level: 75, category: "Ruby on Rails" },
  { name: "Turbo", icon: <RefreshCw size={20} />, level: 80, category: "Ruby on Rails" },
  { name: "Stimulus", icon: <Zap size={20} />, level: 80, category: "Ruby on Rails" },
  { name: "Action Cable", icon: <Share2 size={20} />, level: 75, category: "Ruby on Rails" },
  { name: "Active Storage", icon: <HardDrive size={20} />, level: 85, category: "Ruby on Rails" },
  
  // MERN Stack
  { name: "JavaScript", icon: <Code size={20} />, level: 90, category: "MERN Stack" },
  { name: "React", icon: <Code size={20} />, level: 90, category: "MERN Stack" },
  { name: "Node.js", icon: <Server size={20} />, level: 85, category: "MERN Stack" },
  { name: "Express.js", icon: <Server size={20} />, level: 85, category: "MERN Stack" },
  { name: "MongoDB", icon: <Database size={20} />, level: 80, category: "MERN Stack" },
  { name: "Redux", icon: <Workflow size={20} />, level: 85, category: "MERN Stack" },
  { name: "GraphQL", icon: <Compass size={20} />, level: 75, category: "MERN Stack" },
  { name: "TypeScript", icon: <Code size={20} />, level: 85, category: "MERN Stack" },
  { name: "Next.js", icon: <Zap size={20} />, level: 80, category: "MERN Stack" },
  { name: "React Query", icon: <RefreshCw size={20} />, level: 80, category: "MERN Stack" },
  { name: "Socket.io", icon: <Share2 size={20} />, level: 75, category: "MERN Stack" },
  { name: "JWT Authentication", icon: <Shield size={20} />, level: 85, category: "MERN Stack" },
  { name: "React Router", icon: <Compass size={20} />, level: 90, category: "MERN Stack" },
  { name: "Mongoose", icon: <Database size={20} />, level: 85, category: "MERN Stack" },
  
  // Tools & Technologies
  { name: "Git", icon: <GitBranch size={20} />, level: 90, category: "Tools" },
  { name: "RESTful APIs", icon: <Server size={20} />, level: 90, category: "Tools" },
  { name: "AWS", icon: <Cloud size={20} />, level: 75, category: "Tools" },
  { name: "Docker", icon: <Package size={20} />, level: 70, category: "Tools" },
  { name: "SCSS/SASS", icon: <PenTool size={20} />, level: 90, category: "Tools" },
  { name: "Tailwind CSS", icon: <PenTool size={20} />, level: 90, category: "Tools" },
  { name: "Responsive Design", icon: <Monitor size={20} />, level: 95, category: "Tools" },
  { name: "Performance Optimization", icon: <BarChart size={20} />, level: 85, category: "Tools" },
  { name: "Webpack", icon: <Package size={20} />, level: 80, category: "Tools" },
  { name: "Jest", icon: <Command size={20} />, level: 75, category: "Tools" },
  { name: "GitHub Actions", icon: <Settings size={20} />, level: 70, category: "Tools" },
  { name: "Heroku", icon: <Cloud size={20} />, level: 85, category: "Tools" },
  { name: "Netlify", icon: <Cloud size={20} />, level: 90, category: "Tools" },
  { name: "Vercel", icon: <Cloud size={20} />, level: 90, category: "Tools" },
  { name: "Analytics", icon: <LineChart size={20} />, level: 80, category: "Tools" },
];

const Skills = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "WordPress", "Ruby on Rails", "MERN Stack", "Tools"];
  
  const filteredSkills = filter === "All" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === filter);

  return (
    <main className="pt-24 pb-16">
      <section className="container-custom">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My <span className="text-gradient">Skills</span></h1>
            <p className="text-gray-400">
              A comprehensive overview of my technical skills and expertise across different technologies and platforms.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter Buttons */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-neon-blue text-white shadow-lg shadow-neon-blue/20"
                    : "bg-dark-300 text-gray-400 hover:bg-dark-400 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.05 * (index % 4) }}
              >
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Skill Categories Sections */}
        <div className="mt-24 space-y-24">
          <AnimatedSection>
            <div className="glass-panel p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">WordPress <span className="text-gradient">Expertise</span></h2>
              <p className="text-gray-400 mb-8">
                With extensive experience in WordPress development, I specialize in creating custom themes and plugins, 
                e-commerce solutions with WooCommerce, and optimizing WordPress sites for performance and security.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-neon-blue mb-4">Key Capabilities</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2 mt-2"></span>
                      <span>Custom theme development from scratch or with starter themes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2 mt-2"></span>
                      <span>Custom plugin development for specialized functionality</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2 mt-2"></span>
                      <span>WooCommerce customization and extension development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2 mt-2"></span>
                      <span>Performance optimization and security hardening</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2 mt-2"></span>
                      <span>Headless WordPress implementation with modern frontends</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2 mt-2"></span>
                      <span>Custom Gutenberg blocks and page builders</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-neon-blue mb-4">Technologies & Tools</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2 mt-2"></span>
                      <span>PHP, JavaScript, HTML, CSS, SCSS</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2 mt-2"></span>
                      <span>Advanced Custom Fields, Custom Post Types</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2 mt-2"></span>
                      <span>WordPress REST API and WP CLI</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2 mt-2"></span>
                      <span>Elementor, Gutenberg, WooCommerce</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2 mt-2"></span>
                      <span>WordPress Multisite and Multilingual solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2 mt-2"></span>
                      <span>WordPress caching and optimization tools</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="glass-panel p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Ruby on Rails <span className="text-gradient">Expertise</span></h2>
              <p className="text-gray-400 mb-8">
                I build robust, scalable web applications with Ruby on Rails, following best practices for 
                clean code architecture, test-driven development, and efficient database design.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-neon-purple mb-4">Key Capabilities</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2 mt-2"></span>
                      <span>Full-stack Rails application development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2 mt-2"></span>
                      <span>RESTful API design and implementation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2 mt-2"></span>
                      <span>Database schema design and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2 mt-2"></span>
                      <span>Authentication, authorization, and security</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2 mt-2"></span>
                      <span>Background job processing and scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2 mt-2"></span>
                      <span>Test-driven development with RSpec</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-neon-purple mb-4">Technologies & Tools</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2 mt-2"></span>
                      <span>Ruby, Ruby on Rails, RSpec</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2 mt-2"></span>
                      <span>PostgreSQL, Redis, Sidekiq</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2 mt-2"></span>
                      <span>Hotwire, Turbo, Stimulus</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2 mt-2"></span>
                      <span>ActiveRecord, ActiveStorage, ActionCable</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2 mt-2"></span>
                      <span>Rails API with JWT authentication</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2 mt-2"></span>
                      <span>Heroku, Capistrano, Docker deployment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="glass-panel p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">MERN Stack <span className="text-gradient">Expertise</span></h2>
              <p className="text-gray-400 mb-8">
                I create modern, responsive web applications using the MERN stack (MongoDB, Express.js, React, Node.js),
                with a focus on dynamic user interfaces and efficient backend services.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-neon-pink mb-4">Key Capabilities</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2 mt-2"></span>
                      <span>Modern React application development with hooks and context</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2 mt-2"></span>
                      <span>RESTful and GraphQL API development with Node.js</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2 mt-2"></span>
                      <span>MongoDB database design and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2 mt-2"></span>
                      <span>State management with Redux, Context API, or Zustand</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2 mt-2"></span>
                      <span>Real-time applications with Socket.io</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2 mt-2"></span>
                      <span>Server-side rendering with Next.js</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-neon-pink mb-4">Technologies & Tools</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2 mt-2"></span>
                      <span>JavaScript, TypeScript, React, Node.js</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2 mt-2"></span>
                      <span>Express.js, MongoDB, Mongoose</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2 mt-2"></span>
                      <span>Redux, Context API, React Query</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2 mt-2"></span>
                      <span>JWT Authentication, Socket.io, GraphQL</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2 mt-2"></span>
                      <span>Tailwind CSS, Styled Components, Material UI</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2 mt-2"></span>
                      <span>Vercel, Netlify, Heroku deployment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Skills;
