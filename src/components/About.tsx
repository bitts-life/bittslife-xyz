
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Briefcase, Book } from "lucide-react";

const About = () => {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "15+", label: "Happy Clients" },
  ];

  const experiences = [
    {
      title: "Senior Android Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Lead the development of flagship Android applications using Kotlin, Jetpack Compose, and MVVM architecture. Improved app performance by 40%.",
      icon: Briefcase,
    },
    {
      title: "Android Developer",
      company: "Mobile Solutions Ltd.",
      period: "2019 - 2021",
      description: "Developed and maintained multiple Android applications with Java and Kotlin. Implemented modern architectural patterns and CI/CD pipelines.",
      icon: Briefcase,
    },
    {
      title: "Bachelor of Computer Science",
      company: "Tech University",
      period: "2015 - 2019",
      description: "Specialized in Mobile Application Development and Software Engineering with honors.",
      icon: Book,
    },
  ];

  return (
    <section id="about" className="section-padding bg-accent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Passionate Android developer with a focus on creating beautiful, 
            performant, and accessible mobile applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center card-hover animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-android">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
            <div className="space-y-4">
              <p>
                I'm a dedicated Android developer with 5+ years of experience in creating mobile applications 
                that are not only visually appealing but also highly functional and user-friendly.
              </p>
              <p>
                My journey in Android development began when I discovered my passion for creating mobile 
                experiences that could impact people's daily lives. Since then, I've worked on a variety 
                of applications, from small utility apps to large-scale enterprise solutions.
              </p>
              <p>
                I specialize in Kotlin, Java, Jetpack Compose, Material Design, MVVM architecture, 
                and various Android frameworks and libraries. I'm always exploring new technologies 
                and methodologies to stay at the forefront of Android development.
              </p>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: `200ms` }}>
            <h3 className="text-2xl font-bold mb-6">Experience & Education</h3>
            <div className="space-y-6">
              {experiences.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1">
                    <div className="bg-android/20 p-2 rounded-full">
                      <item.icon className="h-5 w-5 text-android" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <span className="text-xs bg-muted px-2 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{item.company}</p>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
