
import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, BriefcaseBusiness, Layers, Github, Linkedin, Calendar } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import SocialLinks from "@/components/SocialLinks";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution built with React, Node.js, and MongoDB. Includes product management, user authentication, cart functionality, and payment processing with Stripe.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070",
    category: "MERN Stack",
    githubUrl: "https://github.com/AliIshaqPro",
  },
  {
    title: "Booking Management System",
    description: "A comprehensive booking management system for service-based businesses, featuring appointment scheduling, staff management, and customer notifications.",
    technologies: ["Ruby on Rails", "PostgreSQL", "Redis", "Sidekiq", "Hotwire"],
    imageUrl: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1974",
    category: "Ruby on Rails",
    githubUrl: "https://github.com/AliIshaqPro",
  },
  {
    title: "Corporate Portfolio",
    description: "A modern WordPress site for a corporate client with custom theme development, advanced animations, and integration with multiple third-party services.",
    technologies: ["WordPress", "PHP", "JavaScript", "SCSS", "REST API"],
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000",
    category: "WordPress",
    githubUrl: "https://github.com/AliIshaqPro",
  },
];

const experienceData = [
  {
    period: "2022 - Present",
    title: "Senior WordPress Developer",
    company: "Freelance",
    description: "Developing custom WordPress themes and plugins for clients across various industries. Implementing complex features and integrations with third-party services.",
  },
  {
    period: "2022 - Present",
    title: "Ruby on Rails Developer",
    company: "Freelance",
    description: "Building robust web applications with Ruby on Rails. Designing database schemas, implementing APIs, and deploying applications to cloud platforms.",
  },
  {
    period: "2022 - Present",
    title: "MERN Stack Developer",
    company: "Freelance",
    description: "Developing full-stack applications using MongoDB, Express.js, React, and Node.js. Creating responsive UIs and RESTful APIs for various business needs.",
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
                  Senior Developer
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Hi, I'm <span className="text-gradient">Ali Ishaq</span>
                  <br /> 
                  I Build Digital <br />
                  Experiences
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg">
                  Senior Developer with 1.5+ years of extensive experience in WordPress, 
                  Ruby on Rails, and MERN stack development.
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
              <div className="relative z-10 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1596262415948-36a4a910ec05?q=80&w=1476"
                  alt="Ali Ishaq - Developer" 
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-transparent to-transparent"></div>
              </div>
              
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
              <p className="text-gray-400 max-w-2xl mx-auto">Get to know me and my expertise in web development</p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1} direction="up" className="glass-panel p-6 rounded-xl">
              <div className="bg-neon-blue/20 w-12 h-12 rounded-full flex items-center justify-center text-neon-blue mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">WordPress Developer</h3>
              <p className="text-gray-400 mb-4">
                Expert in custom theme and plugin development, with a focus on performance optimization and seamless third-party integrations.
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
              <h3 className="text-xl font-bold mb-3">Ruby on Rails Developer</h3>
              <p className="text-gray-400 mb-4">
                Proficient in building robust web applications with Ruby on Rails, focusing on clean code, test-driven development, and scalable architectures.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2"></span>
                  Full-stack Rails Development
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2"></span>
                  API Development
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2"></span>
                  Database Design
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2"></span>
                  Testing & Deployment
                </li>
              </ul>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} direction="up" className="glass-panel p-6 rounded-xl">
              <div className="bg-neon-pink/20 w-12 h-12 rounded-full flex items-center justify-center text-neon-pink mb-4">
                <BriefcaseBusiness size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">MERN Stack Developer</h3>
              <p className="text-gray-400 mb-4">
                Experienced in building modern web applications using MongoDB, Express.js, React, and Node.js with a focus on responsive UIs and robust backend services.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2"></span>
                  React Frontend Development
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2"></span>
                  Node.js Backend Services
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2"></span>
                  MongoDB Database Design
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2"></span>
                  RESTful & GraphQL APIs
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
              <p className="text-gray-400 max-w-2xl mx-auto">My professional journey as a developer</p>
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

      {/* Featured Projects Section */}
      <section className="section bg-dark-200/50 border-y border-white/5">
        <div className="container-custom">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                <p className="text-gray-400 max-w-2xl">A selection of my recent work</p>
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
                  I'm currently available for freelance projects and full-time positions. 
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
