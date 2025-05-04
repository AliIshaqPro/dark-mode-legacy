
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Calendar, Layers, Code } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      // Find the project by title (used as ID in URL)
      const foundProject = projects.find((project) => project.title.replace(/\s+/g, '-').toLowerCase() === id);
      
      if (foundProject) {
        setProject(foundProject);
      } else {
        toast({
          title: "Project not found",
          description: "The requested project could not be found.",
          variant: "destructive",
        });
        navigate("/projects");
      }
      
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id, navigate, toast]);

  const handleImageError = () => {
    setImageError(true);
  };

  if (loading) {
    return (
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="h-12 w-12 rounded-full border-4 border-neon-blue border-t-transparent animate-spin"></div>
          </div>
        </div>
      </main>
    );
  }

  if (!project) {
    return null; // This shouldn't happen as we navigate away if project not found
  }

  return (
    <main className="pt-24 pb-16">
      <article className="container-custom max-w-5xl">
        {/* Back button */}
        <AnimatedSection>
          <Button
            variant="ghost"
            className="mb-6 hover:bg-dark-300 group"
            onClick={() => navigate("/projects")}
          >
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to all projects
          </Button>
        </AnimatedSection>

        {/* Project Header */}
        <AnimatedSection>
          <div className="mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-neon-blue/20 text-neon-blue text-xs font-medium mb-4">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {project.technologies.map((tech: string) => (
                <span 
                  key={tech} 
                  className="text-sm px-3 py-1 rounded-md bg-dark-400 border border-white/5 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  className="gap-2"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                    <span>View on GitHub</span>
                  </a>
                </Button>
              )}
              
              {project.liveUrl && (
                <Button
                  className="gap-2"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Featured Image */}
        <AnimatedSection delay={0.1}>
          <div className="rounded-xl overflow-hidden mb-12 glass-panel p-2 shadow-lg shadow-neon-blue/5">
            {!imageError ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto object-cover rounded-lg"
                onError={handleImageError}
              />
            ) : (
              <div className="w-full aspect-[16/9] flex flex-col items-center justify-center bg-dark-400 rounded-lg">
                <Code size={48} className="text-gray-500 mb-2" />
                <span className="text-gray-400">Image unavailable</span>
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Project Content */}
        <AnimatedSection delay={0.2}>
          <div className="prose prose-invert max-w-none glass-panel rounded-xl p-8 shadow-lg shadow-neon-blue/5">
            <div className="flex items-center mb-6">
              <div className="w-1.5 h-12 bg-gradient-to-b from-neon-blue to-neon-purple rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple m-0">Project Overview</h2>
            </div>
            
            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              This <span className="font-semibold text-white">{project.category}</span> project was designed to provide an innovative solution 
              for <span className="italic">{project.title.toLowerCase()}</span>. Built with modern technologies including 
              <span className="font-semibold text-neon-blue"> {project.technologies.slice(0, 3).join(", ")}</span>, 
              this application delivers a powerful and intuitive user experience.
            </p>
            
            <div className="flex items-center mb-6">
              <div className="w-1.5 h-12 bg-gradient-to-b from-neon-blue to-neon-purple rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple m-0">Key Features</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-dark-300/50 p-4 rounded-lg border border-white/5 hover:border-neon-blue/30 transition-all">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <span className="w-2 h-2 bg-neon-blue rounded-full mr-2"></span>
                  Responsive Design
                </h3>
                <p className="text-gray-400 m-0">Optimized for all screen sizes and devices to provide a consistent experience.</p>
              </div>
              
              <div className="bg-dark-300/50 p-4 rounded-lg border border-white/5 hover:border-neon-blue/30 transition-all">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <span className="w-2 h-2 bg-neon-purple rounded-full mr-2"></span>
                  Intuitive UI/UX
                </h3>
                <p className="text-gray-400 m-0">User-centered interface designed with modern principles for effortless navigation.</p>
              </div>
              
              <div className="bg-dark-300/50 p-4 rounded-lg border border-white/5 hover:border-neon-blue/30 transition-all">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <span className="w-2 h-2 bg-neon-pink rounded-full mr-2"></span>
                  Optimized Performance
                </h3>
                <p className="text-gray-400 m-0">Exceptional loading times and smooth interactions for better user satisfaction.</p>
              </div>
              
              <div className="bg-dark-300/50 p-4 rounded-lg border border-white/5 hover:border-neon-blue/30 transition-all">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <span className="w-2 h-2 bg-neon-blue rounded-full mr-2"></span>
                  Secure Implementation
                </h3>
                <p className="text-gray-400 m-0">Best practices for data handling and storage to maintain security standards.</p>
              </div>
            </div>
            
            <div className="flex items-center mb-6">
              <div className="w-1.5 h-12 bg-gradient-to-b from-neon-blue to-neon-purple rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple m-0">Development Process</h2>
            </div>
            
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              The development followed an agile methodology with regular iterations and feedback incorporation:
            </p>
            
            <div className="relative pl-8 space-y-6 mb-8 before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-neon-blue before:via-neon-purple before:to-neon-pink">
              <div className="relative">
                <div className="absolute left-[-28px] w-6 h-6 rounded-full bg-dark-100 border-2 border-neon-blue flex items-center justify-center">
                  <span className="text-xs font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Requirements Analysis</h3>
                <p className="text-gray-400 m-0">Comprehensive understanding of project needs and user expectations.</p>
              </div>
              
              <div className="relative">
                <div className="absolute left-[-28px] w-6 h-6 rounded-full bg-dark-100 border-2 border-neon-purple flex items-center justify-center">
                  <span className="text-xs font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Design & Prototyping</h3>
                <p className="text-gray-400 m-0">Creating detailed mockups and interactive prototypes for validation.</p>
              </div>
              
              <div className="relative">
                <div className="absolute left-[-28px] w-6 h-6 rounded-full bg-dark-100 border-2 border-neon-pink flex items-center justify-center">
                  <span className="text-xs font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Development & Implementation</h3>
                <p className="text-gray-400 m-0">Bringing designs to life with clean, efficient, and scalable code.</p>
              </div>
              
              <div className="relative">
                <div className="absolute left-[-28px] w-6 h-6 rounded-full bg-dark-100 border-2 border-neon-blue flex items-center justify-center">
                  <span className="text-xs font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Testing & Quality Assurance</h3>
                <p className="text-gray-400 m-0">Rigorous testing to ensure functionality, usability, and performance.</p>
              </div>
              
              <div className="relative">
                <div className="absolute left-[-28px] w-6 h-6 rounded-full bg-dark-100 border-2 border-neon-purple flex items-center justify-center">
                  <span className="text-xs font-bold">5</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Deployment & Maintenance</h3>
                <p className="text-gray-400 m-0">Seamless deployment with ongoing support and updates.</p>
              </div>
            </div>
            
            <div className="flex items-center mb-6">
              <div className="w-1.5 h-12 bg-gradient-to-b from-neon-blue to-neon-purple rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple m-0">Technical Implementation</h2>
            </div>
            
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              The project leverages <span className="font-semibold text-neon-blue">{project.technologies.join(", ")}</span> to create a robust and scalable solution:
            </p>
            
            <div className="bg-dark-300/30 p-6 rounded-xl border border-white/5 mb-8">
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue mr-3 mt-0.5">✓</div>
                  <div>
                    <h4 className="text-white font-medium m-0">Component-based Architecture</h4>
                    <p className="text-gray-400 m-0">Modular design for maximum reusability and easier maintenance.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple mr-3 mt-0.5">✓</div>
                  <div>
                    <h4 className="text-white font-medium m-0">State Management</h4>
                    <p className="text-gray-400 m-0">Efficient handling of application state for complex data flows.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-neon-pink/20 flex items-center justify-center text-neon-pink mr-3 mt-0.5">✓</div>
                  <div>
                    <h4 className="text-white font-medium m-0">API Integration</h4>
                    <p className="text-gray-400 m-0">Seamless connection with backend services for data persistence.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue mr-3 mt-0.5">✓</div>
                  <div>
                    <h4 className="text-white font-medium m-0">Authentication System</h4>
                    <p className="text-gray-400 m-0">Secure access control with modern authentication protocols.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple mr-3 mt-0.5">✓</div>
                  <div>
                    <h4 className="text-white font-medium m-0">Performance Optimization</h4>
                    <p className="text-gray-400 m-0">Advanced techniques for optimal loading and rendering.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center mb-6">
              <div className="w-1.5 h-12 bg-gradient-to-b from-neon-blue to-neon-purple rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple m-0">Outcome</h2>
            </div>
            
            <p className="text-lg leading-relaxed text-gray-300">
              The final product successfully meets all client requirements and provides an exceptional user experience.
              The solution is scalable, maintainable, and easily extendable with additional features as needed.
            </p>
            
            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 p-6 rounded-xl border border-white/5 mt-8">
              <blockquote className="border-l-4 border-neon-blue pl-4 italic text-lg text-gray-300">
                "This project demonstrates how thoughtful design and careful implementation can come together 
                to create something truly remarkable in the digital space."
              </blockquote>
            </div>
          </div>
        </AnimatedSection>

        {/* Related Projects */}
        <AnimatedSection delay={0.3}>
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <div className="w-1 h-6 bg-neon-blue rounded-full mr-3"></div>
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects
                .filter((relatedProject) => 
                  relatedProject.category === project.category && 
                  relatedProject.title !== project.title
                )
                .slice(0, 3)
                .map((relatedProject, index) => (
                  <Link
                    key={index}
                    to={`/projects/${relatedProject.title.replace(/\s+/g, '-').toLowerCase()}`}
                    className="glass-panel rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-lg shadow-neon-blue/5 group"
                  >
                    <div className="h-40 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                      <img
                        src={relatedProject.imageUrl}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).parentElement!.style.backgroundColor = '#1a1a1a';
                          (e.target as HTMLImageElement).parentElement!.innerHTML += `
                            <div class="flex items-center justify-center h-full">
                              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 18l6-6-6-6"></path><path d="M8 6l-6 6 6 6"></path><path d="M2 12h20"></path>
                              </svg>
                            </div>
                          `;
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-medium text-neon-blue mb-1 inline-block">{relatedProject.category}</span>
                      <h3 className="font-semibold mt-1 group-hover:text-neon-blue transition-colors">{relatedProject.title}</h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </AnimatedSection>
      </article>
    </main>
  );
};

export default ProjectDetail;
