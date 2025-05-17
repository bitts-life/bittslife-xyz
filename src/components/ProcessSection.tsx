
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ProcessSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "I start by understanding your business goals, target audience, and app requirements. Together, we'll create a comprehensive development plan.",
      color: "from-android/20 to-android-light/50"
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "I'll create intuitive user interfaces and interactive prototypes following Material Design principles to ensure an exceptional user experience.",
      color: "from-android/30 to-android-light/60"
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Using modern Android architecture and best practices, I'll build your app with clean, maintainable code while implementing rigorous testing.",
      color: "from-android/40 to-android-light/70"
    },
    {
      number: "04",
      title: "Deployment & Support",
      description: "I'll help you launch your app on the Google Play Store and provide ongoing support to ensure your app remains up-to-date and bug-free.",
      color: "from-android/50 to-android-light/80"
    }
  ];

  return (
    <section id="process" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Development Process</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I follow a structured approach to ensure your Android app is delivered on time, within budget, and exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-none shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={cn(
                "h-2 bg-gradient-to-r", 
                step.color
              )}></div>
              <CardContent className="p-6">
                <div className="text-5xl font-bold text-android/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
