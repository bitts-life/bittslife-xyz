
import React from "react";
import { ArrowDown, Github, Linkedin, Mail, Phone, Code, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Enhanced dynamic background with animated patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-android-light/40 to-white -z-10"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-android/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-android/10 rounded-full blur-3xl -z-10 animate-pulse" style={{animationDelay: "1s"}}></div>
      <div className="absolute w-full h-full -z-10 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-8 border-android rounded-full"></div>
        <div className="absolute top-3/4 left-2/3 w-24 h-24 border-4 border-android-dark rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-android/30 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col gap-6 md:w-1/2 animate-fade-in">
          <div className="rounded-full bg-android/20 px-4 py-2 w-fit">
            <p className="text-sm font-medium text-android-dark flex items-center gap-2">
              <Code className="h-4 w-4" />
              Android Development Expert
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            SHUBHAM <span className="text-android">SHARMA</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
            Android Developer with 6+ years of experience in designing and developing high-performance, 
            scalable mobile applications with millions of downloads.
          </p>
          
          <div className="space-y-6">
            <ul className="space-y-2">
              {[
                "Kotlin & Java Expert",
                "6+ Years of Android Development",
                "90% Test Coverage Achievement",
                "Reduced App Size by 30%"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-android" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <Button size="lg" className="text-base bg-android hover:bg-android/90 text-android-dark font-bold">
                View My Portfolio
              </Button>
              <Button variant="outline" size="lg" className="text-base border-2">
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="flex gap-4 mt-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-android-dark/5 hover:bg-android-dark/10 p-3 rounded-full transition-colors"
              aria-label="Github"
            >
              <Github className="h-6 w-6 text-android-dark" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-android-dark/5 hover:bg-android-dark/10 p-3 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-android-dark" />
            </a>
            <a 
              href="mailto:shubhamoksharma@gmail.com" 
              className="bg-android-dark/5 hover:bg-android-dark/10 p-3 rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 text-android-dark" />
            </a>
            <a 
              href="tel:+919672460166" 
              className="bg-android-dark/5 hover:bg-android-dark/10 p-3 rounded-full transition-colors"
              aria-label="Phone"
            >
              <Phone className="h-6 w-6 text-android-dark" />
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
              <span className="font-semibold">Trusted by industry leaders</span> including Walmart and BlueStone
            </p>
          </div>
        </div>
        
        <div className="md:w-1/2 animate-scale-in">
          <div className="relative max-w-md mx-auto">
            {/* Main profile circle */}
            <div className={cn(
              "w-full aspect-square relative",
              "rounded-full overflow-hidden shadow-2xl max-w-lg mx-auto"
            )}>
              <div className="absolute inset-0 bg-gradient-to-br from-android to-android-dark rounded-full"></div>
              <div className="absolute inset-3 bg-white rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="Shubham Sharma" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating achievement badges */}
            <div className="absolute top-5 -left-6 bg-white py-2 px-4 rounded-lg shadow-lg animate-fade-in" style={{animationDelay: "0.5s"}}>
              <p className="text-xs font-bold flex items-center gap-1">
                <span className="text-android">★</span> Walmart Consultant
              </p>
            </div>
            <div className="absolute top-1/3 -right-8 bg-white py-2 px-4 rounded-lg shadow-lg animate-fade-in" style={{animationDelay: "0.7s"}}>
              <p className="text-xs font-bold flex items-center gap-1">
                <span className="text-android">★</span> 6+ Years Experience
              </p>
            </div>
            <div className="absolute bottom-10 left-1/6 bg-white py-2 px-4 rounded-lg shadow-lg animate-fade-in" style={{animationDelay: "0.9s"}}>
              <p className="text-xs font-bold flex items-center gap-1">
                <span className="text-android">★</span> Jetpack Compose Expert
              </p>
            </div>
            
            {/* Code snippet overlay */}
            <div className="absolute -bottom-10 -right-10 bg-android-dark/90 text-android p-4 rounded-lg shadow-lg transform rotate-6 w-42 h-42 overflow-hidden text-xs font-mono animate-fade-in" style={{animationDelay: "1.1s"}}>
              <pre className="opacity-80">
{`class ShubhamSharma {
  val skills = listOf(
    "Kotlin",
    "MVVM",
    "Jetpack Compose",
    "CI/CD"
  )
  
  fun buildApp() {
    // Magic happens here
  }
}`}
              </pre>
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
