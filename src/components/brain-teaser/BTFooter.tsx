import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

const BTFooter = () => {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <Link to="/brain-teaser" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg flex items-center justify-center"
                 style={{ background: "var(--bt-gradient)" }}>
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold">Brain Teaser <span className="bt-gradient-text">AI</span></span>
          </Link>

          <nav className="flex gap-6 justify-center text-sm text-white/60">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#modes" className="hover:text-white transition-colors">Modes</a>
            <a href="#waitlist" className="hover:text-white transition-colors">Waitlist</a>
          </nav>

          <div className="text-sm text-white/60 md:text-right">
            A project by{" "}
            <a
              href="https://www.bittslife.xyz/#projects"
              className="bt-gradient-text font-semibold hover:underline"
            >
              bittslife.xyz
            </a>
          </div>
        </div>
        <div className="border-t border-white/5 mt-8 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Brain Teaser AI Game. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default BTFooter;