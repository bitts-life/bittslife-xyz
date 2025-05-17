
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const TechStack = () => {
  const categories = [
    {
      name: "UI Frameworks",
      tools: [
        { name: "Material Design", icon: "🎨" },
        { name: "Jetpack Compose", icon: "🧩" },
        { name: "XML Layouts", icon: "📝" },
        { name: "MotionLayout", icon: "🔄" },
      ]
    },
    {
      name: "Development Tools",
      tools: [
        { name: "Android Studio", icon: "🛠️" },
        { name: "Git", icon: "📊" },
        { name: "Gradle", icon: "⚙️" },
        { name: "Firebase", icon: "🔥" },
      ]
    },
    {
      name: "Testing & QA",
      tools: [
        { name: "JUnit", icon: "✅" },
        { name: "Espresso", icon: "☕" },
        { name: "Robolectric", icon: "🤖" },
        { name: "Mockito", icon: "🧪" },
      ]
    },
    {
      name: "Project Management",
      tools: [
        { name: "Jira", icon: "📋" },
        { name: "Trello", icon: "📌" },
        { name: "Notion", icon: "📒" },
        { name: "Slack", icon: "💬" },
      ]
    }
  ];

  return (
    <section id="tech-stack" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Tech Arsenal</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I leverage a comprehensive set of tools and technologies to deliver exceptional Android applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((category, catIndex) => (
            <div 
              key={catIndex}
              className="animate-fade-in"
              style={{ animationDelay: `${catIndex * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-4 text-android-dark">{category.name}</h3>
              <div className="grid grid-cols-1 gap-3">
                {category.tools.map((tool, toolIndex) => (
                  <Card 
                    key={toolIndex} 
                    className={cn(
                      "overflow-hidden border-none shadow-sm hover:shadow-md transition-all duration-300",
                      toolIndex % 2 === 0 ? "bg-gradient-to-r from-android-light to-white" : "bg-white"
                    )}
                  >
                    <CardContent className="p-4 flex items-center gap-3">
                      <span className="text-2xl">{tool.icon}</span>
                      <span className="font-medium">{tool.name}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
