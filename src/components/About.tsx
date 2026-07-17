
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Briefcase, Book, Award } from "lucide-react";

const About = () => {
  const stats = [
    { value: "7+", label: "Years Experience" },
    { value: "90%", label: "Test Coverage" },
    { value: "30%", label: "App Size Reduction" },
  ];

  const experiences = [
    {
      title: "Sr. Software Engineer (Android)",
      company: "Experian",
      period: "Nov 2025 - Present",
      description: "Building Personal Info SDUI (Server Driven UI) components, Hosted App Flow for banks like Ollo and Merrick, and the Wallet Genius feature that suggests optimized cards based on user goals (Cashback, Travel Savings, etc.).",
      icon: Briefcase,
    },
    {
      title: "Sr. Software Engineer for Walmart",
      company: "Caspex",
      period: "May 2025 - Nov 2025",
      description: "Built the Protection Plan Hub driving a 15% increase in protection plan adoption. Contributed to the Amends flow letting customers edit purchases post-checkout, using Clean Architecture (UseCase & Repository).",
      icon: Briefcase,
    },
    {
      title: "Consultant for Walmart (Android)",
      company: "Xebia",
      period: "Oct 2023 - May 2025",
      description: "Worked on the Walmart App (Cart Checkout & Transactions). Designed the OmniScheduler Module — cutting scheduling time by 30% and boosting bookings by 25%. Maintained 90%+ test coverage and reduced critical production bugs by 50%.",
      icon: Briefcase,
    },
    {
      title: "Senior Software Engineer",
      company: "BlueStone",
      period: "April 2021 - Sept 2023",
      description: "Reduced app size by 30% using ProGuard. Developed features increasing user retention by 20%. Optimized performance reducing crash rates by 35% with Firebase Crashlytics.",
      icon: Briefcase,
    },
    {
      title: "Android Application Developer",
      company: "NoBroker",
      period: "Dec 2019 - June 2020",
      description: "Integrated Adobe SDK for analytics. Developed property recommendation features and implemented Call Masking for partner app security.",
      icon: Briefcase,
    },
    {
      title: "Android Developer",
      company: "Zonolith",
      period: "April 2018 - Dec 2019",
      description: "Built the OpenUp App — a business social network for SMEs — with image editing, video sharing, payment gateway, and Google/Facebook/Phone authentication.",
      icon: Briefcase,
    },
    {
      title: "B.Tech. in Computer Science",
      company: "Rajasthan Technical University",
      period: "2013 - 2017",
      description: "Graduated with specialization in Android development and mobile technologies.",
      icon: Book,
    },
  ];

  return (
    <section id="about" className="section-padding bg-accent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hi, I'm Shubham Sharma, a passionate Android developer focused on creating high-performance, 
            scalable, and user-friendly mobile applications.
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
                I'm Shubham Sharma, an accomplished Android developer with 7+ years of experience in designing and 
                developing high-performance, scalable mobile applications with millions of downloads.
              </p>
              <p>
                My expertise lies in Kotlin, Java, Jetpack, MVVM, and CI/CD, with a proven track record 
                of reducing app size by 30%, enhancing test coverage to 90%, and optimizing performance.
              </p>
              <p>
                Currently a Sr. Software Engineer (Android) at Experian, with prior experience at 
                Caspex and Xebia (both consulting for Walmart), BlueStone, and NoBroker. I specialize 
                in application architecture, performance optimization, and delivering exceptional user 
                experiences through clean, maintainable code.
              </p>
              <div className="mt-6 bg-android/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Award className="h-5 w-5 text-android" />
                  Certifications
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Android Development Essential Training – Manage Data with Kotlin</li>
                  <li>Concurrent Programming with Android Threads, Workers, and Kotlin Coroutines</li>
                  <li>Hackerrank Java Basic Certification</li>
                </ul>
              </div>
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
