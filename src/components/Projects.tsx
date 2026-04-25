
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Sparkles, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import brainIcon from "@/assets/brain-teaser-icon.png";

const Projects = () => {
  const projects = [
    {
      slug: "walmart-omnischeduler",
      title: "Walmart OmniScheduler",
      description: "Developed the OmniScheduler Module for Walmart's app, reducing scheduling time for Oil & Tire Change services by 30% and increasing appointment bookings by 25%.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["Kotlin", "MVVM", "Adapter Delegation", "ViewModels", "API Integration"],
      github: "https://github.com/shubhamoksharma",
      liveDemo: "https://play.google.com/store/apps/details?id=com.walmart.android",
    },
    {
      slug: "bluestone-mobile",
      title: "BlueStone Mobile App",
      description: "Revamped Browse and Product pages, optimized app performance resulting in a 35% reduction in crash rates by integrating Firebase Crashlytics and reduced app size by 30%.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["Kotlin", "Firebase", "Jetpack Compose", "ProGuard", "Analytics"],
      github: "https://github.com/shubhamoksharma",
      liveDemo: "https://play.google.com/store/apps/details?id=com.bluestone.android",
    },
    {
      slug: "nobroker-partner",
      title: "NoBroker Partner App",
      description: "Implemented Call Masking using Broadcast Receiver, securing user privacy. Integrated Adobe SDK for analytics and user engagement tracking.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Firebase", "Broadcast Receiver", "Analytics", "Security"],
      github: "https://github.com/shubhamoksharma",
      liveDemo: "https://play.google.com/store/apps/details?id=com.nobroker.partner",
    },
    {
      slug: "openup-app",
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

        {/* Featured: Brain Teaser AI Game */}
        <Link
          to="/brain-teaser"
          className="group block mb-10 rounded-2xl overflow-hidden relative border border-purple-500/20 hover:border-purple-500/60 transition-all hover:shadow-2xl"
          style={{
            background:
              "linear-gradient(135deg, hsl(240 30% 8%), hsl(260 40% 14%) 50%, hsl(220 50% 12%))",
          }}
        >
          <div className="grid md:grid-cols-[1fr_auto] gap-6 p-6 md:p-8 items-center">
            <div className="text-white">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300 mb-3">
                <Sparkles className="h-3.5 w-3.5" /> New · Coming May 1
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Brain Teaser <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">AI Game</span>
              </h3>
              <p className="text-white/70 mb-4 max-w-xl">
                Endless AI-powered IQ puzzles, 10+ mini games, daily challenges, and adaptive difficulty. Now in closed beta.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 group-hover:gap-3 transition-all">
                <Brain className="h-4 w-4" /> Explore the launch page →
              </div>
            </div>
            <img
              src={brainIcon}
              alt="Brain Teaser AI Game icon"
              width={160}
              height={160}
              loading="lazy"
              className="h-32 w-32 md:h-40 md:w-40 object-contain mx-auto drop-shadow-[0_0_30px_rgba(168,85,247,0.5)] group-hover:scale-110 transition-transform"
            />
          </div>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Link to={`/project/${project.slug}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500 cursor-pointer"
                  />
                </Link>
                <div className="absolute top-0 left-0 bg-android text-white px-3 py-1">
                  Project
                </div>
              </div>
              
              <div className="p-6">
                <Link to={`/project/${project.slug}`}>
                  <h3 className="text-xl font-bold mb-2 hover:text-android transition-colors cursor-pointer">{project.title}</h3>
                </Link>
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
                  <Link to={`/project/${project.slug}`}>
                    <Button 
                      size="sm" 
                      className="bg-android text-white hover:bg-android-dark"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </Link>
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
