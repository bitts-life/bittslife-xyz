
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const BlogPreview = () => {
  const blogPosts = [
    {
      title: "Mastering Jetpack Compose: From Basics to Advanced Patterns",
      excerpt: "Explore the fundamentals of Jetpack Compose and learn how to implement advanced UI patterns that will take your Android apps to the next level.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      date: "May 10, 2023",
      tags: ["Jetpack Compose", "UI/UX", "Android"],
    },
    {
      title: "Optimizing Android App Performance: The Complete Guide",
      excerpt: "Discover actionable techniques to boost your Android app's performance, from memory management to rendering optimizations.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      date: "April 22, 2023",
      tags: ["Performance", "Optimization", "Android"],
    },
    {
      title: "Building Scalable Android Architecture with Clean Architecture",
      excerpt: "Learn how to implement Clean Architecture principles in your Android projects to create maintainable and testable codebases.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      date: "March 15, 2023",
      tags: ["Architecture", "MVVM", "Clean Code"],
    },
  ];

  return (
    <section id="blog" className="section-padding bg-accent/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Android Development Insights</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I regularly share my knowledge and experiences about Android development. Check out some of my latest articles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="overflow-hidden animate-fade-in bg-white border-none shadow-md hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="bg-android/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-android mb-2">{post.date}</p>
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button variant="ghost" className="group p-0 h-auto hover:bg-transparent">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
