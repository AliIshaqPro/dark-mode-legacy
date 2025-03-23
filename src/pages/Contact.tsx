
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Instagram, 
  Facebook,
  Globe
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! I'll get back to you soon.",
        duration: 5000,
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "aliishaqsandho@gmail.com",
      link: "mailto:aliishaqsandho@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+92 346 0422988",
      link: "tel:+923460422988",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Available Worldwide",
      link: null,
    },
    {
      icon: <Globe size={24} />,
      title: "Website",
      value: "aliishaq.site",
      link: "https://aliishaq.site",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: "GitHub",
      url: "https://github.com/AliIshaqPro",
      color: "hover:text-white",
    },
    {
      icon: <Linkedin size={20} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ali-ishaq-sandhu/",
      color: "hover:text-blue-400",
    },
    {
      icon: <Instagram size={20} />,
      name: "Instagram",
      url: "https://sample-instagram.com/",
      color: "hover:text-pink-500",
    },
    {
      icon: <Facebook size={20} />,
      name: "Facebook",
      url: "https://sample-facebook.com/",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <main className="pt-24 pb-16">
      <section className="container-custom">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In <span className="text-gradient">Touch</span></h1>
            <p className="text-gray-400">
              Have a project in mind or just want to say hello? Feel free to reach out.
            </p>
          </div>
        </AnimatedSection>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <AnimatedSection key={info.title} delay={0.1 * index} direction="up">
              <div className="glass-panel p-6 rounded-xl text-center h-full flex flex-col items-center">
                <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center text-neon-blue mb-4">
                  {info.icon}
                </div>
                <h3 className="text-white font-medium mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-400 hover:text-neon-blue transition-colors"
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-400">{info.value}</p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <AnimatedSection className="lg:col-span-3" delay={0.1}>
            <div className="glass-panel p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-dark-400 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-dark-400 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-dark-400 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
                    placeholder="Message subject"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-dark-400 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="neo-button flex items-center justify-center w-full"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send size={18} className="ml-2" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>

          {/* Connect Socially */}
          <AnimatedSection className="lg:col-span-2" delay={0.2}>
            <div className="glass-panel p-8 rounded-xl h-full">
              <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
              <p className="text-gray-400 mb-8">
                Follow me on social media to stay updated with my latest projects and professional journey.
              </p>
              
              <div className="space-y-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-dark-400 rounded-lg border border-white/10 hover:border-neon-blue/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-dark-300 rounded-full flex items-center justify-center text-gray-400 mr-4">
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{link.name}</h3>
                      <p className={`text-sm text-gray-500 ${link.color} transition-colors`}>
                        Connect on {link.name}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-neon-blue/10 rounded-lg border border-neon-blue/20">
                <p className="text-gray-300 text-sm">
                  Available for freelance projects and full-time positions. Let's work together to bring your ideas to life!
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Contact;
