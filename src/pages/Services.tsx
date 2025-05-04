
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Code, Server, Database, PenTool, Globe, LineChart, ShoppingCart, Search } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";

const servicesData = [
  {
    icon: <Code size={24} />,
    title: "Custom Website Development",
    description: "Bespoke website solutions tailored to your specific business needs and brand identity.",
    color: "neon-blue",
    details: [
      "Responsive design for all devices",
      "Modern UI/UX implementation",
      "Performance optimization",
      "Cross-browser compatibility"
    ]
  },
  {
    icon: <ShoppingCart size={24} />,
    title: "E-Commerce Solutions",
    description: "Full-featured online stores with secure payment gateways and inventory management systems.",
    color: "neon-purple",
    details: [
      "Product catalog management",
      "Secure checkout process",
      "Payment gateway integration",
      "Order management systems"
    ]
  },
  {
    icon: <PenTool size={24} />,
    title: "UI/UX Design",
    description: "User-focused designs that enhance usability while maintaining aesthetic appeal.",
    color: "neon-pink",
    details: [
      "User research and personas",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing"
    ]
  },
  {
    icon: <Globe size={24} />,
    title: "WordPress Development",
    description: "Custom WordPress themes and plugins that extend functionality and enhance design.",
    color: "neon-blue",
    details: [
      "Custom theme development",
      "Plugin customization",
      "WooCommerce integration",
      "Performance optimization"
    ]
  },
  {
    icon: <Server size={24} />,
    title: "Web Application Development",
    description: "Robust web applications built with modern technologies and frameworks.",
    color: "neon-purple",
    details: [
      "MERN/MEAN stack development",
      "Ruby on Rails applications",
      "Progressive Web Apps (PWAs)",
      "Single Page Applications (SPAs)"
    ]
  },
  {
    icon: <Database size={24} />,
    title: "Database Design",
    description: "Efficient and scalable database architectures for optimal data management.",
    color: "neon-pink",
    details: [
      "Schema design and optimization",
      "Data migration and integration",
      "Query optimization",
      "Database maintenance"
    ]
  },
  {
    icon: <LineChart size={24} />,
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions to enhance your online presence and reach.",
    color: "neon-blue",
    details: [
      "SEO optimization",
      "Content marketing",
      "Social media campaigns",
      "Analytics and reporting"
    ]
  },
  {
    icon: <Search size={24} />,
    title: "SEO Optimization",
    description: "Search engine optimization strategies to improve visibility and organic traffic.",
    color: "neon-purple",
    details: [
      "Keyword research and analysis",
      "On-page optimization",
      "Technical SEO improvements",
      "Performance tracking"
    ]
  }
];

const Services = () => {
  return (
    <main className="pt-24 pb-16">
      {/* Header Section */}
      <section className="container-custom">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My <span className="text-gradient">Services</span></h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive development solutions tailored to your business needs
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicesData.map((service, index) => (
            <AnimatedSection key={index} delay={0.1 * (index % 3)}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
                details={service.details}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* Process Section */}
        <AnimatedSection>
          <div className="glass-panel p-8 rounded-xl mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">My <span className="text-gradient">Process</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center relative">
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-purple opacity-50 md:w-1 md:h-full md:left-auto md:top-0"></div>
                <div className="w-16 h-16 rounded-full bg-dark-300 border border-neon-blue/30 flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-2xl font-bold text-neon-blue">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Discovery</h3>
                <p className="text-gray-400 text-sm">Understanding your needs, goals, and project requirements</p>
              </div>
              
              <div className="text-center relative">
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-neon-purple to-neon-pink opacity-50 md:w-1 md:h-full md:left-auto md:top-0"></div>
                <div className="w-16 h-16 rounded-full bg-dark-300 border border-neon-purple/30 flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-2xl font-bold text-neon-purple">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Planning</h3>
                <p className="text-gray-400 text-sm">Creating a strategic roadmap with milestones and deliverables</p>
              </div>
              
              <div className="text-center relative">
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-neon-pink to-neon-blue opacity-50 md:w-1 md:h-full md:left-auto md:top-0 md:hidden lg:block"></div>
                <div className="w-16 h-16 rounded-full bg-dark-300 border border-neon-pink/30 flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-2xl font-bold text-neon-pink">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Development</h3>
                <p className="text-gray-400 text-sm">Building your solution with frequent updates and feedback cycles</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-dark-300 border border-neon-blue/30 flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-2xl font-bold text-neon-blue">4</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Delivery</h3>
                <p className="text-gray-400 text-sm">Final testing, deployment, and ongoing support as needed</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <div className="relative glass-panel p-8 md:p-12 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-neon-blue blur-[80px]"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-neon-purple blur-[80px]"></div>
            </div>
            
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-gray-400 mb-8">
                Let's collaborate to bring your vision to life with cutting-edge technology and creative solutions.
              </p>
              <Link to="/contact" className="neo-button inline-flex items-center">
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
};

export default Services;
