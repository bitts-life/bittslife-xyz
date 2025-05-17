
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Skills = () => {
  const technicalSkills = [
    { name: "Kotlin", level: 95 },
    { name: "Java", level: 90 },
    { name: "Jetpack Compose", level: 85 },
    { name: "Android SDK", level: 92 },
    { name: "MVVM Architecture", level: 88 },
    { name: "Material Design", level: 90 },
  ];

  const frameworks = [
    { name: "Room Database", icon: "📱" },
    { name: "Retrofit", icon: "🔌" },
    { name: "Dagger/Hilt", icon: "💉" },
    { name: "Coroutines", icon: "⚡" },
    { name: "Navigation Component", icon: "🧭" },
    { name: "WorkManager", icon: "⚙️" },
    { name: "LiveData/Flow", icon: "🔄" },
    { name: "Firebase", icon: "🔥" },
    { name: "Glide/Coil", icon: "🖼️" },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I've developed expertise in a wide range of Android development technologies and methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: `200ms` }}>
            <h3 className="text-2xl font-bold mb-6">Libraries & Frameworks</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {frameworks.map((framework, index) => (
                <Card key={index} className={cn(
                  "card-hover animate-scale-in overflow-hidden",
                  index % 2 === 0 ? "card-gradient" : "bg-white"
                )} style={{ animationDelay: `${index * 50}ms` }}>
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                    <span className="text-2xl mb-2">{framework.icon}</span>
                    <span className="text-sm font-medium">{framework.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
