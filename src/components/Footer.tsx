
import React from "react";
import { Code, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="bg-android-dark text-white py-16 relative">
      {/* Abstract Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="20" cy="20" r="1.5" fill="#3DDC84"></circle>
          </pattern>
          <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>
      
      <Button 
        variant="outline" 
        size="icon" 
        onClick={scrollToTop}
        className="absolute top-6 right-6 border border-white/20 text-white hover:bg-white/10"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Code className="h-6 w-6 text-android" />
              <span className="text-2xl font-bold">AndroidDev</span>
            </div>
            <p className="text-white/70 mb-6 max-w-sm">
              Crafting exceptional Android applications that deliver outstanding user experiences and help businesses succeed in the digital marketplace.
            </p>
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
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Process', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/70 hover:text-android transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <p className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 text-android" />
                <span className="text-white/70">hello@androiddev.com</span>
              </p>
              <p>
                <span className="block text-white/70 mt-4">Want to work together? Schedule a consultation:</span>
                <Button 
                  className="mt-2 bg-android text-android-dark hover:bg-android/90"
                >
                  Book a Call
                </Button>
              </p>
            </div>
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
