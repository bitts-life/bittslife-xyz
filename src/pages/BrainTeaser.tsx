import { useEffect } from "react";
import BTNav from "@/components/brain-teaser/BTNav";
import BTHero from "@/components/brain-teaser/BTHero";
import BTCountdown from "@/components/brain-teaser/BTCountdown";
import BTFeatures from "@/components/brain-teaser/BTFeatures";
import BTGameModes from "@/components/brain-teaser/BTGameModes";
import BTAISection from "@/components/brain-teaser/BTAISection";
import BTBenefits from "@/components/brain-teaser/BTBenefits";
import BTSocialProof from "@/components/brain-teaser/BTSocialProof";
import BTFinalCTA from "@/components/brain-teaser/BTFinalCTA";
import BTFooter from "@/components/brain-teaser/BTFooter";

const BrainTeaser = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Brain Teaser AI Game — IQ Games, Brain Training, Puzzle App";

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
      return el;
    };

    const desc = setMeta(
      "description",
      "Brain Teaser AI Game — endless AI-powered IQ puzzles, brain training, and mini games. Launching May 1. Join the waitlist."
    );
    const ogTitle = setMeta("og:title", "Brain Teaser AI Game", "property");
    const ogDesc = setMeta(
      "og:description",
      "Train your brain with AI-powered challenges. Launching May 1.",
      "property"
    );

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + "/brain-teaser";

    // JSON-LD
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      name: "Brain Teaser AI Game",
      operatingSystem: "ANDROID",
      applicationCategory: "GameApplication",
      description: "AI-powered brain training puzzle game with 10+ mini games.",
      datePublished: "2026-05-01",
    });
    document.head.appendChild(ld);

    return () => {
      document.title = prevTitle;
      ld.remove();
    };
  }, []);

  return (
    <div className="bt-theme min-h-screen overflow-x-hidden">
      <BTNav />
      <main>
        <BTHero />
        <BTCountdown />
        <BTFeatures />
        <BTGameModes />
        <BTAISection />
        <BTBenefits />
        <BTSocialProof />
        <BTFinalCTA />
      </main>
      <BTFooter />
    </div>
  );
};

export default BrainTeaser;