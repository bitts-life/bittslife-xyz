
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FitnessBuddy",
      description: "A comprehensive fitness tracking app with workout plans, nutrition tracking, and progress analytics.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["Kotlin", "MVVM", "Room", "Material Design"],
      github: "#",
      liveDemo: "#",
    },
    {
      title: "WeatherNow",
      description: "Real-time weather forecasting application with location-based updates and interactive maps.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Jetpack Compose", "Retrofit", "LiveData", "Google Maps API"],
      github: "#",
      liveDemo: "#",
    },
    {
      title: "ShopSmart",
      description: "E-commerce application with product catalog, cart functionality, payment integration, and order tracking.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["Kotlin", "Firebase", "Coroutines", "MVVM"],
      github: "#",
      liveDemo: "#",
    },
    {
      title: "MindfulnessApp",
      description: "Meditation and mindfulness app with guided sessions, progress tracking, and customizable experiences.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["Kotlin", "ExoPlayer", "WorkManager", "Room"],
      github: "#",
      liveDemo: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-accent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Here are some of my recent Android development projects, showcasing my skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-60 object-cover object-center"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="bg-android/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="project-overlay">
                <div className="space-y-4 text-center">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex justify-center gap-4">
                    <Button variant="secondary" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
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
