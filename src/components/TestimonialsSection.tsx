
import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    id: 1,
    content: "Ali was exceptional to work with. He turned our vision into reality with impressive attention to detail. The WordPress site he built for our business has significantly improved our online presence.",
    author: "Sarah Johnson",
    position: "CEO, TechInnovate",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 2,
    content: "Working with Ali on our e-commerce platform was a game-changer for our business. His technical expertise and problem-solving skills helped us create a seamless shopping experience for our customers.",
    author: "Michael Chen",
    position: "Founder, StyleHub",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    content: "Ali delivered our Ruby on Rails application ahead of schedule and exceeded all our expectations. His communication was clear throughout the project, and he was always available to address our questions.",
    author: "Jessica Williams",
    position: "CTO, DataFlow Systems",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
  },
  {
    id: 4,
    content: "We hired Ali to redesign our corporate website, and the results were outstanding. He brought fresh ideas to the table and implemented them with precision. Our site now perfectly represents our brand.",
    author: "David Martinez",
    position: "Marketing Director, GlobalCorp",
    imageUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <AnimatedSection className="py-16 md:py-24 bg-dark-200/50 border-y border-white/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client <span className="text-gradient">Testimonials</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">What my clients say about working with me</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Background Decoration */}
          <div className="absolute -left-8 -top-8 w-20 h-20 text-neon-blue opacity-20">
            <Quote size={80} />
          </div>
          
          <div className="glass-panel p-8 md:p-12 rounded-xl relative z-10">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/10">
                <img
                  src={testimonials[currentIndex].imageUrl}
                  alt={testimonials[currentIndex].author}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-grow">
                <p className="text-gray-300 text-lg mb-6 italic">"{testimonials[currentIndex].content}"</p>
                <div>
                  <h4 className="font-bold text-white">{testimonials[currentIndex].author}</h4>
                  <p className="text-neon-blue text-sm">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </motion.div>
            
            <div className="flex justify-center mt-8 gap-3">
              <button
                onClick={goToPrevious}
                className="w-10 h-10 rounded-full bg-dark-400 flex items-center justify-center hover:bg-dark-300 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button
                onClick={goToNext}
                className="w-10 h-10 rounded-full bg-dark-400 flex items-center justify-center hover:bg-dark-300 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentIndex === index ? "bg-neon-blue w-6" : "bg-gray-600"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialsSection;
