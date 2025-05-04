
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
            className="mb-6 hover:bg-dark-300 group dark:hover:bg-dark-300"
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {project.title}
            </h1>
            
            <p className="text-xl text-gray-300 dark:text-gray-200 leading-relaxed mb-8 font-light">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies.map((tech: string) => (
                <span 
                  key={tech} 
                  className="text-sm px-3 py-1.5 rounded-full bg-dark-400 dark:bg-dark-300 border border-white/5 text-gray-200"
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
          <div className="rounded-xl overflow-hidden mb-12 glass-panel p-2 border border-white/10 shadow-lg">
            {!imageError ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto object-cover rounded-lg"
                onError={handleImageError}
              />
            ) : (
              <div className="w-full aspect-[16/9] flex flex-col items-center justify-center bg-dark-400 dark:bg-dark-300 rounded-lg">
                <Code size={48} className="text-gray-500 mb-2" />
                <span className="text-gray-400">Image unavailable</span>
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Project Content */}
        <AnimatedSection delay={0.2}>
          <div className="prose prose-invert dark:prose-light max-w-none">
            <div className="glass-panel p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Project Overview</h2>
              <p className="text-lg mb-4 leading-relaxed">
                This {project.category} project was designed to provide a comprehensive solution for {project.title.toLowerCase()}. 
                The application was built using {project.technologies.slice(0, 3).join(", ")}, 
                which provided the necessary tools and capabilities to implement all required features.
              </p>
            </div>
            
            <div className="glass-panel p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Key Features</h2>
              <ul className="space-y-2 list-none pl-0">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-neon-blue"></span>
                  <span>Responsive design for all screen sizes and devices</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-neon-blue"></span>
                  <span>Intuitive user interface with modern design principles</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-neon-blue"></span>
                  <span>Optimized performance and loading times</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-neon-blue"></span>
                  <span>Secure data handling and storage</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-neon-blue"></span>
                  <span>Integration with third-party services and APIs</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-panel p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Development Process</h2>
              <p className="mb-4">
                The development process followed an agile methodology, with regular iterations and 
                client feedback incorporated throughout. The project was divided into several phases:
              </p>
              
              <ol className="space-y-2 pl-8 list-decimal">
                <li className="pl-2">Requirements analysis and planning</li>
                <li className="pl-2">Design and prototyping</li>
                <li className="pl-2">Development and implementation</li>
                <li className="pl-2">Testing and quality assurance</li>
                <li className="pl-2">Deployment and maintenance</li>
              </ol>
            </div>
            
            <div className="glass-panel p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Technical Implementation</h2>
              <p className="mb-4">
                The project leverages {project.technologies.join(", ")} to create a robust and scalable solution. 
                Key technical aspects include:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-dark-400/50 dark:bg-dark-300/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2 text-neon-blue">Architecture</h3>
                  <p className="text-sm">Component-based architecture for reusability and maintainability</p>
                </div>
                <div className="bg-dark-400/50 dark:bg-dark-300/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2 text-neon-blue">State Management</h3>
                  <p className="text-sm">Advanced state management to handle complex data flows</p>
                </div>
                <div className="bg-dark-400/50 dark:bg-dark-300/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2 text-neon-blue">API Integration</h3>
                  <p className="text-sm">Seamless API integration for data fetching and persistence</p>
                </div>
                <div className="bg-dark-400/50 dark:bg-dark-300/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2 text-neon-blue">Security</h3>
                  <p className="text-sm">Authentication and authorization for secure access</p>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Outcome</h2>
              <p className="mb-0">
                The final product successfully meets all client requirements and provides an excellent user experience.
                The solution is scalable, maintainable, and can be easily extended with additional features in the future.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Related Projects */}
        <AnimatedSection delay={0.3}>
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Related Projects</h2>
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
                    className="glass-panel rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 border border-white/10"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={relatedProject.imageUrl}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover"
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
                      <span className="text-xs font-medium text-neon-blue">{relatedProject.category}</span>
                      <h3 className="font-semibold mt-1">{relatedProject.title}</h3>
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
