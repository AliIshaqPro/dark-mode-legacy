
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";

// Project data
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
  {
    title: "Real Estate Platform",
    description: "A comprehensive real estate platform allowing property listings, advanced search, user accounts, and agent profiles. Features interactive maps and virtual tours.",
    technologies: ["WordPress", "PHP", "JavaScript", "Google Maps API", "Custom Fields"],
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973",
    category: "WordPress",
    githubUrl: "https://github.com/AliIshaqPro",
  },
  {
    title: "Healthcare Management System",
    description: "A secure healthcare management system with appointment scheduling, patient records, billing integration, and HIPAA-compliant data storage.",
    technologies: ["Ruby on Rails", "PostgreSQL", "Sidekiq", "AWS S3", "Stripe"],
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
    category: "Ruby on Rails",
    githubUrl: "https://github.com/AliIshaqPro",
  },
  {
    title: "Social Media Dashboard",
    description: "A centralized dashboard for social media management, featuring content scheduling, analytics reporting, and multi-platform integration.",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Various Social APIs"],
    imageUrl: "https://images.unsplash.com/photo-1480694313141-fce5e697ee25?q=80&w=2070",
    category: "MERN Stack",
    githubUrl: "https://github.com/AliIshaqPro",
  },
  {
    title: "Travel Blogging Platform",
    description: "A feature-rich blogging platform specialized for travel bloggers with location tagging, photo galleries, and monetization tools.",
    technologies: ["WordPress", "PHP", "Custom Post Types", "ACF Pro", "GeoLocation"],
    imageUrl: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1974",
    category: "WordPress",
    githubUrl: "https://github.com/AliIshaqPro",
  },
  {
    title: "Inventory Management System",
    description: "A comprehensive inventory management system with barcode scanning, stock tracking, supplier management, and detailed reporting.",
    technologies: ["Ruby on Rails", "PostgreSQL", "Hotwire", "Turbo", "Stimulus"],
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
    category: "Ruby on Rails",
    githubUrl: "https://github.com/AliIshaqPro",
  },
  {
    title: "Food Delivery App",
    description: "A modern food delivery application with restaurant listings, real-time order tracking, payment processing, and delivery management.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Stripe"],
    imageUrl: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=1922",
    category: "MERN Stack",
    githubUrl: "https://github.com/AliIshaqPro",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "WordPress", "Ruby on Rails", "MERN Stack"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <main className="pt-24 pb-16">
      <section className="container-custom">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My <span className="text-gradient">Projects</span></h1>
            <p className="text-gray-400">
              Explore my portfolio of web development projects, showcasing my expertise in WordPress, 
              Ruby on Rails, and MERN stack development.
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Projects;
