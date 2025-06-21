
import React, { useState, useEffect } from "react";
import { Code, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleDownloadResume = () => {
    // Create a downloadable link for resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You can replace this with actual resume URL
    link.download = 'Shubham_Sharma_Resume.pdf';
    link.click();
  };

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Blog", href: "blog" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-white"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection("home")} 
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Code className="h-7 w-7 text-android" />
          <span className="text-xl font-bold">TheDroidDev</span>
        </button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium transition-colors hover:text-android cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <Button 
            className="bg-android text-white hover:bg-android-dark"
            onClick={handleDownloadResume}
          >
            Download Resume
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed inset-0 top-[72px] bg-white z-50 md:hidden animate-fade-in">
            <nav className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-lg font-medium transition-colors hover:text-android cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
              <Button 
                className="bg-android text-white hover:bg-android-dark"
                onClick={handleDownloadResume}
              >
                Download Resume
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
