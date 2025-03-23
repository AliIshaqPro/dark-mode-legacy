
import { Github, Linkedin, Instagram, Facebook, Mail, PhoneCall, Globe } from "lucide-react";
import { motion } from "framer-motion";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const SocialLink = ({ href, icon, label, className = "" }: SocialLinkProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center w-10 h-10 rounded-full bg-dark-400 hover:bg-neon-blue/20 border border-white/10 transition-colors duration-300 text-gray-300 hover:text-neon-blue ${className}`}
    aria-label={label}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
  </motion.a>
);

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className = "" }: SocialLinksProps) => (
  <div className={`flex items-center space-x-3 ${className}`}>
    <SocialLink
      href="https://github.com/AliIshaqPro"
      icon={<Github size={18} />}
      label="GitHub"
    />
    <SocialLink
      href="https://www.linkedin.com/in/ali-ishaq-sandhu/"
      icon={<Linkedin size={18} />}
      label="LinkedIn"
    />
    <SocialLink
      href="https://sample-instagram.com/"
      icon={<Instagram size={18} />}
      label="Instagram"
    />
    <SocialLink
      href="https://sample-facebook.com/"
      icon={<Facebook size={18} />}
      label="Facebook"
    />
    <SocialLink
      href="mailto:aliishaqsandho@gmail.com"
      icon={<Mail size={18} />}
      label="Email"
    />
    <SocialLink
      href="tel:+923460422988"
      icon={<PhoneCall size={18} />}
      label="Phone"
    />
    <SocialLink
      href="https://aliishaq.site"
      icon={<Globe size={18} />}
      label="Website"
    />
  </div>
);

export default SocialLinks;
