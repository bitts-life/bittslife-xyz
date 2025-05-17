
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechGiant Inc.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
      content: "Working with this Android developer was a game-changer for our company. Their expertise in Kotlin and Jetpack Compose helped us launch our app ahead of schedule with exceptional user reviews.",
      stars: 5,
    },
    {
      name: "Michael Chen",
      company: "StartupBoost",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      content: "Incredible attention to detail and a deep understanding of Android architecture patterns. Our app's performance improved by 40% after implementing their optimization suggestions.",
      stars: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "HealthTech Solutions",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
      content: "The most responsive developer I've ever worked with. Not only did they deliver an exceptional medical tracking app, but they also provided fantastic post-launch support.",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-android-light/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Don't just take my word for it - here's what clients have to say about working with me on their Android projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={cn(
                "overflow-hidden border-none shadow-lg animate-fade-in",
                "hover:shadow-xl transition-all duration-300"
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-android text-android" />
                  ))}
                </div>
                
                <p className="italic text-gray-700 mb-2">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
