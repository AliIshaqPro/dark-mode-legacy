
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Calendar, User, ArrowLeft, Clock, Tag, MessageCircle, ThumbsUp, BookmarkPlus } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

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
            className="mb-6 hover:bg-dark-300 group"
            onClick={() => navigate("/blog")}
          >
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to all articles
          </Button>
        </AnimatedSection>

        {/* Blog Post Header */}
        <AnimatedSection>
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-neon-blue/20 text-neon-blue text-xs font-medium">
                {post.category}
              </span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-400">{post.readTime} read</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-gray-400">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-dark-300 mr-3 overflow-hidden">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${post.author}&background=0A0A0F&color=fff`} 
                    alt={post.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-white">{post.author}</div>
                  <div className="text-sm text-gray-400">Author</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Calendar size={18} className="mr-2 text-neon-blue" />
                <span className="text-gray-300">{post.date}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-2">
              {post.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-dark-300 text-sm font-medium text-gray-300 hover:bg-dark-400 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Featured Image */}
        <AnimatedSection delay={0.1}>
          <div className="rounded-xl overflow-hidden mb-10 shadow-lg shadow-neon-blue/5">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-auto object-cover aspect-[16/9]"
            />
          </div>
        </AnimatedSection>

        {/* Blog Content */}
        <AnimatedSection delay={0.2}>
          <div className="glass-panel rounded-xl p-8 mb-12 shadow-lg shadow-neon-blue/5">
            {/* Introduction */}
            <p className="text-2xl text-gray-200 leading-relaxed mb-8 font-light">
              {post.excerpt}
            </p>
            
            <div className="w-full h-0.5 bg-gradient-to-r from-neon-blue/50 via-neon-purple/30 to-transparent mb-10"></div>
            
            {/* Content Sections */}
            <div className="prose prose-invert max-w-none">
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <div className="w-1 h-6 bg-neon-blue mr-3 rounded-full"></div>
                  Introduction
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  In today's rapidly evolving digital landscape, staying updated with the latest trends and techniques 
                  is crucial for success. This article explores key insights and practical approaches 
                  to <span className="text-neon-blue">{post.title.toLowerCase()}</span>, providing you with 
                  actionable strategies you can implement immediately.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  As technology continues to shape how we work and interact, professionals need to adapt quickly 
                  to maintain their competitive edge. Whether you're just starting out or looking to refine your 
                  existing knowledge, this guide offers valuable perspectives.
                </p>
                <div className="bg-dark-300/50 border border-white/5 p-5 rounded-lg my-6">
                  <p className="text-gray-300 italic m-0">
                    "The only constant in technology is change. Those who adapt fastest will thrive in this digital era."
                  </p>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <div className="w-1 h-6 bg-neon-purple mr-3 rounded-full"></div>
                  Why This Matters
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Understanding the nuances of <span className="text-neon-purple">{post.category}</span> can significantly 
                  impact your workflow and outcomes. As industries continue to evolve, the ability to leverage the right 
                  techniques becomes increasingly valuable.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Consider how the landscape has changed in just the past few years. Methods that were once considered 
                  standard have been replaced by more efficient, user-centered approaches. Staying ahead of these 
                  changes is no longer optional—it's essential for relevance.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-dark-400/30 p-6 rounded-lg border border-white/5 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-neon-blue/10 blur-2xl rounded-full -mr-10 -mt-10"></div>
                    <h4 className="text-lg font-semibold text-white mb-2">For Individuals</h4>
                    <p className="text-gray-400 m-0 relative z-10">Enhanced productivity, better career prospects, and the ability to solve complex problems effectively.</p>
                  </div>
                  
                  <div className="bg-dark-400/30 p-6 rounded-lg border border-white/5 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-neon-purple/10 blur-2xl rounded-full -mr-10 -mt-10"></div>
                    <h4 className="text-lg font-semibold text-white mb-2">For Organizations</h4>
                    <p className="text-gray-400 m-0 relative z-10">Improved efficiency, reduced costs, and the ability to deliver more value to customers and stakeholders.</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <div className="w-1 h-6 bg-neon-pink mr-3 rounded-full"></div>
                  Key Strategies
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  When approaching <span className="text-neon-pink">{post.title.toLowerCase()}</span>, 
                  consider these foundational strategies that have proven effective:
                </p>
                
                <div className="space-y-6 pl-6 relative before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-neon-blue before:via-neon-purple before:to-neon-pink">
                  <div className="relative">
                    <div className="absolute left-[-24px] w-5 h-5 rounded-full bg-neon-blue flex items-center justify-center">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Begin with thorough research</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Understanding your objectives and constraints is crucial before implementation. Take time to gather relevant 
                      information and set clear goals for what you want to achieve.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-[-24px] w-5 h-5 rounded-full bg-neon-purple flex items-center justify-center">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Implement iterative approaches</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Rather than aiming for perfection in one go, focus on continuous improvement through feedback cycles. 
                      This reduces risk and allows for adjustments based on real-world data.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-[-24px] w-5 h-5 rounded-full bg-neon-pink flex items-center justify-center">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Leverage modern tools</h3>
                    <p className="text-gray-300 leading-relaxed">
                      The right tools can dramatically increase efficiency and quality. Invest time in learning tools that 
                      align with your workflow and business requirements.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-[-24px] w-5 h-5 rounded-full bg-neon-blue flex items-center justify-center">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Collaborate with experts</h3>
                    <p className="text-gray-300 leading-relaxed">
                      No one person has all the answers. Bringing together diverse perspectives often leads to more 
                      innovative solutions and identifies blind spots in your approach.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <div className="w-1 h-6 bg-neon-blue mr-3 rounded-full"></div>
                  Practical Applications
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The concepts discussed in this article can be applied across various scenarios. Whether you're working on a small 
                  personal project or leading a team on an enterprise solution, these principles remain relevant.
                </p>
                
                <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 p-6 rounded-lg border border-white/5 my-6">
                  <blockquote className="border-l-4 border-neon-blue pl-4 italic text-lg text-gray-300">
                    "The best way to predict the future is to create it." This philosophy applies perfectly to how we should approach 
                    {post.category.toLowerCase()}.
                  </blockquote>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  Consider implementing these strategies in your next project:
                </p>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-dark-300 flex items-center justify-center">
                      <span className="text-neon-blue text-xs">1</span>
                    </div>
                    <p className="text-gray-300 m-0">
                      <span className="font-semibold text-white">Start small</span> - Begin with a manageable scope and expand as you gain confidence.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-dark-300 flex items-center justify-center">
                      <span className="text-neon-purple text-xs">2</span>
                    </div>
                    <p className="text-gray-300 m-0">
                      <span className="font-semibold text-white">Measure results</span> - Establish clear metrics to track progress and success.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-dark-300 flex items-center justify-center">
                      <span className="text-neon-pink text-xs">3</span>
                    </div>
                    <p className="text-gray-300 m-0">
                      <span className="font-semibold text-white">Document learnings</span> - Create a knowledge base to build upon for future projects.
                    </p>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <div className="w-1 h-6 bg-neon-purple mr-3 rounded-full"></div>
                  Looking Ahead
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  As technology continues to advance, we can expect to see even more innovations in this space. Staying curious and 
                  adaptable will be key to leveraging these advancements effectively.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Keep an eye on emerging trends and be willing to experiment with new approaches. The most successful 
                  professionals are often those who can balance established best practices with innovative thinking.
                </p>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <div className="w-1 h-6 bg-neon-pink mr-3 rounded-full"></div>
                  Conclusion
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Implementing the strategies outlined in this article will help you navigate the complexities of 
                  {post.title.toLowerCase()}. Remember that mastery comes with consistent practice and a willingness to 
                  learn from both successes and failures.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  As you apply these principles, you'll develop a deeper understanding of what works best in your specific context. 
                  This personalized knowledge is invaluable and will set you apart in your field.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Social Interaction Bar */}
        <AnimatedSection delay={0.3}>
          <div className="flex justify-between items-center mb-12 py-4 border-y border-white/10">
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <ThumbsUp size={18} />
                <span>Like</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <MessageCircle size={18} />
                <span>Comment</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <BookmarkPlus size={18} />
                <span>Save</span>
              </Button>
            </div>
            <div className="text-sm text-gray-400">
              <span>5 min read</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Author Section */}
        <AnimatedSection delay={0.35}>
          <div className="glass-panel p-6 rounded-xl mb-12 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-dark-300 overflow-hidden flex-shrink-0">
              <img 
                src={`https://ui-avatars.com/api/?name=${post.author}&background=0A0A0F&color=fff&size=200`} 
                alt={post.author} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold mb-1">About {post.author}</h3>
              <p className="text-gray-400 mb-3">
                Expert in {post.category} with over 8 years of experience in the industry.
                Passionate about sharing knowledge and helping others succeed in their digital journey.
              </p>
              <Button variant="outline" size="sm" className="hover:bg-neon-blue/10 hover:text-neon-blue transition-colors">
                View Profile
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Related Articles Section */}
        <AnimatedSection delay={0.4}>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <div className="w-1 h-6 bg-neon-blue rounded-full mr-3"></div>
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter((relatedPost) => relatedPost.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="glass-panel p-4 rounded-xl flex gap-4 hover:-translate-y-1 transition-transform duration-300 group shadow-lg shadow-neon-blue/5"
                  >
                    <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={relatedPost.imageUrl}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <span className="text-xs text-neon-blue mb-1 block">{relatedPost.category}</span>
                      <h3 className="font-medium mb-1 line-clamp-2 group-hover:text-neon-blue transition-colors">{relatedPost.title}</h3>
                      <p className="text-xs text-gray-400">{relatedPost.date} · {relatedPost.readTime}</p>
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
