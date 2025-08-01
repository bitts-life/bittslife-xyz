
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar, Download } from "lucide-react";

const CTASection = () => {
  const handleCall = () => {
    window.open('tel:+919672460166', '_self');
  };

  const handleScheduleMeeting = () => {
    window.open('https://calendly.com/shubhamoksharma', '_blank', 'noopener,noreferrer');
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Shubham_Sharma_Resume.pdf';
    link.click();
  };

  return (
    <section className="py-20 bg-android-dark text-white relative overflow-hidden">
      {/* Enhanced Abstract Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="10" cy="10" r="5" fill="#3DDC84"></circle>
          </pattern>
          <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>
      
      {/* Animated elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-android to-transparent opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-l from-android to-transparent opacity-20"></div>
      <div className="absolute left-10 top-10 w-32 h-32 rounded-full border-4 border-android/20 animate-pulse"></div>
      <div className="absolute right-10 bottom-10 w-24 h-24 rounded-full border-4 border-android/20 animate-pulse" style={{animationDelay: "1s"}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-block p-3 bg-android/20 rounded-full mb-4">
                <Calendar className="h-8 w-8 text-android" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Build Your Next Android App?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                With 6+ years of experience and a track record of enhancing app performance by 30%, 
                I can help turn your vision into a high-performing Android application.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-android rounded-full mb-4">
                  <Phone className="h-5 w-5 text-android-dark" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quick Consultation</h3>
                <p className="text-white/70 mb-4">Let's discuss your project requirements and goals</p>
                <Button 
                  className="bg-android hover:bg-android/90 text-android-dark font-bold w-full"
                  onClick={handleCall}
                >
                  Call +91-9672460166
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-android text-android-dark rounded-xl p-6 text-center transform md:scale-110 shadow-xl relative z-10">
                <div className="absolute -top-3 -right-3 bg-white text-android-dark text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  RECOMMENDED
                </div>
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-android-dark rounded-full mb-4">
                  <Calendar className="h-5 w-5 text-android" />
                </div>
                <h3 className="text-xl font-bold mb-2">Book a Meeting</h3>
                <p className="text-android-dark/70 mb-4">Schedule a detailed discussion about your Android project</p>
                <Button 
                  className="bg-android-dark hover:bg-android-dark/90 text-white font-bold w-full"
                  onClick={handleScheduleMeeting}
                >
                  Schedule Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-android rounded-full mb-4">
                  <Download className="h-5 w-5 text-android-dark" />
                </div>
                <h3 className="text-xl font-bold mb-2">Download Resume</h3>
                <p className="text-white/70 mb-4">Get my detailed resume with all projects and skills</p>
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 w-full"
                  onClick={handleDownloadCV}
                >
                  Get CV
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <p className="text-white/60 text-sm">Email: shubhamoksharma@gmail.com • Available for remote and on-site roles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
