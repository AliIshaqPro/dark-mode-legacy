
import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, BriefcaseBusiness, Layers, Github, Linkedin, Calendar } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import SocialLinks from "@/components/SocialLinks";
import TestimonialsSection from "@/components/TestimonialsSection";

const projects = [
  {
    title: "Dekosmetiskelager.dk",
    description: "WordPress e-commerce solution with custom CMS, seamless content management and enhanced SEO performance for cosmetics marketplace.",
    technologies: ["WordPress", "WooCommerce", "PHP", "Custom CMS", "SEO"],
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070",
    category: "WordPress",
    githubUrl: "https://github.com/AliIshaqPro",
  },
  {
    title: "Clear Lines",
    description: "Modern WordPress website with custom theme development, optimized performance and responsive design.",
    technologies: ["WordPress", "PHP", "JavaScript", "Custom Theme", "Performance Optimization"],
    imageUrl: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1974",
    category: "WordPress",
    githubUrl: "https://github.com/AliIshaqPro",
  },
  {
    title: "MSF Properties",
    description: "Real estate platform with advanced property listings, search functionality and integrated WooCommerce solutions.",
    technologies: ["WordPress", "WooCommerce", "PHP", "Custom Fields", "Property Management"],
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000",
    category: "WordPress",
    githubUrl: "https://github.com/AliIshaqPro",
  },
];

const experienceData = [
  {
    period: "April 2025 - Present",
    title: "WordPress Developer",
    company: "Iplex",
    description: "Developed 15+ responsive WordPress websites with custom CMS solutions. Diagnosed and resolved 50+ WordPress bugs, improving site speed, security, and overall user experience.",
  },
  {
    period: "September 2024 - April 2025",
    title: "Lead WordPress Developer",
    company: "Cortechsols",
    description: "Engineered 10+ custom WordPress themes for diverse clients, enhancing UI/UX and optimizing SEO performance by 15%. Led a team of 5 developers, implementing Agile best practices to improve efficiency by 25%.",
  },
  {
    period: "September 2024 - April 2025",
    title: "WordPress Developer (Remote)",
    company: "Kodoverse",
    description: "Optimized WooCommerce stores using Dokan Pro and BlockChain, increasing revenue by 15% through improved multivendor marketplace functionality. Built custom WordPress themes & plugins using PHP, MySQL, and JavaScript.",
  },
];

