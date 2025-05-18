
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
              <span className="text-2xl font-bold">TheDroidDev</span>
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
                href="mailto:hello@thedroiddev.com" 
                className="bg-white/10 p-2 rounded-full hover:bg-android hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((item) => (
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
                <span className="text-white/70">hello@thedroiddev.com</span>
              </p>
              <p>
                <span className="block text-white/70 mt-4">Want to work together? Schedule a consultation:</span>
                <Button 
                  className="mt-2 bg-android hover:bg-android/90"
                >
                  Book a Call
                </Button>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70 mb-4 md:mb-0">
            © {currentYear} TheDroidDev. All rights reserved.
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
