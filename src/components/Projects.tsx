
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
      github: "https://github.com/shubhamoksharma",
      liveDemo: "https://play.google.com/store/apps/details?id=com.walmart.android",
    },
    {
      title: "BlueStone Mobile App",
      description: "Revamped Browse and Product pages, optimized app performance resulting in a 35% reduction in crash rates by integrating Firebase Crashlytics and reduced app size by 30%.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["Kotlin", "Firebase", "Jetpack Compose", "ProGuard", "Analytics"],
      github: "https://github.com/shubhamoksharma",
      liveDemo: "https://play.google.com/store/apps/details?id=com.bluestone.android",
    },
    {
      title: "NoBroker Partner App",
      description: "Implemented Call Masking using Broadcast Receiver, securing user privacy. Integrated Adobe SDK for analytics and user engagement tracking.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Firebase", "Broadcast Receiver", "Analytics", "Security"],
      github: "https://github.com/shubhamoksharma",
      liveDemo: "https://play.google.com/store/apps/details?id=com.nobroker.partner",
    },
    {
      title: "OpenUp App",
      description: "Built a business social network for SMEs with image editing, video sharing, and payment gateway features. Integrated multiple authentication methods.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["Custom UI", "Payment Gateway", "Auth APIs", "Media Processing"],
      github: "https://github.com/shubhamoksharma",
      liveDemo: "https://github.com/shubhamoksharma",
    },
  ];

  const handleGithubClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDemoClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Here are some of my key Android development projects, showcasing my skills and experience with major brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-0 left-0 bg-android text-white px-3 py-1">
                  Project
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="bg-android/10 text-android-dark border-android/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-android text-android hover:bg-android/10"
                    onClick={() => handleGithubClick(project.github)}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-android text-white hover:bg-android-dark"
                    onClick={() => handleDemoClick(project.liveDemo)}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
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
