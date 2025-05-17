
import React from "react";
import { ArrowDown, Github, Linkedin, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-android-light/40 to-white -z-10"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-android/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-android/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col gap-6 md:w-1/2 animate-fade-in">
          <div className="rounded-full bg-android/20 px-4 py-2 w-fit">
            <p className="text-sm font-medium text-android-dark flex items-center gap-2">
              <Code className="h-4 w-4" />
              Android Development Expert
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Crafting <span className="text-android">Exceptional</span> Android Experiences
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
            I transform ideas into polished, high-performance Android applications 
            that users love and businesses rely on.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Button size="lg" className="text-base">
              View My Portfolio
            </Button>
            <Button variant="outline" size="lg" className="text-base">
              Download Resume
            </Button>
          </div>
          
          <div className="flex gap-4 mt-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-android-dark/5 hover:bg-android-dark/10 p-3 rounded-full transition-colors"
            >
              <Github className="h-6 w-6 text-android-dark" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-android-dark/5 hover:bg-android-dark/10 p-3 rounded-full transition-colors"
            >
              <Linkedin className="h-6 w-6 text-android-dark" />
            </a>
          </div>
          
          <div className="mt-8 hidden md:flex items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img 
                    src={`https://randomuser.me/api/portraits/men/${i + 60}.jpg`} 
                    alt="Client" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm">
              <span className="font-semibold">20+ clients</span> worldwide trust my development expertise
            </p>
          </div>
        </div>
        
        <div className="md:w-1/2 animate-scale-in">
          <div className={cn(
            "w-full aspect-square relative",
            "rounded-full overflow-hidden shadow-2xl max-w-lg mx-auto"
          )}>
            <div className="absolute inset-0 bg-gradient-to-br from-android to-android-dark rounded-full"></div>
            <div className="absolute inset-3 bg-white rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Feature badges */}
            <div className="absolute top-1/4 -left-8 bg-white py-2 px-4 rounded-full shadow-lg">
              <p className="text-xs font-bold">Kotlin Expert</p>
            </div>
            <div className="absolute top-1/2 -right-8 bg-white py-2 px-4 rounded-full shadow-lg">
              <p className="text-xs font-bold">5+ Years Experience</p>
            </div>
            <div className="absolute bottom-8 left-1/4 bg-white py-2 px-4 rounded-full shadow-lg">
              <p className="text-xs font-bold">20+ Apps Published</p>
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
