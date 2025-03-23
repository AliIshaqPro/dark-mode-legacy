
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import GalleryItem from "@/components/GalleryItem";

// Gallery data
const galleryItems = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470",
    category: "UI/UX Design",
  },
  {
    id: 2,
    title: "Corporate Website",
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1469",
    category: "WordPress",
  },
  {
    id: 3,
    title: "Mobile App Interface",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974",
    category: "Mobile Design",
  },
  {
    id: 4,
    title: "Product Landing Page",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    category: "WordPress",
  },
  {
    id: 5,
    title: "Real Estate Platform",
    imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1470",
    category: "Web Development",
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    imageUrl: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964",
    category: "UI/UX Design",
  },
  {
    id: 7,
    title: "Healthcare Portal",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070",
    category: "Web Development",
  },
  {
    id: 8,
    title: "E-Learning Platform",
    imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070",
    category: "UI/UX Design",
  },
  {
    id: 9,
    title: "Fitness App UI",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070",
    category: "Mobile Design",
  },
  {
    id: 10,
    title: "Travel Blog",
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021",
    category: "WordPress",
  },
  {
    id: 11,
    title: "Inventory Management System",
    imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2076",
    category: "Web Development",
  },
  {
    id: 12,
    title: "Food Delivery App",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981",
    category: "Mobile Design",
  },
  {
    id: 13,
    title: "Portfolio Website",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=6000",
    category: "Web Development",
  },
  {
    id: 14,
    title: "Admin Dashboard",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
    category: "UI/UX Design",
  },
  {
    id: 15,
    title: "News Portal",
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070",
    category: "WordPress",
  },
  {
    id: 16,
    title: "Event Management Platform",
    imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012",
    category: "Web Development",
  },
  {
    id: 17,
    title: "Banking App Interface",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070",
    category: "Mobile Design",
  },
  {
    id: 18,
    title: "Digital Marketing Website",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    category: "WordPress",
  },
  {
    id: 19,
    title: "Task Management App",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072",
    category: "UI/UX Design",
  },
  {
    id: 20,
    title: "Online Learning Dashboard",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=3543",
    category: "Web Development",
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "WordPress", "Web Development", "UI/UX Design", "Mobile Design"];

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <main className="pt-24 pb-16">
      <section className="container-custom">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My <span className="text-gradient">Gallery</span></h1>
            <p className="text-gray-400">
              A visual showcase of my work across various projects and designs
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
              >
                <GalleryItem
                  imageUrl={item.imageUrl}
                  title={item.title}
                  category={item.category}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Items Message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No gallery items found in this category.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Gallery;
