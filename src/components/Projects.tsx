
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Walmart OmniScheduler",
      description: "Developed the OmniScheduler Module for Walmart's app, reducing scheduling time for Oil & Tire Change services by 30% and increasing appointment bookings by 25%.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["Kotlin", "MVVM", "Adapter Delegation", "ViewModels", "API Integration"],
      github: "#",
      liveDemo: "#",
    },
    {
      title: "BlueStone Mobile App",
      description: "Revamped Browse and Product pages, optimized app performance resulting in a 35% reduction in crash rates by integrating Firebase Crashlytics and reduced app size by 30%.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["Kotlin", "Firebase", "Jetpack Compose", "ProGuard", "Analytics"],
      github: "#",
      liveDemo: "#",
    },
    {
      title: "NoBroker Partner App",
      description: "Implemented Call Masking using Broadcast Receiver, securing user privacy. Integrated Adobe SDK for analytics and user engagement tracking.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Firebase", "Broadcast Receiver", "Analytics", "Security"],
      github: "#",
      liveDemo: "#",
    },
    {
      title: "OpenUp App",
      description: "Built a business social network for SMEs with image editing, video sharing, and payment gateway features. Integrated multiple authentication methods.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["Custom UI", "Payment Gateway", "Auth APIs", "Media Processing"],
      github: "#",
      liveDemo: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-coder-darker">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Here are some of my key Android development projects, showcasing my skills and experience with major brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-60 object-cover object-center brightness-75"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-coder-darkest/80"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="bg-coder-accent/10 border-coder-accent/20 text-coder-highlight">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="project-overlay">
                <div className="space-y-4 text-center">
                  <h3 className="text-xl font-bold text-coder-highlight">{project.title}</h3>
                  <div className="flex justify-center gap-4">
                    <Button variant="secondary" size="sm" asChild className="bg-coder-dark hover:bg-coder-dark/80 text-white">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="bg-coder-accent hover:bg-coder-accent/80 text-white">
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
