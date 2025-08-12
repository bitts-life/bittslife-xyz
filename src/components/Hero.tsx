
import React from "react";
import { ArrowDown, Github, Linkedin, Mail, Phone, Code, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Shubham_Sharma_Resume.pdf';
    link.click();
  };

  const handleCall = () => {
    window.open('tel:+919672460166', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:shubhamoksharma@gmail.com', '_self');
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      {/* Simple clean background */}
      <div className="absolute inset-0 bg-white -z-10"></div>
      
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col gap-6 md:w-1/2 animate-fade-in">
          <div className="rounded-full bg-android/20 px-4 py-2 w-fit">
            <p className="text-sm font-medium text-android-dark flex items-center gap-2">
              <Code className="h-4 w-4" />
              Android Development Expert
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            THE <span className="text-android">DROID</span> DEV
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
              <Button 
                size="lg" 
                className="text-base bg-android hover:bg-android/90 text-white font-bold"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base border-2"
                onClick={handleDownloadResume}
              >
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="flex gap-4 mt-4">
            <button 
              onClick={() => window.open('https://github.com/shubhamoksharma', '_blank')}
              className="bg-android/10 hover:bg-android/20 p-3 rounded-full transition-colors"
              aria-label="Github"
            >
              <Github className="h-6 w-6 text-android-dark" />
            </button>
            <button 
              onClick={() => window.open('https://linkedin.com/in/shubhamoksharma', '_blank')}
              className="bg-android/10 hover:bg-android/20 p-3 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-android-dark" />
            </button>
            <button 
              onClick={handleEmail}
              className="bg-android/10 hover:bg-android/20 p-3 rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 text-android-dark" />
            </button>
            <button 
              onClick={handleCall}
              className="bg-android/10 hover:bg-android/20 p-3 rounded-full transition-colors"
              aria-label="Phone"
            >
              <Phone className="h-6 w-6 text-android-dark" />
            </button>
          </div>
        </div>
        
        <div className="md:w-1/2 animate-scale-in">
          <div className="relative max-w-md mx-auto">
            {/* Simple circular profile */}
            <div className="w-full aspect-square max-w-md overflow-hidden rounded-full border-8 border-android/30 shadow-xl mx-auto">
              <img 
                src="/user.jpg" 
                alt="Shubham Sharma - Android Developer" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Simple code snippet badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg w-42 h-42 border-2 border-android-dark/20">
              <div className="font-mono text-xs text-android-dark">
                <pre className="terminal-text">
{`fun androidDev() {
  expertise.apply {
    kotlin()
    compose()
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <Button variant="ghost" size="icon" className="rounded-full">
          <ArrowDown className="h-6 w-6" />
        </Button>
      </button>
    </section>
  );
};

export default Hero;
