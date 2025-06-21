
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { slug } = useParams();

  const projects = {
    "walmart-omnischeduler": {
      title: "Walmart OmniScheduler",
      description: "Developed the OmniScheduler Module for Walmart's app, reducing scheduling time for Oil & Tire Change services by 30% and increasing appointment bookings by 25%.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["Kotlin", "MVVM", "Adapter Delegation", "ViewModels", "API Integration"],
      github: "https://github.com/shubhamoksharma",
      liveDemo: "https://play.google.com/store/apps/details?id=com.walmart.android",
      overview: "The OmniScheduler Module was a critical component of Walmart's mobile application that streamlined the scheduling process for Oil & Tire Change services. This feature significantly improved user experience and operational efficiency.",
      challenges: [
        "Complex scheduling logic with multiple time slots and service types",
        "Integration with existing Walmart systems and APIs",
        "Real-time availability updates and conflict resolution",
        "Cross-platform compatibility and performance optimization"
      ],
      solutions: [
        "Implemented MVVM architecture for clean separation of concerns",
        "Used Adapter Delegation pattern for flexible UI components",
        "Integrated real-time APIs for live availability updates",
        "Optimized performance with efficient data caching strategies"
      ],
      results: [
        "30% reduction in scheduling time",
        "25% increase in appointment bookings",
        "Improved user satisfaction scores",
        "Streamlined operational workflows"
      ]
    },
    "bluestone-mobile": {
      title: "BlueStone Mobile App",
      description: "Revamped Browse and Product pages, optimized app performance resulting in a 35% reduction in crash rates by integrating Firebase Crashlytics and reduced app size by 30%.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["Kotlin", "Firebase", "Jetpack Compose", "ProGuard", "Analytics"],
      github: "https://github.com/shubhamoksharma",
      liveDemo: "https://play.google.com/store/apps/details?id=com.bluestone.android",
      overview: "Complete revamp of BlueStone's mobile application focusing on performance optimization, user experience enhancement, and app stability improvements.",
      challenges: [
        "High crash rates affecting user experience",
        "Large app size impacting download rates",
        "Outdated UI/UX design patterns",
        "Performance bottlenecks in product browsing"
      ],
      solutions: [
        "Integrated Firebase Crashlytics for comprehensive crash monitoring",
        "Implemented ProGuard optimizations to reduce app size",
        "Migrated to Jetpack Compose for modern UI development",
        "Optimized image loading and caching mechanisms"
      ],
      results: [
        "35% reduction in crash rates",
        "30% reduction in app size",
        "Improved app store ratings",
        "Enhanced user engagement metrics"
      ]
    },
    "nobroker-partner": {
      title: "NoBroker Partner App",
      description: "Implemented Call Masking using Broadcast Receiver, securing user privacy. Integrated Adobe SDK for analytics and user engagement tracking.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Firebase", "Broadcast Receiver", "Analytics", "Security"],
      github: "https://github.com/shubhamoksharma",
      liveDemo: "https://play.google.com/store/apps/details?id=com.nobroker.partner",
      overview: "Enhanced the NoBroker Partner application with advanced security features and comprehensive analytics integration to improve partner experience and data insights.",
      challenges: [
        "User privacy concerns with direct phone number exposure",
        "Need for comprehensive user behavior analytics",
        "Real-time communication security requirements",
        "Partner engagement tracking and optimization"
      ],
      solutions: [
        "Implemented Call Masking using Broadcast Receiver for privacy protection",
        "Integrated Adobe SDK for advanced analytics and tracking",
        "Enhanced security protocols for communication features",
        "Built comprehensive partner engagement dashboard"
      ],
      results: [
        "100% user privacy protection with call masking",
        "Comprehensive analytics and user behavior insights",
        "Improved partner satisfaction and engagement",
        "Enhanced security and compliance standards"
      ]
    },
    "openup-app": {
      title: "OpenUp App",
      description: "Built a business social network for SMEs with image editing, video sharing, and payment gateway features. Integrated multiple authentication methods.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["Custom UI", "Payment Gateway", "Auth APIs", "Media Processing"],
      github: "https://github.com/shubhamoksharma",
      liveDemo: "https://github.com/shubhamoksharma",
      overview: "Developed a comprehensive business social networking platform specifically designed for Small and Medium Enterprises (SMEs) with rich media capabilities and secure payment integration.",
      challenges: [
        "Complex media processing requirements for images and videos",
        "Secure payment integration for business transactions",
        "Multiple authentication method support",
        "Scalable social networking features for business use"
      ],
      solutions: [
        "Built custom UI components for optimal user experience",
        "Integrated secure payment gateway with multiple options",
        "Implemented robust authentication system with multiple providers",
        "Developed efficient media processing and sharing capabilities"
      ],
      results: [
        "Successfully launched business social network platform",
        "Secure payment processing for business transactions",
        "Multi-authentication support for enhanced security",
        "Rich media sharing capabilities for business communication"
      ]
    }
  };

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-android hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-r from-android/10 to-android/5">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center text-android hover:text-android-dark mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-android/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button 
                    className="bg-android hover:bg-android-dark"
                    onClick={() => window.open(project.liveDemo, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Challenges */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Trophy className="h-6 w-6 mr-2 text-android" />
                  Challenges
                </h2>
                <div className="grid gap-4">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                      <p className="text-gray-700">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Users className="h-6 w-6 mr-2 text-android" />
                  Solutions
                </h2>
                <div className="grid gap-4">
                  {project.solutions.map((solution, index) => (
                    <div key={index} className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                      <p className="text-gray-700">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Calendar className="h-6 w-6 mr-2 text-android" />
                  Results & Impact
                </h2>
                <div className="grid gap-4">
                  {project.results.map((result, index) => (
                    <div key={index} className="bg-android/10 border-l-4 border-android p-4 rounded">
                      <p className="text-gray-700 font-medium">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
