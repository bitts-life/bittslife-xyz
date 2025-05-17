
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      title: "Google Play Best App",
      year: "2023",
      description: "Recognized for excellence in app design and functionality",
      project: "FitnessBuddy"
    },
    {
      title: "Android Excellence Award",
      year: "2022",
      description: "Featured for outstanding technical implementation",
      project: "WeatherNow"
    },
    {
      title: "Material Design Award",
      year: "2022",
      description: "Honored for exceptional UI/UX implementation",
      project: "MindfulnessApp"
    },
    {
      title: "Top Developer",
      year: "2021",
      description: "Google Play recognition for consistent quality applications",
      project: "Multiple Apps"
    }
  ];

  return (
    <section id="awards" className="py-20 bg-gradient-to-b from-android-dark to-android-dark/90 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Award className="h-10 w-10 text-android mr-4" />
          <h2 className="text-3xl md:text-4xl font-bold">Recognition & Awards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Badge className="bg-android text-android-dark font-medium">
                  {award.year}
                </Badge>
                <div className="w-12 h-12 flex items-center justify-center bg-android/10 rounded-full">
                  <Award className="h-6 w-6 text-android" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{award.title}</h3>
              <p className="text-white/70 text-sm mb-3">{award.description}</p>
              <p className="text-xs font-medium text-android">Project: {award.project}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