const Index = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-neon-purple/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-neon-blue/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-neon-blue/10 text-neon-blue text-sm font-medium mb-6">
                  WordPress Developer | Web Developer | WooCommerce Specialist
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Hi, I'm <span className="text-gradient">Ali Ishaq</span>
                  <br /> 
                  WordPress Developer
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg">
                  Results-driven WordPress developer with over 1.5 years of experience. Skilled in WooCommerce and capable of maintaining Nginx servers under heavy traffic.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/projects"
                    className="neo-button flex items-center"
                  >
                    <span>View My Work</span>
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                  
                  <button
                    onClick={scrollToAbout}
                    className="px-6 py-3 rounded-md border border-white/10 text-white font-medium hover:bg-white/5 transition-colors duration-300"
                  >
                    About Me
                  </button>
                </div>
                
                <div className="mt-12">
                  <p className="text-gray-500 mb-4">Find me on</p>
                  <SocialLinks />
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -bottom-5 -right-5 p-4 glass-panel rounded-lg backdrop-blur-xl w-48">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <p className="text-white text-sm font-medium">Available for work</p>
                </div>
              </div>
              
              <div className="absolute -top-5 -left-5 p-4 glass-panel rounded-lg backdrop-blur-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-neon-blue/20 w-10 h-10 rounded-full flex items-center justify-center text-neon-blue">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Experience</p>
                    <p className="text-white font-medium">1.5+ Years</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5
            }}
          >
            <button
              onClick={scrollToAbout}
              className="flex flex-col items-center text-gray-500 hover:text-white transition-colors"
            >
              <span className="text-sm mb-2">Scroll down</span>
              <div className="w-6 h-10 rounded-full border-2 border-gray-500 flex items-center justify-center p-1">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div>
              </div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="section bg-dark-200/50 border-y border-white/5">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Get to know me and my expertise in WordPress development</p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1} direction="up" className="glass-panel p-6 rounded-xl">
              <div className="bg-neon-blue/20 w-12 h-12 rounded-full flex items-center justify-center text-neon-blue mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">WordPress Development</h3>
              <p className="text-gray-400 mb-4">
                Expert in custom theme and plugin development, with a focus on performance optimization and seamless WooCommerce integrations.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2"></span>
                  Custom Theme Development
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2"></span>
                  Plugin Development
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2"></span>
                  WooCommerce Integration
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2"></span>
                  Performance Optimization
                </li>
              </ul>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} direction="up" className="glass-panel p-6 rounded-xl">
              <div className="bg-neon-purple/20 w-12 h-12 rounded-full flex items-center justify-center text-neon-purple mb-4">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">E-Commerce Solutions</h3>
              <p className="text-gray-400 mb-4">
                Specialized in WooCommerce development and multivendor marketplace functionality using advanced plugins and integrations.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2"></span>
                  WooCommerce Stores
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2"></span>
                  Dokan Pro Integration
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2"></span>
                  Payment Processing
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2"></span>
                  Multivendor Marketplaces
                </li>
              </ul>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} direction="up" className="glass-panel p-6 rounded-xl">
              <div className="bg-neon-pink/20 w-12 h-12 rounded-full flex items-center justify-center text-neon-pink mb-4">
                <BriefcaseBusiness size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Technical Expertise</h3>
              <p className="text-gray-400 mb-4">
                Proficient in server management, SEO optimization, and maintaining high-performance websites under heavy traffic conditions.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2"></span>
                  Nginx Server Management
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2"></span>
                  SEO Optimization
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2"></span>
                  Website Performance
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2"></span>
                  Bug Diagnosis & Resolution
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Work <span className="text-gradient">Experience</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto">My professional journey as a WordPress developer</p>
            </div>
          </AnimatedSection>
          
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink"></div>
            
            {experienceData.map((item, index) => (
              <AnimatedSection 
                key={index}
                delay={0.2 * index}
                direction={index % 2 === 0 ? "left" : "right"}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "text-right pr-12 md:ml-auto md:mr-0" : "pl-12"
                } md:w-1/2`}
              >
                <div className="absolute top-0 w-4 h-4 rounded-full bg-neon-blue animate-pulse shadow-lg shadow-neon-blue/50 z-10 border-2 border-dark-100 left-1/2 transform -translate-x-1/2"></div>
                <div className="glass-panel p-6 rounded-xl">
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-neon-blue/10 text-neon-blue mb-3">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-neon-blue font-medium mb-3">{item.company}</p>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Featured Projects Section */}
      <section className="section bg-dark-200/50 border-y border-white/5">
        <div className="container-custom">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                <p className="text-gray-400 max-w-2xl">A selection of my recent WordPress projects</p>
              </div>
              <Link
                to="/projects"
                className="mt-4 md:mt-0 neo-button flex items-center self-start"
              >
                <span>View All Projects</span>
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <ProjectCard {...project} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container-custom">
          <AnimatedSection>
            <div className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-neon-blue blur-[80px]"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-neon-purple blur-[80px]"></div>
              </div>
              
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work together?</h2>
                <p className="text-gray-400 mb-8">
                  I'm currently available for WordPress development projects and freelance work. 
                  Let's create something amazing together!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="neo-button flex items-center"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                  
                  <Link
                    to="/services"
                    className="px-6 py-3 rounded-md border border-white/10 text-white font-medium hover:bg-white/5 transition-colors duration-300"
                  >
                    View My Services
                  </Link>
                  
                  <div className="flex items-center space-x-4">
                    <a 
                      href="https://github.com/AliIshaqPro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-dark-400 border border-white/10 text-white hover:text-neon-blue transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/ali-ishaq-sandhu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-dark-400 border border-white/10 text-white hover:text-neon-blue transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Index;
