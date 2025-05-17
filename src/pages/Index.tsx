
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import Awards from "@/components/Awards";
import BlogPreview from "@/components/BlogPreview";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Projects />
      <ProcessSection />
      <Testimonials />
      <Awards />
      <BlogPreview />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
