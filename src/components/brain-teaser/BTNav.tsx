import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { label: "Features", href: "#features" },
  { label: "Game Modes", href: "#modes" },
  { label: "AI", href: "#ai" },
  { label: "Early Access", href: "#waitlist" },
];

const BTNav = () => {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50 bt-glass"
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/brain-teaser" className="flex items-center gap-2 group">
          <div className="relative h-9 w-9 rounded-lg bt-pulse-glow flex items-center justify-center"
               style={{ background: "var(--bt-gradient)" }}>
            <Brain className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">
            Brain Teaser <span className="bt-gradient-text">AI</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#waitlist"
          className="bt-btn-primary rounded-full px-5 py-2 text-sm font-semibold hidden sm:inline-flex items-center"
        >
          Join Waitlist
        </a>
      </nav>
    </motion.header>
  );
};

export default BTNav;