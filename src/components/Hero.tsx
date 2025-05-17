
import React from "react";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-android-light/30 to-transparent -z-10"></div>
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col gap-6 md:w-1/2 animate-fade-in">
          <div className="rounded-full bg-android/20 px-4 py-2 w-fit">
            <p className="text-sm font-medium text-android-dark">Hello there 👋</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Android Developer & 
            <span className="text-android"> Mobile Specialist</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            I craft beautiful, performant and user-friendly mobile applications 
            with modern Android development practices and technologies.
          </p>
          <div className="flex gap-4 mt-4">
            <Button size="lg">
              View Projects
            </Button>
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
          
          <div className="flex gap-4 mt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 animate-scale-in">
          <div className={cn(
            "w-full aspect-square relative bg-gradient-to-br from-android to-android-dark",
            "rounded-full overflow-hidden shadow-lg max-w-md mx-auto"
          )}>
            <div className="absolute inset-4 bg-white rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <Button variant="ghost" size="icon" className="rounded-full">
          <ArrowDown className="h-6 w-6" />
        </Button>
      </a>
    </section>
  );
};

export default Hero;
