
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const BlogPreview = () => {
  const blogPosts = [
    {
      title: "Android Studio Default Lint Check: Analyze the Android App",
      excerpt: "A practical guide to understanding and using Android Studio's default lint checks to improve your app's code quality and reliability.",
  image: "https://images.pexels.com/photos/20895985/pexels-photo-20895985.jpeg?auto=compress&w=720&q=80",
      date: "August 12, 2025",
      tags: ["Android Studio", "Lint", "Best Practices"],
      url: "https://medium.com/@bittslife/android-studio-default-lint-check-analyze-the-android-app-bf75b309012a"
    }
  ];

  const handleReadMore = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleViewAllArticles = () => {
    window.open('https://medium.com/@bittslife', '_blank', 'noopener,noreferrer');
  };

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
              className="overflow-hidden animate-fade-in bg-white border-none shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleReadMore(post.url)}
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
                <Button 
                  variant="ghost" 
                  className="group p-0 h-auto hover:bg-transparent"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReadMore(post.url);
                  }}
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            onClick={handleViewAllArticles}
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
