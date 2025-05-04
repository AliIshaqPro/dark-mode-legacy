
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Calendar, User, ArrowLeft, Clock, Tag } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ImageWithFallback from "@/components/ImageWithFallback";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      // Find the post by ID
      const foundPost = blogPosts.find((post) => post.id === parseInt(id || "0"));
      
      if (foundPost) {
        setPost(foundPost);
      } else {
        toast({
          title: "Blog post not found",
          description: "The requested blog post could not be found.",
          variant: "destructive",
        });
        navigate("/blog");
      }
      
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id, navigate, toast]);

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

  if (!post) {
    return null; // This shouldn't happen as we navigate away if post not found
  }

  return (
    <main className="pt-24 pb-16">
      <article className="container-custom max-w-4xl">
        {/* Back button */}
        <AnimatedSection>
          <Button
            variant="ghost"
            className="mb-6 hover:bg-dark-300 group dark:hover:bg-dark-300"
            onClick={() => navigate("/blog")}
          >
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to all articles
          </Button>
        </AnimatedSection>

        {/* Blog Post Header */}
        <AnimatedSection>
          <div className="mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-neon-blue/20 text-neon-blue text-xs font-medium mb-4">
              {post.category}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-400 mb-6">
              <div className="flex items-center px-3 py-1.5 rounded-full bg-dark-300/60 backdrop-blur-sm border border-white/5">
                <User size={16} className="mr-2 text-neon-blue" />
                <span>{post.author}</span>
              </div>
              
              <div className="flex items-center px-3 py-1.5 rounded-full bg-dark-300/60 backdrop-blur-sm border border-white/5">
                <Calendar size={16} className="mr-2 text-neon-blue" />
                <span>{post.date}</span>
              </div>
              
              <div className="flex items-center px-3 py-1.5 rounded-full bg-dark-300/60 backdrop-blur-sm border border-white/5">
                <Clock size={16} className="mr-2 text-neon-blue" />
                <span>{post.readTime}</span>
              </div>
              
              <div className="flex items-center px-3 py-1.5 rounded-full bg-dark-300/60 backdrop-blur-sm border border-white/5">
                <Tag size={16} className="mr-2 text-neon-blue" />
                <span>{post.category}</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Featured Image */}
        <AnimatedSection delay={0.1}>
          <div className="rounded-xl overflow-hidden mb-10 shadow-xl">
            <ImageWithFallback
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-auto object-cover aspect-[16/9]"
            />
          </div>
        </AnimatedSection>

        {/* Blog Content */}
        <AnimatedSection delay={0.2}>
          <div className="prose prose-invert dark:prose-light max-w-none">
            {/* Introduction */}
            <div className="glass-panel p-8 rounded-xl mb-8 border border-white/10">
              <p className="text-xl text-gray-300 dark:text-gray-200 leading-relaxed mb-0 font-light">
                {post.excerpt}
              </p>
            </div>
            
            <div className="glass-panel p-8 rounded-xl mb-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Introduction</h2>
              <p className="leading-relaxed">
                In today's rapidly evolving digital landscape, staying updated with the latest trends and techniques is crucial for success. This article explores key insights and practical approaches to {post.title.toLowerCase()}.
              </p>
            </div>
            
            <div className="glass-panel p-8 rounded-xl mb-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Why This Matters</h2>
              <p className="leading-relaxed">
                Understanding the nuances of {post.category} can significantly impact your workflow and outcomes. As industries continue to evolve, professionals who adapt and implement best practices gain a competitive edge.
              </p>
            </div>
            
            <div className="glass-panel p-8 rounded-xl mb-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Key Strategies</h2>
              <p className="mb-4">
                When approaching {post.title.toLowerCase()}, consider these foundational strategies:
              </p>
              
              <ul className="space-y-2 list-none pl-0">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-neon-blue"></span>
                  <span>Begin with thorough research and planning</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-neon-blue"></span>
                  <span>Implement iterative approaches for continuous improvement</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-neon-blue"></span>
                  <span>Leverage modern tools and frameworks to optimize your workflow</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-neon-blue"></span>
                  <span>Collaborate with peers and experts to gain diverse perspectives</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-neon-blue"></span>
                  <span>Document your process and learnings for future reference</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-panel p-8 rounded-xl mb-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Practical Applications</h2>
              <p className="leading-relaxed">
                The concepts discussed in this article can be applied across various scenarios. Whether you're working on a small personal project or leading a team on an enterprise solution, these principles remain relevant.
              </p>
              
              <blockquote className="border-l-4 border-neon-blue pl-4 italic my-6">
                <p className="text-lg">
                  "The best way to predict the future is to create it." This philosophy applies perfectly to how we should approach {post.category.toLowerCase()}.
                </p>
              </blockquote>
            </div>
            
            <div className="glass-panel p-8 rounded-xl mb-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Looking Ahead</h2>
              <p className="leading-relaxed">
                As technology continues to advance, we can expect to see even more innovations in this space. Staying curious and adaptable will be key to leveraging these advancements effectively.
              </p>
            </div>
            
            <div className="glass-panel p-8 rounded-xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Conclusion</h2>
              <p className="leading-relaxed mb-0">
                Implementing the strategies outlined in this article will help you navigate the complexities of {post.title.toLowerCase()}. Remember that mastery comes with consistent practice and a willingness to learn from both successes and failures.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Tags Section */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-400 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1.5 rounded-full bg-dark-300 text-sm font-medium text-gray-300 border border-white/5 hover:border-neon-blue/30 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Related Articles Section */}
        <AnimatedSection delay={0.4}>
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter((relatedPost) => relatedPost.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="glass-panel p-4 rounded-xl flex gap-4 hover:-translate-y-1 transition-transform duration-300 border border-white/10"
                  >
                    <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={relatedPost.imageUrl}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 line-clamp-2">{relatedPost.title}</h3>
                      <p className="text-xs text-gray-400">{relatedPost.date}</p>
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

export default BlogPost;
