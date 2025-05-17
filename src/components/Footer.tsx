
import React from "react";
import { Code, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-android-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Code className="h-6 w-6 text-android" />
            <span className="text-xl font-bold">AndroidDev</span>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-android hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-android hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:hello@androiddev.com" 
              className="bg-white/10 p-2 rounded-full hover:bg-android hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70 mb-4 md:mb-0">
            © {currentYear} AndroidDev. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-android transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-android transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
