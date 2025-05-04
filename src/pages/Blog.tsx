import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Calendar, User, Tag, Clock, ChevronRight, Search } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";

const categories = ["All", "Web Development", "WordPress", "Ruby on Rails", "MERN Stack", "UI/UX Design", "Web Design"];

const Blog = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredPosts = blogPosts
    .filter(post => filter === "All" || post.category === filter)
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  return (
    <main className="pt-24 pb-16">
      <section className="container-custom">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My <span className="text-gradient">Blog</span></h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Thoughts, insights, and tutorials on web development, design, and technology
            </p>
          </div>
        </AnimatedSection>

        {/* Search and Filter */}
        <AnimatedSection delay={0.1}>
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="w-full md:w-auto">
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full md:w-80 px-10 py-2.5 rounded-full bg-dark-300 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 w-full md:w-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      filter === category
                        ? "bg-neon-blue text-white shadow-lg shadow-neon-blue/20"
                        : "bg-dark-300 text-gray-400 hover:bg-dark-400 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={0.1 * (index % 3)}>
                <BlogCard post={post} />
              </AnimatedSection>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 py-20 text-center">
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Newsletter Section */}
        <AnimatedSection delay={0.3}>
          <div className="mt-20 glass-panel p-8 md:p-12 rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-neon-purple blur-[80px]"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-neon-blue blur-[80px]"></div>
            </div>
            
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Subscribe to My Newsletter</h2>
              <p className="text-gray-400 mb-8">
                Get the latest articles, tutorials, and updates delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md bg-dark-300 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
                  required
                />
                <button
                  type="submit"
                  className="neo-button whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-gray-500 text-sm mt-4">
                I'll never spam you or share your information.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
};

export default Blog;
