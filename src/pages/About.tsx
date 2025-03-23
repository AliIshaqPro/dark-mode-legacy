
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SocialLinks from "@/components/SocialLinks";
import { FileCode, Code, Database, Globe, PenTool, Layers, Github, Award, BookOpen } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";

const About = () => {
  return (
    <main className="pt-24 pb-16">
      <section className="container-custom">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-gradient">Me</span></h1>
            <p className="text-gray-400">
              Learn more about my journey, expertise, and passion for web development
            </p>
          </div>
        </AnimatedSection>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <AnimatedSection className="lg:col-span-5" delay={0.1}>
            <div className="relative">
              <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <ImageWithFallback 
                  src="https://qnqbuilders.co.uk/wp-content/uploads/2025/03/DSC_0004-scaled.jpg" 
                  alt="Ali Ishaq - Developer" 
                  className="w-full object-cover"
                  fallbackSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-transparent to-transparent"></div>
              </div>
              
              <div className="absolute -top-5 -right-5 p-4 glass-panel rounded-lg backdrop-blur-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-neon-blue/20 w-10 h-10 rounded-full flex items-center justify-center text-neon-blue">
                    <Award size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Experience</p>
                    <p className="text-white font-medium">1.5+ Years</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-5 -left-5 p-4 glass-panel rounded-lg backdrop-blur-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-neon-purple/20 w-10 h-10 rounded-full flex items-center justify-center text-neon-purple">
                    <Code size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Projects</p>
                    <p className="text-white font-medium">15+ Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="lg:col-span-7" delay={0.2}>
            <div className="glass-panel p-8 rounded-xl h-full">
              <h2 className="text-2xl font-bold mb-6">Who I Am</h2>
              <p className="text-gray-400 mb-6">
                I'm Ali Ishaq, a Senior Developer with 1.5+ years of extensive experience in web development. 
                My expertise spans across WordPress, Ruby on Rails, and MERN stack development, allowing me to 
                create comprehensive solutions for diverse client needs.
              </p>
              <p className="text-gray-400 mb-6">
                My journey in development began with a passion for creating digital experiences that not only 
                function flawlessly but also engage users with intuitive interfaces and seamless interactions. 
                I've since worked with clients across various industries, helping them transform their ideas 
                into reality through code.
              </p>
              <p className="text-gray-400 mb-6">
                What sets me apart is my commitment to staying at the forefront of technological advancements, 
                continuously expanding my skill set, and delivering solutions that exceed client expectations.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="https://github.com/AliIshaqPro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-300 text-gray-300 hover:bg-dark-400 hover:text-white transition-colors"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/ali-ishaq-sandhu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-300 text-gray-300 hover:bg-dark-400 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://www.upwork.com/freelancers/~01ea89981961c95a70?mp_source=share" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-300 text-gray-300 hover:bg-dark-400 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 7.5C17.3 7.5 16.7 7.7 16.2 8C15.3 6.5 14 5.7 12.5 5.7C9.5 5.7 7 8.5 7 12C7 15.5 9.5 18.3 12.5 18.3C14 18.3 15.3 17.5 16.2 16C16.7 16.4 17.3 16.5 18 16.5C19.7 16.5 21 15.2 21 13.5C21 11.8 19.7 10.5 18 10.5C17.8 10.5 17.5 10.5 17.3 10.6C17.4 11 17.5 11.5 17.5 12C17.5 14.2 16.2 16 14.5 16C12.8 16 11.5 14.2 11.5 12C11.5 9.8 12.8 8 14.5 8C15.4 8 16.2 8.5 16.7 9.4C17 8.3 17.4 7.7 18 7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Upwork</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Services Section */}
        <AnimatedSection delay={0.3}>
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-12 text-center">Services I <span className="text-gradient">Offer</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-panel p-6 rounded-xl border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-neon-blue/20 w-12 h-12 rounded-full flex items-center justify-center text-neon-blue mb-4">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">WordPress Development</h3>
                <p className="text-gray-400 mb-4">
                  Custom WordPress themes and plugins, WooCommerce integration, and performance optimization for your online presence.
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
                    E-commerce Solutions
                  </li>
                </ul>
              </div>
              
              <div className="glass-panel p-6 rounded-xl border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-neon-purple/20 w-12 h-12 rounded-full flex items-center justify-center text-neon-purple mb-4">
                  <FileCode size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Ruby on Rails Development</h3>
                <p className="text-gray-400 mb-4">
                  Robust web applications with Ruby on Rails, from concept to deployment, focusing on performance and scalability.
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
                    Database Design & Optimization
                  </li>
                </ul>
              </div>
              
              <div className="glass-panel p-6 rounded-xl border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-neon-pink/20 w-12 h-12 rounded-full flex items-center justify-center text-neon-pink mb-4">
                  <Layers size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">MERN Stack Development</h3>
                <p className="text-gray-400 mb-4">
                  Modern web applications with MongoDB, Express, React, and Node.js, creating seamless user experiences.
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
                    Full-stack JavaScript Solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Education & Certifications */}
        <AnimatedSection delay={0.4}>
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-12 text-center">Education & <span className="text-gradient">Certifications</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-panel p-6 rounded-xl">
                <div className="flex items-start mb-4">
                  <div className="bg-neon-blue/20 w-10 h-10 rounded-full flex items-center justify-center text-neon-blue mr-4 mt-1">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Computer Science</h3>
                    <p className="text-neon-blue">University of Computer Science</p>
                    <p className="text-gray-400 mt-1">2019 - 2023</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  Bachelor's degree with a focus on web technologies, software engineering principles, and database management systems.
                </p>
              </div>
              
              <div className="glass-panel p-6 rounded-xl">
                <div className="flex items-start mb-4">
                  <div className="bg-neon-purple/20 w-10 h-10 rounded-full flex items-center justify-center text-neon-purple mr-4 mt-1">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Advanced WordPress Development</h3>
                    <p className="text-neon-purple">WordPress Academy</p>
                    <p className="text-gray-400 mt-1">2022</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  Certification in advanced WordPress development techniques, custom theme and plugin development, and WooCommerce integration.
                </p>
              </div>
              
              <div className="glass-panel p-6 rounded-xl">
                <div className="flex items-start mb-4">
                  <div className="bg-neon-pink/20 w-10 h-10 rounded-full flex items-center justify-center text-neon-pink mr-4 mt-1">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Full Stack JavaScript Development</h3>
                    <p className="text-neon-pink">Web Development Institute</p>
                    <p className="text-gray-400 mt-1">2022</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  Comprehensive training in modern JavaScript frameworks and libraries, including React, Node.js, and Express.
                </p>
              </div>
              
              <div className="glass-panel p-6 rounded-xl">
                <div className="flex items-start mb-4">
                  <div className="bg-neon-blue/20 w-10 h-10 rounded-full flex items-center justify-center text-neon-blue mr-4 mt-1">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Ruby on Rails Mastery</h3>
                    <p className="text-neon-blue">Rails Academy</p>
                    <p className="text-gray-400 mt-1">2023</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  Advanced certification in Ruby on Rails development, covering APIs, database optimization, and modern Rails practices.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Connect with me */}
        <AnimatedSection delay={0.5}>
          <div className="glass-panel p-8 rounded-xl text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
            <p className="text-gray-400 mb-8">
              Interested in working together? Feel free to connect with me on social media or send me a message.
            </p>
            <div className="flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
};

export default About;
